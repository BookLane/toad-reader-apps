import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch } from '../../utils/toolbox'
import useInstanceValue from "../../hooks/useInstanceValue"

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
  handleNewLibrary,

  idps,
  accounts,
}) => {

  const [ accessCode, setAccessCode ] = useState("")
  const [ submitting, setSubmitting ] = useState(false)

  const getAccessCode = useInstanceValue(accessCode)

  const accountId = Object.keys(accounts)[0]

  // I AM HERE
  // - If no internet, disable button
  // - Show success/failure message
    // No internet
    // Access code invalid (pass along error message)
    // code valid, but did not change anything
    // code valid, library updated
  // - Remove accessCodeInfo from BibleMesh's app.json
  // - After server is live, get rid of useReaderTxt from db


  const onConfirm = useCallback(
    async () => {

      console.log(`Submit access code and update books (accountId: ${accountId})...`)

      setSubmitting(true)

      const { idpId } = getIdsFromAccountId(accountId)
      const { cookie, libraryHash } = accounts[accountId]

      const libraryUrl = `${getDataOrigin(idps[idpId])}/submitaccesscode?hash=${libraryHash}`
      let response = await safeFetch(libraryUrl, getReqOptionsWithAdditions({
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
          "x-cookie-override": cookie,
        },
        body: JSON.stringify({ accessCode: getAccessCode() }),
      }))

      await handleNewLibrary({
        response,
        idpId,
        accountId,
      })

      setSubmitting(false)

      console.log(`...done submitting access code and updating books (accountId: ${accountId}).`)

      onClose()

    },
    [ idps, accounts, accountId, handleNewLibrary, onClose ],
  )

  return (

    <Dialog
      open={open}
      title={accessCodeInfo.title || accessCodeInfo.buttonText || i18n("Enter access code")}
      onCancel={onClose}
      onConfirm={onConfirm}
      confirmButtonDisabled={!accessCode.replace(/\s/g, '')}
      type="confirm"
      submitting={submitting}
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
            value={accessCode}
            onChangeText={setAccessCode}
            style={styles.input}
          />
        </View>
      }
    />
  )
}

const mapStateToProps = ({ idps, accounts }) => ({
  idps,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(AccessCodeDialog)
