import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { StyleSheet, View, Platform, AppState } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { i18n } from "inline-i18n"
import useSetState from "react-use/lib/useSetState"
import useToggle from "react-use/lib/useToggle"
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'

import { refreshUserData } from "../../utils/syncUserData"
import parseEpub from "../../utils/parseEpub"
import { getPageCfisKey, getToolbarHeight, statusBarHeight, statusBarHeightSafe,
         isIPhoneX, setStatusBarHidden, showConsent, getIdsFromAccountId,
         getToolCfiCounts, bottomSpace } from "../../utils/toolbox"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"
import useWideMode from "../../hooks/useWideMode"
import useInstanceValue from "../../hooks/useInstanceValue"
import useScroll from '../../hooks/useScroll'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useSpineIdRefAndCfi from "../../hooks/useSpineIdRefAndCfi"
import usePageInfo from "../../hooks/usePageInfo"
import useSpineInlineToolsHash from "../../hooks/useSpineInlineToolsHash"
import { setLatestLocation, startRecordReading, endRecordReading, setConsentShown,
         setTocAndSpines, updateTool, setSelectedToolUid } from "../../redux/actions"

import SafeLayout from "../basic/SafeLayout"
import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import ToolFlipper from "../major/ToolFlipper"
import EnhancedDashboard from "../major/EnhancedDashboard"
import EnhancedOptions from "../major/EnhancedOptions"
import EnhancedFrontMatter from "../major/EnhancedFrontMatter"
import BackFunction from '../basic/BackFunction'
import CoverAndSpin from '../basic/CoverAndSpin'
import PageCaptureManager from "../major/PageCaptureManager"
import CustomKeepAwake from "../basic/CustomKeepAwake"
import BookTools from "../major/BookTools"
import ToolChip from "../basic/ToolChip"
import HighlightsWrapper from "../major/HighlightsWrapper"
import Icon from "../basic/Icon"
import Search from "../major/Search"
import KeyboardAvoidingView from "../basic/KeyboardAvoidingView"
import HeaderSearch from "../basic/HeaderSearch"


const {
  PAGE_ZOOM_MILLISECONDS,
  BOTTOM_NAVIGATION_HEIGHT=58,
  RETURN_TO_READING_WIDTH=60,
} = Constants.manifest.extra

const pageTop = (isIPhoneX ? (statusBarHeightSafe - statusBarHeight) : statusBarHeight) * -1

const pageTopInWideMode = {
  top: pageTop + (isIPhoneX ? 0 : statusBarHeight) + getToolbarHeight(),
}

const pageStyles = {
  position: 'absolute',
  top: pageTop,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
}

const pagesStyles = {
  position: 'absolute',
  top: getToolbarHeight(),
  bottom: BOTTOM_NAVIGATION_HEIGHT + bottomSpace,
  left: 0,
  right: 0,
  backgroundColor: 'rgb(238, 241, 245)',
  zIndex: 2,
}

const searchStyles = {
  position: 'absolute',
  top: getToolbarHeight(),
  bottom: BOTTOM_NAVIGATION_HEIGHT + bottomSpace,
  left: 0,
  right: 0,
  backgroundColor: 'rgb(238, 241, 245)',
  zIndex: 2,
}

const zoomStyles = {
  position: 'absolute',
  top: pageTop,
  bottom: 0,
  left: 0,
  right: 0,
}

const contentsStyles = {
  position: 'absolute',
  top: getToolbarHeight(),
  bottom: BOTTOM_NAVIGATION_HEIGHT + bottomSpace,
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
  pagesWideMode: {
    ...pagesStyles,
    // backgroundColor: 'rgb(238, 241, 245)',
  },
  noBottomNav: {
    bottom: 0,
  },
  search: {
    ...searchStyles,
  },
  searchWideMode: {
    ...searchStyles,
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
    overflow: 'hidden',
  },
  sidePanel: {
    position: 'relative',
    top: 0,
    backgroundColor: '#F2F6FF',
    width: 0,
    zIndex: 6,
    marginTop: Platform.OS === 'ios' ? statusBarHeight * -1 : 0,
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
  bottomNavigationContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    height: BOTTOM_NAVIGATION_HEIGHT + bottomSpace,
    backgroundColor: '#fff',
  },
  bottomNavigation: {
    position: 'absolute',
    left: RETURN_TO_READING_WIDTH,
    right: 0,
    top: 0,
    bottom: bottomSpace,
    paddingVertical: 0,
  },
  bottomNavigationTab: {
    paddingVertical: 4,
  },
  backToReading: {
    position: 'absolute',
    left: 0,
    width: RETURN_TO_READING_WIDTH,
    top: 0,
    bottom: bottomSpace,
  },
})

