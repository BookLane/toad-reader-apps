import React from "react"
import { StyleSheet, View, WebView, Dimensions } from "react-native"
import { FileSystem } from "expo"

import { postMessage, patchPostMessageJsCode } from "../../utils/postMessage.js"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})

class PageWebView extends React.Component {

  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    this.state = {
      width,
      height,
    }
  }

  componentWillUnmount() {
    this.webView.unmounted = true
  }

  shouldComponentUpdate() {
    return false
  }

  componentWillReceiveProps(nextProps) {
    const { bookId } = this.props

    if(nextProps.bookId != bookId) {
      delete this.webView.loaded
    }
  }

  calcSize = () => {
    // I do this and everything else related to size to avoid a flash in android caused by 
    // the status bar existing for a half second in the transition
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  onMessageEvent = async event => {
    const { onMessage } = this.props
    const data = JSON.parse(event.nativeEvent.data)

    if(onMessage && await onMessage(data)) return

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
          .then(fileText => {
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
    const { setWebViewEl } = this.props

    this.webView = webViewEl
    setWebViewEl && setWebViewEl(webViewEl)
  }

  onError = e => console.log('webview error', e)

  render() {
    const { setWebViewEl, setView, bookId, style, latest_location } = this.props
    const { width, height } = this.state

    return (
      <View
        style={[
          styles.container,
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
          injectedJavaScript={patchPostMessageJsCode}
          ref={this.setWebViewEl}
          source={{
            uri: `${FileSystem.documentDirectory}reader/index.html`
              + `?epub=${encodeURIComponent(`${FileSystem.documentDirectory}books/${bookId}`)}`
              + (latest_location ? `&goto=${encodeURIComponent(latest_location)}` : ``)
          }}
          mixedContentMode="always"
          onError={this.onError}
          onMessage={this.onMessageEvent}
        />
      </View>
    )
  }
}

export default PageWebView
