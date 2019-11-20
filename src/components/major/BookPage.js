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
import { getDisplaySettingsObj, getFirstBookLinkInfo } from "../../utils/toolbox"
import useInstanceValue from "../../hooks/useInstanceValue"
import useDidUpdate from "../../hooks/useDidUpdate"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"
import usePrevious from "react-use/lib/usePrevious"

import { setLatestLocation, updateAccount, updateBookAccount, setUserData,
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
    // capturingSnapshots,
    setLatestLocation,
    bookId,
    indicateLoaded,
    requestShowPages,
    books,
    temporarilyPauseProcessing,
    history,
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

  const [ selectionInfo, setSelectionInfo ] = useState(null)
  const [ noteInEdit, setNoteInEdit ] = useState(null)

  const loaded = useRef(false)
  const doAfterLoaded = useRef()
  const webView = useRef()
  const view = useRef()

  const getNoteInEdit = useInstanceValue(noteInEdit)

  const [ setUnselectTimeout, clearUnselectTimeout ] = useSetTimeout()

  const { historyPush } = useRouterState({ history })

  useDidUpdate(
    () => {
      postMessage(webView.current, 'setDisplaySettings', getDisplaySettingsObj(displaySettings))
    },
    [ displaySettings ],
  )

  useDidUpdate(
    () => {
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

          setLatestLocation({
            bookId,
            latestLocation: {
              spineIdRef: newSpineIdRef,
              cfi: newCfi,
            },
            patchInfo: {
              books,
              updateAccount,
              updateBookAccount,
            },
          })

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
          // I tried to find a way to catch the initial tap on the text
          // area so as to prevent the textUnselected before focus issue
          // without using a timeout, but was unable to. This is less
          // graceful, but it works.
          if(getNoteInEdit() == null) {
            setUnselectTimeout(() => {
              if(getNoteInEdit() == null) {
                setSelectionInfo(data.payload)
              }
            }, 200)
          }
          return true

        case 'textSelected':
          clearUnselectTimeout()
          setSelectionInfo(data.payload)
          return true
      }
    },
    [ bookId, books, spineIdRef, indicateLoaded, requestShowPages, history ],
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

  return (
    <View style={styles.container}>
      <PageWebView
        key={bookId}
        bookId={bookId}
        webViewRef={webView}
        onMessage={onMessageEvent}
        initialLocation={latest_location}
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
  setUserData,
  startRecordReading,
  endRecordReading,
  flushReadingRecords,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookPage))