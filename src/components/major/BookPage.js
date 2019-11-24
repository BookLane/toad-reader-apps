import React, { useCallback, useRef, useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Linking, Platform, StyleSheet } from "react-native"
import { withRouter } from "react-router"
import { i18n } from "inline-i18n"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"
import Highlighter from "./Highlighter"
import BookPageMessage from "../basic/BookPageMessage"

import { postMessage } from "../../utils/postMessage"
// import takeSnapshot from "../../utils/takeSnapshot"
import { getDisplaySettingsObj, getFirstBookLinkInfo, latestLocationToStr } from "../../utils/toolbox"
import useDidUpdate from "../../hooks/useDidUpdate"
import useRouterState from "../../hooks/useRouterState"
import usePrevious from "react-use/lib/usePrevious"

import { setLatestLocation, updateAccount, updateBookAccount,
         startRecordReading, endRecordReading, flushReadingRecords } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const BookPage = React.memo(props => {

  const {
    spineIdRef,
    pageIndexInSpine,
    displaySettings,
    hrefToGoTo,
    showSettings,
    selectionInfo,
    setSelectionInfo,
    // capturingSnapshots,
    setLatestLocation,
    bookId,
    indicateLoaded,
    requestShowPages,
    books,
    temporarilyPauseProcessing,
    history,
    location,
    startRecordReading,
    endRecordReading,
    requestHideSettings,
    latest_location,
    updateAccount,
    updateBookAccount,
    flushReadingRecords,
  } = props

  const prevSpineIdRef = usePrevious(spineIdRef)
  const prevPageIndexInSpine = usePrevious(pageIndexInSpine)

  const [ noteInEdit, setNoteInEdit ] = useState(null)

  const loaded = useRef(false)
  const doAfterLoaded = useRef()
  const webView = useRef()
  const view = useRef()

  const { historyPush, historyReplace, routerState } = useRouterState({ history, location })

  useDidUpdate(
    () => {
      postMessage(webView.current, 'setDisplaySettings', getDisplaySettingsObj(displaySettings))
    },
    [ displaySettings ],
  )

  useDidUpdate(
    () => {
      if(Platform.OS === 'web') return
      if(spineIdRef == null || pageIndexInSpine == null) return
      if(prevPageIndexInSpine === -1 && spineIdRef === prevSpineIdRef) return
      // the prevPageIndexInSpine === -1 check is to ensure that it previously did not have snapshots
  
      doAfterLoaded.current = () => {
        doAfterLoaded.current = undefined
        postMessage(webView.current, 'goToPage', {
          spineIdRef,
          pageIndexInSpine: Math.max(pageIndexInSpine, 0),
        })
      }
  
      // TODO: This will need to change as I do the "Do you want to go to the latest location" functionality.
      if(loaded.current) {
        doAfterLoaded.current && doAfterLoaded.current()
      }
    },
    [ spineIdRef, pageIndexInSpine ],
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
        case 'pageChanged':

          const { newSpineIdRef, newCfi } = data.payload
          const latestLocation = {
            spineIdRef: newSpineIdRef,
            cfi: newCfi,
          }

          setLatestLocation({
            bookId,
            latestLocation,
            patchInfo: {
              books,
              updateAccount,
              updateBookAccount,
            },
          })

          historyReplace(null, latestLocation)

          if(newSpineIdRef !== spineIdRef) {
            endRecordReading({
              reportReadingsInfo: {
                books,
                flushReadingRecords,
              },
            })
            startRecordReading({
              bookId,
              spineIdRef: newSpineIdRef,
            })
          }

          indicateLoaded()
          loaded.current = true
          doAfterLoaded.current && doAfterLoaded.current()

          // await this.doTakeSnapshot()

          return false  // i.e. still process pageChanged in the general PageWebView component

        case 'openURL':
          Linking.openURL(data.payload.url).catch(err => {
            console.log('ERROR: Request to open URL failed.', err)
            historyPush("/error", {
              message: i18n("Your device is not allowing us to open this link."),
            })
          })
          return true

        case 'requestPauseProcessing':
          temporarilyPauseProcessing()
          return true

        case 'showPageListView':
          requestShowPages()
          return true

        case 'textUnselected':
        case 'textSelected':
          setSelectionInfo(data.payload)
          return true
      }
    },
    [ bookId, books, spineIdRef, indicateLoaded, requestShowPages, location ],
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

  const initialLocation = routerState.spineIdRef
    ? latestLocationToStr(routerState)
    : latest_location

  return (
    <View style={styles.container}>
      <PageWebView
        key={bookId}
        bookId={bookId}
        webViewRef={webView}
        onMessage={onMessageEvent}
        initialLocation={initialLocation}
        initialDisplaySettings={getDisplaySettingsObj(displaySettings)}
        viewRef={view}
      />
      <DisplaySettings
        open={showSettings}
        requestHide={requestHideSettings}
      />
      {!!selectionInfo &&
        <Highlighter
          bookId={bookId}
          selectionInfo={selectionInfo}
          noteInEdit={noteInEdit}
          updateNoteInEdit={setNoteInEdit}
          setSelectionText={setSelectionText}
        />
      }
      {!!bookLinkInfo &&
        <BookPageMessage
          text={bookLinkInfo.label}
          externalHref={bookLinkInfo.href}
        />
      }
    </View>
  )
})

const mapStateToProps = ({ books, displaySettings }) => ({
  books,
  displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
  updateAccount,
  updateBookAccount,
  startRecordReading,
  endRecordReading,
  flushReadingRecords,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookPage))