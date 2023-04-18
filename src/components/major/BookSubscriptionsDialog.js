import React, { useState, useCallback, useEffect, useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { SelectItem, IndexPath } from "@ui-kitten/components"

import useInstanceValue from "../../hooks/useInstanceValue"
import useRouterState from "../../hooks/useRouterState"
import { cloneObj, getIdsFromAccountId, getDataOrigin, safeFetch, getReqOptionsWithAdditions, getVersionString } from '../../utils/toolbox'

import Dialog from "./Dialog"
import Select from "../basic/Select"

import { setSubscriptions } from "../../redux/actions"

const styles = StyleSheet.create({
  dialog:  {
    width: 400,
    maxWidth: 'calc(100vw - 20px)',
  },
  instructions: {
    marginBottom: 15,
    color: 'rgba(0, 0, 0, .5)',
  },
  select: {
    marginBottom: 12,
  },
  status: {
    marginTop: 10,
    color: 'rgba(0, 0, 0, .5)',
  },
})

const BookSubscriptionsDialog = ({
  open,
  bookId,
  bookTitle,
  assignedSubscriptions,
  onClose,

  idps,
  accounts,
  subscriptions,

  setSubscriptions,
}) => {

  const { historyPush } = useRouterState()

  const [ submitting, setSubmitting ] = useState(false)

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)
  const idp = idps[idpId]
  const { useEnhancedReader } = idp

  const bookVersionOptions = useMemo(
    () => ([
      "NONE",
      "BASE",
      ...(!useEnhancedReader ? [] : [
        "ENHANCED",
        "INSTRUCTOR",
        "PUBLISHER",
      ])
    ]),
    [ useEnhancedReader ],
  )

  const bookSubscriptionVersionById = useMemo(
    () => {
      const bookSubscriptionVersionById = {}
      subscriptions.forEach(({ id }) => {
        bookSubscriptionVersionById[id] = (assignedSubscriptions.filter(assignedSubscription => assignedSubscription.id === id)[0] || {}).version || "NONE"
      })
      return bookSubscriptionVersionById
    },
    [ subscriptions, assignedSubscriptions ],
  )

  const [ editedBookSubscriptionVersionById, setEditedBookSubscriptionVersionById ] = useState(bookSubscriptionVersionById)
  const getEditedBookSubscriptionVersionById = useInstanceValue(editedBookSubscriptionVersionById)

  useEffect(
    () => {
      setEditedBookSubscriptionVersionById(cloneObj(bookSubscriptionVersionById))
    },
    [ bookSubscriptionVersionById ],
  )

  const onSelect = useCallback(
    ({ id, row: index }) => {
      const editedBookSubscriptionVersionById = cloneObj(getEditedBookSubscriptionVersionById())
      editedBookSubscriptionVersionById[id] = bookVersionOptions[index]
      setEditedBookSubscriptionVersionById(editedBookSubscriptionVersionById)
    },
    [ bookVersionOptions ],
  )

  const onConfirm = useCallback(
    async () => {
      try {

        console.log(`Submit update to subscriptions for book id: ${bookId}, idpId: ${idpId}...`)

        setSubmitting(true)

        const { cookie } = accounts[accountId]
        const newBookSubscriptionVersionById = getEditedBookSubscriptionVersionById()
        const newBookSubscriptions = []
        Object.keys(newBookSubscriptionVersionById).forEach(id => {
          if(newBookSubscriptionVersionById[id] !== 'NONE') {
            newBookSubscriptions.push({
              id: parseInt(id, 10),
              version: newBookSubscriptionVersionById[id],
            })
          }
        })

        const bookSubscriptionsUrl = `${getDataOrigin(idp)}/setsubscriptions/${bookId}`
        const result = await safeFetch(bookSubscriptionsUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({ subscriptions: newBookSubscriptions }),
        }))

        setSubmitting(false)

        if(result.status === 200 && ((await result.json()) || {}).success) {
          setSubscriptions({
            bookId,
            accountId,
            subscriptions: newBookSubscriptions,
          })

        } else {
          historyPush("/error")
        }

        console.log(`...done submitting update to subscriptions for book id: ${bookId}, idpId: ${idpId}...`)

      } catch(err) {
        historyPush("/error", {
          message: err.message,
        })
      }

    },
    [ accountId, accounts, bookId, idpId ],
  )

  const onCancel = useCallback(
    () => setEditedBookSubscriptionVersionById(cloneObj(bookSubscriptionVersionById)),
    [ bookSubscriptionVersionById ],
  )

  const hasChange = JSON.stringify(bookSubscriptionVersionById) !== JSON.stringify(editedBookSubscriptionVersionById)

  return (

    <Dialog
      open={open}
      title={i18n("Edit subscriptions for “{{book_title}}”", "", "admin", {
        book_title: bookTitle,
      })}
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

          <Text style={styles.instructions}>
            {i18n("Choose which book version users will have access to with each subscription type.", "", "admin")}
          </Text>

          {subscriptions.map(({ id, label }) => (
            <View key={id}>

              <Select
                id={id}
                label={label}
                style={styles.select}
                value={getVersionString(editedBookSubscriptionVersionById[id]) || i18n("None")}
                selectedIndex={new IndexPath(bookVersionOptions.indexOf(editedBookSubscriptionVersionById[id]))}
                onSelect={onSelect}
              >
                {bookVersionOptions.map(option => (
                  <SelectItem
                    key={option}
                    title={getVersionString(option) || i18n("None")}
                  />
                ))}
              </Select>

            </View>
          ))}

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

const mapStateToProps = ({ idps, accounts, subscriptions }) => ({
  idps,
  accounts,
  subscriptions,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSubscriptions,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookSubscriptionsDialog)
