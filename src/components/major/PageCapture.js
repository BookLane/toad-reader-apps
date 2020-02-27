import React, { useRef, useEffect, useCallback } from "react"
import { Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as FileSystem from 'expo-file-system'

import PageWebView from "./PageWebView"

import { getDisplaySettingsObj, getPageCfisKey, getSnapshotURI } from '../../utils/toolbox'

import useInstanceValue from "../../hooks/useInstanceValue"
import { postMessage } from "../../utils/postMessage"
import takeSnapshot from "../../utils/takeSnapshot"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useSetTimeout from "../../hooks/useSetTimeout"
import usePageSize from "../../hooks/usePageSize"
import useRouterState from "../../hooks/useRouterState"
import useSpineInlineToolsHash from "../../hooks/useSpineInlineToolsHash"
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"

import { addSpinePageCfis } from "../../redux/actions"

const PageCapture = ({
  bookId,
  spineIdRef,
  width,
  height,
  displaySettings,
  reportInfoOrCapture,
  reportFinished,
  processingPaused,
  
  books,
  userDataByBookId,
  sidePanelSettings,

  addSpinePageCfis,
}) => {

  const { instructorHighlights, visibleTools } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode: false })

  const { historyPush } = useRouterState()

  const loadSpineAndGetPagesInfoAlreadyCalled = useRef(false)
  const getCfisOrShiftAndSnap = useRef()
  const pageIndexInSpine = useRef(0)
  const pageCfis = useRef([])
  const unmounted = useRef(false)
  const webView = useRef()
  const view = useRef()

  let { truePageHeight, truePageMarginTop } = useAdjustedDimensions({ fullPageWidth: width, fullPageHeight: height, sidePanelSettings })
  const { pageWidth, pageHeight } = usePageSize({ sidePanelSettings })
  const spineInlineToolsHash = useSpineInlineToolsHash({ visibleTools, spineIdRef })

  const getProcessingPaused = useInstanceValue(processingPaused)

  const [ setDelayTimeout ] = useSetTimeout({ fireOnUnmount: true })

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

  const onError = useCallback(
    e => {
      console.log('ERROR: PageCapture webview had an error on load', uriAsKey, e)
      reportFinished(uriAsKey)
    },
    [ reportFinished, uriAsKey ],
  )

  const onMessageEvent = async (webView2, data) => {
    if(webView2 !== webView.current || unmounted.current) return // just in case

    switch(data.identifier) {

      case 'pagesInfo': {
    
        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        reportInfoOrCapture(uriAsKey)

        if(data.payload.startIndex !== pageCfis.current.length) {
          historyPush("/error", {
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
          await new Promise(resolve => setDelayTimeout(resolve, 25))
        }

        await new Promise(resolve => {
          getCfisOrShiftAndSnap.current = async () => {
            reportInfoOrCapture(uriAsKey)

            if(getProcessingPaused()) return

            // pre-skip pages which already exist
            while(
              (await FileSystem.getInfoAsync(
                getSnapshotURI({
                  bookId,
                  spineIdRef,
                  width,
                  height,
                  displaySettings,
                  sidePanelSettings,
                  spineInlineToolsHash,
                  pageIndexInSpine: pageIndexInSpine.current,
                })
              )).exists
            ) {
              pageIndexInSpine.current++
            }

            if(pageIndexInSpine.current >= numPages) return resolve()

            const shift = pageIndexInSpine.current * (width - platformOffset) * -1 + platformOffset

            // getBoundingClientRect combined with the timeout [hopefully] ensures
            // paint is done before the postMessage call.
            webView.current.injectJavaScript(`
              document.documentElement.style.transform = "translate(${shift}px)";
              document.documentElement.getBoundingClientRect();
              setTimeout(() => {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  identifier: "docElShifted",
                  payload: {
                    spineIdRef: "${spineIdRef.replace(/"/g, '\\"')}",
                  },
                }));
              }, 16);
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
          key: [getPageCfisKey({ displaySettings, sidePanelSettings, width, height, spineInlineToolsHash })],
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

        const uri = getSnapshotURI({
          bookId,
          spineIdRef,
          width,
          height,
          displaySettings,
          sidePanelSettings,
          spineInlineToolsHash,
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
      containerStyle={{
        position: 'absolute',
        width,
        minWidth: width,
        maxWidth: width,
        height,
        minHeight: height,
        maxHeight: height,
      }}
      style={{
        position: 'absolute',
        top: truePageMarginTop,
        width,
        minWidth: width,
        maxWidth: width,
        height: truePageHeight,
        minHeight: truePageHeight,
        maxHeight: truePageHeight,
      }}
      bookId={bookId}
      webViewRef={webView}
      viewRef={view}
      onMessage={onMessageEvent}
      onError={onError}
      initialLocation={JSON.stringify({ idref: spineIdRef })}
      initialDisplaySettings={getDisplaySettingsObj(displaySettings)}
      instructorHighlights={instructorHighlights}
    />
  )
}

const mapStateToProps = ({ books, userDataByBookId, sidePanelSettings }) => ({
  books,
  userDataByBookId,
  sidePanelSettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addSpinePageCfis,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCapture)
