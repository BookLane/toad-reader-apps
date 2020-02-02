import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"
import Input from "../basic/Input"
import Button from "../basic/Button"

import CoverAndSpin from "../basic/CoverAndSpin"

import { safeFetch, getReqOptionsWithAdditions, getDataOrigin, isValidEmail } from "../../utils/toolbox"
import useInstanceValue from "../../hooks/useInstanceValue"

import { addAccount } from "../../redux/actions"

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 20,
  },
  box: {
    maxWidth: 300,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 3,
    backgroundColor: 'rgba(51, 102, 255, .1)',
    padding: 20,
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    opacity: .5,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  error: {
    marginTop: 20,
    fontSize: 15,
    color: 'red',
  },
  instructions: {
    fontSize: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  consent: {
    marginTop: 20,
    fontSize: 12,
  },
})

const EmailLogin = ({
  idpId,
  onSuccess,

  idps,

  addAccount,
}) => {

  const [ stage, setStage ] = useState('AWAITING_EMAIL')
  const [ email, setEmail ] = useState("")
  const [ code, setCode ] = useState("")
  const [ error, setError ] = useState()

  const getEmail = useInstanceValue(email)
  const getCode = useInstanceValue(code)

  const goSendEmail = useCallback(
    async () => {
      
      setError()
      setStage('SENDING_EMAIL')

      let response = {}

      try {
        response = await safeFetch(
          `${getDataOrigin(idps[idpId])}/loginwithemail?email=${encodeURIComponent(getEmail().trim())}`,
          getReqOptionsWithAdditions({}),
        )
      } catch(err) {
        response.statusText = err.message || 'Internet connection error'
        response.status = 500
      }

      if(response.status >= 400) {
        const json = response.json && await response.json()
        setError((json || {}).error || response.statusText)
        setStage('AWAITING_EMAIL')
        return
      }

      setStage('AWAITING_CODE')

    },
    [ idps[idpId] ],
  )

  const goCheckCode = useCallback(
    async () => {

      setError()
      setStage('SENDING_CODE')

      let response = {}

      try {
        response = await safeFetch(
          `${getDataOrigin(idps[idpId])}/loginwithaccesscode?code=${encodeURIComponent(getCode().trim().toUpperCase())}`,
          getReqOptionsWithAdditions({}),
        )
      } catch(err) {
        response.statusText = err.message || 'Internet connection error'
      }

      let jsonResponse = {}

      try {
        jsonResponse = response.json ? await response.json() : {}
      } catch(err) {}

      const { success, error, cookie, currentServerTime, userInfo } = jsonResponse

      if(!success) {
        setError(error || response.statusText)
        setStage('AWAITING_CODE')
        return
      }

      addAccount({
        idpId,
        userId: userInfo.id,
        accountInfo: {
          fullname: userInfo.fullname,
          serverTimeOffset: currentServerTime - Date.now(),
          isAdmin: !!userInfo.isAdmin,
          cookie,
        },
      })

      setStage('DONE')

      onSuccess()

    },
    [ idps[idpId], idpId, onSuccess ],
  )

  const sendAnotherEmail = useCallback(() => setStage('AWAITING_EMAIL'), [])

  const { emailConsentText, name } = idps[idpId]

  const errorMessages = {
    'invalid access code': i18n("Invalid or expired access code. Try again."),
  }

  return (
    <SafeLayout>
      <View style={styles.background}>
        <Text style={styles.title}>
          {name}
        </Text>
        <View style={styles.box}>
          {[ 'AWAITING_EMAIL', 'SENDING_EMAIL' ].includes(stage) &&
            <>
              <Text style={styles.instructions}>
                {i18n("Enter your email to receive a login code.")}
              </Text>
              <Input
                label={i18n("Email")}
                value={email}
                onChangeText={setEmail}
                disabled={stage === 'SENDING_EMAIL'}
                autoCorrect={false}
                autoCapitalize="none"
                // autoFocus={true}  // This is not good for the inital load
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <View style={styles.buttonContainer}>
                <Button
                  status="primary"
                  onPress={goSendEmail}
                  disabled={stage === 'SENDING_EMAIL' || !isValidEmail(email.trim())}
                >
                  {i18n("Send login code")}
                </Button>
              </View>
              {!!emailConsentText &&
                <Text style={styles.consent}>
                  {emailConsentText}
                </Text>
              }
            </>
          }
          {[ 'AWAITING_CODE', 'SENDING_CODE' ].includes(stage) &&
            <>
              <Text style={styles.instructions}>
                {i18n("Email sent. Check your inbox and enter the code from that email.")}
              </Text>
              <Input
                label={i18n("Login code")}
                placeholder={i18n("Eg. {{example}}", { example: "U876TV" })}
                value={code}
                onChangeText={setCode}
                disabled={stage === 'SENDING_CODE'}
                autoCorrect={false}
                autoCapitalize="characters"
                autoFocus={true}
                autoCompleteType="off"
              />
              <View style={styles.buttonContainer}>
                <Button
                  status="primary"
                  onPress={goCheckCode}
                  disabled={stage === 'SENDING_CODE' || !code.trim()}
                >
                  {i18n("Log in")}
                </Button>
              </View>
              <Text style={styles.linkContainer}>
                <Text style={styles.link} onPress={sendAnotherEmail}>
                  {i18n("Send another email")}
                </Text>
              </Text>
            </>
          }
          {error &&
            <Text style={styles.error}>
              {errorMessages[error] || error}
            </Text>
          }
        </View>
        {[ 'SENDING_EMAIL', 'SENDING_CODE' ].includes(stage) && !error &&
          <CoverAndSpin
            text={stage === 'SENDING_EMAIL' ? i18n("Sending email...") : i18n("Checking code...")}
            style={{ backgroundColor: 'white' }}
          />
        }
      </View>
    </SafeLayout>
  )
}

const mapStateToProps = ({ idps }) => ({
  idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addAccount,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(EmailLogin))
