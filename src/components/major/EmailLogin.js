import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"
import { Image } from 'expo-image'
import Constants from 'expo-constants'

import { safeFetch, getReqOptionsWithAdditions, getDataOrigin, isValidEmail } from "../../utils/toolbox"
import useInstanceValue from "../../hooks/useInstanceValue"
import useRouterState from "../../hooks/useRouterState"

import CoverAndSpin from "../basic/CoverAndSpin"
import Input from "../basic/Input"
import Button from "../basic/Button"

import { addAccount } from "../../redux/actions"

const {
  HAS_LOGIN_LOGO=false,
  LOGIN_SCREEN_BG_COLOR="white",
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: LOGIN_SCREEN_BG_COLOR,
  },
  coverAndSpin: {
    backgroundColor: LOGIN_SCREEN_BG_COLOR,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  titleLogoImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  titleImage: {
    width: 300,
    height: 159,
    marginTop: 120,
    resizeMode: 'cover',
  },
  box: {
    marginTop: 30,
    width: 300,
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    opacity: .5,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  warning: {
    marginTop: 20,
    fontSize: 14,
    color: 'red',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, .1)',
    padding: 15,
  },
  error: {
    marginTop: 20,
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
  },
  instructions: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  button: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .95)',
    borderColor: 'rgba(0, 0, 0, .95)',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderColor: 'transparent',
  },
  inputLabel: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, .95)',
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

  const { routerState, clearKeyFromRouterState } = useRouterState()
  const { accessCode } = routerState

  const [ stage, setStage ] = useState(accessCode ? 'AWAITING_CODE' : 'AWAITING_EMAIL')
  const [ numSessionsThisWillLogOut, setNumSessionsThisWillLogOut ] = useState(0)
  const [ email, setEmail ] = useState("")
  const [ code, setCode ] = useState(accessCode || "")
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

      const json = response.json && await response.json()

      if(response.status >= 400) {
        setError((json || {}).error || response.statusText)
        setStage('AWAITING_EMAIL')
        return
      }

      setNumSessionsThisWillLogOut((json || {}).numSessionsThisWillLogOut || 0)
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
        idp: idps[idpId],
        userId: userInfo.id,
        accountInfo: {
          fullname: userInfo.fullname,
          email: userInfo.email,
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

  useEffect(
    () => {
      if(accessCode) {
        clearKeyFromRouterState('accessCode')
        goCheckCode()
      }
    },
    [],
  )

  const sendAnotherEmail = useCallback(
    () => {
      setStage('AWAITING_EMAIL')
      setError()
      setNumSessionsThisWillLogOut(0)
    },
    [],
  )

  const { emailConsentText, name } = idps[idpId]

  const errorMessages = {
    'invalid access code': i18n("Invalid or expired access code. Try again."),
  }

  const stage1Disabled = stage === 'SENDING_EMAIL' || !isValidEmail(email.trim())
  const stage2Disabled = stage === 'SENDING_CODE' || !code.trim()

  return (
    <SafeLayout>
      <View style={styles.background}>
        {!HAS_LOGIN_LOGO &&
          <View style={styles.titleContainer}>
            <Image
              source={require("../../../assets/icons/logo.png")}
              style={styles.titleLogoImage}
            />
            <Text style={styles.title}>
              {name}
            </Text>
          </View>
        }
        {HAS_LOGIN_LOGO &&
          <Image
            source={require("../../../assets/icons/login-logo.png")}
            style={styles.titleImage}
          />
        }
        <View style={styles.box}>
          {[ 'AWAITING_EMAIL', 'SENDING_EMAIL' ].includes(stage) &&
            <>
              <Input
                label={i18n("Email")}
                placeholder={i18n("Email address")}
                value={email}
                name="email"
                onChangeText={setEmail}
                disabled={stage === 'SENDING_EMAIL'}
                autoCorrect={false}
                autoCapitalize="none"
                // autoFocus={true}  // This is not good for the inital load
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                size='small'
                labelStyle={styles.inputLabel}
              />
              <View style={styles.buttonContainer}>
                <Button
                  status="primary"
                  style={[
                    styles.button,
                    (stage1Disabled && styles.buttonDisabled),
                  ]}
                  size="small"
                  onPress={stage1Disabled ? null : goSendEmail}
                >
                  {i18n("Continue with email")}
                </Button>
              </View>
              <Text style={styles.instructions}>
                {i18n("Enter your email to receive a login code.")}
              </Text>
              {!!emailConsentText &&
                <Text style={styles.consent}>
                  {emailConsentText}
                </Text>
              }
            </>
          }
          {[ 'AWAITING_CODE', 'SENDING_CODE' ].includes(stage) &&
            <>
              <Input
                label={i18n("Login code")}
                placeholder={i18n("Eg. {{example}}", { example: "182773" })}
                value={code}
                onChangeText={setCode}
                disabled={stage === 'SENDING_CODE'}
                autoCorrect={false}
                autoCapitalize="characters"
                autoFocus={true}
                autoCompleteType="off"
                labelStyle={styles.inputLabel}
                size='small'
              />
              <View style={styles.buttonContainer}>
                <Button
                  status="primary"
                  style={[
                    styles.button,
                    (stage2Disabled && styles.buttonDisabled),
                  ]}
                  size="small"
                  onPress={stage2Disabled ? null : goCheckCode}
                >
                  {i18n("Log in")}
                </Button>
              </View>
              <Text style={styles.instructions}>
                {i18n("Email sent. Check your inbox and enter the code from that email.")}
              </Text>
              <View style={styles.linkContainer}>
                <Text style={styles.link} onPress={sendAnotherEmail}>
                  {i18n("Send another email")}
                </Text>
              </View>
            </>
          }
          {numSessionsThisWillLogOut > 0 &&
            <Text style={styles.warning}>
              {i18n("Warning: You are already logged into the maximum of number of devices ({{num}} devices). Continuing to log in here will log you out elsewhere.", { num: numSessionsThisWillLogOut })}
            </Text>
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
            style={styles.coverAndSpin}
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

export default connect(mapStateToProps, matchDispatchToProps)(EmailLogin)
