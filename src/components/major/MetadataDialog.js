import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch, cloneObj, combineItems } from '../../utils/toolbox'
import useInstanceValue from "../../hooks/useInstanceValue"

import Dialog from "./Dialog"
import Button from "../basic/Button"
import Icon from "../basic/Icon"
import MetadataDetailDialog from "./MetadataDetailDialog"

import { updateMetadataKeys } from "../../redux/actions"

const keyOptionButton = {
  paddingHorizontal: 0,
  borderRadius: 17,
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
  none: {
    color: 'rgba(0,0,0,.6)',
  },
  noneExpl: {
    marginTop: 10,
    color: 'rgba(0,0,0,.4)',
  },
  line: {
    marginTop: 15,
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
  optionLabel: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 12,
    marginTop: -5,
  },
  options: {
    fontSize: 12,
    color: 'rgba(0,0,0,.6)',
  },
  addNewLine: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
})

const MetadataDialog = ({
  open,
  onClose,

  idps,
  accounts,
  metadataKeys,

  updateMetadataKeys,
}) => {

  const [ submitting, setSubmitting ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState()
  const [ editedMetadataKeys, setEditedMetadataKeys ] = useState([])
  const [ editIndex, setEditIndex ] = useState(null)

  const getEditedMetadataKeys = useInstanceValue(editedMetadataKeys)

  const accountId = Object.keys(accounts)[0]

  useEffect(
    () => {
      if(open) {
        setEditedMetadataKeys(cloneObj(metadataKeys))
      }
    },
    [ open ],
  )

  const addNew = useCallback(() => setEditIndex(getEditedMetadataKeys().length), [])

  const updateMetadataKey = useCallback(
    ({ editIndex, metadataKeyData }) => {
      const editedMetadataKeys = getEditedMetadataKeys()
      editedMetadataKeys[editIndex] = metadataKeyData
      setEditedMetadataKeys(editedMetadataKeys)
    },
    [],
  )

  const onCloseDetail = useCallback(() => setEditIndex(null), [])

  const onConfirm = useCallback(
    async () => {
      try {

        const { idpId } = getIdsFromAccountId(accountId)

        console.log(`Submit update to metadata keys (idpId: ${idpId})...`)

        setSubmitting(true)

        const { cookie } = accounts[accountId]
        const editedMetadataKeys = getEditedMetadataKeys()

        const metadataKeysUrl = `${getDataOrigin(idps[idpId])}/metadatakeys`
        const response = await safeFetch(metadataKeysUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({
            metadataKeys: editedMetadataKeys,
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

        try {

          const { metadataKeys } = await response.json()
          updateMetadataKeys(metadataKeys)
          setEditedMetadataKeys(cloneObj(metadataKeys))

        } catch(err) {
          setErrorMessage(i18n("Configuration error"))
          return
        }

        console.log(`...done updating metadata keys (accountId: ${accountId}).`)

      } catch(err) {

        setSubmitting(false)
        setErrorMessage(i18n("Internet connection error"))

      }
    },
    [ idps, accounts, accountId, onClose ],
  )

  const onCancel = useCallback(
    () => setEditedMetadataKeys(cloneObj(metadataKeys)),
    [ metadataKeys ],
  )

  const EditIcon = useCallback(({ style }) => <Icon name='pencil' pack='materialCommunity' style={[ styles.editIcon, style ]} />, [])
  const TrashIcon = useCallback(({ style }) => <Icon name='trash' style={[ styles.trashIcon, style ]} />, [])
  const ArrowUpIcon = useCallback(({ style }) => <Icon name='arrow-up' style={[ styles.arrowUpIcon, style ]} />, [])
  const ArrowDownIcon = useCallback(({ style }) => <Icon name='arrow-down' style={[ styles.arrowDownIcon, style ]} />, [])

  const hasChange = JSON.stringify(metadataKeys) !== JSON.stringify(editedMetadataKeys)
  const hasDuplicateNames = editedMetadataKeys.length !== [ ...new Set(editedMetadataKeys.map(({ name }) => name)) ].length

  return (
    <>

      <Dialog
        open={open}
        title={i18n("Custom metadata categories", "", "admin")}
        style={styles.dialog}
        onClose={onClose}
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmButtonText={i18n("Save")}
        confirmButtonDisabled={hasDuplicateNames}
        type={hasChange ? "confirm" : "info"}
        submitting={submitting}
        message={
          <View style={styles.container}>

            {!!errorMessage &&
              <Text style={styles.error}>
                {errorMessage}
              </Text>
            }

            {editedMetadataKeys.length === 0 &&
              <>
                <Text style={styles.none}>
                  {i18n("There are currently no custom metadata categories for books.", "", "admin")}
                </Text>
                <Text style={styles.noneExpl}>
                  {i18n("Tell your users more about your books with custom metadata categories. Add custom metadata categories like “Description” in order to present more information about each book. You may also use custom metadata categories like “Genre” or “Reading Level” with predefined option lists in order to group your books.", "", "admin")}
                </Text>
              </>
            }

            {editedMetadataKeys.map(({ id, name, options }, idx) => {
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
            })}

            <View style={styles.addNewLine}>
              <Button
                onPress={addNew}
                size="tiny"
                status="basic"
                disabled={submitting}
              >
                {i18n("Add a new metadata key", "", "admin")}
              </Button>
            </View>

            {hasDuplicateNames &&
              <Text style={styles.error}>
                {i18n("Two metadata categories cannot share the same name.", "", "admin")}
              </Text>
            }

          </View>
        }
      />

      <MetadataDetailDialog
        key={editIndex}
        open={editIndex != null}
        editIndex={editIndex}
        metadataKeyData={editedMetadataKeys[editIndex]}
        updateMetadataKey={updateMetadataKey}
        onClose={onCloseDetail}
      />

    </>
  )
}

const mapStateToProps = ({ idps, accounts, metadataKeys }) => ({
  idps,
  accounts,
  metadataKeys,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateMetadataKeys,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(MetadataDialog)
