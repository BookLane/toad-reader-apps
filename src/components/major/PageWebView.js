import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, WebView, Dimensions, Platform } from "react-native"
import { FileSystem } from "expo"

import { postMessage, patchPostMessageJsCode } from "../../utils/postMessage.js"
import { getBooksDir, isIPhoneX } from "../../utils/toolbox.js"

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

// see https://stackoverflow.com/questions/2725156/complete-list-of-html-tag-attributes-which-have-a-url-value
const urlTagAttrMapping = {
  a: ['href'],
  applet: ['archive','codebase'],
  area: ['href'],
  audio: ['src'],
  base: ['href'],
  blockquote: ['cite'],
  body: ['background'],
  button: ['formaction'],
  command: ['icon'],
  del: ['cite'],
  embed: ['src'],
  form: ['action'],
  frame: ['longdesc','src'],
  head: ['profile'],
  html: ['manifest'],
  iframe: ['longdesc','src'],
  image: ['href','xlink:href'],
  img: ['longdesc','src','usemap'],
  input: ['src','usemap','formaction'],
  ins: ['cite'],
  link: ['href'],
  object: ['archive','classid','codebase','data','usemap'],
  q: ['cite'],
  script: ['src'],
  source: ['src'],
  track: ['src'],
  video: ['poster','src'],
}
// not worrying about these at present, but may need to in the future
// const multiUrlAttrMapping = {
//   img: ['srcset'],
//   source: ['srcset'],
//   object: ['archive'],
//   // applet: ['archive'],  // these are comma-separated and not something we can handle
//   meta: ['content'],
// }

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
    const { width } = this.state
    return nextState.width !== width
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
        FileSystem.readAsStringAsync(`${uri}`)
          .then(async fileText => {
            if(Platform.OS === 'android') {
              // According to https://stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid
              // single quotes can be in URLs. If so, the code below will not work properly.
              const urlRegEx = new RegExp(
                `(${
                  Object.keys(urlTagAttrMapping).map(tag => (
                    urlTagAttrMapping[tag].map(attr => `<${tag}\\s(?:[^"'>]|".*?"|'.*?')*?${attr}=["']?`).join('|')
                  )).join('|')
                })([^"'\\s>]*)` +
                `|(url\\(["'\\s]*)([^\\)"'\\s]*)` +
                `|(@import\\s+["'])([^"']*)`,
                "g"
              )
              const fileTextPieces = fileText.split(urlRegEx).filter(fileTextPiece => fileTextPiece !== undefined)
              await Promise.all(
                fileTextPieces.map((htmlOrUrl, index) => (
                  new Promise(resolve => {
                    if(index % 3 !== 2) {
                      // this is in between the matches
                      resolve()
                      return
                    }
                    FileSystem.readAsStringAsync(`${uri.replace(/[^\/]*$/, '')}${htmlOrUrl}-dataURL.txt`)
                      .then(imgDataURL => {
                        fileTextPieces[index] = imgDataURL
                        resolve()
                      })
                      .catch(resolve)
                  })
                ))
              )
              fileText = fileTextPieces.join("")
            }
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
            style={{
              width,
              height,
              minHeight: height,
              ...style,
            }}
            injectedJavaScript={`
              window.initialHighlightsObjFromWebView = ${JSON.stringify(initialHighlightsInThisSpine)};
              ${patchPostMessageJsCode}
            `}
            ref={this.setWebViewEl}
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