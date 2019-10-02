import React, { useEffect } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'

const styles = StyleSheet.create({
  iframe: {
    width: '100%',
    height: '100%',
    borderWidth: 0,
  },
})

const WebView = ({
  source={},  // Need to support uri and headers keys
  ref,
  style,
  injectedJavaScript,  // Need custom code in readium-js-viewer
  onLoad,
  onMessage,  // Need custom code in readium-js-viewer
  onNavigationStateChange,  // Need custom code in readium-js-viewer
  onError,  // Need custom code in readium-js-viewer
  // originWhitelist,
  // mixedContentMode,
  // bounces,
  // allowFileAccess,
  // allowUniversalAccessFromFileURLs,
  // automaticallyAdjustContentInsets,
  // mediaPlaybackRequiresUserAction,
  // nativeConfig,
  // onLoadEnd,
  // onLoadStart,
  // onLoadProgress,
  // onHttpError,
  // onContentProcessDidTerminate,
  // renderError,
  // renderLoading,
  // scalesPageToFit,
  // onShouldStartLoadWithRequest,
  // startInLoadingState,
  // decelerationRate,
  // domStorageEnabled,
  // javaScriptEnabled,
  // androidHardwareAccelerationDisabled,
  // thirdPartyCookiesEnabled,
  // userAgent,
  // applicationNameForUserAgent,
  // allowsFullscreenVideo,
  // allowsInlineMediaPlayback,
  // overScrollMode,
  // contentInset,
  // contentInsetAdjustmentBehavior,
  // dataDetectorTypes,
  // scrollEnabled,
  // directionalLockEnabled,
  // geolocationEnabled,
  // allowingReadAccessToURL,
  // url,
  // html,
  // keyboardDisplayRequiresUserAction,
  // hideKeyboardAccessoryView,
  // allowsBackForwardNavigationGestures,
  // incognito,
  // saveFormDataDisabled,
  // cacheEnabled,
  // pagingEnabled,
  // allowsLinkPreview,
  // sharedCookiesEnabled,
  // textZoom,
}) => {

  const [ srcDoc, setSrcDoc ] = useState(null)
  const frameRef = useRef()

  useEffect(
    () => {
      const { uri, ...options } = source
      const baseUrl = uri.substr(0, uri.lastIndexOf('/') + 1)
      fetch(uri, options)
        .then(({ ok, status, text }) => {
          if(!ok) throw new Error(`Fetch failed with status ${status}.`)
          return text()
        })
        .then(html => {

          const setupJS = ``

          html = `<base href="${baseUrl}" />${html}`
          html = html.replace(/<\/body *>/i, `<script>${setupJS}</script><script>${injectedJavaScript || ``}</script></body>`)

          setSrcDoc(html)

        })
        .catch(err => {
          onError && onError({
            code: err.name,
            description: err.message,
            nativeEvent: err,
          })
        })
    },
    [ source ],
  )

  useEffect(
    () => {

      const onMessageWrapper = nativeEvent => {
        // check that it is the right iframe sending the postmessage

        console.log('nativeEvent', nativeEvent)


        // could be for: onMessage, onNavigationStateChange, onLoad


        // onMessage({ nativeEvent })
      }

      window.addEventListener('message', onMessageWrapper, true)
      return window.removeEventListener('message', onMessageWrapper, true)
    },
    [],
  )

  useEffect(
    () => {

      const methods = {

        reload: () => {
          frameRef.contentWindow.location.reload()
        },

        injectJavaScript: jsStr => {
          frameRef.contentWindow.postMessage(
            {
              action: `injectJS`,
              jsStr,
            },
            source.uri.replace(/^(https?:\/\/[^\/]*).*$/, '$1')
          )

        },

        // Other methods:
        //   extraNativeComponentConfig
        //   goForward
        //   goBack
        //   stopLoading

      }

      if(typeof ref === 'function') {
        ref(methods)
      } else if(typeof ref === 'object') {
        ref.current = methods
      }

    },
    [ ref ],
  )

  if(!srcDoc) {
    return (
      <ActivityIndicator />
    )
  }

  return (
    <iframe
      ref={frameRef}
      src={source.uri}
      srcDoc={srcDoc}
      style={[
        styles.iframe,
        style,
      ]}
    />
  )
}

export default WebView