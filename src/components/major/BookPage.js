import React, { useEffect, useCallback, useRef, useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Linking, Platform, StyleSheet } from "react-native"
import { withRouter } from "react-router"
import { i18n } from "inline-i18n"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"
import Highlighter from "./Highlighter"
import BookPageMessage from "../basic/BookPageMessage"
import CoverAndSpin from "../basic/CoverAndSpin"

import { postMessage } from "../../utils/postMessage"
// import takeSnapshot from "../../utils/takeSnapshot"
import { getDisplaySettingsObj, getFirstBookLinkInfo, latestLocationToStr, getToolbarHeight } from "../../utils/toolbox"
import useDidUpdate from "../../hooks/useDidUpdate"
import useRouterState from "../../hooks/useRouterState"
import usePrevious from "react-use/lib/usePrevious"
import useInstanceValue from '../../hooks/useInstanceValue'
import { useLayout } from 'react-native-hooks'
import useClassroomInfo from "../../hooks/useClassroomInfo"

import { setLatestLocation, startRecordReading, endRecordReading, flushReadingRecords, setSelectedToolUid } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spin: {
    backgroundColor: 'white',
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
    history,
    location,
    requestHideSettings,
    latest_location,
    inEditMode,

    books,
    userDataByBookId,
    displaySettings,

    setLatestLocation,
    startRecordReading,
    endRecordReading,
    flushReadingRecords,
    setSelectedToolUid,
  } = props

  const prevSpineIdRef = usePrevious(spineIdRef)
  const prevPageIndexInSpine = usePrevious(pageIndexInSpine)

  const [ noteInEdit, setNoteInEdit ] = useState(null)

  const loaded = useRef(false)
  const doAfterLoaded = useRef([])
  const webView = useRef()
  const view = useRef()

  const { historyPush, historyReplace, routerState } = useRouterState({ history, location })
  const { latestLocation, widget, textsize, textspacing, theme } = routerState

  const { visibleTools, spines, toc, instructorHighlights } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })
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
      const insertTools = () => postMessage(webView.current, 'insertTools', { toolCfiCounts })
      
      if(loaded.current) {
        insertTools()
      } else {
        doAfterLoaded.current.push(insertTools)
      }
    },
    [ toolCfiCounts ],
  )

  useDidUpdate(
    () => {
      if(Platform.OS === 'web') return
      if(spineIdRef == null || pageIndexInSpine == null) return
      if(prevPageIndexInSpine === -1 && spineIdRef === prevSpineIdRef) return
      // the prevPageIndexInSpine === -1 check is to ensure that it previously did not have snapshots
  
      doAfterLoaded.current.push(() => {
        postMessage(webView.current, 'goToPage', {
          spineIdRef,
          pageIndexInSpine: Math.max(pageIndexInSpine, 0),
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
      postMessage(webView.current, 'goToHref', { href: hrefToGoTo })
    },
    [ hrefToGoTo ],
  )

  const onMessageEvent = useCallback(
    async (webView2, data) => {
      if(webView2 !== webView.current) return // just in case

      switch(data.identifier) {
        case 'pageChanged': {

          const { newSpineIdRef, newCfi } = data.payload
          const latestLocation = {
            spineIdRef: newSpineIdRef,
            cfi: newCfi,
          }

          setLatestLocation({
            bookId,
            latestLocation,
          })

          historyReplace(null, {
            ...routerState,
            latestLocation,
          })

          if(newSpineIdRef !== spineIdRef) {
            endRecordReading()
            startRecordReading({
              bookId,
              spineIdRef: newSpineIdRef,
            })
          }

          indicateLoaded()
          loaded.current = true
          doAfterLoaded.current.forEach(func => func())
          doAfterLoaded.current = []
  
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

          if(prevSpineIndex !== -1 && (newSpineIndex !== -1 || pagedToBeginning || pagedToEnd)) {
            const pagedForward = pagedToEnd || newSpineIndex > prevSpineIndex
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
              })
            }
          }

          return true
        }

        case 'reportToolSpots': {
          const { toolSpots, offsetX, offsetY } = data.payload
          const wideModeShift = getToolbarHeight() - 30

          reportSpots({
            type: 'BookPage',
            styles: {
              width: getWidth(),
              left: 0,
            },
            offsetX,
            spots: toolSpots.map(({ y, cfi, ordering=0 }) => ({
              y: y + offsetY + wideModeShift,
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
          Linking.openURL(data.payload.url).catch(err => {
            console.log('ERROR: Request to open URL failed.', err)
            historyPush("/error", {
              message: i18n("Your device is not allowing us to open this link."),
            })
          })
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
        case 'textSelected': {
          setSelectionInfo(data.payload)
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
    [ bookId, books, spines, toc, spineIdRef, indicateLoaded, requestShowPages, location, reportSpots, inEditMode ],
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

//   doTakeSnapshot = async () => {
//     await takeSnapshot({
//       view,
//       bookId: bookId,
//       fileName: `test.jpg`,
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
      <View style={styles.container} onLayout={onLayout}>
        <PageWebView
          key={bookId}
          bookId={bookId}
          webViewRef={webView}
          onMessage={onMessageEvent}
          initialLocation={initialLocation}
          initialDisplaySettings={initialDisplaySettings}
          initialToolCfiCountsInThisSpine={toolCfiCounts}
          initialAddlParams={widget ? { widget } : null}
          instructorHighlights={instructorHighlights}
          viewRef={view}
        />
        <DisplaySettings
          open={showSettings}
          requestHide={requestHideSettings}
          reportSpots={reportSpots}
        />
        {!!bookLinkInfo &&
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
          selectionInfo={selectionInfo}
          noteInEdit={noteInEdit}
          updateNoteInEdit={setNoteInEdit}
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
  flushReadingRecords,
  setSelectedToolUid,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookPage))