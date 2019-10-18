import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, createElement } from 'react-native'

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

const IFrame = ({
  forwardRef,
  ...otherProps
 }) => (
   // putting this inside useRef makes this iframe unaffected by rerenders
   useRef(createElement('iframe', { ...otherProps, ref: forwardRef })).current
 )

const WebView = ({
  source={},  // Need to support uri and headers keys
  forwardRef,
  style,
  onMessage,  // Need custom code in readium-js-viewer
  onError,
  onLoad,
  // injectedJavaScript,
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

  useEffect(
    () => {

      const onMessageWrapper = nativeEvent => {
        // check that it is the same origin
        if(nativeEvent.origin !== source.uri.replace(/^(https?:\/\/[^\/]+).*$/, '$1')) return

        // check that it is the right iframe sending the postmessage
        if(frameRef.current.contentWindow !== nativeEvent.source) return

        onMessage({ nativeEvent })
      }

      window.addEventListener('message', onMessageWrapper, true)
      return () => window.removeEventListener('message', onMessageWrapper, true)
    },
    [],
  )

  useEffect(
    () => {

      const methods = {

        reload: () => {
          frameRef.current.location.reload()
        },

        injectJavaScript: jsStr => {
          // A minor security loop-hole exists in Safari since I cannot send a postMessage
          // over with origin === null.
          const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          const origin = source.html
            ? (isSafari ? '*' : null)
            : source.uri.replace(/^(https?:\/\/[^\/]*).*$/, '$1')

          frameRef.current.contentWindow.postMessage(
            {
              action: `injectJS`,
              jsStr,
            },
            origin,
          )
        },

        // Other methods on native component:
        //   extraNativeComponentConfig
        //   goForward
        //   goBack
        //   stopLoading

      }

      if(typeof forwardRef === 'function') {
        forwardRef(methods)
      } else if(typeof forwardRef === 'object') {
        forwardRef.current = methods
      }

    },
    [ forwardRef ],
  )

  const onErrorWrapper = nativeEvent => {
    onError && onError({
      code: nativeEvent.name,
      description: nativeEvent.message,
      nativeEvent,
    })
  }

  const onLoadWrapper = nativeEvent => {
    setLoaded(true)
    onLoad && onLoad({ nativeEvent })
  }

  return (
    <View style={styles.container}>
      <IFrame
        forwardRef={frameRef}
        src={source.uri}
        srcDoc={source.html}
        onError={onErrorWrapper}
        onLoad={onLoadWrapper}
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