import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Dimensions, Platform } from "react-native"
import WebView from "./WebView"
import * as FileSystem from 'expo-file-system'

import { postMessage } from "../../utils/postMessage.js"
import { getBooksDir, isIPhoneX, getDataOrigin } from "../../utils/toolbox.js"
import getReaderCode from '../../../getReaderCode.js'

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

class PageWebView extends React.Component {

  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    this.state = {
      ...props,
      width,
      height,
      unloaded: false,
    }
  }

  componentWillUnmount() {
    this.webView.current.unmounted = true
  }

  componentWillReceiveProps(nextProps) {
    const highlights = getHighlightsObj(nextProps)

    if(highlights !== getHighlightsObj(this.props)) {
      const newHighlightsInThisSpine = this.getHighlightsForThisSpine({
        highlights,
        location: getLatestLocation(nextProps),
      })
      postMessage(this.webView.current, 'renderHighlights', {
        highlights: newHighlightsInThisSpine,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { width, unloaded } = this.state

    return (
      nextState.width !== width
      || nextState.unloaded !== unloaded
    )
  }

  getHighlightsForThisSpine = ({ highlights, location }) => {
    try {
      const spineIdRef = JSON.parse(location).idref
      return highlights.filter(highlight => highlight.spineIdRef === spineIdRef && !highlight._delete)
    } catch(e) {
      return []
    }
  }

  calcSize = () => {
    // I do this and everything else related to size to avoid a flash in android caused by 
    // the status bar existing for a half second in the transition
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  onMessageEvent = async event => {
    const { onMessage, initialLocation } = this.state
    const data = JSON.parse(event.nativeEvent.data)

    if(onMessage && await onMessage(this.webView.current, data)) return

    switch(data.identifier) {

      case 'unload':
        console.log('reader unloading (this should not happen)')
        this.setState({ unloaded: true })
        break;

      case 'loaded':
        console.log('reader loaded')
        this.webView.current.loaded = true
        break;

      case 'consoleLog':
        console.log('consoleLog', data.payload.message)
        break;

      case 'getFileAsText':
        const { uri } = data.payload
        FileSystem.readAsStringAsync(`${uri.replace(/#.*$/, '')}`)
          .then(async fileText => {
            postMessage(this.webView.current, 'fileAsText', {
              uri,
              fileText,
            })
          })
          .catch(fileText => {
            console.log('getFileAsText error: ' + uri)
            postMessage(this.webView.current, 'fileAsText', {
              uri,
              error: true,
            })
          })
        break;

      default:
        console.log(data.identifier, JSON.stringify(data.payload))
        break;

    }
  }

  webView = {}

  setWebViewRef = ref => {
    const { setWebViewRef } = this.state

    this.webView.current = ref
    setWebViewRef && setWebViewRef(ref)
  }

  onError = e => console.log('webview error', e)

  render() {
    // I get these from state and not props because these are all initial values
    const { idps } = this.props
    const { viewRef, bookId, style, initialLocation, initialDisplaySettings, width, height, unloaded } = this.state

    const initialHighlightsInThisSpine = this.getHighlightsForThisSpine({
      location: initialLocation,
      highlights: getHighlightsObj(this.state),
    })

    // Special containers needed because otherwise the iOS status bar pushes the view down.
    // However, on iphoneX, we want it pushed down.
    const doPushDownPreventionTrick = Platform.OS === 'ios' && !isIPhoneX

    if(unloaded) {
      return null
    }

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
          onLayout={this.calcSize}
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
            onError={this.onError}
            onMessage={this.onMessageEvent}
            forwardRef={this.setWebViewRef}

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
}

const mapStateToProps = ({ idps, userDataByBookId }) => ({
  idps,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageWebView)