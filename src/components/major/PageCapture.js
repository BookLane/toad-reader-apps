import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { WebView, Dimensions } from "react-native"
import { FileSystem } from "expo"

import { postMessage } from "../../utils/postMessage.js"

import PageWebView from "./PageWebView"

import { setSpines } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }

  getPageInfo = newProps => {
    const { bookId, books } = newProps || this.props
    const { width, height } = Dimensions.get('window')

    // return
    //   book.downloadStatus == 2
    //   && book.spines
    //   && book.spines.some(spine => (
    //     spine.numPages == null
    //     || spine.numPages[`${width}x${height}`] == null
    //     || spine.numPages[`${height}x${width}`] == null
  
// console.log('getPageInfo', books[bookId])
    // ;(books[bookId].spines || []).some(spine => {
    //   if(spine.numPages == null) {

    //     setTimeout(() => {
    //       postMessage(this.webView, 'loadSpineAndGetPagesInfo', {
    //         spineIdRef: spine.idref,
    //       })
    //     }, 1000)

    //     return true
    //   }
    // })
  }

  onMessageEvent = data => {
    const { bookId, books, setSpines } = this.props
    
    switch(data.identifier) {
      case 'pagesInfo':
        const spines = [...books[bookId].spines] || []
{/* console.log('pagesInfo', data.payload) */}
        
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

        this.getPageInfo()

        return true
    }
  }

  render() {
    const { bookId, books } = this.props

    const windowDimentions = Dimensions.get('window')

    return (
      <PageWebView
        style={{
          position: 'absolute',
          width: windowDimentions.width,
          height: windowDimentions.height,
          top: windowDimentions.width + windowDimentions.height,
          left: 0,
        }}
        bookId={bookId}
        setWebViewEl={webViewEl => this.webView = webViewEl}
        onMessage={this.onMessageEvent}
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
