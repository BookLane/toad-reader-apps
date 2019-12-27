import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { StyleSheet, StatusBar, View, Platform, AppState } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import ToolFlipper from "../major/ToolFlipper"
import BackFunction from '../basic/BackFunction'
import CoverAndSpin from '../basic/CoverAndSpin'
import PageCaptureManager from "../major/PageCaptureManager"
import CustomKeepAwake from "../basic/CustomKeepAwake"
import ToolChip from "../basic/ToolChip"

import { refreshUserData } from "../../utils/syncUserData"
import parseEpub from "../../utils/parseEpub"
import { getPageCfisKey, getSpineAndPage, getToolbarHeight, getPageSize,
         isIPhoneX, setStatusBarHidden, showXapiConsent, getIdsFromAccountId } from "../../utils/toolbox"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"
import useDimensions from "../../hooks/useDimensions"
import useWideMode from "../../hooks/useWideMode"
import useSetState from "react-use/lib/useSetState"
import useInstanceValue from "../../hooks/useInstanceValue"
import useScroll from '../../hooks/useScroll'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import { setLatestLocation, updateAccount, updateBookAccount, setUserData,
         startRecordReading, endRecordReading, flushReadingRecords, setXapiConsentShown,
         setTocAndSpines, setSyncStatus, updateTool, setSelectedToolUid } from "../../redux/actions"

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
    zIndex: 6,
  },
  toolChipContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  movingToolCover: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  toolSpotMarker: {
    position: 'absolute',
    height: 2,
    backgroundColor: 'rgb(51, 102, 255)',
  },
})

