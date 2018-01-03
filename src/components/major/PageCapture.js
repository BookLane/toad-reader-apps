import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { postMessage } from "../../utils/postMessage.js"

import PageWebView from "./PageWebView"

import { addSpineNumPagesCount } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return [ "bookId", "spineIdRef", "width", "height" ].some(key => this.props[key] != nextProps[key])
  }

  componentDidUpdate() {
    this.getPageInfo()
  }

  getPageInfo = () => {
    const { reportNoResponse, bookId, spineIdRef, width, height, timeout } = this.props

    postMessage(this.webView, 'loadSpineAndGetPagesInfo', {
      spineIdRef,
    })
    
    this.getPageInfoTimeout = setTimeout(() => reportNoResponse({ bookId, spineIdRef, width, height }), timeout)
  }

  onMessageEvent = data => {
    
    switch(data.identifier) {
      case 'pagesInfo':
        const { bookId, spines, width, height, reportSuccess, addSpineNumPagesCount } = this.props

        clearTimeout(this.getPageInfoTimeout)
        
        spines.some((spine, index) => {
          if(spine.idref == data.payload.spineIdRef) {
            addSpineNumPagesCount({
              bookId,
              idref: spine.idref,
              key: [`${width}x${height}`],
              numPages: data.payload.numPages,
            })
            return true
          }
        })

        reportSuccess({ bookId, spineIdRef: data.payload.spineIdRef, width, height })

        return true
    }
  }

  setWebViewEl = webViewEl => this.webView = webViewEl

  render() {
    const { bookId, width, height } = this.props

    return (
      <PageWebView
        style={{
          position: 'absolute',
          width,
          height,
          top: (width + height) * 10,  // simply to ensure it is out of view
          left: 0,
        }}
        bookId={bookId}
        setWebViewEl={this.setWebViewEl}
        onMessage={this.onMessageEvent}
      />
    )
  }
}

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addSpineNumPagesCount,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCapture)
