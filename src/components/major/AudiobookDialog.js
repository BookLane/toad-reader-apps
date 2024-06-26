import React, { useState, useCallback, useEffect, useRef } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import useToggle from "react-use/lib/useToggle"
import { Audio } from 'expo-av'

import { getDataOrigin, getIDPOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch, cloneObj } from '../../utils/toolbox'
import useInstanceValue from "../../hooks/useInstanceValue"
import useRefState from "../../hooks/useRefState"
import useBookCookies from "../../hooks/useBookCookies"
import useCoverHref from "../../hooks/useCoverHref"
import { getTimeStringFromMS } from "./AudiobookPlayerProgressBar"
import { setBookCookies } from "../../redux/actions"

import Dialog from "./Dialog"
import Button from "../basic/Button"
import Icon from "../basic/Icon"
import Input from "../basic/Input"
import FileImporter from "./FileImporter"
import BookCoverEditor from "./BookCoverEditor"

const keyOptionButton = {
  paddingHorizontal: 0,
  borderRadius: 17,
  height: 34,
}

const defaultBook = {
  title: ``,
  author: ``,
  isbn: ``,
  audiobookInfo: {
    spines: [],
  },
}

const coverFileTypes = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
]

const spineFileTypes = [
  // 'audio/aac',
  'audio/mpeg',
  'audio/m4a',
  'audio/mp4',
  'audio/x-m4a',
  'audio/mp4a-latm',
  // 'audio/x-hx-aac-adts',
]

