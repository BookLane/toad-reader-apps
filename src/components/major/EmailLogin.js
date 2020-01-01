import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"
import { Input, Button } from "react-native-ui-kitten"

import CoverAndSpin from "../basic/CoverAndSpin"

import { safeFetch, getReqOptionsWithAdditions, getDataOrigin, isValidEmail } from "../../utils/toolbox"
import useInstanceValue from "../../hooks/useInstanceValue"

import { addAccount } from "../../redux/actions"

const styles = StyleSheet.create({
  fullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  hidden: {
    transform: [
      {
        translateY: -99999,
      },
    ],
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
          `${getDataOrigin(idps[idpId])}/loginwithaccesscode?code=${encodeURIComponent(getCode().trim())}`,
          getReqOptionsWithAdditions({
            mode: 'cors',
          }),
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

  return (
    <SafeLayout>
      {error &&
        <Text style={styles.error}>
          {error}
        </Text>
      }
      {[ 'AWAITING_EMAIL', 'SENDING_EMAIL' ].includes(stage) &&
        <>
          <Input
            label={i18n("Email")}
            value={email}
            onChangeText={setEmail}
            disabled={stage === 'SENDING_EMAIL'}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              status="primary"
              textStyle={styles.buttonText}
              onPress={goSendEmail}
              disabled={stage === 'SENDING_EMAIL' || !isValidEmail(email.trim())}
            >
              {i18n("Send login code")}
            </Button>
          </View>
        </>
      }
      {[ 'AWAITING_CODE', 'SENDING_CODE' ].includes(stage) &&
        <>
          <Input
            label={i18n("Login code")}
            placeholder={i18n("Eg. U876TV")}
            value={code}
            onChangeText={setCode}
            disabled={stage === 'SENDING_CODE'}
          />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              status="primary"
              textStyle={styles.buttonText}
              onPress={goCheckCode}
              disabled={stage === 'SENDING_CODE' || !code.trim()}
            >
              {i18n("Log in")}
            </Button>
          </View>
        </>
      }
      {[ 'SENDING_EMAIL', 'SENDING_CODE' ].includes(stage) && !error &&
        <CoverAndSpin
          text={stage === 'SENDING_EMAIL' ? i18n("Sending email...") : i18n("Checking code...")}
          style={{ backgroundColor: 'white' }}
        />
      }
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
