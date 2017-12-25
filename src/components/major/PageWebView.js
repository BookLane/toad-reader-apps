import React from "react"
import { View, WebView, Dimensions } from "react-native"
import { FileSystem } from "expo"

import { patchPostMessageJsCode, percentageEscape } from "../../utils/fixes.js"

class PageWebView extends React.Component {

  state={
    width: '100%',
    height: '100%',
  }

  calcSize = () => {
    // I do this and everything else related to size to avoid a flash in android caused by 
    // the status bar existing for a half second in the transition
    const { width, height } = Dimensions.get('window')
    this.setState({ width, height })
  }

  componentDidMount() {
    this.calcSize()
  }

  render() {
    const { setWebViewEl, bookId, onMessage, style } = this.props
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
          onMessage={event => {
            const data = JSON.parse(event.nativeEvent.data)

            if(onMessage && onMessage(data)) return

            switch(data.identifier) {
              case 'consoleLog':
                console.log('consoleLog', data.payload.message)
                break;
              case 'getFileAsText':
                const { uri } = data.payload
                FileSystem.readAsStringAsync(`${uri}`)
                  .then(fileText => {
                    console.log('postMessage (fileAsText) to webview: ' + uri)
                    this.webView.postMessage(percentageEscape(JSON.stringify({
                      identifier: 'fileAsText',
                      payload: {
                        uri,
                        fileText,
                      },
                    })))
                  })
                  .catch(fileText => {
                    console.log('postMessage (fileAsText--error) to webview: ' + uri)
                    this.webView.postMessage(percentageEscape(JSON.stringify({
                      identifier: 'fileAsText',
                      payload: {
                        uri: uri,
                        error: true,
                      },
                    })))
                  })
                break;
              default:
                console.log(data.identifier, JSON.stringify(data.payload))
                break;
            }
          }}
        />
      </View>
    )
  }
}

export default PageWebView
