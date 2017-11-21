import React from "react"
import { WebView, Dimensions } from "react-native"
import { FileSystem } from "expo"

import { patchPostMessageJsCode, percentageEscape } from "../../utils/fixes.js"

class PageCapture extends React.Component {

  componentDidMount() {

  }

  render() {
    const { bookId } = this.props

    const windowDimentions = Dimensions.get('window')

    return null

    // return (
    //   <WebView
    //     style={{
    //       position: 'absolute',
    //       width: windowDimentions.width,
    //       height: windowDimentions.height,
    //       top: windowDimentions.height,
    //       left: 0,
    //     }}
    //     injectedJavaScript={patchPostMessageJsCode}
    //     ref={view => this.webView = view}
    //     source={{
    //       uri: `${FileSystem.documentDirectory}reader/index.html`
    //         + `?epub=${encodeURIComponent(`${FileSystem.documentDirectory}books/${bookId}`)}`
    //     }}
    //     mixedContentMode="always"
    //     onError={e => console.log('webview error', e)}
    //     onMessage={event => {
    //       const data = JSON.parse(event.nativeEvent.data)
    //       switch(data.identifier) {
    //         case 'getFileAsText':
    //           const uri = data.payload.uri
    //           FileSystem.readAsStringAsync(`${uri}`)
    //             .then(fileText => {
    //               console.log('postMessage to webview: ' + uri)
    //               this.webView.postMessage(percentageEscape(JSON.stringify({
    //                 identifier: 'fileAsText',
    //                 payload: {
    //                   uri,
    //                   fileText,
    //                 },
    //               })))
    //             })
    //             .catch(fileText => {
    //               console.log('postMessage (error) to webview: ' + uri)
    //               this.webView.postMessage(percentageEscape(JSON.stringify({
    //                 identifier: 'fileAsText',
    //                 payload: {
    //                   uri: uri,
    //                   error: true,
    //                 },
    //               })))
    //             })
    //           break;
    //         default:
    //           console.log(data.identifier, JSON.stringify(data.payload))
    //           break;
    //       }
    //     }}
    //   />
    // )
  }
}

export default PageCapture