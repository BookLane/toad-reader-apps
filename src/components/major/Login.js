import React, { useState, useRef, useCallback } from "react"
import { StyleSheet, Platform } from "react-native"
import WebView from './WebView'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { Layout } from "react-native-ui-kitten"
import i18n from "../../utils/i18n.js"

import FullScreenSpin from "../basic/FullScreenSpin"

import { getReqOptionsWithAdditions, getOrigin } from "../../utils/toolbox.js"
import useNetwork from "../../hooks/useNetwork"
import useSetTimeout from "../../hooks/useSetTimeout.js"

import { addAccount } from "../../redux/actions.js"

const styles = StyleSheet.create({
  fullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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

const Login = ({
  history,
  idps,
  idpId,
  onSuccess,
  addAccount,
}) => {

  const [ loading, setLoading ] = useState(true)
  const [ leaving, setLeaving ] = useState(false)
  const [ error, setError ] = useState(null)
  
  const webViewRef = useRef()
  const initialStateChangeAlreadyHappened = useRef()
  const askedForLoginInfoAtLeastOnce = useRef()

  const { online } = useNetwork()

  const [ setReloadTimeout ] = useSetTimeout()

  const confirmLoginUrl = `${getOrigin(idps[idpId])}/confirmlogin`

  const onError = useCallback(
    err => {
      // There was an unknown error

      history.push("/error", {
        message: i18n("There was an error connecting to the login portal. Please contact us if you continue to receive this message."),
      })

      setReloadTimeout(webViewRef.current.reload, 15000)
      setError(i18n("Error. Trying again..."))
    },
    [ history ],
  )

  const onNavigationStateChange = useCallback(
    async ({ url, loading }) => {

      if(loading || !initialStateChangeAlreadyHappened.current) {
        initialStateChangeAlreadyHappened.current = true
      } else if(url === confirmLoginUrl) {
        setLeaving(true)
      } else {
        askedForLoginInfoAtLeastOnce.current = true
        setLoading(true)
        setError(null)
      }
      
    },
    [ idps ],
  )

  const onLoad = useCallback(
    () => setLoading(false),
    [ idps ],
  )

  const onMessageEvent = useCallback(
    async event => {
      
      let data
      
      try {
        data = typeof event.nativeEvent.data !== 'object' ? JSON.parse(event.nativeEvent.data) : event.nativeEvent.data
      } catch (e) {
        return
      }

      if(data.identifier === 'sendCookiePlus') {

        const { cookie, currentServerTime, userInfo } = data.payload || {}

        if(cookie == null || !currentServerTime || !userInfo) {
          history.push("/error", {
            critical: true,
          })
          return
        }

        addAccount({
          idpId,
          userId: userInfo.id,
          accountInfo: {
            firstname: userInfo.firstname,
            lastname: userInfo.lastname,
            serverTimeOffset: currentServerTime - Date.now(),
            cookie,
          },
        })

        onSuccess()

      }
    },
    [ history, addAccount, idpId, onSuccess ],
  )

  const spinMessage = 
    error
      ? error
      : (
        !online
          ? (
            idps[idpId].idpNoAuth
              ? i18n("Waiting for an internet connection to get your book list...")
              : i18n("Waiting for an internet connection to log you in...")
          )
          : (
            idps[idpId].idpNoAuth
              ? i18n("Finding books...")
              : (
                askedForLoginInfoAtLeastOnce.current
                  ? i18n("Logging you in...")
                  : i18n("Loading login portal...")
              )
          )
      )

  return (
    <Layout>
      <WebView
        style={[
          styles.fullscreen,
          (leaving ? styles.hidden : null),
        ]}
        source={getReqOptionsWithAdditions({
          uri: confirmLoginUrl,
        })}
        mixedContentMode="always"
        onError={onError}
        onNavigationStateChange={onNavigationStateChange}
        onLoad={onLoad}
        injectedJavaScript={`
          document.querySelectorAll('input').forEach(el => el.setAttribute("autocomplete", "off"));
        `}  // this is needed to prevent a bug on Android by which the user cannot scroll to the input
        {...{[Platform.OS === `web` ? `forwardRef` : `ref`]: webViewRef}}
        onMessage={onMessageEvent}
      />
      {!!(loading || !online || error || leaving) &&
        <FullScreenSpin
          text={spinMessage}
          style={{ backgroundColor: 'white' }}
        />
      }
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  idps: state.idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addAccount,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Login))
