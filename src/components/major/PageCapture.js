import React, { useRef, useEffect } from "react"
import { Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import PageWebView from "./PageWebView"

import useInstanceValue from "../../hooks/useInstanceValue"
import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"
import { getPageSize, getDisplaySettingsObj, getPageCfisKey, getSnapshotURI, setUpTimeout, unmountTimeouts } from '../../utils/toolbox.js'

import { addSpinePageCfis } from "../../redux/actions.js"

const PageCapture = ({
  bookId,
  spineIdRef,
  width,
  height,
  displaySettings,
  reportInfoOrCapture,
  reportFinished,
  processingPaused,
  history,
  addSpinePageCfis,
}) => {

  const loadSpineAndGetPagesInfoAlreadyCalled = useRef(false)
  const getCfisOrShiftAndSnap = useRef()
  const pageIndexInSpine = useRef(0)
  const pageCfis = useRef([])
  const unmounted = useRef(false)
  const webView = useRef()
  const view = useRef()

  const getProcessingPaused = useInstanceValue(processingPaused)

  const uriAsKey = getSnapshotURI({
    bookId,
    spineIdRef,
    width,
    height,
    displaySettings,
  })

  useEffect(
    () => {
      loadSpineAndGetPagesInfoAlreadyCalled.current = false
      getCfisOrShiftAndSnap.current = null
      pageIndexInSpine.current = 0
    },
    [ uriAsKey ],
  )

  useEffect(
    () => {
      if(processingPaused) return

      if(getCfisOrShiftAndSnap.current) {
        getCfisOrShiftAndSnap.current()
    
      } else {
        if(loadSpineAndGetPagesInfoAlreadyCalled.current || !webView.current) return

        postMessage(webView.current, 'loadSpineAndGetPagesInfo', {
          spineIdRef,
          allottedMS: 100,
          minimumPagesToFetch: 1,
        })
    
        pageCfis.current = []
        loadSpineAndGetPagesInfoAlreadyCalled.current = true
      }
    },
    [ uriAsKey, processingPaused ],
  )

  useEffect(() => () => unmounted.current = true, [])

  const onMessageEvent = async (webView2, data) => {
    if(webView2 !== webView.current || unmounted.current) return // just in case

    switch(data.identifier) {

      case 'pagesInfo': {
    
        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        reportInfoOrCapture(uriAsKey)

        if(data.payload.startIndex !== pageCfis.current.length) {
          // TODO: use historyPush from useRouterState
          history.push("/error", {
            message: i18n("Invalid book."),
          })
          reportFinished(uriAsKey)
        }

        pageCfis.current = [
          ...pageCfis.current,
          ...data.payload.pageCfis,
        ]

        if(!data.payload.completed) {
          getCfisOrShiftAndSnap.current = () => postMessage(webView.current, 'continueToGetPagesInfo', {
            spineIdRef,
            startIndex: pageCfis.current.length,
            allottedMS: 100,
            minimumPagesToFetch: 1,
          })
          if(!getProcessingPaused()) getCfisOrShiftAndSnap.current()
          return
        }

        const numPages = pageCfis.current.length
        const platformOffset = Platform.OS === 'ios' && width%2 === 1 ? 1 : 0

        if(Platform.OS === 'android') {
          // Delay to ensure render of the initial page in spine
          // since this is not covered by the dup check in takeSnapshot.
          await new Promise(resolve => setUpTimeout(resolve, 25, this))
        }

        await new Promise(resolve => {
          getCfisOrShiftAndSnap.current = () => {
            reportInfoOrCapture(uriAsKey)

            if(getProcessingPaused()) return
            if(pageIndexInSpine.current >= numPages) return resolve()

            const shift = pageIndexInSpine.current * (width - platformOffset) * -1 + platformOffset

            webView.current.injectJavaScript(`
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

          getCfisOrShiftAndSnap.current()
        })

        if(unmounted.current) return

// if(pageCfis.current.some(cfi => !cfi)) {
//   alert('bad!')
//   console.log('bad cfi set', spineIdRef, pageCfis.current)
// }
        
        addSpinePageCfis({
          bookId,
          idref: spineIdRef,
          key: [getPageCfisKey({ displaySettings, width, height })],
          pageCfis: pageCfis.current.map(cfi => cfi || ''),
        })
        
        reportFinished(uriAsKey)

        pageCfis.current = []

        return true

      }

      case 'docElShifted': {

        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        if(getProcessingPaused()) return

        reportInfoOrCapture(uriAsKey)

        const { pageWidth, pageHeight } = getPageSize({ width, height })
        const uri = getSnapshotURI({
          bookId,
          spineIdRef,
          width,
          height,
          displaySettings,
          pageIndexInSpine: pageIndexInSpine.current,
        })

        await takeSnapshot({
          view: view.current,
          uri,
          width: pageWidth,
          height: pageHeight,
          viewWidth: width,
          viewHeight: height,
        })

        if(unmounted.current) return

        pageIndexInSpine.current++
        getCfisOrShiftAndSnap.current()

        return true

      }

    }
  }

  if(processingPaused) return null

  return (
    <PageWebView
      key={uriAsKey}
      style={{
        position: 'absolute',
        width,
        height,
        minHeight: height,
      }}
      bookId={bookId}
      webViewRef={webView}
      viewRef={view}
      onMessage={onMessageEvent}
      initialLocation={JSON.stringify({ idref: spineIdRef })}
      initialDisplaySettings={getDisplaySettingsObj(displaySettings)}
    />
  )
}

const mapStateToProps = ({}) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addSpinePageCfis,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(PageCapture))
