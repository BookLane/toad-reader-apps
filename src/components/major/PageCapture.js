import React from "react"
import { Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import PageWebView from "./PageWebView"

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"
import { getPageSize, getDisplaySettingsObj, getPageCfisKey, getSnapshotURI, setUpTimeout, unmountTimeouts } from '../../utils/toolbox.js'

import { addSpinePageCfis } from "../../redux/actions.js"

class PageCapture extends React.Component {

  componentDidMount() {
    this.getPageInfo()
  }

  componentWillReceiveProps(nextProps) {
    if(getSnapshotURI(nextProps) !== getSnapshotURI(this.props)) {
      this.reset()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { processingPaused } = this.props
    
    return (
      getSnapshotURI(nextProps) !== getSnapshotURI(this.props)
      || (!nextProps.processingPaused && processingPaused)
    )
  }

  componentDidUpdate() {
    const { processingPaused } = this.props

    if(processingPaused) return

    if(this.getCfisOrShiftAndSnap) {
      this.getCfisOrShiftAndSnap()
    } else {
      this.getPageInfo()
    }
  }

  componentWillUnmount() {
    unmountTimeouts.bind(this)()
    this.unmounted = true
  }

  reset = () => {
    delete this.loadSpineAndGetPagesInfoAlreadyCalled
    delete this.inProcessOfShifting
    delete this.getCfisOrShiftAndSnap
    this.pageIndexInSpine = 0
  }

  getPageInfo = () => {
    const { spineIdRef } = this.props

    if(this.loadSpineAndGetPagesInfoAlreadyCalled || !this.webView) return
    if(this.getProcessingPaused()) return

    this.reset()

    postMessage(this.webView, 'loadSpineAndGetPagesInfo', {
      spineIdRef,
      allottedMS: 100,
      minimumPagesToFetch: 1,
    })

    this.pageCfis = []
    this.loadSpineAndGetPagesInfoAlreadyCalled = true
  }

  getProcessingPaused = () => this.props.processingPaused

  onMessageEvent = async (webView, data) => {
    const { bookId, spineIdRef, width, height, displaySettings, history,
      reportInfoOrCapture, reportFinished, addSpinePageCfis } = this.props

    if(webView !== this.webView || this.unmounted) return // just in case

    switch(data.identifier) {

      case 'pagesInfo': {
    
        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        reportInfoOrCapture(this.props)

        if(data.payload.startIndex !== this.pageCfis.length) {
          history.push("/error", {
            message: i18n("Invalid book."),
          })
          reportFinished(this.props)
        }

        this.pageCfis = [
          ...this.pageCfis,
          ...data.payload.pageCfis,
        ]

        if(!data.payload.completed) {
          this.getCfisOrShiftAndSnap = () => postMessage(this.webView, 'continueToGetPagesInfo', {
            spineIdRef,
            startIndex: this.pageCfis.length,
            allottedMS: 100,
            minimumPagesToFetch: 1,
          })
          if(!this.getProcessingPaused()) this.getCfisOrShiftAndSnap()
          return
        }

        const numPages = this.pageCfis.length
        const platformOffset = Platform.OS === 'ios' && width%2 === 1 ? 1 : 0

        if(Platform.OS === 'android') {
          // Delay to ensure render of the initial page in spine
          // since this is not covered by the dup check in takeSnapshot.
          await new Promise(resolve => setUpTimeout(resolve, 25, this))
        }

        await new Promise(resolve => {
          this.getCfisOrShiftAndSnap = () => {
            reportInfoOrCapture(this.props)

            if(this.getProcessingPaused()) return
            if(this.pageIndexInSpine >= numPages) return resolve()

            this.inProcessOfShifting = true
            const shift = this.pageIndexInSpine * (width - platformOffset) * -1 + platformOffset

            this.webView.injectJavaScript(`
              document.documentElement.style.transform = "translate(${shift}px)";
              document.documentElement.getBoundingClientRect();  // ensures paint is done before postMessage call
              requestAnimationFrame(() => {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  identifier: "docElShifted",
                  payload: {
                    spineIdRef: "${spineIdRef.replace(/"/g, '\\"')}",
                  },
                }));
              });
            `)

          }

          this.getCfisOrShiftAndSnap()
        })

        if(this.unmounted) return

// if(this.pageCfis.some(cfi => !cfi)) {
//   alert('bad!')
//   console.log('bad cfi set', spineIdRef, this.pageCfis)
// }
        
        addSpinePageCfis({
          bookId,
          idref: spineIdRef,
          key: [getPageCfisKey({ displaySettings, width, height })],
          pageCfis: this.pageCfis.map((cfi, idx) => cfi || ''),
        })
        
        reportFinished(this.props)

        this.pageCfis = []

        return true

      }


      case 'docElShifted': {

        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        delete this.inProcessOfShifting

        if(this.getProcessingPaused()) return

        reportInfoOrCapture(this.props)

        const { pageWidth, pageHeight } = getPageSize({ width, height })
        const uri = getSnapshotURI({
          ...this.props,
          pageIndexInSpine: this.pageIndexInSpine,
        })

        await takeSnapshot({
          view: this.view,
          uri,
          width: pageWidth,
          height: pageHeight,
          viewWidth: width,
          viewHeight: height,
        })

        if(this.unmounted) return

        this.pageIndexInSpine++
        this.getCfisOrShiftAndSnap()

        return true

      }

    }
  }

  setWebViewEl = ref => this.webView = ref

  setView = ref => this.view = ref

  render() {
    const { bookId, width, height, spineIdRef, processingPaused, displaySettings } = this.props

    if(processingPaused) return null

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
        initialDisplaySettings={getDisplaySettingsObj(displaySettings)}
      />
    )
  }
}

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addSpinePageCfis,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(PageCapture))