const Book = React.memo(({

  history,
  location,
  match,

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
  setSyncStatus,
  updateTool,
  setSelectedToolUid,

}) => {

  const [ capturingSnapshots, setCapturingSnapshots ] = useState(false)
  const [ processingPaused, setProcessingPaused ] = useState(true)
  const [ currentAppState, setCurrentAppState ] = useState('active')
  const [ selectionInfo, setSelectionInfo ] = useState(null)
  const [ toolMoveInfo, setToolMoveInfo ] = useState()
  const [ toolsToOverlayOnThisPage, setToolsToOverlayOnThisPage ] = useState([])
  const [ inEditMode, setInEditMode ] = useState(false)

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

  const toggleInEditMode = useCallback(
    () => console.log(inEditMode) || setInEditMode(!inEditMode),
    [ inEditMode ],
  )

  const getToolMoveInfo = useInstanceValue(toolMoveInfo)
  const getUserDataByBookId = useInstanceValue(userDataByBookId)
  const getInEditMode = useInstanceValue(inEditMode)

  const toolSpots = useRef({})
  const movingToolOffsets = useRef()

  const { historyPush, historyReplace, routerState } = useRouterState({ history, location })
  const { widget } = routerState

  const [ setStatusBarTimeout ] = useSetTimeout()
  const [ setAwaitLoadTimeout, clearAwaitLoadTimeout ] = useSetTimeout()
  const [ setGetTOCTimeout ] = useSetTimeout()
  const [ setTemporarilyPauseProcessingTimeout, clearTemporarilyPauseProcessingTimeout ] = useSetTimeout()

  const { bookId } = match.params
  const latest_location = (userDataByBookId[bookId] || {}).latest_location
  const { spineIdRef, cfi, pageIndexInSpine, pageCfisKnown } = getSpineAndPage({ latest_location, book: books[bookId], displaySettings })

  const statusBarHeight = StatusBar.currentHeight || (isIPhoneX ? 24 : -10)
  const { width, height } = useDimensions().window
  const wideMode = useWideMode()

  const { classroomUid, tools, selectedToolUid } = useClassroomInfo({ books, bookId, userDataByBookId })
  const getTools = useInstanceValue(tools)

  const toolCfiCounts = useMemo(
    () => {
      const countsByCfi = {}

      tools.forEach(({ cfi, _delete, ...tool }) => {
        if(_delete) return
        if(tool.spineIdRef !== spineIdRef) return
        if(!countsByCfi[cfi]) {
          countsByCfi[cfi] = 0
        }
        countsByCfi[cfi]++
      })

      return countsByCfi
    },
    [ JSON.stringify(tools), spineIdRef ],
  )

  const reportReadingsInfo = {
    idps,
    accounts,
    books,
    flushReadingRecords,      
  }

  useEffect(
    () => {
      if(!books[bookId]) return

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
            updateBookAccount,
            setSyncStatus,
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
      if(!books[bookId]) return

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

  useEffect(
    () => {
      if(!books[bookId]) {
        // direct load to invalid book
        const message = i18n("Either this book does not exist, or you do not have access to it.")

        if(widget) {
          parent.postMessage({
            action: 'forbidden',
            iframeid: window.name,
            payload: message,
          }, '*');

        } else {
          setTimeout(() => {
            historyReplace("/error", {
              title: i18n("Book not found"),
              message,
            })
          })
        }
      }
    },
    [ books, bookId ],
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
                userDataByBookId,
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
    ({ href, spineIdRef }) => {
      pauseProcessing()

      if(spineIdRef) {
        // This is to make the toc selection show there immediately
        setLatestLocation({
          bookId,
          latestLocation: {
            spineIdRef,
          },
        })
      }

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
        // of the href. If it turns out they are one and the same, this function
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

  const unselectTool = useCallback(
    () => setSelectedToolUid({ bookId }),
    [ bookId ],
  )

  const blurEvents = useCallback(
    ({ nativeEvent: { target } }) => {
      // TODO: This will not work on native apps  
      if(!target.closest('[data-id=highlighter]')) {
        setSelectionInfo()
      }
      if(
        !target.closest('[data-id=BookLeft]')
        && !target.closest('[data-id=EnhancedHeader]')
        && !target.closest('[data-id=FAB_addTool]')
        && selectedToolUid
      ) {
        unselectTool()
      }
    },
    [ selectedToolUid, unselectTool ],
  )

  const setSnapshotCoords = useCallback(snapshotCoords => setState({ snapshotCoords }), [])

  const reportSpots = useCallback(
    ({ type, ...info }) => {
      toolSpots.current[type] = info

      if(type === 'BookPage') {

        const spineToolsByCfi = {}
        getTools().forEach(tool => {
          if(tool.spineIdRef === spineIdRef && tool.cfi && !tool._delete) {
            if(!spineToolsByCfi[tool.cfi]) {
              spineToolsByCfi[tool.cfi] = []
            }
            spineToolsByCfi[tool.cfi].push(tool)
          }
        })

        const toolsToOverlayOnThisPage = []

        ;(info.spots || []).forEach(({ cfi, y, ordering: spotOrdering }) => {
          if(spotOrdering !== 0) return

          ;(spineToolsByCfi[cfi] || []).forEach(({ uid, toolType, name, ordering }) => {

            toolsToOverlayOnThisPage.push(
              <View key={uid} style={styles.toolChipContainer}>
                <ToolChip
                  style={{
                    left: info.offsetX,
                    top: y + 3 + (ordering * 34),  // the 3 matches the top/bottom padding when the chip is in the toc
                  }}
                  uid={uid}
                  label={name}
                  toolType={toolType}
                  onPress={() => setSelectedToolUid({
                    bookId,
                    uid,
                  })}
                  onToolMove={onToolMove}
                  onToolRelease={onToolRelease}        
                />
              </View>
            )
          })
        })

        setToolsToOverlayOnThisPage(toolsToOverlayOnThisPage)

        if(info.spots) {
          setState({ hrefToGoTo: undefined })
        }

      }
    },
    [ bookId, spineIdRef ],
  )

  const { onScroll: onBookContentsScroll, y: bookContentsScrollY } = useScroll()
  const getBookContentsScrollY = useInstanceValue(bookContentsScrollY)

  const onToolMove = useCallback(
    ({ nativeEvent, label, toolType, uid }) => {
      if(!getInEditMode()) return false

      if(!movingToolOffsets.current) {
        if(Platform.OS === 'web' && nativeEvent.target.closest('[data-focusable]')) {
          const { x, y } = nativeEvent.target.closest('[data-focusable]').getBoundingClientRect()
          movingToolOffsets.current = {
            x: nativeEvent.pageX - x,
            y: nativeEvent.pageY - y,
          }
        } else {
          movingToolOffsets.current = {
            x: nativeEvent.locationX,
            y: nativeEvent.locationY,
          }
        }
      }

      const top = nativeEvent.pageY - parseInt(movingToolOffsets.current.y, 10)
      const left = nativeEvent.pageX - parseInt(movingToolOffsets.current.x, 10)
      let moveInfo = {
        spotStyle: {
          display: 'none',
        },
      }

      for(let type in toolSpots.current) {
        const { styles, spots } = toolSpots.current[type]

        if(styles.left === 0 && nativeEvent.pageX > styles.width) continue
        if(styles.right === 0 && width - nativeEvent.pageX > styles.width) continue

        spots.some(({ y, ...info }) => {
          const adjustedY = y - (type === 'BookPage' ? 2 : getBookContentsScrollY())
          if(adjustedY + 4 > top) {  // the 4 relates to the paddingVertical of listItemWithTool in BookContentsLine
            moveInfo = {
              ...info,
              spotStyle: {
                ...styles,
                top: adjustedY,
              },
            }
            return true
          }
        })

      }

      setToolMoveInfo({
        ...moveInfo,
        chipProps: {
          style: {
            left,
            top,
          },
          toolType,
          label,
        },
        uid,
      })

      return true
    },
    [ width ],
  )

  const onToolRelease = useCallback(
    () => {
      const { spineIdRef, cfi, ordering, uid } = getToolMoveInfo() || {}

      if(spineIdRef) {
        updateTool({
          bookId,
          classroomUid,
          uid,
          spineIdRef,
          cfi,
          ordering,
          patchInfo: {
            userDataByBookId: getUserDataByBookId(),
          },
        })
      }

      setToolMoveInfo()
      movingToolOffsets.current = undefined
    },
    [ bookId, classroomUid ],
  )

  const onBackPress = useCallback(
    () => (selectedToolUid ? unselectTool : history.goBack)(),
    [ unselectTool, selectedToolUid ],
  )

  const pageCfisKey = getPageCfisKey({ displaySettings })
  const { title } = (books && books[bookId]) || {}

  if(!books[bookId]) {
    // direct load to invalid book
    return null
  }

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
      <View
        style={styles.panels}
        onStartShouldSetResponderCapture={blurEvents}
      >
        <View
          style={[
            styles.mainPanel,
            mode !== 'contents' ? showStyles : null,
          ]}
          data-id="BookLeft"
        >
          {!widget &&
            <BookHeader
              bookId={bookId}
              title={title}
              mode={mode}
              toggleBookView={toggleBookView}
              backToReading={backToReading}
              showDisplaySettings={showDisplaySettings}
              width={width}  // By sending this as a prop, I force a rerender
              hideOptions={!!selectedToolUid}
              onBackPress={onBackPress}
            />
          }
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
              selectionInfo={selectionInfo}
              setSelectionInfo={setSelectionInfo}
              reportSpots={reportSpots}
              toolCfiCounts={toolCfiCounts}
            />
            {toolsToOverlayOnThisPage}
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
          <ToolFlipper
            bookId={bookId}
            inEditMode={inEditMode}
          />
        </View>
        {!widget &&
          <View style={[
            mode === 'contents' ? styles.showContents : (!wideMode ? styles.hideContents : null),
            wideMode ? styles.sidePanel : null,
            (wideMode && sidePanelSettings.open) ? { width: sidePanelSettings.width } : null,
          ]}>
            <BookContents
              goToHref={goToHref}
              bookId={bookId}
              reportSpots={reportSpots}
              onToolMove={onToolMove}
              onToolRelease={onToolRelease}
              onScroll={onBookContentsScroll}
              inEditMode={inEditMode}
              toggleInEditMode={toggleInEditMode}
            />
          </View>
        }
        <View />
      </View>

      {!!toolMoveInfo &&
        <>
          <View
            style={[
              styles.toolSpotMarker,
              toolMoveInfo.spotStyle,
            ]}
          />
          <View style={styles.movingToolCover} />
          <View style={styles.toolChipContainer}>
            <ToolChip {...toolMoveInfo.chipProps} />
          </View>
        </>
      }

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
  setSyncStatus,
  updateTool,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)