import React, { useState, useRef, useCallback } from "react"
import { StyleSheet, Platform } from "react-native"
import WebView from './WebView'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"

import CoverAndSpin from "../basic/CoverAndSpin"

import { getReqOptionsWithAdditions, getDataOrigin } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"
import useHasNoAuth from "../../hooks/useHasNoAuth"

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

const Login = ({
  history,
  idpId,
  onSuccess,
  addAccount,

  idps,
  accounts,
}) => {

  const [ loading, setLoading ] = useState(true)
  const [ leaving, setLeaving ] = useState(false)
  const [ error, setError ] = useState(null)
  
  const webView = useRef()
  const initialStateChangeAlreadyHappened = useRef()
  const askedForLoginInfoAtLeastOnce = useRef()

  const { online } = useNetwork()
  const { historyPush } = useRouterState({ history })
  const hasNoAuth = useHasNoAuth(accounts)

  const [ setReloadTimeout ] = useSetTimeout()

  const confirmLoginUrl = `${getDataOrigin(idps[idpId])}/confirmlogin`

  const onError = useCallback(
    err => {
      // There was an unknown error

      historyPush("/error", {
        message: i18n("There was an error connecting to the login portal. Please contact us if you continue to receive this message."),
      })

      setReloadTimeout(webView.current.reload, 15000)
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
          historyPush("/error", {
            critical: true,
          })
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
            hasNoAuth
              ? i18n("Waiting for an internet connection to get your book list...")
              : i18n("Waiting for an internet connection to log you in...")
          )
          : (
            hasNoAuth
              ? i18n("Finding books...")
              : (
                askedForLoginInfoAtLeastOnce.current
                  ? i18n("Logging you in...")
                  : i18n("Loading login portal...")
              )
          )
      )

  return (
    <SafeLayout>
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
        forwardRef={webView}
        onMessage={onMessageEvent}
      />
      {!!(loading || !online || error || leaving) &&
        <CoverAndSpin
          text={spinMessage}
          style={{ backgroundColor: 'white' }}
        />
      }
    </SafeLayout>
  )
}

const mapStateToProps = ({ idps, accounts }) => ({
  idps,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addAccount,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Login))
