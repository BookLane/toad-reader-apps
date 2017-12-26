import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { postMessage } from "../../utils/postMessage.js"

import PageWebView from "./PageWebView"

import { setSpines } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }

  componentDidUpdate() {
    this.getPageInfo()
  }

  getPageInfo = () => {
    const { spineIdRef } = this.props

    postMessage(this.webView, 'loadSpineAndGetPagesInfo', {
      spineIdRef,
    })
  }

  onMessageEvent = data => {
    
    switch(data.identifier) {
      case 'pagesInfo':
        const { bookId, spines, width, height, setSpines } = this.props
        
        spines.some((spine, index) => {
          if(spine.idref == data.payload.spineIdRef) {
            spines[index] = {
              ...spine,
              numPages: {
                ...(spine.numPages || {}),
                [`${width}x${height}`]: data.payload.numPages,
              }
            }
            return true
          }
        })
        
        setSpines({ bookId, spines })

        return true
    }
  }

  render() {
    const { bookId, width, height, spineIdRef } = this.props

    return (
      <PageWebView
        id={spineIdRef}  // meant to force an 'update'
        style={{
          position: 'absolute',
          width,
          height,
          top: (width + height) * 10,  // simply to ensure it is out of view
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
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSpines,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCapture)
