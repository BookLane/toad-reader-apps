import React from "react"
import { View, WebView, Dimensions } from "react-native"
import { FileSystem } from "expo"

import { postMessage, patchPostMessageJsCode } from "../../utils/postMessage.js"

class PageWebView extends React.Component {

  constructor() {
    super()

    const { width, height } = Dimensions.get('window')

    this.state = {
      width,
      height,
    }
  }

  componentWillUnmount() {
    this.webView.unmounted = true
  }

  calcSize = () => {
    // I do this and everything else related to size to avoid a flash in android caused by 
    // the status bar existing for a half second in the transition
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  onMessageEvent = event => {
    const { onMessage } = this.props
    const data = JSON.parse(event.nativeEvent.data)

    if(onMessage && onMessage(data)) return

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

  render() {
    const { setWebViewEl, bookId, style } = this.props
    const { width, height } = this.state

    return (
      <View
        style={{
          flex: 1,
        }}
        onLayout={this.calcSize}
      >
        <WebView
          style={{
            width,
            height,
            minHeight: height,
            ...style
          }}
          injectedJavaScript={patchPostMessageJsCode}
          ref={webViewEl => {
            this.webView = webViewEl
            setWebViewEl && setWebViewEl(webViewEl)
          }}
          source={{
            uri: `${FileSystem.documentDirectory}reader/index.html`
              + `?epub=${encodeURIComponent(`${FileSystem.documentDirectory}books/${bookId}`)}`
          }}
          mixedContentMode="always"
          onError={e => console.log('webview error', e)}
          onMessage={this.onMessageEvent}
        />
      </View>
    )
  }
}

export default PageWebView
