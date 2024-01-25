import React, { useState, useCallback, useEffect, useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { SelectItem, IndexPath } from "@ui-kitten/components"

import useInstanceValue from "../../hooks/useInstanceValue"
import useMetadataValuesByKeyId from "../../hooks/useMetadataValuesByKeyId"
import { cloneObj, getIdsFromAccountId, getDataOrigin, safeFetch, getReqOptionsWithAdditions } from '../../utils/toolbox'

import Dialog from "./Dialog"
import Input from "../basic/Input"
import Select from "../basic/Select"
import BookCoverEditor from "./BookCoverEditor"

const styles = StyleSheet.create({
  dialog:  {
    width: 400,
    maxWidth: 'calc(100vw - 20px)',
  },
  select: {
    marginBottom: 12,
  },
  input: {
    marginBottom: 12,
  },
  manage: {
    marginTop: 10,
    color: 'rgba(0, 0, 0, .5)',
    fontStyle: 'italic',
  },
  status: {
    marginTop: 10,
  },
  error: {
    marginBottom: 15,
    color: 'red',
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    width: 82,
    height: 110,
  },
})

const BookMetadataDialog = ({
  open,
  metadataValues,
  bookId,
  isAudiobook,
  onClose,
  handleNewLibrary,

  idps,
  accounts,
  metadataKeys,
}) => {

  const metadataValuesByKeyId = useMetadataValuesByKeyId(metadataValues)

  const [ submitting, setSubmitting ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState()
  const [ editedMetadataValuesByKeyId, setEditedMetadataValuesByKeyId ] = useState(metadataValuesByKeyId)

  const getEditedMetadataValuesByKeyId = useInstanceValue(editedMetadataValuesByKeyId)

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)

  const metadataKeysWithCoreItems = useMemo(
    () => ([
      {
        id: `title`,
        name: i18n("Title", "", "admin"),
      },
      {
        id: `author`,
        name: i18n("Author", "", "admin"),
      },
      {
        id: `isbn`,
        name: i18n("ISBN", "", "admin"),
      },
      {
        id: `coverHref`,
        name: i18n("Cover Image", "", "admin"),
        isFile: true,
      },
      ...(metadataKeys || []),
    ]),
    [ metadataKeys ],
  )

  useEffect(
    () => {
      if(open) {
        setEditedMetadataValuesByKeyId(cloneObj(metadataValuesByKeyId))
      }
    },
    [ open ],
  )

  const onSelect = useCallback(
    ({ id, info: options, row: index }) => {
      const editedMetadataValuesByKeyId = cloneObj(getEditedMetadataValuesByKeyId())
      if(index === 0) {
        delete editedMetadataValuesByKeyId[id]
      } else {
        editedMetadataValuesByKeyId[id] = options[index - 1]
      }
      setEditedMetadataValuesByKeyId(editedMetadataValuesByKeyId)
    },
    [],
  )

  const onChangeInput = useCallback(
    ({ id, value }) => {
      const editedMetadataValuesByKeyId = cloneObj(getEditedMetadataValuesByKeyId())
      if(value.trim() === "") {
        delete editedMetadataValuesByKeyId[id]
      } else {
        editedMetadataValuesByKeyId[id] = value.replace(/\r/g, '')
      }
      setEditedMetadataValuesByKeyId(editedMetadataValuesByKeyId)
    },
    [],
  )

  const updateCoverHref = useCallback(
    value => {
      onChangeInput({
        id: `coverHref`,
        value,
      })
    },
    [ onChangeInput ],
  )

  const onConfirm = useCallback(
    async () => {
      try {

        console.log(`Submit update to metadata value for book id: ${bookId}, idpId: ${idpId}...`)

        setSubmitting(true)

        const { cookie, libraryHash } = accounts[accountId]
        const newMetadataValuesByKeyId = getEditedMetadataValuesByKeyId()
        const metadataValues = []
        Object.keys(newMetadataValuesByKeyId).forEach(metadata_key_id => {
          metadataValues.push({
            metadata_key_id,
            value: newMetadataValuesByKeyId[metadata_key_id],
          })
        })

        const metadataValuesUrl = `${getDataOrigin(idps[idpId])}/metadatavalues?hash=${libraryHash}`
        const response = await safeFetch(metadataValuesUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({
            bookId,
            metadataValues,
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

        await handleNewLibrary({
          response,
          idpId,
          accountId,
        })

        console.log(`...done submitting update to metadata value for book id: ${bookId}, idpId: ${idpId}...`)

        setEditedMetadataValuesByKeyId(cloneObj(newMetadataValuesByKeyId))

      } catch(err) {

        console.error(err)
        setSubmitting(false)
        setErrorMessage(i18n("Internet connection error"))

      }

    },
    [ accountId, idpId, accounts ],
  )

  const onCancel = useCallback(
    () => setEditedMetadataValuesByKeyId(cloneObj(metadataValuesByKeyId)),
    [ metadataValuesByKeyId ],
  )

  const hasChange = JSON.stringify(metadataValuesByKeyId) !== JSON.stringify(editedMetadataValuesByKeyId)

  return (

    <Dialog
      open={open}
      title={i18n("Edit metadata", "", "admin")}
      style={styles.dialog}
      onClose={onClose}
      onCancel={onCancel}
      onConfirm={onConfirm}
      closeButtonText={i18n("Close")}
      confirmButtonText={i18n("Save")}
      type={hasChange ? "confirm" : "info"}
      submitting={submitting}
      message={
        <View style={styles.container}>

          {!!errorMessage &&
            <Text style={styles.error}>
              {errorMessage}
            </Text>
          }

          {metadataKeysWithCoreItems.map(({ id, name, options, isFile }) => (
            isFile
              ? (
                <BookCoverEditor
                  key={id}
                  accounts={accounts}
                  idps={idps}
                  bookId={bookId}
                  coverHref={editedMetadataValuesByKeyId[id]}
                  updateCoverHref={updateCoverHref}
                  submitting={submitting}
                  imageStyle={!isAudiobook && styles.image}
                />
              )
              : (
                options
                  ? (
                    <View key={id}>
    
                      <Select
                        id={id}
                        label={name}
                        info={options}
                        style={styles.select}
                        value={editedMetadataValuesByKeyId[id] || " "}
                        selectedIndex={new IndexPath(options.indexOf(editedMetadataValuesByKeyId[id]) + 1)}
                        onSelect={onSelect}
                      >
                        <SelectItem title=" " />
                        {options.map(option => (
                          <SelectItem
                            key={option}
                            title={option}
                          />
                        ))}
                      </Select>
    
                    </View>
                  )
                  : (
                    <Input
                      key={id}
                      id={id}
                      label={name}
                      value={editedMetadataValuesByKeyId[id] || ""}
                      onChangeInfo={onChangeInput}
                      style={styles.input}
                    />
                  )
              )
          ))}

          <Text style={styles.manage}>
            {i18n("Manage custom metadata categories by clicking that option under the main menu.", "", "admin")}
          </Text>

          <Text style={styles.status}>
            {hasChange
              ? i18n("There are outstanding edits.", "", "admin")
              : i18n("All changes are saved.", "", "admin")
            }
          </Text>

        </View>
      }
    />
  )
}

const mapStateToProps = ({ idps, accounts, metadataKeys }) => ({
  idps,
  accounts,
  metadataKeys,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookMetadataDialog)
