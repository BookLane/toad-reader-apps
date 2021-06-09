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
  error:  {
    marginBottom: 15,
    color: 'red',
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
  const [ errorMessage, setErrorMessage ] = useState()
  const [ hadChange, setHadChange ] = useState()

  const getAccessCode = useInstanceValue(accessCode)

  const accountId = Object.keys(accounts)[0]

  const onConfirm = useCallback(
    async () => {
      try {

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

        const { noChange } = await handleNewLibrary({
          response,
          idpId,
          accountId,
        })

        setHadChange(!noChange)

        console.log(`...done submitting access code and updating books (accountId: ${accountId}).`)

      } catch(err) {

        setSubmitting(false)
        setErrorMessage(i18n("Internet connection error"))

      }
    },
    [ idps, accounts, accountId, handleNewLibrary, onClose ],
  )

  return (

    <Dialog
      open={open}
      title={
        hadChange === undefined
          ? (
            accessCodeInfo.title
            || accessCodeInfo.buttonText
            || i18n("Enter access code")
          )
          : i18n("Success")
      }
      onClose={onClose}
      onCancel={onClose}
      onConfirm={onConfirm}
      confirmButtonDisabled={!accessCode.replace(/\s/g, '')}
      type={hadChange === undefined ? "confirm" : "info"}
      submitting={submitting}
      message={
        hadChange === undefined
          ? (
            <View>
              {!!accessCodeInfo.text &&
                <Text style={styles.expl}>
                  {accessCodeInfo.text}
                </Text>
              }
              {!!errorMessage &&
                <Text style={styles.error}>
                  {errorMessage}
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
          )
          : (
            <View>
              <Text style={styles.expl}>
                {hadChange
                  ? i18n("Access code accepted. Your library has been updated.")
                  : i18n("Access code accepted. However, there was no change to your library.")
                }
              </Text>
            </View>
          )

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
