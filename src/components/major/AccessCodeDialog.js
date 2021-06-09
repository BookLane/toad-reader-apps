import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"

import Dialog from "./Dialog"
import Input from "../basic/Input"

const styles = StyleSheet.create({
  expl:  {
    marginBottom: 15,
  },
})

const AccessCodeDialog = ({
  open,
  onClose,
  accessCodeInfo,
}) => {

  const [ code, setCode ] = useState("")

  // I AM HERE
  // - Submit to server (in library request)
  // - Server calls API, returns library and success/failure message
  // - Remove accessCodeInfo from BibleMesh's app.json

  return (

    <Dialog
      open={open}
      title={accessCodeInfo.title || accessCodeInfo.buttonText || i18n("Enter access code")}
      onCancel={onClose}
      onConfirm={onClose}
      confirmButtonDisabled={!code.replace(/\s/g, '')}
      type="confirm"
      message={
        <View>
          {!!accessCodeInfo.text &&
            <Text style={styles.expl}>
              {accessCodeInfo.text}
            </Text>
          }
          <Input
            label={accessCodeInfo.inputLabel || i18n("Access code")}
            placeholder={accessCodeInfo.inputPlaceholder}
            value={code}
            onChangeText={setCode}
            style={styles.input}
          />
        </View>
      }
    />
  )
}

export default AccessCodeDialog