import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import PageWebView from "./PageWebView"

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"
import { getPageSize, getDisplaySettingsObj, getPageCfisKey, getSnapshotURI } from '../../utils/toolbox.js'

import { addSpinePageCfis } from "../../redux/actions.js"

class PageCapture extends React.Component {

  state = {
    shiftStyle: undefined,
  }

  componentDidMount() {
    this.getPageInfo()
  }

  componentWillReceiveProps(nextProps) {
    if(getSnapshotURI(nextProps) !== getSnapshotURI(this.props)) {
      this.setState({ shiftStyle: undefined })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { shiftStyle } = this.state
    
    return (
      getSnapshotURI(nextProps) !== getSnapshotURI(this.props)
      || nextState.shiftStyle !== shiftStyle
    )
  }

  componentDidUpdate() {
    const { shiftStyle } = this.state

    if(shiftStyle === undefined) {
      this.getPageInfo()
    }
  }

  componentWillUnmount() {
    this.unmounted = true
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

        const numPages = data.payload.pageCfis.length

        reportInfoOrCapture(this.props)

        const { pageWidth, pageHeight } = getPageSize({ width, height })
        const pageIndexInSpine = 0
        
        await new Promise(resolve => {
          const shiftAndSnap = () => {
            if(pageIndexInSpine >= numPages) return resolve()

            this.setState({
              shiftStyle: {
                transform: [
                  {
                    translateX: pageIndexInSpine * width * -1,
                  },
                ],
                width: numPages * width,
              }              
            }, async () => {

              const uri = getSnapshotURI({
                ...this.props,
                pageIndexInSpine,
              })

              await takeSnapshot({
                view: this.view,
                uri,
                width: pageWidth,
                height: pageHeight,
              })

              reportInfoOrCapture(this.props)
              pageIndexInSpine++
              !this.unmounted && shiftAndSnap()
            })
          }

          shiftAndSnap()
        })

        addSpinePageCfis({
          bookId,
          idref: spineIdRef,
          key: [getPageCfisKey({ displaySettings, width, height })],
          pageCfis: data.payload.pageCfis,
        })
        
        reportFinished(this.props)

        return true

    }
  }

  setWebViewEl = ref => this.webView = ref

  setView = ref => this.view = ref

  render() {
    const { bookId, width, height, spineIdRef } = this.props
    const { shiftStyle } = this.state

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
        shiftStyle={shiftStyle}
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
