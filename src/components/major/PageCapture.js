import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"

import PageWebView from "./PageWebView"

import { addSpinePageCfis } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return [ "bookId", "spine", "width", "height" ].some(key => this.props[key] != nextProps[key])
  }

  componentDidUpdate() {
    this.getPageInfo()
  }

  getPageInfo = () => {
    const { reportNoResponse, bookId, spine, width, height, timeout } = this.props

    postMessage(this.webView, 'loadSpineAndGetPagesInfo', {
      spineIdRef: spine.idref,
    })
    
    this.getPageInfoTimeout = setTimeout(() => reportNoResponse({ bookId, spine, width, height }), timeout)
  }

  onMessageEvent = async data => {
    const { bookId, spine, width, height, reportSuccess, addSpinePageCfis } = this.props
    
    switch(data.identifier) {
      case 'pagesInfo':

        if(spine.idref !== data.payload.spineIdRef) return // just in case

        this.numPages = data.payload.numPages
        this.pageCfis = []

        return true

      case 'pageChanged':

        if(spine.idref !== data.payload.newSpineIdRef) return // just in case

        // record cfi
        this.pageCfis.push(data.payload.newCfi)

        // takeSnapshot, if none exists
        await takeSnapshot({
          view: this.view,
          bookId: bookId,
          fileName: `${spine.idref}_${this.pageCfis.length-1}_${width}x${height}.jpg`,
        })

        if(this.pageCfis.length < this.numPages) {
          // go to next page if there is another
          postMessage(this.webView, 'goToPage', {
            spineIdRef: spine.idref,
            pageIndexInSpine: this.pageCfis.length,
          })

        } else {
          // record spine pageCfis in redux when complete
  
          clearTimeout(this.getPageInfoTimeout)
  
          addSpinePageCfis({
            bookId,
            idref: spine.idref,
            key: [`${width}x${height}`],
            pageCfis: this.pageCfis,
          })
          
          reportSuccess({ bookId, spine, width, height })
          
        }

        return true
        
    }
  }

  setWebViewEl = ref => this.webView = ref

  setView = ref => this.view = ref

  render() {
    const { bookId, width, height } = this.props

    return (
      <PageWebView
        style={{
          position: 'absolute',
          width,
          height,
          minHeight: height,
        }}
        bookId={bookId}
        setWebViewEl={this.setWebViewEl}
        setView={this.setView}
        onMessage={this.onMessageEvent}
      />
    )
  }
}

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addSpinePageCfis,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCapture)
