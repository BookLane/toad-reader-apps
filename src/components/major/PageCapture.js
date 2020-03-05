import React, { useState, useRef, useEffect, useCallback } from "react"
import { Platform, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as FileSystem from 'expo-file-system'

import { getDisplaySettingsObj, getPageCfisKey, getSnapshotURI } from '../../utils/toolbox'
import useInstanceValue from "../../hooks/useInstanceValue"
import { postMessage } from "../../utils/postMessage"
import takeSnapshot from "../../utils/takeSnapshot"
import useSetTimeout from "../../hooks/useSetTimeout"
import usePageSize from "../../hooks/usePageSize"
import useRouterState from "../../hooks/useRouterState"
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"
import { addSpinePageCfis } from "../../redux/actions"
import useDidUpdate from "../../hooks/useDidUpdate"

import PageWebView from "./PageWebView"
import BookTools from "./BookTools"

const getDefiniteDimensionsStyle = (width, height) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width,
  minWidth: width,
  maxWidth: width,
  height,
  minHeight: height,
  maxHeight: height,
})

const PageCapture = ({
  bookId,
  spineIdRef,
  width,
  height,
  realWidth,
  realMarginHorizontal,
  displaySettings,
  sidePanelSettings,
  spineInlineToolsHash,
  toolCfiCountsInThisSpine,
  instructorHighlights,
  reportInfoOrCapture,
  reportFinished,
  processingPaused,

  addSpinePageCfis,
}) => {

  const { historyPush } = useRouterState()
  
  const [ toolSpots, setToolSpots ] = useState([])

  const loadSpineAndGetPagesInfoAlreadyCalled = useRef(false)
  const getCfisOrShiftAndSnap = useRef()
  const pageIndexInSpine = useRef(0)
  const pageCfis = useRef([])
  const toolSpotSets = useRef({})
  const unmounted = useRef(false)
  const webView = useRef()
  const view = useRef()

  let { truePageHeight, truePageMarginTop } = useAdjustedDimensions({ fullPageWidth: width, fullPageHeight: height, sidePanelSettings })
  const { pageWidth, pageHeight } = usePageSize({ sidePanelSettings })

  const getProcessingPaused = useInstanceValue(processingPaused)

  const stopProcessing = () => (
    getProcessingPaused()
    || unmounted.current
    || !webView.current
  )

  const [ setDelayTimeout ] = useSetTimeout({ fireOnUnmount: true })

  const uriAsKey = getSnapshotURI({
    bookId,
    spineIdRef,
    width,
    height,
    displaySettings,
    spineInlineToolsHash,
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
      if(stopProcessing()) return

      if(getCfisOrShiftAndSnap.current) {
        getCfisOrShiftAndSnap.current()
    
      } else {
        if(loadSpineAndGetPagesInfoAlreadyCalled.current) return

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

  useDidUpdate(
    () => {
      (async () => {

        //// STEP 3 ////

        const uri = getSnapshotURI({
          bookId,
          spineIdRef,
          width,
          height,
          displaySettings,
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
          stopProcessing,
        })

        if(stopProcessing()) return

        pageIndexInSpine.current++

        if(getCfisOrShiftAndSnap.current) {
          getCfisOrShiftAndSnap.current()
        }

      })()
    },
    [ toolSpots ],
  )

  const onError = useCallback(
    e => {
      console.log('ERROR: PageCapture webview had an error on load', uriAsKey, e)
      reportFinished(uriAsKey)
    },
    [ reportFinished, uriAsKey ],
  )

  const onMessageEvent = async (webView2, data) => {
    if(webView2 !== webView.current || stopProcessing()) return // just in case

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
          if(!stopProcessing()) getCfisOrShiftAndSnap.current()
          return
        }

        toolSpotSets.current = data.payload.toolSpotSets

        const numPages = pageCfis.current.length
        const platformOffset = Platform.OS === 'ios' && realWidth%2 === 1 ? 1 : 0

        if(Platform.OS === 'android') {
          // Delay to ensure render of the initial page in spine
          // since this is not covered by the dup check in takeSnapshot.
          await new Promise(resolve => setDelayTimeout(resolve, 25))
        }

        await new Promise(resolve => {
          getCfisOrShiftAndSnap.current = async () => {

            //// STEP 1 ////

            reportInfoOrCapture(uriAsKey)

            if(stopProcessing()) return

            // pre-skip pages which already exist
            while(
              (await FileSystem.getInfoAsync(
                getSnapshotURI({
                  bookId,
                  spineIdRef,
                  width,
                  height,
                  displaySettings,
                  spineInlineToolsHash,
                  pageIndexInSpine: pageIndexInSpine.current,
                })
              )).exists
            ) {
              pageIndexInSpine.current++
            }

            if(pageIndexInSpine.current >= numPages) return resolve()

            if(stopProcessing()) return

            const shift = pageIndexInSpine.current * (realWidth - platformOffset) * -1 + platformOffset

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

        if(stopProcessing()) return

        addSpinePageCfis({
          bookId,
          idref: spineIdRef,
          key: [getPageCfisKey({ displaySettings, width, height, spineInlineToolsHash })],
          pageCfis: pageCfis.current.map(cfi => cfi || ''),
        })
        
        reportFinished(uriAsKey)

        pageCfis.current = []

        return true

      }

      case 'docElShifted': {

        //// STEP 2 ////

        if(spineIdRef !== data.payload.spineIdRef) return // just in case

        if(stopProcessing()) return

        reportInfoOrCapture(uriAsKey)

        const { offsetX, offsetY, toolSpots } = toolSpotSets.current

        setToolSpots({
          offsetX: offsetX + realMarginHorizontal,
          spots: (toolSpots[pageIndexInSpine.current] || []).map(({ y, cfi, ordering=0 }) => ({
            y: y + offsetY + truePageMarginTop,
            spineIdRef,
            cfi,
            ordering,
          })),
        })

        return true

      }

    }
  }

  // if(processingPaused) return null

  return (
    <View
      key={uriAsKey}
      style={getDefiniteDimensionsStyle(width, height)}
      ref={view}
      collapsable={false}
    >
      <PageWebView
        containerStyle={getDefiniteDimensionsStyle(width, height)}
        style={{
          ...getDefiniteDimensionsStyle(realWidth, truePageHeight),
          top: truePageMarginTop,
          left: realMarginHorizontal,
          right: realMarginHorizontal,
        }}
        bookId={bookId}
        webViewRef={webView}
        // viewRef={view}
        onMessage={onMessageEvent}
        onError={onError}
        initialLocation={JSON.stringify({ idref: spineIdRef })}
        initialDisplaySettings={getDisplaySettingsObj(displaySettings)}
        initialToolCfiCountsInThisSpine={toolCfiCountsInThisSpine}
        instructorHighlights={instructorHighlights}
      />
      <BookTools
        bookId={bookId}
        inEditMode={false}
        spineIdRef={spineIdRef}
        toolSpots={toolSpots}
      />
    </View>
  )
}

const mapStateToProps = () => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addSpinePageCfis,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCapture)
