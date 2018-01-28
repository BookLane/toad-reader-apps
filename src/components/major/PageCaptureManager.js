import React from "react"
import Expo from "expo"
import { Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import PageCapture from "./PageCapture"

import { getPageCfisKey, getSnapshotURI } from "../../utils/toolbox.js"

const {
  INITIAL_SPINE_CAPTURE_TIMEOUT,
} = Expo.Constants.manifest.extra

class PageCaptureManager extends React.Component {

  state = {
    skipList: {},
  }

  componentWillReceiveProps(nextProps) {
    const { books } = nextProps
    const { skipList } = this.state

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
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  bookIsDownloaded = ({ uriAsKey, nextProps }) => {
    const { books } = nextProps || this.props

    const bookIdFromUri = (uriAsKey.match(/\/([0-9]+)\/[^\/]+$/) || [])[1]
    return books[bookIdFromUri] && books[bookIdFromUri].downloadStatus == 2
  }

  reportSuccess = params => {
    const skipList = { ...this.state.skipList }
    const uriAsKey = getSnapshotURI(params) // { bookId, spineIdRef, width, height, displaySettings }

    if(skipList[uriAsKey]) {
      delete skipList[uriAsKey]
      this.setState({ skipList })
    }
  }

  reportNoResponse = params => {
    const { skipList } = this.state
    const uriAsKey = getSnapshotURI(params) // { bookId, spineIdRef, width, height, displaySettings }
    
    const timeout = Math.min((skipList[uriAsKey] && skipList[uriAsKey].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT) * 2

    if(this.bookIsDownloaded({ uriAsKey })) {
      console.log('skip spine', uriAsKey)
      this.setState({
        skipList: {
          ...skipList,
          [uriAsKey]: {
            skip: true,
            timeout,
          } 
        }
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
        this.setState({ skipList })
      }
      
    }, timeout)
  }

  render() {
    const { books, displaySettings } = this.props
    const { skipList } = this.state

    let pageCaptureObj

    for(let bookId in books) {
      let { width, height } = Dimensions.get('window')
      const book = books[bookId] || {}
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

      if(book.downloadStatus !== 2 || !spines) continue

      findSpineToDo() || findSpineToDo(true)

      if(!spineIdRef) continue

      pageCaptureObj = {
        bookId,
        spineIdRef,
        width,
        height,
        displaySettings,
        timeout: (skipList[uriAsKey] && skipList[uriAsKey].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT,
      }

      break
    }
   
    if(!pageCaptureObj) {
      console.log('PageCaptureManager at rest. Skip list:', skipList)
      return null
    }

    return (
      <PageCapture
        {...pageCaptureObj} 
        reportSuccess={this.reportSuccess}
        reportNoResponse={this.reportNoResponse}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  displaySettings: state.displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCaptureManager)
