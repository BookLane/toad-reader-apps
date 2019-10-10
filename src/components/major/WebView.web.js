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
  ...otherProps,
 }) => {
  // putting this inside useRef makes this iframe unaffected by rerenders
  forwardRef.current = useRef(createElement('iframe', otherProps)).current
  return forwardRef.current
 }

const WebView = ({
  source={},  // Need to support uri and headers keys
  forwardRef,
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

  useEffect(
    () => {

      const onMessageWrapper = nativeEvent => {
        // check that it is the same origin
        if(nativeEvent.origin !== nativeEvent.location.origin) return

        // check that it is the right iframe sending the postmessage
        if(nativeEvent.source !== frameRef.current.contentWindow) return

        onMessage({ nativeEvent })
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

      if(typeof forwardRef === 'function') {
        forwardRef(methods)
      } else if(typeof forwardRef === 'object') {
        forwardRef.current = methods
      }

    },
    [ forwardRef ],
  )

  return (
    <View style={styles.container}>
      <IFrame
        forwardRef={frameRef}
        src={source.uri}
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