const styles = StyleSheet.create({
  error:  {
    marginBottom: 15,
    color: 'red',
  },
  dialog:  {
    width: 550,
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
  upload: {
    marginTop: 5,
    alignItems: 'flex-start',
  },
  input: {
    marginBottom: 10,
  },
  label: {
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    marginBottom: 8,
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    width: 100,
    height: 100,
  },
  spineLabelInput: {
    flex: 1,
    marginRight: 5,
  },
  coverEditIcon: {
    width: 20,
    height: 20,
  },
  size: {
    fontSize: 11,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
    marginLeft: 5,
  },
  duration: {
    fontSize: 11,
    fontWeight: '300',
    width: 30,
    textAlign: 'center',
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
  const [ uploadCover, toggleUploadCover ] = useToggle()
  const [ uploadSpines, toggleUploadSpines ] = useToggle()
  const [ playingFilename, setPlayingFilename, getPlayingFilename ] = useRefState()
  const soundObj = useRef()

  const getEditedBook = useInstanceValue(editedBook)

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)
  const book = books[bookId] || defaultBook
  const { title=``, author=``, isbn=``, audiobookInfo={} } = editedBook
  const { spines=[] } = audiobookInfo
  const coverHref = useCoverHref({ bookInfo: editedBook, bookId })
  const getAudiobookInfo = useInstanceValue(audiobookInfo)
  const downloadOrigin = __DEV__ ? getDataOrigin(idps[idpId]) : getIDPOrigin(idps[idpId])
  const bookCookies = useBookCookies({ books, accounts, idp: idps[idpId], setBookCookies, bookId, skip: !open })

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

  const updateSpineLabel = useCallback(
    ({ id, value }) => {
      const audiobookInfo = cloneObj(getAudiobookInfo())
      audiobookInfo.spines[parseInt(id)].label = value
      updateEditedBook({
        id: `audiobookInfo`,
        value: audiobookInfo,
      })
    },
    [ updateEditedBook ],
  )

  const onConfirm = useCallback(
    async () => {
      try {
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
              coverHref: editedBook.coverHref,
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
    [ idps, idpId, accounts, accountId, bookId ],
  )

  const onCancel = useCallback(
    () => setEditedBook(cloneObj(book)),
    [ book ],
  )

  const onUploadCoverSuccess = useCallback(
    ([{ result }]) => {
      updateEditedBook({
        id: `coverHref`,
        value: `epub_content/covers/${result.filename}`,
      })
    },
    [ updateEditedBook ],
  )

  const onUploadSpinesSuccess = useCallback(
    files => {
      updateEditedBook({
        id: `audiobookInfo`,
        value: {
          ...getAudiobookInfo(),
          spines: [
            ...getAudiobookInfo().spines,
            ...files.map(({ name, result: { filename, fileSizeInMB, durationMS } }) => ({
              filename,
              fileSizeInMB,
              durationMS,
              label: name.replace(/\.[^.]+$/, ``),
            }))
          ],
        },
      })
    },
    [ updateEditedBook ],
  )

  const togglePlay = useCallback(
    async filename => {

      const playingFilename = getPlayingFilename()

      if(soundObj.current) {
        await soundObj.current.setStatusAsync({ shouldPlay: false })
        await soundObj.current.unloadAsync()
        soundObj.current = undefined
      }

      if(bookCookies && filename && filename !== playingFilename) {

        setPlayingFilename(filename)

        const { sound } = await Audio.Sound.createAsync(
          {
            uri: `${downloadOrigin}/epub_content/book_${bookId}/${filename}`,
            ...getReqOptionsWithAdditions({
              headers: {
                cookie: bookCookies,
              },
            }),
          },
          {},
          null,
          true,
        )

        if(getPlayingFilename() === filename) {  // make sure it wasn't subsequently paused
          soundObj.current = sound
          await soundObj.current.setStatusAsync({ shouldPlay: true })
        }

      } else {

        setPlayingFilename()

      }

    },
    [ getPlayingFilename, setPlayingFilename, downloadOrigin, bookId, bookCookies ],
  )

  const PlayIcon = useCallback(({ style }) => <Icon name='play' style={[ styles.playIcon, style ]} />, [])
  const PauseIcon = useCallback(({ style }) => <Icon name='pause-sharp' style={[ styles.pauseIcon, style ]} />, [])
  const TrashIcon = useCallback(({ style }) => <Icon name='trash' style={[ styles.trashIcon, style ]} />, [])
  const ArrowUpIcon = useCallback(({ style }) => <Icon name='arrow-up' style={[ styles.arrowUpIcon, style ]} />, [])
  const ArrowDownIcon = useCallback(({ style }) => <Icon name='arrow-down' style={[ styles.arrowDownIcon, style ]} />, [])

  const updateCoverHref = useCallback(
    value => {
      updateEditedBook({
        id: `coverHref`,
        value,
      })
    },
    [ updateEditedBook ],
  )

  const bookWithoutEpubSizeInMB = cloneObj(book)
  delete bookWithoutEpubSizeInMB.epubSizeInMB
  const editedBookWithoutEpubSizeInMB = cloneObj(editedBook)
  delete editedBookWithoutEpubSizeInMB.epubSizeInMB
  const hasChange = JSON.stringify(bookWithoutEpubSizeInMB) !== JSON.stringify(editedBookWithoutEpubSizeInMB)

  useEffect(() => togglePlay, [ open ])

  return (
    <>

      <Dialog
        open={open}
        title={
          bookId
            ? i18n("Audiobook chapters", "", "admin")
            : i18n("Basic audiobook metadata", "", "admin")
        }
        style={styles.dialog}
        onClose={onClose}
        onCancel={onCancel}
        onConfirm={onConfirm}
        closeButtonText={bookId ? i18n("Done") : i18n("Cancel")}
        confirmButtonText={bookId ? i18n("Update") : i18n("Create")}
        cancelButtonText={bookId ? i18n("Cancel") : i18n("Clear")}
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

            {!bookId &&
              <>

                <Input
                  label={i18n("Title", "", "admin")}
                  id="title"
                  value={title}
                  onChangeInfo={updateEditedBook}
                  style={styles.input}
                />

                <Input
                  label={i18n("Author", "", "admin")}
                  id="author"
                  value={author}
                  onChangeInfo={updateEditedBook}
                  style={styles.input}
                />

                <Input
                  label={i18n("ISBN", "", "admin")}
                  id="isbn"
                  value={isbn}
                  onChangeInfo={updateEditedBook}
                  style={styles.input}
                  maxLength={150}
                />

                <BookCoverEditor
                  accounts={accounts}
                  idps={idps}
                  coverHref={coverHref}
                  updateCoverHref={updateCoverHref}
                  submitting={submitting}
                />

              </>
            }

            {!!bookId &&
              <>

                <Text style={styles.label}>
                  {i18n("Chapters", "", "admin")}
                </Text>

                {spines.map(({ filename, label, fileSizeInMB, durationMS }, idx) => {
                  const upDisabled = idx === 0 || submitting
                  const downDisabled = idx === spines.length - 1 || submitting
                
                  return (
                    <View key={idx} style={styles.line}>
                      <View style={styles.keyLine}>
                        <Input
                          id={idx}
                          size="small"
                          value={label}
                          onChangeInfo={updateSpineLabel}
                          style={styles.spineLabelInput}
                          maxLength={100}
                        />
                        <Button
                          style={upDisabled ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                          size="small"
                          appearance="ghost"
                          accessoryLeft={ArrowUpIcon}
                          onPress={() => {
                            const spines = cloneObj(audiobookInfo.spines)
                            spines.splice(idx - 1, 0, spines.splice(idx, 1)[0])
                            updateEditedBook({
                              id: `audiobookInfo`,
                              value: {
                                ...audiobookInfo,
                                spines,
                              },
                            })
                          }}
                          disabled={upDisabled}
                        />
                        <Button
                          style={downDisabled ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                          size="small"
                          appearance="ghost"
                          accessoryLeft={ArrowDownIcon}
                          onPress={() => {
                            const spines = cloneObj(audiobookInfo.spines)
                            spines.splice(idx + 1, 0, spines.splice(idx, 1)[0])
                            updateEditedBook({
                              id: `audiobookInfo`,
                              value: {
                                ...audiobookInfo,
                                spines,
                              },
                            })
                          }}
                          disabled={downDisabled}
                        />
                        <Button
                          style={submitting ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                          size="small"
                          appearance="ghost"
                          accessoryLeft={filename === playingFilename ? PauseIcon : PlayIcon}
                          onPress={() => togglePlay(filename)}
                          disabled={!bookCookies || submitting}
                        />
                        <Text style={styles.duration}>{getTimeStringFromMS(durationMS)}</Text>
                        <Text style={styles.size}>{i18n("{{mb}} mb", { mb: fileSizeInMB })}</Text>
                        <Button
                          style={submitting ? styles.keyOptionButtonDisabled : styles.keyOptionButton}
                          size="small"
                          appearance="ghost"
                          accessoryLeft={TrashIcon}
                          onPress={() => {
                            const value = cloneObj(audiobookInfo)
                            value.spines.splice(idx, 1)
                            updateEditedBook({
                              id: `audiobookInfo`,
                              value,
                            })
                          }}
                          disabled={submitting}
                        />
                      </View>
                    </View>
                  )
                })}

                <View style={styles.upload}>
                  <Button
                    onPress={toggleUploadSpines}
                    size="small"
                    status="basic"
                    disabled={!bookId || submitting}
                  >
                    {i18n("Upload audio files for chapters", "", "admin")}
                  </Button>
                </View>

              </>
            }

          </View>
        }
      />

      <FileImporter
        accounts={accounts}
        idps={idps}
        open={uploadCover}
        fileType={coverFileTypes}
        multiple={false}
        accountId={accountId}
        relativePath={`/audiobookfile/${bookId}`}
        onClose={toggleUploadCover}
        onSuccess={onUploadCoverSuccess}
      />

      <FileImporter
        accounts={accounts}
        idps={idps}
        open={uploadSpines}
        fileType={spineFileTypes}
        multiple={true}
        accountId={accountId}
        relativePath={`/audiobookfile/${bookId}`}
        onClose={toggleUploadSpines}
        onSuccess={onUploadSpinesSuccess}
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
  setBookCookies,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(AudiobookDialog)
