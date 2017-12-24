import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { WebView, Dimensions } from "react-native"
import { FileSystem } from "expo"

import { patchPostMessageJsCode, percentageEscape } from "../../utils/fixes.js"

import { setSpines } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }
  
  componentWillReceiveProps(newProps) {
    this.getPageInfo()
  }

  getPageInfo = newProps => {
    const { bookId, books } = newProps || this.props

    ;(books[bookId].spines || []).some(spine => {
      if(spine.numPages == null) {

        // setTimeout(() => {

// I AM HERE

// The big issue is the fact that I do not need hrefs, but rather spineIdRefs.
// This is not a huge deal for jumping to spines as I can get that info from 
// the opf file, by taking note of the item tags under the manifest tag. The
// sticky point are the hrefs that have hashes. Most likely, I will need to
// see about changing the API that speaks to readium to have it send a 
// spineRefId + hash (or simply the href) instead of spineRefId + cfi.

// Also, I want to extract getFileAsText since it is used in two different
// components, or else create a PageWebView component that has this.

          // this.webView.postMessage(percentageEscape(JSON.stringify({
          //   identifier: 'loadSpineAndGetPagesInfo',
          //   payload: {
          //     spineIdRef: 'main', //spine.href,
          //   },
          // })))
        // }, 2000)

        return true
      }
    })
  }

  render() {
    const { bookId, books, setSpines } = this.props

    const windowDimentions = Dimensions.get('window')

    return (
      <WebView
        style={{
          position: 'absolute',
          width: windowDimentions.width,
          height: windowDimentions.height,
          top: windowDimentions.width + windowDimentions.height,
          left: 0,
        }}
        injectedJavaScript={patchPostMessageJsCode}
        ref={view => this.webView = view}
        source={{
          uri: `${FileSystem.documentDirectory}reader/index.html`
            + `?epub=${encodeURIComponent(`${FileSystem.documentDirectory}books/${bookId}`)}`
        }}
        mixedContentMode="always"
        onError={e => console.log('webview error', e)}
        onMessage={event => {
          const data = JSON.parse(event.nativeEvent.data)
          switch(data.identifier) {
            case 'getFileAsText':
              const uri = data.payload.uri
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
            case 'pagesInfo':
              const spines = [...books[bookId].spines] || []
              
              spines.some((spine, index) => {
                if(spine.href == data.payload.spineIdRef) {
                  spines[index] = {
                    ...spine,
                    numPages: data.payload.numPages,
                  }
                  return true
                }
              })
              
              setSpines({ bookId, spines })
              break;
            default:
              console.log(data.identifier, JSON.stringify(data.payload))
              break;
          }
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSpines,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCapture)
