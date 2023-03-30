import React, { useState, useRef, useEffect, useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Platform } from "react-native"
import WebView from "./WebView"
import * as FileSystem from 'expo-file-system'
import usePrevious from "react-use/lib/usePrevious"

import { postMessage } from "../../utils/postMessage"
import { getBooksDir, getDataOrigin, bookCookiesToCookieStr } from "../../utils/toolbox"
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"
import useRouterState from "../../hooks/useRouterState"
import getReaderCode from '../../../getReaderCode'

const {
  ENABLE_WIDE_TABLE_BEHAVIOR=false,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  containerNormal: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

const getHighlightsArray = ({ userDataByBookId, bookId, instructorHighlights }) => {
  const highlights = ((userDataByBookId[bookId] || {}).highlights || [])
    .filter(({ _delete }) => !_delete)
    .map(({ spineIdRef, cfi, note, color }) => ({
      spineIdRef,
      cfi,
      hasNote: !!(note || "").trim(),
      type: `user${color || 1}`,
    }))

  const highlightsByKey = {}
  highlights.forEach(highlight => {
    highlightsByKey[`${highlight.spineIdRef}\n${highlight.cfi}`] = highlight
  })

  ;(instructorHighlights || []).forEach(({ spineIdRef, cfi, note }) => {
    if(highlightsByKey[`${spineIdRef}\n${cfi}`]) {
      highlightsByKey[`${spineIdRef}\n${cfi}`].type = `${highlightsByKey[`${spineIdRef}\n${cfi}`].type}-instructor`
      highlightsByKey[`${spineIdRef}\n${cfi}`].hasNote = highlightsByKey[`${spineIdRef}\n${cfi}`].hasNote || !!(note || "").trim()

    } else {
      highlightsByKey[`${spineIdRef}\n${cfi}`] = {
        spineIdRef,
        cfi,
        hasNote: !!(note || "").trim(),
        type: "instructor",
      }
      highlights.push(highlightsByKey[`${spineIdRef}\n${cfi}`])
    }
  })

  return highlights
}

const getLatestLocation = ({ userDataByBookId, bookId }) => (userDataByBookId[bookId] || {}).latest_location

const getHighlightsForThisSpine = ({ highlights, location }) => {
  try {
    const spineIdRef = JSON.parse(location).idref
    return highlights.filter(highlight => highlight.spineIdRef === spineIdRef)
  } catch(e) {
    return []
  }
}

const PageWebView = ({

  // We need these up-to-date
  onMessage,
  onError,
  sidePanelSettings,

  ...props

}) => {

  // props are put in state so as to use their initial value only
  const [ initialProps ] = useState(props)
  const {
    bookId,
    initialLocation,
    initialDisplaySettings,
    initialToolCfiCountsInThisSpine,
    initialAddlParams,
    // instructorHighlights,  // used in getHighlightsArray functions
    doReportToolSpots,
    viewRef,
    webViewRef,
    containerStyle,
    style,

    idps,
    accounts,
    books,
    // userDataByBookId,  // used in getHighlightsArray and getLatestLocation functions
  } = initialProps

  const [ unloaded, setUnloaded ] = useState(false)
  
  // See https://github.com/react-native-community/react-native-webview/issues/656 for an
  // explanation of this hack.
  const [ renderedOnce, setRenderedOnce ] = useState(Platform.OS !== 'android')
  const setRenderedOnceTrue = useCallback(() => setRenderedOnce(true), [])

  const webViewLocalRef = useRef()
  const webView= webViewRef || webViewLocalRef

  const { routerState } = useRouterState()
  const { widget } = routerState

  const { truePageWidth: width, truePageHeight: height } = useAdjustedDimensions({ sidePanelSettings, widget })

  useEffect(
    () => {
      () => {
        if(webView.current) {
          webView.current.unmounted = true
        }
      }
    },
    [],
  )

  const prevProps = usePrevious(props)

  useEffect(
    () => {
      if(!prevProps) return

      const oldHighlightsInThisSpine = getHighlightsForThisSpine({
        highlights: getHighlightsArray(prevProps),
        location: getLatestLocation(prevProps),
      })
      const newHighlightsInThisSpine = getHighlightsForThisSpine({
        highlights: getHighlightsArray(props),
        location: getLatestLocation(props),
      })

      if(JSON.stringify(newHighlightsInThisSpine) !== JSON.stringify(oldHighlightsInThisSpine)) {
        postMessage(webView.current, 'renderHighlights', {
          highlights: newHighlightsInThisSpine,
        })
      }
    },
    [ props.userDataByBookId, props.bookId, props.instructorHighlights ],
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

  if(unloaded) return null

  const initialHighlightsInThisSpine = getHighlightsForThisSpine({
    location: initialLocation,
    highlights: getHighlightsArray(initialProps),
  })

  const initialCookiePathForWidget = widget ? `/c/${Object.values(accounts)[0].cookie}` : ``
  const baseUrlForDevOrWidget = (
    (__DEV__ || widget)
      ? `${getDataOrigin(Object.values(idps)[0])}${initialCookiePathForWidget}`
      : ``
  )
  const initialQueryStringParams = {
    epub: (
      Platform.OS === 'web'
        ? `${baseUrlForDevOrWidget}/epub_content/book_${bookId}`
        : `${getBooksDir()}${bookId}`
    ),
  }

  if(initialLocation) {
    initialQueryStringParams.goto = initialLocation
  }

  if(initialDisplaySettings) {
    initialQueryStringParams.settings = JSON.stringify(initialDisplaySettings)
  }

  if(ENABLE_WIDE_TABLE_BEHAVIOR) {
    initialQueryStringParams.enableWideTableBehavior = `true`
  }

  if(initialAddlParams) {
    for(let key in initialAddlParams) {
      initialQueryStringParams[key] = JSON.stringify(initialAddlParams[key])
    }
  }

  const source = {
    uri: Platform.OS === 'web'
      ? window.location.origin
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
      // <base href="${getDataOrigin(idp)}">
      source.html = getReaderCode()
        .replace(/(<head>)/i, `
          $1
          <script>
            window.isWebPlatform = true;
            window.doReportToolSpots = ${doReportToolSpots};
            window.initialToolCfiCountsObjFromWebView = ${JSON.stringify(initialToolCfiCountsInThisSpine)};
            window.initialHighlightsObjFromWebView = ${JSON.stringify(initialHighlightsInThisSpine)};
            window.initialQueryStringParamsFromWebView = ${JSON.stringify(initialQueryStringParams)};
            window.parentOriginForPostMessage = ${JSON.stringify(window.location.origin)};
            window.epubFileFetchHeaders = ${JSON.stringify(
              __DEV__
                ? {
                  "x-cookie-override": Object.values(accounts)[0].cookie,
                }
                : {
                  cookie: bookCookiesToCookieStr(books[bookId].bookCookies),
                }
            )};
          </script>
        `)
  }

  return (
    <View
      style={[
        styles.containerNormal,
        containerStyle,
      ]}
      collapsable={false}
      ref={viewRef}
    >
      <WebView
        style={[
          {
            width,
            minWidth: width,
            maxWidth: width,
            height,
            minHeight: height,
            maxHeight: height,
          },
          style,
        ]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        source={renderedOnce ? source : undefined}
        onError={onError}
        onMessage={onMessageEvent}
        onLoad={setRenderedOnceTrue}
        forwardRef={webView}

        // The rest of the props are ignored when on web platform
        injectedJavaScript={`
          window.doReportToolSpots = ${doReportToolSpots};
          window.initialToolCfiCountsObjFromWebView = ${JSON.stringify(initialToolCfiCountsInThisSpine)};
          window.initialHighlightsObjFromWebView = ${JSON.stringify(initialHighlightsInThisSpine)};
          window.isReactNativeWebView = true;
        `}
        allowingReadAccessToURL={FileSystem.documentDirectory}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccess={true}
        originWhitelist={['*']}
        mixedContentMode="always"
        bounces={false}
      />
    </View>
  )
}

const mapStateToProps = ({ idps, accounts, books, userDataByBookId, sidePanelSettings }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
  sidePanelSettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageWebView)