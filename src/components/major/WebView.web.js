import React, { useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  iframe: {
    flex: 1,
    borderWidth: 0,
  },
  activityIndicatorContainer: {
    ...StyleSheet.absoluteFillObject,
  },
})

const WebView = ({
  source={},  // Need to support uri and headers keys
  ref,
  style,
  onMessage,  // Need custom code in readium-js-viewer
  onError,  // Need custom code in readium-js-viewer
  // injectedJavaScript,
  // onLoad,
  // onNavigationStateChange,
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

  const [ loaded, setLoaded ] = useState(false)
  const frameRef = useRef()

  // useEffect(
  //   () => {
  //     const { uri, ...options } = source
  //     const baseUrl = uri.substr(0, uri.lastIndexOf('/') + 1)
  //     fetch(uri, options)
  //       .then(({ ok, status, text }) => {
  //         if(!ok) throw new Error(`Fetch failed with status ${status}.`)
  //         return text()
  //       })
  //       .then(html => {

  //         const setupJS = `

  //         `

  //         html = `<base href="${baseUrl}" />${html}`
  //         html = html.replace(/<\/body *>/i, `<script>${setupJS}</script><script>${injectedJavaScript || ``}</script></body>`)

  //         setSrcDoc(html)

  //       })
  //       .catch(err => {
  //         onError && onError({
  //           code: err.name,
  //           description: err.message,
  //           nativeEvent: err,
  //         })
  //       })
  //   },
  //   [ source ],
  // )

  useEffect(
    () => {

      const onMessageWrapper = nativeEvent => {
        // check that it is the right iframe sending the postmessage

        console.log('nativeEvent', nativeEvent)


        // could be for: unload, onMessage, onNavigationStateChange, onLoad


        // onMessage({ nativeEvent })
      }

      window.addEventListener('message', onMessageWrapper, true)
      return window.removeEventListener('message', onMessageWrapper, true)
    },
    [],
  )

  useEffect(
    () => {

      if(!frameRef.current) return

      frameRef.contentWindow.onerror = nativeEvent => {
        onError && onError({
          code: nativeEvent.name,
          description: nativeEvent.message,
          nativeEvent,
        })
      }

      frameRef.contentWindow.onload = nativeEvent => {
        setLoaded(true)
        onLoad && onLoad({ nativeEvent })
      }

    },
    [ frameRef.current ],
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

        // Other methods on native component:
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

  return (
    <View style={styles.container}>
      <iframe
        ref={frameRef}
        src={source.uri}
        // srcDoc={srcDoc}
        style={[
          styles.iframe,
          style,
        ]}
      />
      {!loaded && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator />
        </View>
      )}
    </View>
  )
}

export default WebView