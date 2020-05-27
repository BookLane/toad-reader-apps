import React, { useState, useRef, useCallback, useEffect } from "react"
import { StyleSheet, Platform } from "react-native"
import WebView from './WebView'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"

import EmailLogin from "./EmailLogin"
import CoverAndSpin from "../basic/CoverAndSpin"

import { getReqOptionsWithAdditions, getDataOrigin, getQueryString } from "../../utils/toolbox"
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
  idpId,
  onSuccess,
  doEmailLogin,

  idps,
  accounts,

  addAccount,
}) => {

  const [ onFirstLoad, setOnFirstLoad ] = useState(true)
  const [ loading, setLoading ] = useState(true)
  const [ leaving, setLeaving ] = useState(false)
  const [ error, setError ] = useState(null)
  
  const webView = useRef()
  const initialStateChangeAlreadyHappened = useRef()
  const askedForLoginInfoAtLeastOnce = useRef()

  const { online } = useNetwork()
  const { historyPush } = useRouterState()
  const hasNoAuth = useHasNoAuth(accounts)

  const [ setReloadTimeout ] = useSetTimeout()

  const confirmLoginUrl = Platform.OS === 'web'
    ? `${getDataOrigin(idps[idpId])}/confirmlogin-web`
    : `${getDataOrigin(idps[idpId])}/confirmlogin`

  const { authMethod, devAuthMethod } = idps[idpId]

  const useEmailLogin = ['EMAIL'].includes((__DEV__ && devAuthMethod) || authMethod) || doEmailLogin

  const logIn = useCallback(
    info => {
      const { cookie, currentServerTime, userInfo } = info || {}

      if(cookie == null || !currentServerTime || !userInfo) {
        historyPush("/error", {
          critical: true,
        })
        return false
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

      setTimeout(onSuccess)

      return true

    },
    [ idps[idpId], idpId, onSuccess ],
  )

  useEffect(
    () => {
      if(Platform.OS !== 'web' || useEmailLogin) return

      const query = getQueryString()

      if(query.loginInfo) {
        try {
          if(logIn(JSON.parse(query.loginInfo))) {
            window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.hash}`)
          }
        } catch(err) {
          historyPush("/error", {
            critical: true,
          })
        }

      } else {
        window.location.href = confirmLoginUrl
      }

    },
    [ logIn, confirmLoginUrl ],
  )

  const onError = useCallback(
    err => {
      // There was an unknown error

      historyPush("/error", {
        message: i18n("There was an error connecting to the login portal. Please contact us if you continue to receive this message."),
      })

      setReloadTimeout(() => {
        webView.current.reload()
        setError(null)
      }, 15000)

      setError(i18n("Error. Trying again..."))
    },
    [],
  )

  const onNavigationStateChange = useCallback(
    async ({ url, loading }) => {

      if(url === confirmLoginUrl && initialStateChangeAlreadyHappened.current) {
        setLeaving(true)
      } else {
        askedForLoginInfoAtLeastOnce.current = true
        setLoading(loading)
      }
      
    },
    [ idps ],
  )

  const onLoad = useCallback(
    () => {
      setOnFirstLoad(false)
      setLoading(false)
    },
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
        logIn(data.payload)
      }
    },
    [ logIn ],
  )

  if(useEmailLogin) {
    return (
      <EmailLogin
        idpId={idpId}
        onSuccess={onSuccess}
      />
    )
  }

  if(Platform.OS === 'web') {
    return (
      <CoverAndSpin
        text={i18n("Loading login portal...")}
        style={{ backgroundColor: 'white' }}
      />
    )
  }

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

          ${!onFirstLoad ? `` : `
            // old Android phones must have an update to Chrome
            var chromeVersion = navigator.userAgent.match(/Chrome\\/([0-9]+)\\./);
            if(chromeVersion && parseInt(chromeVersion[1], 10) < 71) {
              alert("You may have to update your Chrome app (via the Play Store) to use this e-reader.\\n\\nAfter updating Chrome, close and reopen this app.");
            }
          `}

          // needed to prevent a bug on Android by which the user cannot scroll to the input
          document.querySelectorAll('input').forEach(el => el.setAttribute("autocomplete", "off"));

        `}
        forwardRef={webView}
        onMessage={onMessageEvent}
        incognito={true}
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

export default connect(mapStateToProps, matchDispatchToProps)(Login)
