import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, WebView, Dimensions, Platform } from "react-native"
import { FileSystem } from "expo"

import { postMessage, patchPostMessageJsCode } from "../../utils/postMessage.js"
import { getBooksDir, isIPhoneX } from "../../utils/toolbox.js"
import { binaryExtensionToMimeTypeMap } from "../../utils/zipDownloader.js"

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
    }
  }

  componentWillUnmount() {
    this.webView.unmounted = true
  }

  componentWillReceiveProps(nextProps) {
    const highlights = getHighlightsObj(nextProps)

    if(highlights !== getHighlightsObj(this.props)) {
      const newHighlightsInThisSpine = this.getHighlightsForThisSpine({
        highlights,
        location: getLatestLocation(nextProps),
      })
      postMessage(this.webView, 'renderHighlights', {
        highlights: newHighlightsInThisSpine,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { shiftStyle } = this.props
    const { width } = this.state

    return (
      nextState.width !== width
      || nextProps.shiftStyle !== shiftStyle
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
    const { onMessage } = this.state
    const data = JSON.parse(event.nativeEvent.data)

    if(onMessage && await onMessage(this.webView, data)) return

    switch(data.identifier) {

      case 'loaded':
        console.log('reader loaded')
        this.webView.loaded = true
        break;

      case 'consoleLog':
        console.log('consoleLog', data.payload.message)
        break;

      case 'getFileAsText':
        const { uri } = data.payload
        FileSystem.readAsStringAsync(`${uri.replace(/#.*$/, '')}`)
          .then(async fileText => {
            postMessage(this.webView, 'fileAsText', {
              uri,
              fileText,
            })
          })
          .catch(fileText => {
            console.log('getFileAsText error: ' + uri)
            postMessage(this.webView, 'fileAsText', {
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

  setWebViewEl = webViewEl => {
    const { setWebViewEl } = this.state

    this.webView = webViewEl
    setWebViewEl && setWebViewEl(webViewEl)
  }

  onError = e => console.log('webview error', e)

  render() {
    const { shiftStyle } = this.props
    // I get these from state and not props because these are all initial values
    const { setView, bookId, style, initialLocation, initialDisplaySettings, width, height } = this.state

    const initialHighlightsInThisSpine = this.getHighlightsForThisSpine({
      location: initialLocation,
      highlights: getHighlightsObj(this.state),
    })

    // Special containers needed because otherwise the iOS status bar pushes the view down.
    // However, on iphoneX, we want it pushed down.
    const doPushDownPreventionTrick = Platform.OS === 'ios' && !isIPhoneX

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
          ref={setView}
        >
          <WebView
            style={[
              {
                width,
                height,
                minHeight: height,
              },
              style,
              shiftStyle,
            ]}
            injectedJavaScript={`
              window.initialHighlightsObjFromWebView = ${JSON.stringify(initialHighlightsInThisSpine)};
              ${patchPostMessageJsCode}
            `}
            ref={this.setWebViewEl}
            allowUniversalAccessFromFileURLs={true}
            allowFileAccess={true}
            originWhitelist={['*']}
            source={{
              uri: `${FileSystem.documentDirectory}reader/index.html`
                + `?epub=${encodeURIComponent(`${getBooksDir()}${bookId}`)}`
                + `&${Platform.OS}=1`
                + (initialLocation ? `&goto=${encodeURIComponent(initialLocation)}` : ``)
                + (initialDisplaySettings ? `&settings=${encodeURIComponent(JSON.stringify(initialDisplaySettings))}` : ``)
            }}
            mixedContentMode="always"
            onError={this.onError}
            onMessage={this.onMessageEvent}
            bounces={false}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  userDataByBookId: state.userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageWebView)