import React, { useState, useEffect, useCallback } from "react"
import { StyleSheet, StatusBar, View, Platform, Dimensions, Linking, AppState } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SafeLayout from "../basic/SafeLayout"
import i18n from "../../utils/i18n.js"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import Options from "../major/Options"
import BackFunction from '../basic/BackFunction'
import CoverAndSpin from '../basic/CoverAndSpin'
import PageCaptureManager from "../major/PageCaptureManager"
import CustomKeepAwake from "../basic/CustomKeepAwake"

import { confirmRemoveEPub } from "../../utils/removeEpub.js"
import { refreshUserData } from "../../utils/syncUserData.js"
import parseEpub from "../../utils/parseEpub.js"
import { getPageCfisKey, getSpineAndPage,
         getToolbarHeight, getFirstBookLinkInfo, getPageSize,
         isIPhoneX, setStatusBarHidden, showXapiConsent } from "../../utils/toolbox.js"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress,
         setLatestLocation, updateAccount, updateBookAccount, setUserData, startRecordReading,
         endRecordReading, flushReadingRecords, setXapiConsentShown, setTocAndSpines } from "../../redux/actions.js"

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
  readerStatus,

  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
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

  const [ bookLoaded, setBookLoaded ] = useState(false)
  const [ mode, setMode ] = useState('page')
  const [ showOptions, setShowOptions ] = useState(false)
  const [ showSettings, setShowSettings ] = useState(false)
  const [ hrefToGoTo, setHrefToGoTo ] = useState(null)
  const [ zoomToInfo, setZoomToInfo ] = useState(null)
  const [ snapshotCoords, setSnapshotCoords ] = useState(null)
  const [ snapshotZoomed, setSnapshotZoomed ] = useState(true)
  const [ onZoomCompletion, setOnZoomCompletion ] = useState(null)
  const [ capturingSnapshots, setCapturingSnapshots ] = useState(false)
  const [ processingPaused, setProcessingPaused ] = useState(true)
  const [ currentAppState, setCurrentAppState ] = useState('active')

  const { historyPush } = useRouterState({ history })

  const [ setStatusBarTimeout ] = useSetTimeout()
  const [ setAwaitLoadTimeout, clearAwaitLoadTimeout ] = useSetTimeout()
  const [ setGetTOCTimeout ] = useSetTimeout()
  const [ setTemporarilyPauseProcessingTimeout, clearTemporarilyPauseProcessingTimeout ] = useSetTimeout()

  const bookId = getBookId(location)
  const bookLinkInfo = getFirstBookLinkInfo(books[bookId])
  const latest_location = (userDataByBookId[bookId] || {}).latest_location
  const { spineIdRef, cfi, pageIndexInSpine, pageCfisKnown } = getSpineAndPage({ latest_location, book: books[bookId], displaySettings })

  const statusBarHeight = StatusBar.currentHeight || (isIPhoneX ? 24 : -10)

  const options = [
    // {
    //   text: i18n("Recommend this book"),
    //   onPress: recommendBook,
    // },
    // {
    //   text: i18n("My highlights and notes"),
    //   onPress: goToHighlights,
    // },
    ...(
      bookLinkInfo
        ? [{
          text: bookLinkInfo.label,
          onPress: goToBookLink,
        }]
        : []
    ),
    {
      text: i18n("Remove from device"),
      onPress: removeFromDevice,
    },
  ]

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
          const idpId = accountId.split(':')[0]
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

      setMode('zooming')
      setZoomToInfo(zoomToInfo)
      setSnapshotCoords(snapshotCoords)
      setSnapshotZoomed(true)
      setOnZoomCompletion(() => () => {

        if(zoomToInfo.spineIdRef !== spineIdRef || (zoomToInfo.cfi && zoomToInfo.cfi != cfi)) {

          setOnZoomCompletion(null)
          setBookLoaded(false)

          if(!zoomToInfo.cfi && Platform.OS !== 'android') {
            setMode('page')
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

          setZoomToInfo(null)
          setOnZoomCompletion(null)
          setMode('page')

          temporarilyPauseProcessing()
        }
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

      setMode('page')
      setSnapshotZoomed(true)
      setHrefToGoTo(href)
      
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
      setMode(mode === 'pages' ? 'contents' : 'pages')
      setShowOptions(false)
    },
    [ mode ],
  )

  const backToReading = useCallback(
    () => {
      const { width, height } = Dimensions.get('window')
      const { pageWidth } = getPageSize({ width, height })

      const snapshotCoords = {
        x: width / 2  - pageWidth / 2,
        y: height,
      }
      
      setStatusBarTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100)

      setMode('zooming')
      setSnapshotCoords(snapshotCoords)
      setSnapshotZoomed(true)
      setOnZoomCompletion(() => () => {
        setOnZoomCompletion(null)
        setMode('page')
        temporarilyPauseProcessing()
      })

      startRecordReading({
        bookId,
        spineIdRef,
      })

    },
    [ bookId, spineIdRef ],
  )

  const toggleShowOptions = useCallback(
    () => setShowOptions(!showOptions),
    [ showOptions ],
  )
  
  const hideOptions = useCallback(() => setShowOptions(false), [])

  const requestShowPages = useCallback(
    () => {
      pauseProcessing()

      endRecordReading({ reportReadingsInfo })

      setStatusBarHidden(false)

      setMode('zooming')
      setSnapshotZoomed(false)
      setOnZoomCompletion(() => () => {
        setMode(Platform.OS === 'web' ? 'contents' : 'pages')
        setOnZoomCompletion(null)
      })
    },
    [ JSON.stringify(reportReadingsInfo) ],
  )

  const requestHideSettings = useCallback(
    () => {
      setShowSettings(false)
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

      setBookLoaded(true)
      setMode(zooming ? 'page' : mode)
      setZoomToInfo(zooming ? null : zoomToInfo)
      
      temporarilyPauseProcessing()
    },
    [ mode, zoomToInfo ],
  )

  const showDisplaySettings = useCallback(
    () => {
      pauseProcessing()

      setShowSettings(true)
      setMode('page')
      setSnapshotZoomed(true)

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

  const removeFromDevice = useCallback(
    () => {
      confirmRemoveEPub({
        books,
        removeFromBookDownloadQueue,
        setDownloadStatus,
        clearTocAndSpines,
        clearUserDataExceptProgress,
        bookId,
        done: () => {
          history.go(-2)
        }
      })
    },
    [ books, bookId ],
  )

  const goToBookLink = useCallback(
    () => {
      const bookLinkInfo = getFirstBookLinkInfo(books[bookId])

      Linking.openURL(bookLinkInfo.href).catch(err => {
        console.log('ERROR: Request to open URL failed.', err)
        historyPush("/error", {
          message: i18n("Your device is not allowing us to open this link."),
        })
      })
    },
    [ books, bookId ],
  )

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
      requestAnimationFrame(() => {
        setPauseProcessing(true)
        setTemporarilyPauseProcessingTimeout(unpauseProcessing, 4000)
      })
    },
    [],
  )

  const pageCfisKey = getPageCfisKey({ displaySettings })
  const { title } = (books && books[bookId]) || {}
  const { width } = Dimensions.get('window')
    
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
      <BookHeader
        title={title}
        mode={mode}
        toggleBookView={toggleBookView}
        toggleShowOptions={toggleShowOptions}
        showDisplaySettings={showDisplaySettings}
        width={width}  // By sending this as a prop, I force a rerender
      />
      {mode === 'page' && <CustomKeepAwake />}
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
      <View style={mode === 'contents' ? styles.showContents : styles.hideContents}>
        <BookContents
          goToHref={goToHref}
          toc={bookLoaded && books[bookId].toc}
        />
      </View>
      {showOptions && mode !== 'page' &&
        <Options
          requestHide={hideOptions}
          options={options}
        />
      }
      <View />

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

const mapStateToProps = ({ idps, accounts, books, userDataByBookId, displaySettings, readerStatus }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
  displaySettings,
  readerStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
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