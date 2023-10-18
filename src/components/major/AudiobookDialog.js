import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch, cloneObj } from '../../utils/toolbox'
import useInstanceValue from "../../hooks/useInstanceValue"

import Dialog from "./Dialog"
import Button from "../basic/Button"
import Icon from "../basic/Icon"
import Input from "../basic/Input"

const keyOptionButton = {
  paddingHorizontal: 0,
  borderRadius: 17,
}

const defaultBook = {
  title: ``,
  author: ``,
  isbn: ``,
  audiobookInfo: {
    spines: [],
  },
}

const styles = StyleSheet.create({
  error:  {
    marginBottom: 15,
    color: 'red',
  },
  dialog:  {
    width: 350,
    maxWidth: 'calc(100vw - 20px)',
  },
  line: {
    marginTop: 5,
  },
  keyLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  key: {
    flex: 1,
  },
  keyOptionButton: {
    ...keyOptionButton,
  },
  keyOptionButtonDisabled: {
    ...keyOptionButton,
    backgroundColor: 'white',
  },
  addNewLine: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
})

const AudiobookDialog = ({
  open,
  bookId,
  setAudiobookId,
  onClose,
  handleNewLibrary,

  idps,
  accounts,
  books,
}) => {

  const [ submitting, setSubmitting ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState()
  const [ editedBook, setEditedBook ] = useState({})

  const getEditedBook = useInstanceValue(editedBook)

  const accountId = Object.keys(accounts)[0]
  const book = books[bookId] || defaultBook
  const { title=``, author=``, isbn=``, audiobookInfo={} } = editedBook

  useEffect(
    () => {
      if(open) {
        setEditedBook(cloneObj(book))
      }
    },
    [ open, bookId ],
  )

  const updateEditedBook = useCallback(
    ({ id, value }) => {
      setEditedBook({
        ...getEditedBook(),
        [id]: value,
      })
    },
    [],
  )

  const onConfirm = useCallback(
    async () => {
      try {

        const { idpId } = getIdsFromAccountId(accountId)

        console.log(`Submit update to audiobook (idpId: ${idpId}, bookId: ${bookId})...`)

        setSubmitting(true)

        const { cookie, libraryHash } = accounts[accountId]
        const editedBook = getEditedBook()

        const audiobookUrl = `${getDataOrigin(idps[idpId])}/audiobook?hash=${libraryHash}`
        const response = await safeFetch(audiobookUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({
            book: {
              id: bookId,
              title: editedBook.title,
              author: editedBook.author,
              isbn: editedBook.isbn,
              audiobookInfo: editedBook.audiobookInfo,
            },
          }),
        }))

        setSubmitting(false)

        if(response.status == 400) {
          let errorMessage = i18n("Configuration error")

          try {
            const json = await response.json()
            errorMessage = json.errorMessage
          } catch(err) {}

          setErrorMessage(errorMessage)
          return

        }

        const { newBookId } = await handleNewLibrary({
          response,
          idpId,
          accountId,
        })

        console.log(`...done submitting update to audiobook for book id: ${bookId}, idpId: ${idpId}...`)

        setAudiobookId && setAudiobookId(newBookId)

      } catch(err) {

        console.error(err)
        setSubmitting(false)
        setErrorMessage(i18n("Internet connection error"))

      }
    },
    [ idps, accounts, accountId, bookId ],
  )

  const onCancel = useCallback(
    () => setEditedBook(cloneObj(book)),
    [ book ],
  )

  const EditIcon = useCallback(({ style }) => <Icon name='pencil' pack='materialCommunity' style={[ styles.editIcon, style ]} />, [])
  const TrashIcon = useCallback(({ style }) => <Icon name='md-trash' style={[ styles.trashIcon, style ]} />, [])

  const hasChange = JSON.stringify(book) !== JSON.stringify(editedBook)

  return (
    <>

      <Dialog
        open={open}
        title={i18n("Audiobook details", "", "admin")}
        style={styles.dialog}
        onClose={onClose}
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmButtonText={bookId ? i18n("Update") : i18n("Create")}
        confirmButtonDisabled={!title.trim()}
        type={hasChange ? "confirm" : "info"}
        submitting={submitting}
        message={
          <View style={styles.container}>

            {!!errorMessage &&
              <Text style={styles.error}>
                {errorMessage}
              </Text>
            }

            <Input
              label={i18n("Title", "", "admin")}
              id="title"
              value={title}
              onChangeInfo={updateEditedBook}
              style={styles.labelInput}
            />

            <Input
              label={i18n("Author", "", "admin")}
              id="author"
              value={author}
              onChangeInfo={updateEditedBook}
              style={styles.labelInput}
            />

            <Input
              label={i18n("ISBN", "", "admin")}
              id="isbn"
              value={isbn}
              onChangeInfo={updateEditedBook}
              style={styles.labelInput}
              maxLength={150}
            />

            <Text>cover image</Text>
            <Text>chapters</Text>

            {/* <FileImporter
              open={!!fileImportInfo.open}
              fileType={fileImportInfo.fileType}
              multiple={!!fileImportInfo.multiple}
              accountId={accountId}
              relativePath={`/importfile/${classroomUid}`}
              onClose={onDoneImportingFile}
              onSuccess={fileImportInfo.onSuccess}
            /> */}

            {/* {audiobookInfo.chapters.map(({ id, name, options }, idx) => {
              const upDisabled = idx === 0 || submitting
              const downDisabled = idx === editedMetadataKeys.length - 1 || submitting
            
              return (
                <View key={idx} style={styles.line}>
                  <View style={styles.keyLine}>
                    <Text
                      style={styles.key}
                      numberOfLines={1}
                    >
                      {name}
                    </Text>
                    <Button
                      style={submitting ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                      size="small"
                      appearance="ghost"
                      accessoryLeft={EditIcon}
                      onPress={() => setEditIndex(idx)}
                      disabled={submitting}
                    />
                    <Button
                      style={submitting ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                      size="small"
                      appearance="ghost"
                      accessoryLeft={TrashIcon}
                      onPress={() => {
                        const newEditedMetadataKeys = cloneObj(editedMetadataKeys)
                        newEditedMetadataKeys.splice(idx, 1)
                        setEditedMetadataKeys(newEditedMetadataKeys)
                      }}
                      disabled={submitting}
                    />
                    <Button
                      style={upDisabled ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                      size="small"
                      appearance="ghost"
                      accessoryLeft={ArrowUpIcon}
                      onPress={() => {
                        const newEditedMetadataKeys = cloneObj(editedMetadataKeys)
                        newEditedMetadataKeys.splice(idx - 1, 0, newEditedMetadataKeys.splice(idx, 1)[0])
                        setEditedMetadataKeys(newEditedMetadataKeys)
                      }}
                      disabled={upDisabled}
                    />
                    <Button
                      style={downDisabled ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                      size="small"
                      appearance="ghost"
                      accessoryLeft={ArrowDownIcon}
                      onPress={() => {
                        const newEditedMetadataKeys = cloneObj(editedMetadataKeys)
                        newEditedMetadataKeys.splice(idx + 1, 0, newEditedMetadataKeys.splice(idx, 1)[0])
                        setEditedMetadataKeys(newEditedMetadataKeys)
                      }}
                      disabled={downDisabled}
                    />
                  </View>
                  <Text style={styles.optionLabel}>
                    {!options
                      ? i18n("Free form text", "", "admin")
                      : i18n("Predefined list", "", "admin")
                    }
                  </Text>
                  {!!options &&
                    <Text key={idx} style={styles.options}>
                      {combineItems(...(options || []).map((option, idx) => option))}
                    </Text>
                  }
                </View>
              )
            })} */}

            {/* <View style={styles.addNewLine}>
              <Button
                onPress={addNew}
                size="tiny"
                status="basic"
                disabled={submitting}
              >
                {i18n("Add a new metadata key", "", "admin")}
              </Button>
            </View> */}

          </View>
        }
      />

    </>
  )
}

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(AudiobookDialog)
