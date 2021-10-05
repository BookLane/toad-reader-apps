import React, { useState, useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { i18n } from "inline-i18n"

import useInstanceValue from "../../hooks/useInstanceValue"

import Dialog from "./Dialog"
import Input from "../basic/Input"

const styles = StyleSheet.create({
})

const SubscriptionDetailDialog = ({
  open,
  editIndex,
  subscriptionData,
  updateSubscription,
  onClose,
}) => {

  const [ editedSubscriptionData, setEditedSubscriptionData ] = useState(subscriptionData || {})

  const getEditedSubscriptionData = useInstanceValue(editedSubscriptionData)

  const updateLabel = useCallback(
    label => {
      setEditedSubscriptionData({
        ...getEditedSubscriptionData(),
        label,
      })
    },
    [],
  )

  const onConfirm = useCallback(
    async () => {
      const subscriptionData = getEditedSubscriptionData()
      updateSubscription({
        editIndex,
        subscriptionData,
      })
      onClose()
    },
    [ updateSubscription, onClose, editIndex ],
  )

  const { label="" } = editedSubscriptionData

  const disabledConfirm = !(
    label.trim()
  )

  return (

    <Dialog
      open={open}
      title={i18n("Edit subscription label")}
      onCancel={onClose}
      onConfirm={onConfirm}
      confirmButtonText={subscriptionData ? i18n("Update") : i18n("Add")}
      confirmButtonDisabled={disabledConfirm}
      type={"confirm"}
      message={
        <View style={styles.container}>

          <Input
            label={i18n("Subscription label")}
            placeholder={i18n("Eg. Basic, Premium")}
            value={label}
            onChangeText={updateLabel}
            style={styles.labelInput}
            maxLength={100}
          />

        </View>
      }
    />
  )
}

export default SubscriptionDetailDialog
