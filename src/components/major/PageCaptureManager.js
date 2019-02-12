import React from "react"
import { Constants } from "expo"
import { Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import PageCapture from "./PageCapture"

import { getPageCfisKey, getSnapshotURI } from "../../utils/toolbox.js"

const {
  INITIAL_SPINE_CAPTURE_TIMEOUT,
  MAX_SPINE_CAPTURE_TIMEOUT,
} = Constants.manifest.extra

class PageCaptureManager extends React.Component {

  constructor(props) {
    super(props)

    const skipList = {}

    this.state = {
      pageCaptureProps: this.getPageCaptureProps(props, { skipList }),
      skipList,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { books, processingPaused } = nextProps
    const { pageCaptureProps, skipList } = this.state

    // filter out books which have been removed
    const newSkipList = {}
    for(let uriAsKey in skipList) {
      if(this.bookIsDownloaded({ uriAsKey, nextProps })) {
        newSkipList[uriAsKey] = skipList[uriAsKey]
      }
    }
    if(Object.keys(newSkipList).length !== Object.keys(skipList).length) {
      this.setState({ skipList: newSkipList })
    }

    if(!pageCaptureProps || !books[pageCaptureProps.bookId] || books[pageCaptureProps.bookId].downloadStatus != 2) {
      // set up new page to capture
      this.setState({ pageCaptureProps: this.getPageCaptureProps(nextProps) })

    } else if(this.props.processingPaused && !processingPaused && this.currentPageCapturePropsUriAsKey) {
      // reset timeout now that unpaused
      this.setupTimeout({ uriAsKey: this.currentPageCapturePropsUriAsKey })
    
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { processingPaused } = this.props
    const { pageCaptureProps } = this.state

    return (
      nextState.pageCaptureProps !== pageCaptureProps
      || nextProps.processingPaused !== processingPaused
    )
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  getPageCaptureProps = (nextProps, nextState) => {
    const { bookId, setCapturingSnapshots, books, displaySettings } = nextProps || this.props
    const { skipList } = nextState || this.state

    if(!bookId || !books || !books[bookId] || !displaySettings) return null

    let { width, height } = Dimensions.get('window')
    const book = books[bookId]
    const spines = book.spines
    let pageCfisKey, spineIdRef, uriAsKey

    const findSpineToDo = flip => {
      if(flip) {
        [ width, height ] = [ height, width ]
      }
      pageCfisKey = getPageCfisKey({ displaySettings, width, height })
      return spines.some(thisSpine => {
        const thisUriAsKey = getSnapshotURI({
          bookId,
          spineIdRef: thisSpine.idref,
          pageCfisKey,
        })
        if(
          (!thisSpine.pageCfis || thisSpine.pageCfis[pageCfisKey] == null)
          && !(skipList[thisUriAsKey] || {}).skip
        ) {
          spineIdRef = thisSpine.idref
          uriAsKey = thisUriAsKey
          return true
        }
      })
    }

    if(book.downloadStatus != 2 || !spines) return null

    // findSpineToDo() || findSpineToDo(true)
    findSpineToDo()

    if(!spineIdRef) {
      setCapturingSnapshots(false)
      return null
    }

    // set up no response timeout
    this.captureAllottedTime = (skipList[uriAsKey] && skipList[uriAsKey].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT
    this.setupTimeout({ uriAsKey })

    setCapturingSnapshots(true)

    return {
      bookId,
      spineIdRef,
      width,
      height,
      displaySettings,
    }
  }

  bookIsDownloaded = ({ uriAsKey, nextProps }) => {
    const { books } = nextProps || this.props

    const bookIdFromUri = (uriAsKey.match(/\/([0-9]+)\/[^\/]+$/) || [])[1]
    return books[bookIdFromUri] && books[bookIdFromUri].downloadStatus == 2
  }

  setupTimeout = ({ uriAsKey }) => {
    clearTimeout(this.captureStallTimeout)

    this.captureStallTimeout = setTimeout(() => this.handleTimeout({ uriAsKey }), this.captureAllottedTime)
    this.currentPageCapturePropsUriAsKey = uriAsKey
  }

  clearTimeouts = () => {
    clearTimeout(this.captureStallTimeout)
    delete this.currentPageCapturePropsUriAsKey
  }

  reportInfoOrCapture = params => {
    const uriAsKey = getSnapshotURI(params) // { bookId, spineIdRef, width, height, displaySettings }

    if(this.currentPageCapturePropsUriAsKey === uriAsKey) {
      this.setupTimeout({ uriAsKey })
    }
  }

  reportFinished = params => {
    const skipList = { ...this.state.skipList }
    const uriAsKey = getSnapshotURI(params) // { bookId, spineIdRef, width, height, displaySettings }

    if(this.currentPageCapturePropsUriAsKey === uriAsKey) {
      this.clearTimeouts()
    }

    if(skipList[uriAsKey]) {
      delete skipList[uriAsKey]
      this.setState({ skipList })
    }

    this.setState({ pageCaptureProps: this.getPageCaptureProps(null, { skipList }) })
  }

  handleTimeout = ({ uriAsKey }) => {
    const { processingPaused } = this.props
    const { pageCaptureProps, skipList } = this.state

    if(this.unmounted) return
    if(!pageCaptureProps) return
    if(processingPaused) return
    if(this.currentPageCapturePropsUriAsKey !== uriAsKey) return

    this.clearTimeouts()

    const timeout = Math.min(((skipList[uriAsKey] && skipList[uriAsKey].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT) * 2, MAX_SPINE_CAPTURE_TIMEOUT)

    if(this.bookIsDownloaded({ uriAsKey })) {
      console.log('skip spine', uriAsKey)
      const newSkipList = {
        ...skipList,
        [uriAsKey]: {
          skip: true,
          timeout,
        } 
      }
      this.setState({
        skipList: newSkipList,
        pageCaptureProps: this.getPageCaptureProps(null, { skipList: newSkipList }),
      })
    }

    setTimeout(() => {
      if(this.unmounted) return

      const skipList = { ...this.state.skipList }

      if(skipList[uriAsKey]) {  // make sure the book has not been remove
        skipList[uriAsKey] = {
          ...skipList[uriAsKey],
          skip: false,
        }
        this.setState({
          skipList,
          pageCaptureProps: this.getPageCaptureProps(null, { skipList })
        })
      }
      
    }, timeout)
  }

  render() {
    const { books, displaySettings, readerStatus, processingPaused } = this.props
    const { pageCaptureProps, skipList } = this.state

    if(readerStatus !== 'ready') {
      console.log('PageCaptureManager waiting for reader update.')
      return null
    }

    if(!pageCaptureProps) {
      console.log('PageCaptureManager at rest. Skip list:', skipList)
      return null
    }

    return (
      <PageCapture
        {...pageCaptureProps}
        reportInfoOrCapture={this.reportInfoOrCapture}
        reportFinished={this.reportFinished}
        processingPaused={processingPaused}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  displaySettings: state.displaySettings,
  readerStatus: state.readerStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCaptureManager)