const Book = React.memo(({
  redirectCheckComplete,

  idps,
  accounts,
  books,
  userDataByBookId,
  displaySettings,
  sidePanelSettings,
  readerStatus,

  setLatestLocation,
  startRecordReading,
  endRecordReading,
  setConsentShown,
  setTocAndSpines,
  updateTool,
  setSelectedToolUid,

}) => {

  const [ capturingSnapshots, setCapturingSnapshots ] = useState(false)
  const [ processingPaused, setProcessingPaused ] = useState(true)
  const [ currentAppState, setCurrentAppState ] = useState('active')
  const [ selectionInfo, setSelectionInfo ] = useState(null)
  const [ toolMoveInfo, setToolMoveInfo ] = useState()
  const [ rawInEditMode, setRawInEditMode ] = useState(false)
  const [ inPageTurn, setInPageTurn ] = useState(false)
  const [ tabsSelectedIndex, setTabsSelectedIndex ] = useState(0)

  const [{
    bookLoaded,
    mode,
    showSettings,
    hrefToGoTo,
    cfiToGoTo,
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

  const [ showSearch, toggleShowSearch ] = useToggle(false)

  const toolSpots = useRef({})
  const movingToolOffsets = useRef()
  const searchInputRef = useRef()

  const { historyPush, historyReplace, historyGoBack, routerState, clearKeyFromRouterState } = useRouterState()
  const { widget, goToInfo } = routerState

  const [ setStatusBarTimeout ] = useSetTimeout()
  const [ setAwaitLoadTimeout, clearAwaitLoadTimeout ] = useSetTimeout()
  const [ setGetTOCTimeout ] = useSetTimeout()
  const [ setTemporarilyPauseProcessingTimeout, clearTemporarilyPauseProcessingTimeout ] = useSetTimeout()

  const { bookId } = useParams()
  const latest_location = (userDataByBookId[bookId] || {}).latest_location
  const { spineIdRef, cfi } = useSpineIdRefAndCfi(latest_location)

  const { fullPageWidth: width, fullPageHeight: height } = useAdjustedDimensions({ sidePanelSettings })
  const wideMode = useWideMode()

  const { classroomUid, visibleTools, selectedToolUid, selectedTool, viewingHighlights, viewingFrontMatter, viewingOptions, viewingDashboard,
          bookVersion, draftToolByCurrentlyPublishedToolUid, inEditMode, idpId } = useClassroomInfo({ books, bookId, userDataByBookId, rawInEditMode })

  const spineInlineToolsHash = useSpineInlineToolsHash({ visibleTools, spineIdRef })
  const zoomToInfoSpineInlineToolsHash = useSpineInlineToolsHash({ visibleTools, spineIdRef: (zoomToInfo || {}).spineIdRef })
  const { pageIndexInSpine, pageCfisKnown } = usePageInfo({
    spineIdRef,
    cfi,
    book: books[bookId],
    displaySettings,
    sidePanelSettings,
    spineInlineToolsHash,
  })

  const getToolMoveInfo = useInstanceValue(toolMoveInfo)
  const getInEditMode = useInstanceValue(inEditMode)
  const getSelectedToolUid = useInstanceValue(selectedToolUid)

  const toolCfiCounts = useMemo(
    () => getToolCfiCounts({ visibleTools, spineIdRef }),
    [ JSON.stringify(visibleTools), spineIdRef ],
  )

  const cornerSnapshotCoords = useMemo(
    () => ({
      x: 0,
      y: height - bottomSpace,
    }),
    [ height ],
  )

  const BackToReadingIcon = useCallback(style => <Icon name='book-open-variant' pack="materialCommunity" style={styles.tabsIcon} />, [])
  const ThumbnailsIcon = useCallback(style => <Icon name='md-apps' style={styles.tabsIcon} />, [])
  const ContentsIcon = useCallback(style => <Icon name='md-list' style={styles.tabsIcon} />, [])
  const SearchIcon = useCallback(style => <Icon name='md-search' style={styles.tabsIcon} />, [])

  const tabs = useMemo(
    () => [
      ...(!(Platform.OS !== 'web') ? [] : [{
        id: 'thumbnails',
        tab: (
          <BottomNavigationTab
            style={styles.bottomNavigationTab}
            key="thumbnails"
            title={i18n("Thumbnails")}
            icon={ThumbnailsIcon}
          />
        ),
      }]),
      ...(!(!wideMode) ? [] : [{
        id: 'contents',
        tab: (
          <BottomNavigationTab
            style={styles.bottomNavigationTab}
            key="contents"
            title={i18n("Contents")}
            icon={ContentsIcon}
          />
        ),
      }]),
      ...(!(!wideMode) ? [] : [{
        id: 'search',
        tab: (
          <BottomNavigationTab
            style={styles.bottomNavigationTab}
            key="search"
            title={i18n("Search")}
            icon={SearchIcon}
          />
        ),
      }]),
    ],
    [ wideMode ],
  )

  const selectedTabIndex = tabs[tabsSelectedIndex] ? tabsSelectedIndex : 0
  const selectedTabId = (tabs[selectedTabIndex] || {}).id

  const toggleInEditMode = useCallback(
    () => {
      if(selectedTool && !viewingFrontMatter) {
        if(inEditMode) {
          // leaving edit mode
          if(viewingOptions) {
            setSelectedToolUid({
              bookId,
              uid: bookVersion !== 'PUBLISHER' ? 'DASHBOARD' : undefined,
            })

          } else if(selectedTool.currently_published_tool_uid) {
            // this is a draft of a published tool
            setSelectedToolUid({
              bookId,
              uid: selectedTool.currently_published_tool_uid,
            })

          } else if(!selectedTool.published_at) {
            // this is a new, unpublished tool
            unselectTool()
          }
        } else {
          // entering edit mode
          if(viewingDashboard) {
            setSelectedToolUid({
              bookId,
              uid: 'OPTIONS OR SETTINGS',
            })

          } else if(draftToolByCurrentlyPublishedToolUid[selectedToolUid]) {
            // has a draft version
            setSelectedToolUid({
              bookId,
              uid: draftToolByCurrentlyPublishedToolUid[selectedToolUid].uid,
            })
          }
        }
      }

      setRawInEditMode(!inEditMode)
    },
    [ bookId, inEditMode, selectedToolUid, (selectedTool || {}).published_at, (selectedTool || {}).currently_published_tool_uid,
      viewingFrontMatter, viewingOptions, viewingDashboard, bookVersion ],
  )

  useEffect(
    () => {
      if(wideMode && Platform.OS === 'web' && mode !== 'page') {
        // On web in wide mode, 'page' is the only valid mode.
        setState({
          mode: 'page',
          snapshotZoomed: true,
        })
      }
    },
    [ wideMode ],
  )

  useEffect(
    () => {
      if(!books[bookId]) return

      // get fresh user data
      Object.keys(books[bookId].accounts).forEach(accountId => {
        refreshUserData({
          accountId,
          bookId,
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
            endRecordReading()
      
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
          endRecordReading()
        }
    
        AppState.removeEventListener('change', handleAppStateChange)
      }
    },
    [ spineIdRef, currentAppState, mode ],
  )

  useEffect(
    () => {
      setStatusBarHidden(mode === 'page' && (!wideMode || Platform.OS === 'ios'))
      return () => setStatusBarHidden(false)
    },
    [ wideMode ],
  )

  useEffect(
    () => showConsent({ idps, setConsentShown }),
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
          if(redirectCheckComplete) {
            parent.postMessage({
              action: 'forbidden',
              iframeid: window.name,
              payload: message,
            }, '*')
          }

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
    [ books, bookId, redirectCheckComplete ],
  )

  const zoomToPage = useCallback(
    ({ zoomToInfo, snapshotCoords }) => {

      setStatusBarTimeout(() => setStatusBarHidden(!wideMode || Platform.OS === 'ios'), PAGE_ZOOM_MILLISECONDS - 100)

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
        spineIdRef: zoomToInfo.spineIdRef,
      })
    },
    [ spineIdRef, cfi, bookId, wideMode ],
  )

  const goTo = useCallback(
    info => {
      pauseProcessing()

      // immediately clear the tools from BookPage
      reportSpots({ type: 'BookPage' })

      if(info.spineIdRef) {
        // This is to make the toc selection show there immediately
        setLatestLocation({
          bookId,
          latestLocation: {
            spineIdRef: info.spineIdRef,
          },
        })

        info.toolCfiCounts = getToolCfiCounts({ visibleTools, spineIdRef: info.spineIdRef })
      }

      const goToInfo = info.href
        ? { hrefToGoTo: info }
        : { cfiToGoTo: info }

      setState({
        mode: 'page',
        snapshotZoomed: true,
        ...goToInfo,
      })

      setStatusBarTimeout(() => setStatusBarHidden(!wideMode || Platform.OS === 'ios'), PAGE_ZOOM_MILLISECONDS - 100)

      startRecordReading({
        bookId,
        spineIdRef: info.spineIdRef || spineIdRef,
        // May start a reading record with current spineIdRef, not necessarily that
        // of the href. If it turns out they are one and the same, this function
        // call was needed. If the href brings them to a new spine, then this 
        // reading record will be stopped once that loads and the new one will
        // be initiated.
      })
    },
    [ bookId, spineIdRef, reportSpots, wideMode ],
  )

  const backToReading = useCallback(
    () => {
      try {
        searchInputRef.current.blur()
      } catch(e) {}

      setStatusBarTimeout(() => setStatusBarHidden(!wideMode || Platform.OS === 'ios'), PAGE_ZOOM_MILLISECONDS - 100)

      setState({
        mode: 'zooming',
        snapshotCoords: cornerSnapshotCoords,  // TODO: improve this by zooming from the selected
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
    [ bookId, spineIdRef, cornerSnapshotCoords, wideMode ],
  )

  const setModeToPage = useCallback(
    ({ snapshotZoomed=false }={}) => {
      setState({
        mode: 'page',
        snapshotZoomed,
      })
    },
    [],
  )

  const closeToolAndExitReading = useCallback(
    () => {
      setSelectedToolUid({ bookId })
      setState({
        mode: 'info',
        snapshotZoomed: false,
      })
    },
    [ bookId ],
  )

  const requestShowPages = useCallback(
    () => {

      if(wideMode && Platform.OS === 'web') return

      pauseProcessing()

      endRecordReading()

      setStatusBarHidden(false)

      setState({
        mode: 'zooming',
        snapshotZoomed: false,
        onZoomCompletion: () => {
          setState({
            mode: 'info',
            onZoomCompletion: null,
          })
        },
      })
    },
    [ wideMode ],
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
        bookLoaded: !goToInfo,
        mode: zooming ? 'page' : mode,
        zoomToInfo: zooming ? null : zoomToInfo,
      })

      temporarilyPauseProcessing()

      if(goToInfo) {
        clearKeyFromRouterState('goToInfo')
        goTo(goToInfo)
      }
    },
    [ mode, zoomToInfo, goToInfo ],
  )

  const showDisplaySettings = useCallback(
    () => {
      pauseProcessing()

      setSelectedToolUid({ bookId })

      setState({
        showSettings: true,
        mode: 'page',
        snapshotZoomed: true,
      })

      setStatusBarHidden(!wideMode || Platform.OS === 'ios')

      startRecordReading({
        bookId,
        spineIdRef,
      })
    },
    [ bookId, spineIdRef, wideMode ],
  )

  // const recommendBook = useCallback(() => alert('Recommend this book'), [])

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

  const unselectText = useCallback(
    () => {
      if(selectionInfo) {
        setSelectionInfo()
      }
    },
    [ selectionInfo ],
  )

  const setSnapshotCoords = useCallback(snapshotCoords => setState({ snapshotCoords }), [])

  const reportSpots = useCallback(
    ({ type, ...info }) => {
      toolSpots.current[type] = info

      if(type === 'BookPage') {

        if(info.spots) {
          setState({ hrefToGoTo: undefined, cfiToGoTo: undefined })
        }

      }
    },
    [],
  )

  const { onScroll: onBookContentsScroll, y: bookContentsScrollY } = useScroll()

  const onToolMove = useCallback(
    ({ nativeEvent, label, toolType, data, isDraft, uid }) => {
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
          const bookPageAdjustment = (wideMode ? pageTopInWideMode.top : pageTop) * -1 + 2
          const adjustedY = y - (type === 'BookPage' ? bookPageAdjustment : bookContentsScrollY.current)
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

      if(getSelectedToolUid()) {
        setSelectedToolUid({ bookId })
      }

      setToolMoveInfo({
        ...moveInfo,
        chipProps: {
          style: {
            left,
            top,
          },
          toolType,
          data,
          isDraft,
          label,
        },
        uid,
      })

      return true
    },
    [ bookId, width, wideMode ],
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
        })
      }

      setToolMoveInfo()
      movingToolOffsets.current = undefined
    },
    [ bookId, classroomUid ],
  )

  const pageCfisKey = getPageCfisKey({
    displaySettings,
    width,
    height,
    spineInlineToolsHash: zoomToInfo ? zoomToInfoSpineInlineToolsHash : spineInlineToolsHash,
  })

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

  const bookContents = (
    <BookContents
      goTo={goTo}
      bookId={bookId}
      reportSpots={reportSpots}
      onToolMove={onToolMove}
      onToolRelease={onToolRelease}
      onScroll={onBookContentsScroll}
      inEditMode={inEditMode}
      toggleInEditMode={toggleInEditMode}
      setModeToPage={!wideMode ? setModeToPage : null}
      hideFABs={mode !== 'contents' && !(wideMode && sidePanelSettings.open)}
    />
  )

  const showBottomNav = !wideMode && tabs.length > 1

  return (
    <SafeLayout>
      {mode !== 'page' && <BackFunction func={backToReading} />}
      {mode === 'page' && <CustomKeepAwake />}

      {Platform.OS !== 'web' && !inEditMode &&
        <PageCaptureManager
          bookId={bookId}
          setCapturingSnapshots={setCapturingSnapshots}
          processingPaused={
            processingPaused
            || mode !== 'page'
            || !!selectedTool
          }
        />
      }

      <KeyboardAvoidingView style={styles.panels}>
        <View
          style={[
            styles.mainPanel,
            !(mode === 'info' && selectedTabId === 'contents') ? showStyles : null,
          ]}
        >
          {!widget &&
            <View onStartShouldSetResponderCapture={unselectText}>
              <BookHeader
                bookId={bookId}
                title={title}
                mode={mode}
                showDisplaySettings={showDisplaySettings}
                width={width}  // By sending this as a prop, I force a rerender
                onBackPress={historyGoBack}
                setModeToPage={setModeToPage}
                toggleShowSearch={toggleShowSearch}
              />
            </View>
          }
          <HeaderSearch
            bookId={bookId}
            showSearch={showSearch}
            toggleShowSearch={toggleShowSearch}
            goTo={goTo}
            idpId={idpId}
          />
          {Platform.OS !== 'web' &&
            <View
              style={[
                wideMode ? styles.pagesWideMode : styles.pages,
                showBottomNav ? null : styles.noBottomNav,
              ]}
            >
              <BookPages
                bookId={bookId}
                spineIdRef={spineIdRef}
                pageIndexInSpine={pageIndexInSpine}
                spines={bookLoaded && books[bookId].spines}
                zoomToPage={zoomToPage}
                updateSnapshotCoords={setSnapshotCoords}
                capturingSnapshots={capturingSnapshots}
                inEditMode={inEditMode}
                toggleInEditMode={toggleInEditMode}
                setModeToPage={setModeToPage}
                footerHeight={showBottomNav ? (BOTTOM_NAVIGATION_HEIGHT + bottomSpace) : 0}
              />
            </View>
          }
          {!widget && !wideMode &&
            <View
              style={[
                selectedTabId === 'contents' ? styles.showContents : styles.hideContents,
                showBottomNav ? null : styles.noBottomNav,
              ]}
              onStartShouldSetResponderCapture={unselectText}
            >
              {bookContents}
            </View>
          }
          {selectedTabId === 'search' &&
            <View style={wideMode ? styles.searchWideMode : styles.search}>
              <Search
                idpId={idpId}
                bookId={bookId}
                goTo={goTo}
                inputRef={searchInputRef}
              />
            </View>
          }
          {showBottomNav &&
            <View style={styles.bottomNavigationContainer}>
              <BottomNavigationTab
                key="backToReading"
                icon={BackToReadingIcon}
                style={styles.backToReading}
                onSelect={backToReading}
              />
              <BottomNavigation
                style={styles.bottomNavigation}
                selectedIndex={selectedTabIndex}
                onSelect={setTabsSelectedIndex}
              >
                {tabs.map(({ tab }) => tab)}
              </BottomNavigation>
            </View>
          }
          <View style={
            mode === 'page'
              ? [
                styles.showPage,
                (wideMode ? pageTopInWideMode : null),
              ]
              : styles.hidePage
          }>
            <BookPage
              bookId={bookId}
              latest_location={latest_location}
              spineIdRef={spineIdRef}
              pageIndexInSpine={pageIndexInSpine}
              requestShowPages={requestShowPages}
              showSettings={showSettings}
              requestHideSettings={requestHideSettings}
              bookLoaded={bookLoaded}
              indicateLoaded={indicateLoaded}
              hrefToGoTo={hrefToGoTo}
              cfiToGoTo={cfiToGoTo}
              capturingSnapshots={capturingSnapshots}
              temporarilyPauseProcessing={temporarilyPauseProcessing}
              selectionInfo={selectionInfo}
              setSelectionInfo={setSelectionInfo}
              reportSpots={reportSpots}
              toolCfiCounts={toolCfiCounts}
              inEditMode={inEditMode}
              setInPageTurn={setInPageTurn}
              unselectText={unselectText}
            />
            <BookTools
              bookId={bookId}
              inEditMode={inEditMode}
              inPageTurn={inPageTurn}
              spineIdRef={spineIdRef}
              toolSpots={toolSpots.current.BookPage}
              onToolMove={onToolMove}
              onToolRelease={onToolRelease}
            />
          </View>
          <View style={
            mode === 'zooming'
              ? [
                styles.showZoom,
                (wideMode ? pageTopInWideMode : null),
              ]
              : styles.hideZoom
          }>
            <ZoomPage
              bookId={bookId}
              spineIdRef={zoomToInfo ? zoomToInfo.spineIdRef : spineIdRef}
              pageCfisKey={pageCfisKey}
              pageIndexInSpine={zoomToInfo ? zoomToInfo.pageIndexInSpine : pageIndexInSpine}
              onZoomCompletion={onZoomCompletion}
              snapshotCoords={
                selectedTabId === 'thumbnails'
                  ? snapshotCoords
                  : cornerSnapshotCoords
              }
              zoomed={snapshotZoomed}
              zoomingEnabled={mode === 'zooming'}
              pageCfiKnown={!!(zoomToInfo ? zoomToInfo.cfi : pageCfisKnown)}
            />
          </View>
          <ToolFlipper
            bookId={bookId}
            inEditMode={inEditMode}
            goTo={goTo}
            closeToolAndExitReading={closeToolAndExitReading}
          />
          {viewingHighlights &&
            <HighlightsWrapper
              bookId={bookId}
              closeToolAndExitReading={closeToolAndExitReading}
              goTo={goTo}
            />
          }
          <EnhancedDashboard
            bookId={bookId}
            closeToolAndExitReading={closeToolAndExitReading}
            goTo={goTo}
          />
          <EnhancedOptions
            bookId={bookId}
            inEditMode={inEditMode}
            closeToolAndExitReading={closeToolAndExitReading}
          />
          <EnhancedFrontMatter
            bookId={bookId}
            inEditMode={inEditMode}
            closeToolAndExitReading={closeToolAndExitReading}
            goTo={goTo}
          />
        </View>
        {!widget && wideMode &&
          <View
            style={[
              styles.showContents,
              showBottomNav ? null : styles.noBottomNav,
              styles.sidePanel,
              sidePanelSettings.open ? { width: sidePanelSettings.width } : null,
            ]}
            onStartShouldSetResponderCapture={unselectText}
          >
            {bookContents}
          </View>
        }
        <View />
      </KeyboardAvoidingView>

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
  startRecordReading,
  endRecordReading,
  setConsentShown,
  setTocAndSpines,
  updateTool,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)