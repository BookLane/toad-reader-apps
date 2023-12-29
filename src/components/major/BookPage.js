import React, { useEffect, useCallback, useRef, useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Platform, StyleSheet } from "react-native"
import { i18n } from "inline-i18n"
import usePrevious from "react-use/lib/usePrevious"
import { useLayout } from '@react-native-community/hooks'
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { postMessage } from "../../utils/postMessage"
// import takeSnapshot from "../../utils/takeSnapshot"
import { getDisplaySettingsObj, getFirstBookLinkInfo, latestLocationToStr,
         openURL, getToolCfiCounts } from "../../utils/toolbox"
import useDidUpdate from "../../hooks/useDidUpdate"
import useRouterState from "../../hooks/useRouterState"
import useInstanceValue from '../../hooks/useInstanceValue'
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useWideMode from "../../hooks/useWideMode"
import { setLatestLocation, startRecordReading, endRecordReading, indicateRecordReadingActivity,
         flushReadingRecords, setSelectedToolUid } from "../../redux/actions"
import useIsUpdatingRef from "../../hooks/useIsUpdatingRef"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"
import Highlighter from "./Highlighter"
import BookPageMessage from "../basic/BookPageMessage"
import CoverAndSpin from "../basic/CoverAndSpin"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spin: {
    backgroundColor: 'white',
  },
  webViewContentsIconCover: {  // covers the contents icon shown in readium when there is mouse movement
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 30,
    height: 30,
  },
})

