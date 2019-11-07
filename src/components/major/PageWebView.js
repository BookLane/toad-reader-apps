import React, { useState, useRef, useEffect, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Dimensions, Platform } from "react-native"
import WebView from "./WebView"
import * as FileSystem from 'expo-file-system'

import { postMessage } from "../../utils/postMessage"
import { getBooksDir, isIPhoneX, getDataOrigin, getReqOptionsWithAdditions } from "../../utils/toolbox"
import useDimensions from "../../hooks/useDimensions"
import getReaderCode from '../../../getReaderCode'

const styles = StyleSheet.create({
  containerNormal: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerOffset1: {
    position: 'absolute',
    top: 200,
    left: 0,
    bottom: -200,
    right: 0,
  },
  containerOffset2: {
    position: 'absolute',
    top: -200,
    left: 0,
    bottom: 200,
    right: 0,
  },
})

const getHighlightsObj = props => (props.userDataByBookId[props.bookId] || {}).highlights || []
const getLatestLocation = props => (props.userDataByBookId[props.bookId] || {}).latest_location

const getHighlightsForThisSpine = ({ highlights, location }) => {
  try {
    const spineIdRef = JSON.parse(location).idref
    return highlights.filter(highlight => highlight.spineIdRef === spineIdRef && !highlight._delete)
  } catch(e) {
    return []
  }
}

const PageWebView = props => {

  // props are put in state so as to use their initial value only
  const [ state ] = useState(props)
  const {
    bookId,
    initialLocation,
    initialDisplaySettings,
    viewRef,
    webViewRef,
    onMessage,
    style,
  
    idps,
    accounts,
    userDataByBookId,  // used in getHighlightsObj and getLatestLocation functions
  } = state

  const [ unloaded, setUnloaded ] = useState(false)

  const webViewLocalRef = useRef()
  const webView= webViewRef || webViewLocalRef

  const { width, height } = useDimensions().window

  useEffect(() => () => webView.current.unmounted = true, [])

  useEffect(
    () => {
      const highlights = getHighlightsObj(props)
    
      if(highlights !== getHighlightsObj(state)) {
        const newHighlightsInThisSpine = getHighlightsForThisSpine({
          highlights,
          location: getLatestLocation(props),
        })
        postMessage(webView.current, 'renderHighlights', {
          highlights: newHighlightsInThisSpine,
        })
      }
    },
    [ props.userDataByBookId, props.bookId ],
  )

  const onMessageEvent = useCallback(
    async event => {
      const data = JSON.parse(event.nativeEvent.data)

      if(onMessage && await onMessage(webView.current, data)) return

      switch(data.identifier) {

        case 'unload':
          console.log('reader unloading (this should not happen)')
          setUnloaded(true)
          break;

        case 'loaded':
          console.log('reader loaded')
          webView.current.loaded = true
          break;

        case 'consoleLog':
          console.log('consoleLog', data.payload.message)
          break;

        case 'getFileAsText':
          const { uri } = data.payload
          FileSystem.readAsStringAsync(`${uri.replace(/#.*$/, '')}`)
            .then(async fileText => {
              postMessage(webView.current, 'fileAsText', {
                uri,
                fileText,
              })
            })
            .catch(fileText => {
              console.log('getFileAsText error: ' + uri)
              postMessage(webView.current, 'fileAsText', {
                uri,
                error: true,
              })
            })
          break;

        default:
          console.log(data.identifier, JSON.stringify(data.payload))
          break;

      }
    },
    [ onMessage ],
  )

  const onError = useCallback(e => console.log('webview error', e), [])

  if(unloaded) return null

  const initialHighlightsInThisSpine = getHighlightsForThisSpine({
    location: initialLocation,
    highlights: getHighlightsObj(state),
  })

  // Special containers needed because otherwise the iOS status bar pushes the view down.
  // However, on iphoneX, we want it pushed down.
  const doPushDownPreventionTrick = Platform.OS === 'ios' && !isIPhoneX

  const initialQueryStringParams = {
    epub: (
      Platform.OS === 'web'
        ? `${getDataOrigin(Object.values(idps)[0])}/epub_content/book_${bookId}`
        : `${getBooksDir()}${bookId}`
    ),
  }

  if(initialLocation) {
    initialQueryStringParams.goto = initialLocation
  }

  if(initialDisplaySettings) {
    initialQueryStringParams.settings = JSON.stringify(initialDisplaySettings)
  }

  const source = {
    uri: Platform.OS === 'web'
      ? location.origin
      : (
        `${FileSystem.documentDirectory}reader/index.html?${
          Object.keys(initialQueryStringParams)
            .map(key => `${key}=${encodeURIComponent(initialQueryStringParams[key])}`)
            .join('&')
        }`
      )
  }

  if(Platform.OS === 'web') {
      // Put the following line before <script> if needed
      // <base href="${getDataOrigin(Object.values(idps)[0])}">
      source.html = getReaderCode()
        .replace(/(<head>)/i, `
          $1
          <script>
            window.initialHighlightsObjFromWebView = ${JSON.stringify(initialHighlightsInThisSpine)};
            window.initialQueryStringParamsFromWebView = ${JSON.stringify(initialQueryStringParams)};
            window.parentOriginForPostMessage = ${JSON.stringify(location.origin)};
            window.epubFileFetchHeaders = ${JSON.stringify(getReqOptionsWithAdditions({
              "x-cookie-override": Object.values(accounts)[0].cookie,
            }))};
          </script>
        `)
  }

  return (
    <View
      style={doPushDownPreventionTrick ? styles.containerOffset1 : styles.containerNormal}
    >
      <View
        style={[
          (doPushDownPreventionTrick ? styles.containerOffset2 : styles.containerNormal),
          style,
        ]}
        collapsable={false}
        ref={viewRef}
      >
        <WebView
          style={[
            {
              width,
              height,
              minHeight: height,
            },
            style,
          ]}
          source={source}
          onError={onError}
          onMessage={onMessageEvent}
          forwardRef={webView}

          // The rest of the props are ignored when on web platform
          injectedJavaScript={`
            window.initialHighlightsObjFromWebView = ${JSON.stringify(initialHighlightsInThisSpine)};
            window.isReactNativeWebView = true;
          `}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccess={true}
          originWhitelist={['*']}
          mixedContentMode="always"
          bounces={false}
        />
      </View>
    </View>
  )
}

const mapStateToProps = ({ idps, accounts, userDataByBookId }) => ({
  idps,
  accounts,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageWebView)