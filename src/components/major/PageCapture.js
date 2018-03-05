import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import PageWebView from "./PageWebView"

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"
import { getPageSize, getDisplaySettingsObj, getPageCfisKey, getSnapshotURI } from '../../utils/toolbox.js'

import { addSpinePageCfis } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return getSnapshotURI(nextProps) !== getSnapshotURI(this.props)
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

  onMessageEvent = async (webView, data) => {
    const { bookId, spineIdRef, width, height, displaySettings,
      reportInfoOrCapture, reportFinished, addSpinePageCfis } = this.props

    if(webView !== this.webView) return // just in case
    
    switch(data.identifier) {
      case 'pagesInfo':

        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        this.numPages = data.payload.numPages
        this.pageCfis = []

        reportInfoOrCapture(this.props)

        return true

      case 'pageChanged':

        if(spineIdRef !== data.payload.newSpineIdRef) return // just in case

        // record cfi
        this.pageCfis.push(data.payload.newCfi)

        const { pageWidth, pageHeight } = getPageSize({ width, height })

        const uri = getSnapshotURI({
          ...this.props,
          pageIndexInSpine: this.pageCfis.length-1,
        })

        // takeSnapshot, if none exists
        await takeSnapshot({
          view: this.view,
          uri,
          width: pageWidth,
          height: pageHeight,
        })

        reportInfoOrCapture(this.props)

        if(this.pageCfis.length < this.numPages) {
          // go to next page if there is another
          postMessage(this.webView, 'goToPage', {
            spineIdRef,
            pageIndexInSpine: this.pageCfis.length,
          })

        } else {
          // record spine pageCfis in redux when complete
  
          addSpinePageCfis({
            bookId,
            idref: spineIdRef,
            key: [getPageCfisKey({ displaySettings, width, height })],
            pageCfis: this.pageCfis,
          })
          
          reportFinished(this.props)
          
        }

        return true
        
    }
  }

  setWebViewEl = ref => this.webView = ref

  setView = ref => this.view = ref

  render() {
    const { bookId, width, height, spineIdRef } = this.props

    return (
      <PageWebView
        key={getSnapshotURI(this.props)}
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
        initialLocation={JSON.stringify({ idref: spineIdRef })}
        initialDisplaySettings={getDisplaySettingsObj(this.props)}
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