const BookPage = React.memo(props => {

  const {
    spineIdRef,
    pageIndexInSpine,
    hrefToGoTo,
    cfiToGoTo,
    showSettings,
    selectionInfo,
    setSelectionInfo,
    reportSpots,
    toolCfiCounts,
    // capturingSnapshots,
    bookId,
    bookLoaded,
    indicateLoaded,
    requestShowPages,
    temporarilyPauseProcessing,
    requestHideSettings,
    latest_location,
    inEditMode,
    setInPageTurn,
    unselectText,

    books,
    userDataByBookId,
    displaySettings,

    setLatestLocation,
    startRecordReading,
    endRecordReading,
    indicateRecordReadingActivity,
    flushReadingRecords,
    setSelectedToolUid,
  } = props

  const prevSpineIdRef = usePrevious(spineIdRef)
  const prevPageIndexInSpine = usePrevious(pageIndexInSpine)

  const [ noteInEdit, setNoteInEdit ] = useState(null)
  const getNoteInEdit = useInstanceValue(noteInEdit)
  const [ sketchInEdit, setSketchInEdit ] = useState(undefined)
  const getSketchInEdit = useInstanceValue(sketchInEdit)

  const wideMode = useWideMode()
  const safeAreaInsets = useSafeAreaInsets()

  const loaded = useRef(false)
  const doAfterLoaded = useRef([])
  const webView = useRef()
  // const view = useRef()

  const [ latestLocationIsUpdating, startLatestLocationUpdate ] = useIsUpdatingRef()

  const { historyPush, historyReplace, historyGoBackToLibrary, routerState, getRouterState } = useRouterState()
  const { latestLocation, widget, textsize, textspacing, theme } = routerState

  const { visibleTools, spines, toc, instructorHighlights, bookVersion, idpId } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })
  const getVisibleTools = useInstanceValue(visibleTools)

  // const { onLayout, width, y: offsetY } = useLayout()
  const { onLayout, width } = useLayout()
  const getWidth = useInstanceValue(width)
  // const getOffsetY = useInstanceValue(offsetY)

  useEffect(
    () => {
      if(widget) {
        // pass ref info to widget_setup
        const { title, author, spines } = books[bookId]
        
        let spineLabel = ''
        ;(spines || []).some(({ idref, label }) => {
          if(idref === latestLocation.spineIdRef) {
            spineLabel = label
            return true
          }
        })

        parent.postMessage({
          action: 'setReference',
          iframeid: window.name,
          payload: {
            spineLabel,
            title,
            author,
          },
        }, '*')
      }
    },
    [ books, bookId ],
  )

  useDidUpdate(
    () => {
      postMessage(webView.current, 'setDisplaySettings', getDisplaySettingsObj(displaySettings))
    },
    [ displaySettings ],
  )

  useDidUpdate(
    () => {
      if(Platform.OS === 'web') return
      if(spineIdRef == null || pageIndexInSpine == null || pageIndexInSpine === -1) return

      // prevPageIndexInSpine === -1 checks if it previously did not have snapshots.
      // In that case, there is no need to update and cause a flash
      if(prevPageIndexInSpine === -1 && spineIdRef === prevSpineIdRef) return

      // If the page change just came from the WebView, then do not fire the request here.
      if(latestLocationIsUpdating.current) return

      doAfterLoaded.current.push(() => {
        postMessage(webView.current, 'goToPage', {
          spineIdRef,
          pageIndexInSpine: Math.max(pageIndexInSpine, 0),
          toolCfiCounts,
        })
      })
  
      // TODO: This will need to change as I do the "Do you want to go to the latest location" functionality.
      if(loaded.current) {
        doAfterLoaded.current.forEach(func => func())
        doAfterLoaded.current = []
      }
    },
    [ spineIdRef, pageIndexInSpine ],
  )

  useDidUpdate(
    () => {
      if(!cfiToGoTo) return
      postMessage(webView.current, 'goToCfi', cfiToGoTo)
    },
    [ cfiToGoTo ],
  )

  useDidUpdate(
    () => {
      if(!hrefToGoTo) return
      postMessage(webView.current, 'goToHref', hrefToGoTo)
    },
    [ hrefToGoTo ],
  )

  useDidUpdate(
    () => {
      const insertTools = () => postMessage(webView.current, 'insertTools', { toolCfiCounts })
      
      if(loaded.current) {
        insertTools()
      } else {
        doAfterLoaded.current.push(insertTools)
      }
    },
    [ toolCfiCounts ],
  )

  const onMessageEvent = useCallback(
    async (webView2, data) => {
      if(webView2 !== webView.current) return // just in case

      switch(data.identifier) {

        case 'startPageTurn': {
          unselectText()
          setInPageTurn(true)
          return true
        }

        case 'cancelPageTurn': {
          setInPageTurn(false)
          return true
        }

        case 'pageChanged': {

          const { newSpineIdRef, newCfi, initiatedByInteralLinkClick } = data.payload
          const latestLocation = {
            spineIdRef: newSpineIdRef,
            cfi: newCfi,
          }

          setLatestLocation({
            bookId,
            latestLocation,
          })

          ;(initiatedByInteralLinkClick ? historyPush : historyReplace)(null, {
            ...getRouterState(),
            latestLocation,
          })

          if(newSpineIdRef !== spineIdRef) {
            endRecordReading()
            startRecordReading({
              bookId,
              spineIdRef: newSpineIdRef,
            })
          } else {
            indicateRecordReadingActivity()
          }

          setInPageTurn(false)

          indicateLoaded()
          loaded.current = true
          doAfterLoaded.current.forEach(func => func())
          doAfterLoaded.current = []

          startLatestLocationUpdate()

          // await this.doTakeSnapshot()

          return false  // i.e. still process pageChanged in the general PageWebView component
        }

        case 'flipToNewSpine': {
          const { newSpineIdRef } = data.payload || {}
          const spineIdRefs = spines.map(({ idref }) => idref)
          const tocSpineIdRefs = toc.map(({ spineIdRef }) => spineIdRef)

          const prevSpineIndex = spineIdRefs.indexOf(spineIdRef)
          const newSpineIndex = spineIdRefs.indexOf(newSpineIdRef)
          const prevTocSpineIndex = tocSpineIdRefs.indexOf(spineIdRef)
          const pagedToBeginning = newSpineIdRef === undefined && prevTocSpineIndex === 0
          const pagedToEnd = newSpineIdRef === undefined && prevSpineIndex === spineIdRefs.length - 1
          const pagedForward = pagedToEnd || newSpineIndex > prevSpineIndex

          if(prevSpineIndex !== -1 && (newSpineIndex !== -1 || pagedToBeginning || pagedToEnd)) {
            const laterSpineIdRef = pagedToEnd
              ? "AFTER LAST SPINE"
              : (
                pagedToBeginning
                  ? spineIdRef
                  : (
                    pagedForward
                      ? newSpineIdRef
                      : spineIdRef
                  )
              )

            const toolsBeforeLaterSpine = getVisibleTools().filter(({ spineIdRef, cfi }) => (
              spineIdRef === laterSpineIdRef
              && !cfi
            ))

            if(toolsBeforeLaterSpine.length > 0) {
              toolsBeforeLaterSpine.sort((a, b) => a.ordering - b.ordering)

              setSelectedToolUid({
                bookId,
                uid: (pagedForward ? toolsBeforeLaterSpine[0] : toolsBeforeLaterSpine.pop()).uid,
                getRouterState,
                historyReplace,
              })

              return true
            }
          }

          postMessage(webView.current, 'goToPage', {
            spineIdRef: newSpineIdRef,
            ...(pagedForward
              ? { pageIndexInSpine: 0 }
              : { lastPage: true }
            ),
            toolCfiCounts: getToolCfiCounts({
              visibleTools: getVisibleTools(),
              spineIdRef: newSpineIdRef,
            }),
          })

          return true
        }

        case 'reportToolSpots': {
          const { spineIdRef, toolSpots, offsetX, offsetY } = data.payload

          reportSpots({
            type: 'BookPage',
            styles: {
              width: getWidth(),
              left: 0,
            },
            offsetX,
            spots: toolSpots.map(({ y, cfi, ordering=0 }) => ({
              y: y + offsetY,
              spineIdRef,
              cfi,
              ordering,
            })),
          })
  
          return true
        }

        case 'reportPageTurnStart': {
          reportSpots({ type: 'BookPage' })
          return true
        }

        case 'openURL': {
          openURL({ url: data.payload.url, historyPush })
          return true
        }

        case 'requestPauseProcessing': {
          temporarilyPauseProcessing()
          return true
        }

        case 'showPageListView': {
          requestShowPages()
          return true
        }

        case 'textUnselected':
          if(getNoteInEdit() != null) break
          if(getSketchInEdit() !== undefined) break
        case 'textSelected': {
          setSelectionInfo(data.payload)
          indicateRecordReadingActivity()
          return true
        }

        case 'setHeight':
        case 'forbidden':
        case 'loading': {
          if(widget) {
            // pass these on to widget_setup
            parent.postMessage({
              action: data.identifier,
              iframeid: window.name,
              payload: data.payload,
            }, '*');
          }
          return true
        }

      }
    },
    [ bookId, books, spines, toc, spineIdRef, indicateLoaded, requestShowPages, reportSpots, inEditMode ],
  )

  const setSelectionText = useCallback(
    payload => {
      if(!payload) {
        setSelectionInfo(undefined)
      }
      Platform.OS !== 'ios' && postMessage(webView.current, 'setSelectionText', payload)
    },
    [],
  )

  const onError = useCallback(
    e => {
      console.log('ERROR: BookPage webview had an error on load', e)
      historyGoBackToLibrary()
      setTimeout(() => {
        historyPush("/error", {
          message: i18n("Failed to load book."),
        })
      }, 100)
    },
    [],
  )

