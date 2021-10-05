import React, { useState, useCallback, useEffect, useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n, getLocale } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch, cloneObj } from '../../utils/toolbox'
import useInstanceValue from "../../hooks/useInstanceValue"

import Dialog from "./Dialog"
import Button from "../basic/Button"
import Icon from "../basic/Icon"
import SubscriptionDetailDialog from "./SubscriptionDetailDialog"

import { updateSubscriptions } from "../../redux/actions"

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
  idLabel: {
    color: 'rgba(0,0,0,.4)',
    fontSize: 12,
    marginTop: -5,
  },
  addNewLine: {
    marginTop: 15,
    alignItems: 'flex-start',
  },
})

const cloneAndOrderSubscriptions = subscriptions => {
  const orderedSubscriptions = cloneObj(subscriptions)
  const locale = getLocale()
  return orderedSubscriptions.sort((a, b) => a.label.localeCompare(b.label, locale))
}

const SubscriptionsDialog = ({
  open,
  onClose,

  idps,
  accounts,
  subscriptions,

  updateSubscriptions,
}) => {

  const [ submitting, setSubmitting ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState()
  const [ editedSubscriptions, setEditedSubscriptions ] = useState([])
  const [ editIndex, setEditIndex ] = useState(null)

  const getEditedSubscriptions = useInstanceValue(editedSubscriptions)

  const accountId = Object.keys(accounts)[0]

  useEffect(
    () => {
      if(open) {
        setEditedSubscriptions(cloneAndOrderSubscriptions(subscriptions))
      }
    },
    [ open ],
  )

  const addNew = useCallback(() => setEditIndex(getEditedSubscriptions().length), [])

  const updateSubscription = useCallback(
    ({ editIndex, subscriptionData }) => {
      const editedSubscriptions = [ ...getEditedSubscriptions() ]
      editedSubscriptions[editIndex] = subscriptionData
      setEditedSubscriptions(cloneAndOrderSubscriptions(editedSubscriptions))
    },
    [],
  )

  const onCloseDetail = useCallback(() => setEditIndex(null), [])

  const onConfirm = useCallback(
    async () => {
      try {

        const { idpId } = getIdsFromAccountId(accountId)

        console.log(`Submit update to subscriptions (idpId: ${idpId})...`)

        setSubmitting(true)

        const { cookie } = accounts[accountId]
        const editedSubscriptions = getEditedSubscriptions()

        const subscriptionsUrl = `${getDataOrigin(idps[idpId])}/subscriptions`
        const response = await safeFetch(subscriptionsUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({
            subscriptions: editedSubscriptions,
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

          const { subscriptions } = await response.json()
          updateSubscriptions(subscriptions)
          setEditedSubscriptions(cloneAndOrderSubscriptions(subscriptions))

        } catch(err) {
          setErrorMessage(i18n("Configuration error"))
          return
        }

        console.log(`...done updating subscriptions (accountId: ${accountId}).`)

      } catch(err) {

        setSubmitting(false)
        setErrorMessage(i18n("Internet connection error"))

      }
    },
    [ idps, accounts, accountId, onClose ],
  )

  const onCancel = useCallback(
    () => setEditedSubscriptions(cloneAndOrderSubscriptions(subscriptions)),
    [ subscriptions ],
  )

  const EditIcon = useCallback(({ style }) => <Icon name='pencil' pack='materialCommunity' style={[ styles.editIcon, style ]} />, [])
  const TrashIcon = useCallback(({ style }) => <Icon name='md-trash' style={[ styles.trashIcon, style ]} />, [])

  const hasChange = JSON.stringify(subscriptions) !== JSON.stringify(editedSubscriptions)
  const hasDuplicateLabels = editedSubscriptions.length !== [ ...new Set(editedSubscriptions.map(({ label }) => label)) ].length

  return (
    <>

      <Dialog
        open={open}
        title={i18n("Book subscription types")}
        style={styles.dialog}
        onClose={onClose}
        onCancel={onCancel}
        onConfirm={onConfirm}
        confirmButtonText={i18n("Save")}
        confirmButtonDisabled={hasDuplicateLabels}
        type={hasChange ? "confirm" : "info"}
        submitting={submitting}
        message={
          <View style={styles.container}>

            {!!errorMessage &&
              <Text style={styles.error}>
                {errorMessage}
              </Text>
            }

            {editedSubscriptions.length === 0 &&
              <>
                <Text style={styles.none}>
                  {i18n("There are currently no subscription types.")}
                </Text>
                <Text style={styles.noneExpl}>
                  {i18n("Optionally manage the makeup of bundled book subscriptions here within your Toad Reader admin. Once set up, you will be able to easily add and remove books to a subscription via the Library, immediately affecting the book access of users with the given subscription.")}
                </Text>
              </>
            }

            {editedSubscriptions.map(({ id=i18n("[ pending save ]"), label }, idx) => (
              <View key={idx} style={styles.line}>
                <View style={styles.keyLine}>
                  <Text
                    style={styles.key}
                    numberOfLines={1}
                  >
                    {label}
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
                      const newEditedSubscriptions = cloneObj(editedSubscriptions)
                      newEditedSubscriptions.splice(idx, 1)
                      setEditedSubscriptions(cloneAndOrderSubscriptions(newEditedSubscriptions))
                    }}
                    disabled={submitting}
                  />
                </View>
                <Text style={styles.idLabel}>
                  {i18n("ID: {{id}}", { id })}
                </Text>
              </View>
            ))}

            <View style={styles.addNewLine}>
              <Button
                onPress={addNew}
                size="tiny"
                status="basic"
                disabled={submitting}
              >
                {i18n("Add a new subscription type")}
              </Button>
            </View>

            {hasDuplicateLabels &&
              <Text style={styles.error}>
                {i18n("Two subscriptions cannot share the same label.")}
              </Text>
            }

          </View>
        }
      />

      <SubscriptionDetailDialog
        key={editIndex}
        open={editIndex != null}
        editIndex={editIndex}
        subscriptionData={editedSubscriptions[editIndex]}
        updateSubscription={updateSubscription}
        onClose={onCloseDetail}
      />

    </>
  )
}

const mapStateToProps = ({ idps, accounts, subscriptions }) => ({
  idps,
  accounts,
  subscriptions,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateSubscriptions,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(SubscriptionsDialog)
