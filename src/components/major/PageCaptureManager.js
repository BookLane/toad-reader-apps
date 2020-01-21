import React, { useEffect, useRef, useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import PageCapture from "./PageCapture"

import { getPageCfisKey, getSnapshotURI } from "../../utils/toolbox"

import useForceUpdate from "../../hooks/useForceUpdate"
import useSetTimeout from "../../hooks/useSetTimeout"
import useSetTimeouts from "../../hooks/useSetTimeouts"
import useInstanceValue from "../../hooks/useInstanceValue"
import useDimensions from "../../hooks/useDimensions"

const {
  INITIAL_SPINE_CAPTURE_TIMEOUT,
  MAX_SPINE_CAPTURE_TIMEOUT,
} = Constants.manifest.extra

const bookIsDownloaded = ({ books, uriAsKey }) => {
  const bookIdFromUri = (uriAsKey.match(/\/([0-9]+)\/[^\/]+$/) || [])[1]
  return books[bookIdFromUri] && books[bookIdFromUri].downloadStatus === 2
}

const PageCaptureManager = ({
  bookId,
  setCapturingSnapshots,
  processingPaused,
  
  books,
  displaySettings,
  readerStatus,
}) => {

  const pageCaptureProps = useRef()
  const skipList = useRef({})
  const forceUpdate = useForceUpdate()
  const getProcessingPaused = useInstanceValue(processingPaused)

  let { width, height } = useDimensions().window

  const [ setCaptureTimeout, clearCaptureTimeout ] = useSetTimeout()
  const [ setTryAgainTimeout ] = useSetTimeouts()

  useEffect(
    () => {
      // filter out books which have been removed
      for(let uriAsKey in skipList.current) {
        if(!bookIsDownloaded({ books, uriAsKey })) {
          delete skipList.current[uriAsKey]
        }
      }
    },
    [ books ],
  )

  pageCaptureProps.current = null
  if(bookId && books && books[bookId] && displaySettings) {

    const { spines, downloadStatus} = books[bookId]
    let pageCfisKey, spineIdRef

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
          && !(skipList.current[thisUriAsKey] || {}).skip
        ) {
          spineIdRef = thisSpine.idref
          return true
        }
      })
    }

    if(downloadStatus === 2 && spines) {

      // findSpineToDo() || findSpineToDo(true)
      findSpineToDo()
  
      setCapturingSnapshots(!!spineIdRef)

      if(spineIdRef) {
        pageCaptureProps.current = {
          bookId,
          spineIdRef,
          width,
          height,
          displaySettings,
        }
      }

    }

  }

  const setUpCaptureTimeout = () => {
    const uriAsKey = getSnapshotURI(pageCaptureProps.current)
    const timeout = (skipList.current[uriAsKey] && skipList.current[uriAsKey].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT

    setCaptureTimeout(() => {
      if(!pageCaptureProps.current) return
      if(getProcessingPaused()) return
      if(getSnapshotURI(pageCaptureProps.current) !== uriAsKey) return
  
      const timeout = Math.min(((skipList.current[uriAsKey] && skipList.current[uriAsKey].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT) * 2, MAX_SPINE_CAPTURE_TIMEOUT)
  
      if(bookIsDownloaded({ books, uriAsKey })) {
        console.log('skip spine', uriAsKey)
        skipList.current[uriAsKey] = {
          skip: true,
          timeout,
        }
        forceUpdate()
      }
  
      setTryAgainTimeout(() => {
        if(skipList.current[uriAsKey]) {  // make sure the book has not been remove
          skipList.current[uriAsKey].skip = false
        }
        
        if(!pageCaptureProps.current) {  // at rest
          forceUpdate()
        }
      }, timeout)
    }, timeout)
  }

  const reportInfoOrCapture = useCallback(
    uriAsKey => {  // params: { bookId, spineIdRef, width, height, displaySettings }
      if(uriAsKey === getSnapshotURI(pageCaptureProps.current)) {  // confirm we haven't moved on
        setUpCaptureTimeout()  // reset the timeout so long as stuff is happening
      }
    },
    [],
  )

  const reportFinished = useCallback(
    uriAsKey => {  // params: { bookId, spineIdRef, width, height, displaySettings }
      if(uriAsKey === getSnapshotURI(pageCaptureProps.current)) {  // confirm we haven't moved on

        if(skipList.current[uriAsKey]) {
          delete skipList.current[uriAsKey]
        }

        clearCaptureTimeout()
        forceUpdate()  // just in case; probably is unnecessary, given the update to books
      }
    },
    [],
  )

  if(readerStatus !== 'ready') {
    console.log('PageCaptureManager waiting for reader update.')
    return null
  }

  if(!pageCaptureProps.current) {
    console.log('PageCaptureManager at rest. Skip list:', skipList.current)
    return null
  }

  if(processingPaused) {
    console.log('PageCaptureManager is paused.')
    clearCaptureTimeout()
    return null
  }

  setUpCaptureTimeout()

  return (
    <PageCapture
      {...pageCaptureProps.current}
      reportInfoOrCapture={reportInfoOrCapture}
      reportFinished={reportFinished}
      processingPaused={processingPaused}
    />
  )
}

const mapStateToProps = ({ books, displaySettings, readerStatus }) => ({
  books,
  displaySettings,
  readerStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCaptureManager)
