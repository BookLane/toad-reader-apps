import React, { useState, useRef, useCallback } from "react"
import { Updates } from "expo"
import { StyleSheet, NetInfo } from "react-native"
import { WebView } from 'react-native-webview'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { Container, View } from "native-base"
import i18n from "../../utils/i18n.js"

import FullScreenSpin from "../basic/FullScreenSpin"

import { getReqOptionsWithAdditions } from "../../utils/toolbox.js"
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
  location,
  idps,
}) => {

  const [ loading, setLoading ] = useState(true)
  const [ leaving, setLeaving ] = useState(false)
  const [ error, setError ] = useState(null)
  
  const webViewRef = useRef()
  const initialStateChangeAlreadyHappened = useRef()
  const askedForLoginInfoAtLeastOnce = useRef()

  const { online } = useNetwork()

  const [ setReloadTimeout ] = useSetTimeout()

  const { idpId, hasJSUpdate } = location.state || {}

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
        setLoading(true)
        return
      }

      const userSetupUrl = `https://${idps[idpId].domain}/usersetup.json`

      if(url === userSetupUrl) {
        setLeaving(true)

        webViewRef.current.injectJavaScript(`
          window.ReactNativeWebView.postMessage(JSON.stringify({
              identifier: "sendCookieAndContent",
              payload: {
                cookie: document.cookie,
                content: document.body.innerText,
              },
          }));
          document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        `)
        // we clear the cookie because we want auth status to be completely controlled by the app.

      } else {
        askedForLoginInfoAtLeastOnce.current = true
        setLoading(true)
        setError(null)
      }
      
    },
    [ idps ],
  )

  const onMessageEvent = useCallback(
    async event => {
      
      const data = JSON.parse(event.nativeEvent.data)

      if(data.identifier === 'sendCookieAndContent') {

        let userData
        try {
          userData = JSON.parse(data.payload.content)
        } catch(e) {}

        if(!userData || !userData.userInfo) {
          history.push("/error", {
            critical: true,
          })
          return
        }

        const { userInfo, currentServerTime } = userData

        addAccount({
          idpId,
          userId: userInfo.id,
          accountInfo: {
            firstname: userInfo.firstname,
            lastname: userInfo.lastname,
            serverTimeOffset: currentServerTime - Date.now(),
            cookie: data.payload.cookie,
          },
        })

        if(hasJSUpdate()) {
          Updates.reloadFromCache()
        } else {
          history.goBack()
        }

      }
    },
    [ history, addAccount, idpId, hasJSUpdate ],
  )


  const userSetupUrl = `https://${idps[idpId].domain}/usersetup.json`

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
    <Container>
      <WebView
        style={[
          styles.fullscreen,
          (leaving ? styles.hidden : null),
        ]}
        source={getReqOptionsWithAdditions({
          uri: userSetupUrl,
        })}
        mixedContentMode="always"
        onError={onError}
        onNavigationStateChange={onNavigationStateChange}
        injectedJavaScript={`
          document.querySelectorAll('input').forEach(el => el.setAttribute("autocomplete", "off"));
        `}  // this is needed to prevent a bug on Android by which the user cannot scroll to the input
        ref={webViewRef}
        onMessage={onMessageEvent}
      />
      {!!(loading || !online || error || leaving) &&
        <FullScreenSpin
          text={spinMessage}
          style={{ backgroundColor: 'white' }}
        />
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  idps: state.idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addAccount,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Login))