//   doTakeSnapshot = async () => {
//     await takeSnapshot({
//       view,
//       bookId: bookId,
//       fileName: `test.jpg`,
//       pageIndexInSpine: pageIndexInSpine.current
//     })

//     return true

//   }


  const bookLinkInfo = getFirstBookLinkInfo(books[bookId])

  const initialLocation = latestLocation
    ? latestLocationToStr(latestLocation)
    : latest_location

  const initialDisplaySettings = getDisplaySettingsObj(displaySettings)
  if(textsize) initialDisplaySettings.textSize = textsize
  if(textspacing) initialDisplaySettings.textSpacing = textspacing
  if(theme) initialDisplaySettings.textsize = theme

  return (
    <>
      <View
        style={[
          styles.container,
          {
            marginBottom: safeAreaInsets.bottom,
          },
        ]}
        onLayout={onLayout}
      >
        <PageWebView
          key={bookId}
          bookId={bookId}
          webViewRef={webView}
          onMessage={onMessageEvent}
          onError={onError}
          initialLocation={initialLocation}
          initialDisplaySettings={initialDisplaySettings}
          initialToolCfiCountsInThisSpine={toolCfiCounts}
          initialAddlParams={widget ? { widget } : null}
          instructorHighlights={instructorHighlights}
          doReportToolSpots={bookVersion !== 'BASE'}
        />
        {wideMode && <View style={styles.webViewContentsIconCover} />}
        <DisplaySettings
          open={showSettings}
          requestHide={requestHideSettings}
          reportSpots={reportSpots}
        />
        {!!bookLinkInfo && !widget &&
          <BookPageMessage
            text={bookLinkInfo.label}
            externalHref={bookLinkInfo.href}
          />
        }
      </View>
      {!bookLoaded && <CoverAndSpin style={styles.spin} />}
      {!!selectionInfo &&
        <Highlighter
          bookId={bookId}
          idpId={idpId}
          selectionInfo={selectionInfo}
          noteInEdit={noteInEdit}
          sketchInEdit={sketchInEdit}
          updateNoteInEdit={setNoteInEdit}
          updateSketchInEdit={setSketchInEdit}
          setSelectionText={setSelectionText}
        />
      }
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId, displaySettings }) => ({
  books,
  userDataByBookId,
  displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
  startRecordReading,
  endRecordReading,
  indicateRecordReadingActivity,
  flushReadingRecords,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPage)