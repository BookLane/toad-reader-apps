import React, { useState, useEffect, useCallback } from "react"
import { StyleSheet, StatusBar, View, Platform, Dimensions, AppState } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SafeLayout from "../basic/SafeLayout"
import i18n from "../../utils/i18n"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import BackFunction from '../basic/BackFunction'
import CoverAndSpin from '../basic/CoverAndSpin'
import PageCaptureManager from "../major/PageCaptureManager"
import CustomKeepAwake from "../basic/CustomKeepAwake"

import { refreshUserData } from "../../utils/syncUserData"
import parseEpub from "../../utils/parseEpub"
import { getPageCfisKey, getSpineAndPage, getToolbarHeight, getPageSize,
         isIPhoneX, setStatusBarHidden, showXapiConsent, getIdsFromAccountId } from "../../utils/toolbox"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"
import useDimensions from "../../hooks/useDimensions"
import useWideMode from "../../hooks/useWideMode"
import useSetState from "react-use/lib/useSetState"

import { setLatestLocation, updateAccount, updateBookAccount, setUserData, startRecordReading,
         endRecordReading, flushReadingRecords, setXapiConsentShown, setTocAndSpines } from "../../redux/actions"

const {
  APP_BACKGROUND_COLOR,
  PAGE_ZOOM_MILLISECONDS,
} = Constants.manifest.extra

const pageStyles = {
  position: 'absolute',
  top: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) * -1 : 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
}

const pagesStyles = {
  position: 'absolute',
  top: getToolbarHeight(),
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: APP_BACKGROUND_COLOR,
  zIndex: 2,
}

const zoomStyles = {
  position: 'absolute',
  top: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) * -1 : 0,
  bottom: 0,
  left: 0,
  right: 0,
}

const contentsStyles = {
  position: 'absolute',
  top: getToolbarHeight(),
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
}

const showStyles = {
  zIndex: 2,
}

const showZoomStyles = {
  zIndex: 4,
}

const hidePageStyles = {
  display: 'none',
}

const styles = StyleSheet.create({
  showPage: {
    ...pageStyles,
    ...showStyles,
  },
  hidePage: {
    ...pageStyles,
    ...hidePageStyles,
  },
  pages: {
    ...pagesStyles,
  },
  showZoom: {
    ...zoomStyles,
    ...showZoomStyles,
  },
  hideZoom: {
    ...zoomStyles,
    ...hidePageStyles,
  },
  showContents: {
    ...contentsStyles,
    ...showStyles,
  },
  hideContents: {
    ...contentsStyles,
  },
  panels: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  mainPanel: {
    flex: 1,
  },
  sidePanel: {
    backgroundColor: '#fff',
    width: 0,
  },
})

const getBookId = ({ pathname }) => pathname.split('/').pop()

const Book = React.memo(({

  history,
  location,
  // match,

  idps,
  accounts,
  books,
  userDataByBookId,
  displaySettings,
  sidePanelSettings,
  readerStatus,

  setLatestLocation,
  updateAccount,
  updateBookAccount,
  setUserData,
  startRecordReading,
  endRecordReading,
  flushReadingRecords,
  setXapiConsentShown,
  setTocAndSpines,

}) => {

  const [ capturingSnapshots, setCapturingSnapshots ] = useState(false)
  const [ processingPaused, setProcessingPaused ] = useState(true)
  const [ currentAppState, setCurrentAppState ] = useState('active')

  const [{
    bookLoaded,
    mode,
    showSettings,
    hrefToGoTo,
    zoomToInfo,
    snapshotCoords,
    snapshotZoomed,
    onZoomCompletion,
  }, setState ] = useSetState({
    bookLoaded: false,
    mode: 'page',
    showSettings: false,
    snapshotZoomed: true,
  })


  const { historyPush } = useRouterState({ history })

  const [ setStatusBarTimeout ] = useSetTimeout()
  const [ setAwaitLoadTimeout, clearAwaitLoadTimeout ] = useSetTimeout()
  const [ setGetTOCTimeout ] = useSetTimeout()
  const [ setTemporarilyPauseProcessingTimeout, clearTemporarilyPauseProcessingTimeout ] = useSetTimeout()

  const bookId = getBookId(location)
  const latest_location = (userDataByBookId[bookId] || {}).latest_location
  const { spineIdRef, cfi, pageIndexInSpine, pageCfisKnown } = getSpineAndPage({ latest_location, book: books[bookId], displaySettings })

  const statusBarHeight = StatusBar.currentHeight || (isIPhoneX ? 24 : -10)
  const { width, height } = useDimensions().window
  const wideMode = useWideMode()

  const reportReadingsInfo = {
    idps,
    accounts,
    books,
    flushReadingRecords,      
  }

  useEffect(
    () => {
      // get fresh user data
      Object.keys(books[bookId].accounts).forEach(accountId => {
        refreshUserData({
          accountId,
          bookId,
          info: {
            idps,
            accounts,
            books,
            userDataByBookId,
            updateAccount,
            setUserData,
          },
        })
      })
    },
    [],
  )

  useEffect(
    () => {
      const handleAppStateChange = nextAppState => {
        if(mode === 'page') {
          if(currentAppState === 'active' && nextAppState !== 'active') {
            endRecordReading({ reportReadingsInfo })
      
          } else if(currentAppState !== 'active' && nextAppState === 'active') {
            startRecordReading({
              bookId,
              spineIdRef,
            })
          }
        }
    
        setCurrentAppState(nextAppState)
      }
    
      AppState.addEventListener('change', handleAppStateChange)

      startRecordReading({
        bookId,
        spineIdRef,
      })

      return () => {
        if(mode === 'page') {
          endRecordReading({ reportReadingsInfo })
        }
    
        AppState.removeEventListener('change', handleAppStateChange)
      }
    },
    [ spineIdRef, currentAppState, mode, JSON.stringify(reportReadingsInfo) ],
  )

  useEffect(
    () => {
      setStatusBarHidden(true)
      return () => setStatusBarHidden(false)
    },
    [],
  )

  useEffect(
    () => showXapiConsent({ idps, setXapiConsentShown }),
    [],
  )

  useEffect(
    () => {
      const getTocForWeb = async waitSecsOnFail => {
        // get toc for web
        if(Platform.OS === 'web' && books[bookId].toc === undefined) {
    
          const accountId = Object.keys(books[bookId].accounts)[0]
          const account = accounts[accountId]
          const { idpId } = getIdsFromAccountId(accountId)
          const idp = idps[idpId]
    
          const { toc, spines, success } = await parseEpub({ bookId, idp, account })
    
          if(success) {
            setTocAndSpines({ bookId, toc, spines })
          } else {
            setGetTOCTimeout(() => getTocForWeb(Math.min(waitSecsOnFail * 2, 1000 * 60 * 5)), waitSecsOnFail)
          }
    
        }
      }
      getTocForWeb(5000)
    },
    [ books, bookId, accounts, idps ],
  )

  const zoomToPage = useCallback(
    ({ zoomToInfo, snapshotCoords }) => {
      const { spineIdRef, cfi } = zoomToInfo  // must also include pageIndexInSpine

      setStatusBarTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100)

      setState({
        mode: 'zooming',
        zoomToInfo,
        snapshotCoords,
        snapshotZoomed: true,
        onZoomCompletion: () => {

          if(zoomToInfo.spineIdRef !== spineIdRef || (zoomToInfo.cfi && zoomToInfo.cfi != cfi)) {

            setState({
              bookLoaded: false,
              onZoomCompletion: null,
            })

            if(!zoomToInfo.cfi && Platform.OS !== 'android') {
              setState({ mode: 'page' })
            }

            // The indicateLoaded function is called by a pageChanged postMessage.
            // In the event that this never happens, we don't want to leave things stuck.
            // Therefore, use a timeout to ensure this happens, and otherwise display an
            // error message.
            setAwaitLoadTimeout(() => {
              historyPush("/error", {
                message: i18n("Sorry! There was an error flipping to that page."),
              })
              indicateLoaded(true)
            }, 5000)

            setLatestLocation({
              bookId,
              latestLocation: zoomToInfo,
              patchInfo: {
                idps,
                accounts,
                books,
                userDataByBookId,
                updateAccount,
                updateBookAccount,
              },
            })

          } else {  // back to the same page

            setState({
              mode: 'page',
              zoomToInfo: null,
              onZoomCompletion: null,
            })

            temporarilyPauseProcessing()
          }
        },
      })

      startRecordReading({
        bookId,
        spineIdRef,
      })
    },
    [ spineIdRef, cfi, idps, accounts, books, userDataByBookId ],
  )

  const goToHref = useCallback(
    ({ href }) => {
      pauseProcessing()

      setState({
        mode: 'page',
        snapshotZoomed: true,
        hrefToGoTo: href,
      })
      
      setStatusBarTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100)

      startRecordReading({
        bookId,
        spineIdRef,
        // Starts a reading record with current spineIdRef, not necessarily that
        // of the href. If it turns out they are one an the same, this function
        // call was needed. If the href brings them to a new spine, then this 
        // reading record will be stopped once that loads and the new one will
        // be initiated.
      })
    },
    [ bookId, spineIdRef ],
  )

  const toggleBookView = useCallback(
    () => {

      if(wideMode) {
        if(mode === 'page') {
          requestShowPages()
        } else {
          backToReading()
        }
        return
      }

      setState({
        mode: mode === 'pages' ? 'contents' : 'pages',
      })

    },
    [ mode, wideMode ],
  )

  const backToReading = useCallback(
    () => {
      const { pageWidth } = getPageSize({ width, height })

      const snapshotCoords = {
        x: width / 2  - pageWidth / 2,
        y: height,
      }
      
      setStatusBarTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100)

      setState({
        mode: 'zooming',
        snapshotCoords,
        snapshotZoomed: true,
        onZoomCompletion: () => {
          setState({
            mode: 'page',
            onZoomCompletion: null,
          })
          temporarilyPauseProcessing()
        },
      })

      startRecordReading({
        bookId,
        spineIdRef,
      })

    },
    [ bookId, spineIdRef, width, height ],
  )

  const requestShowPages = useCallback(
    () => {

      if(wideMode && Platform.OS === 'web') return

      pauseProcessing()

      endRecordReading({ reportReadingsInfo })

      setStatusBarHidden(false)

      setState({
        mode: 'zooming',
        snapshotZoomed: false,
        onZoomCompletion: () => {
          setState({
            mode: Platform.OS === 'web' ? 'contents' : 'pages',
            onZoomCompletion: null,
          })
        },
      })
    },
    [ JSON.stringify(reportReadingsInfo), wideMode ],
  )

  const requestHideSettings = useCallback(
    () => {
      setState({ showSettings: false })
      temporarilyPauseProcessing()
    },
    [],
  )

  const indicateLoaded = useCallback(
    zooming => {

      if(zooming === undefined) {
        zooming = mode === 'zooming'
      }

      clearAwaitLoadTimeout()

      setState({
        bookLoaded: true,
        mode: zooming ? 'page' : mode,
        zoomToInfo: zooming ? null : zoomToInfo,
      })
      
      temporarilyPauseProcessing()
    },
    [ mode, zoomToInfo ],
  )

  const showDisplaySettings = useCallback(
    () => {
      pauseProcessing()

      setState({
        showSettings: true,
        mode: 'page',
        snapshotZoomed: true,
      })

      setStatusBarHidden(true)

      startRecordReading({
        bookId,
        spineIdRef,
      })
    },
    [ bookId, spineIdRef ],
  )

  // const recommendBook = useCallback(() => alert('Recommend this book'), [])

  // const goToHighlights = useCallback(
  //   () => history.push(`${match.url}/highlights`),
  //   [ match ],
  // )

  const setPauseProcessing = useCallback(
    processingPaused => {
      clearTemporarilyPauseProcessingTimeout()
      setProcessingPaused(processingPaused)
    },
    [],
  )

  const pauseProcessing = useCallback(() => setPauseProcessing(true), [])
  const unpauseProcessing = useCallback(() => setPauseProcessing(false), [])

  const temporarilyPauseProcessing = useCallback(
    () => {
      // If I find I need to bring this requestAnimationFrame back, then I'll need to check
      // the current value of processingPaused before setting this timeout, and not set
      // the timeout if it is already paused.
      // requestAnimationFrame(() => {
        setPauseProcessing(true)
        setTemporarilyPauseProcessingTimeout(unpauseProcessing, 4000)
      // })
    },
    [],
  )

  const setSnapshotCoords = useCallback(snapshotCoords => setState({ snapshotCoords }), [])

  const pageCfisKey = getPageCfisKey({ displaySettings })
  const { title } = (books && books[bookId]) || {}
    
  if(Platform.OS !== 'web' && readerStatus !== 'ready') {
    return (
      <SafeLayout>
        <CoverAndSpin
          text={i18n("Updating reader...")}
        />
      </SafeLayout>
    )
  }

  return (
    <SafeLayout>
      {mode !== 'page' && <BackFunction func={backToReading} />}
      {mode === 'page' && <CustomKeepAwake />}
      <View style={styles.panels}>
        <View style={[
          styles.mainPanel,
          mode !== 'contents' ? showStyles : null,
        ]}>
          <BookHeader
            bookId={bookId}
            title={title}
            mode={mode}
            toggleBookView={toggleBookView}
            backToReading={backToReading}
            showDisplaySettings={showDisplaySettings}
            width={width}  // By sending this as a prop, I force a rerender
          />
          {Platform.OS !== 'web' &&
            <View style={styles.pages}>
              <BookPages
                bookId={bookId}
                spineIdRef={spineIdRef}
                pageCfisKey={pageCfisKey}
                pageIndexInSpine={pageIndexInSpine}
                spines={bookLoaded && books[bookId].spines}
                zoomToPage={zoomToPage}
                updateSnapshotCoords={setSnapshotCoords}
                statusBarHeight={statusBarHeight}
                capturingSnapshots={capturingSnapshots}
              />
            </View>
          }
          <View style={mode === 'page' ? styles.showPage : styles.hidePage}>
            <BookPage
              bookId={bookId}
              latest_location={latest_location}
              spineIdRef={spineIdRef}
              pageIndexInSpine={pageIndexInSpine}
              requestShowPages={requestShowPages}
              showSettings={showSettings}
              requestHideSettings={requestHideSettings}
              indicateLoaded={indicateLoaded}
              hrefToGoTo={hrefToGoTo}
              capturingSnapshots={capturingSnapshots}
              temporarilyPauseProcessing={temporarilyPauseProcessing}
            />
          </View>
          <View style={mode === 'zooming' ? styles.showZoom : styles.hideZoom}>
            <ZoomPage
              bookId={bookId}
              spineIdRef={zoomToInfo ? zoomToInfo.spineIdRef : spineIdRef}
              pageCfisKey={pageCfisKey}
              pageIndexInSpine={zoomToInfo ? zoomToInfo.pageIndexInSpine : pageIndexInSpine}
              onZoomCompletion={onZoomCompletion}
              snapshotCoords={snapshotCoords}
              zoomed={snapshotZoomed}
              zoomingEnabled={mode === 'zooming'}
              pageCfiKnown={!!(zoomToInfo ? zoomToInfo.cfi : pageCfisKnown)}
            />
          </View>
        </View>
        <View style={[
          mode === 'contents' ? styles.showContents : (!wideMode ? styles.hideContents : null),
          wideMode ? styles.sidePanel : null,
          (wideMode && sidePanelSettings.open) ? { width: sidePanelSettings.width } : null,
        ]}>
          <BookContents
            goToHref={goToHref}
            toc={bookLoaded && books[bookId].toc}
            bookId={bookId}
          />
        </View>
        <View />
      </View>

      {Platform.OS !== 'web' &&
        <PageCaptureManager
          bookId={bookId}
          setCapturingSnapshots={setCapturingSnapshots}
          processingPaused={processingPaused}
        />
      }

    </SafeLayout>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId, displaySettings, sidePanelSettings, readerStatus }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
  displaySettings,
  sidePanelSettings,
  readerStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
  updateAccount,
  updateBookAccount,
  setUserData,
  startRecordReading,
  endRecordReading,
  flushReadingRecords,
  setXapiConsentShown,
  setTocAndSpines,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)