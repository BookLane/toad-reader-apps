import React from "react"
import { StyleSheet, StatusBar, View, Platform, Dimensions, Linking, AppState } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Layout } from "react-native-ui-kitten"
import i18n from "../../utils/i18n.js"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import Options from "../major/Options"
import BackFunction from '../basic/BackFunction'
import FullScreenSpin from '../basic/FullScreenSpin'
import PageCaptureManager from "../major/PageCaptureManager"
import CustomKeepAwake from "../basic/CustomKeepAwake"

import { confirmRemoveEPub } from "../../utils/removeEpub.js"
import { refreshUserData } from "../../utils/syncUserData.js"
import { getPageCfisKey, getSpineAndPage, latestLocationToObj, getToolbarHeight, unmountTimeouts, getFirstBookLinkInfo,
         getPageSize, isIPhoneX, setStatusBarHidden, setUpTimeout, clearOutTimeout, showXapiConsent } from "../../utils/toolbox.js"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress,
         setLatestLocation, updateAccount, updateBookAccount, setUserData, startRecordReading,
         endRecordReading, flushReadingRecords, setXapiConsentShown } from "../../redux/actions.js"

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

class Book extends React.Component {

  constructor(props) {
    super(props)

    const { location, books } = props
    const bookId = getBookId(location)
    const bookLinkInfo = getFirstBookLinkInfo(books[bookId])

    this.state = {
      bookLoaded: false,
      mode: 'page',
      showOptions: false,
      showSettings: false,
      hrefToGoTo: null,
      zoomToInfo: null,
      snapshotCoords: null,
      snapshotZoomed: true,
      onZoomCompletion: null,
      statusBarHeight: StatusBar.currentHeight || (isIPhoneX ? 24 : -10),
      capturingSnapshots: false,
      processingPaused: true,
      currentAppState: 'active',
    }

    this.getFreshUserData()

    this.options = [
      // {
      //   text: i18n("Recommend this book"),
      //   onPress: this.recommendBook,
      // },
      // {
      //   text: i18n("My highlights and notes"),
      //   onPress: this.goToHighlights,
      // },
      ...(
        bookLinkInfo
          ? [{
            text: bookLinkInfo.label,
            onPress: this.goToBookLink,
          }]
          : []
      ),
      {
        text: i18n("Remove from device"),
        onPress: this.removeFromDevice,
      },
    ]
  
  }

  componentDidMount() {
    const { location, startRecordReading } = this.props
    const bookId = getBookId(location)
    const { spineIdRef } = this.getLatestLocationObj()

    setStatusBarHidden(true)
    AppState.addEventListener('change', this.handleAppStateChange)

    startRecordReading({
      bookId,
      spineIdRef,
    })

    showXapiConsent(this.props)
  }

  componentWillUnmount = () => {
    const { endRecordReading } = this.props
    const { mode } = this.state

    if(mode === 'page') {
      endRecordReading({
        reportReadingsInfo: this.props,
      })
    }

    AppState.removeEventListener('change', this.handleAppStateChange)
    unmountTimeouts.bind(this)()
    setStatusBarHidden(false)
  }

  handleAppStateChange = nextAppState => {
    const { location, startRecordReading, endRecordReading } = this.props
    const bookId = getBookId(location)
    const { currentAppState, mode } = this.state
    const { spineIdRef } = this.getLatestLocationObj()

    if(mode === 'page') {
      if(currentAppState === 'active' && nextAppState !== 'active') {
        endRecordReading({
          reportReadingsInfo: this.props,
        })
  
      } else if(currentAppState !== 'active' && nextAppState === 'active') {
        startRecordReading({
          bookId,
          spineIdRef,
        })
      }
    }

    this.setState({
      currentAppState: nextAppState,
    })
  }

  getFreshUserData = () => {
    const { location, books } = this.props
    const bookId = getBookId(location)

    Object.keys(books[bookId].accounts).forEach(accountId => {
      refreshUserData({
        accountId,
        bookId,
        info: this.props,
      })
    })
  }

  getLatestLocationObj = () => {
    const { userDataByBookId, location } = this.props
    const bookId = getBookId(location)

    const latest_location = (userDataByBookId[bookId] || {}).latest_location
    return latestLocationToObj(latest_location || "{}")
  }

  zoomToPage = ({ zoomToInfo, snapshotCoords }) => {
    const { setLatestLocation, history, startRecordReading } = this.props
    const bookId = getBookId(location)

    const { spineIdRef, cfi } = zoomToInfo  // must also include pageIndexInSpine

    setUpTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100, this)

    this.setState({
      mode: 'zooming',
      zoomToInfo,
      snapshotCoords,
      snapshotZoomed: true,
      onZoomCompletion: () => {

        const priorLatestLocation = this.getLatestLocationObj()

        if(priorLatestLocation.spineIdRef !== spineIdRef || (cfi && priorLatestLocation.cfi != cfi)) {
          this.setState({
            onZoomCompletion: null,
            bookLoaded: false,
            ...(cfi || Platform.OS === 'android' ? {} : {
              mode: 'page',
            }),
          })

          // The indicateLoaded function is called by after a pageChanged postMessage.
          // In the event that this never happens, we don't want to leave things stuck.
          // Therefore, use a timeout to ensure this happens, and otherwise display an
          // error message.
          const currentIndicateLoadedCallCount = this.indicateLoadedCallCount
          setUpTimeout(() => {
            if(currentIndicateLoadedCallCount === this.indicateLoadedCallCount) {
              history.push("/error", {
                message: i18n("Sorry! There was an error flipping to that page."),
              })
              this.indicateLoaded()
            }
          }, 5000, this)

          setLatestLocation({
            bookId,
            latestLocation: {
              spineIdRef,
              cfi,
            },
            patchInfo: this.props,
          })

        } else {  // back to the same page

          this.setState({
            zoomToInfo: null,
            onZoomCompletion: null,
            mode: 'page',
          }, this.temporarilyPauseProcessing)
        }

      },
    })

    startRecordReading({
      bookId,
      spineIdRef,
    })
  }

  updateSnapshotCoords = snapshotCoords => this.setState({ snapshotCoords })

  setCapturingSnapshots = capturingSnapshots => this.setState({ capturingSnapshots })

  goToHref = ({ href }) => {
    const { location, startRecordReading } = this.props
    const bookId = getBookId(location)
    const { spineIdRef } = this.getLatestLocationObj()

    this.pauseProcessing()

    this.setState({
      mode: 'page',
      snapshotZoomed: true,
      hrefToGoTo: href,
    })
    
    setUpTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100, this)

    startRecordReading({
      bookId,
      spineIdRef,
      // Starts a reading record with current spineIdRef, not necessarily that
      // of the href. If it turns out they are one an the same, this function
      // call was needed. If the href brings them to a new spine, then this 
      // reading record will be stopped once that loads and the new one will
      // be initiated.
    })
  }

  toggleBookView = () => {
    const { mode } = this.state

    this.setState({
      mode: mode === 'pages' ? 'contents' : 'pages',
      showOptions: false,
    })
  }

  backToReading = () => {
    const { location, startRecordReading } = this.props
    const bookId = getBookId(location)
    const { spineIdRef } = this.getLatestLocationObj()

    const { width, height } = Dimensions.get('window')
    const { pageWidth } = getPageSize({ width, height })

    const snapshotCoords = {
      x: width / 2  - pageWidth / 2,
      y: height,
    }
    
    setUpTimeout(() => setStatusBarHidden(true), PAGE_ZOOM_MILLISECONDS - 100, this)

    this.setState({
      mode: 'zooming',
      snapshotCoords,
      snapshotZoomed: true,
      onZoomCompletion: () => {

        this.setState({
          onZoomCompletion: null,
          mode: 'page',
        }, this.temporarilyPauseProcessing)

      },
    })

    startRecordReading({
      bookId,
      spineIdRef,
    })

  }

  toggleShowOptions = () => {
    const { showOptions } = this.state

    this.setState({ showOptions: !showOptions })
  }
  
  hideOptions = () => this.setState({ showOptions: false })

  requestShowPages = () => {
    const { endRecordReading } = this.props

    this.pauseProcessing()

    endRecordReading({
      reportReadingsInfo: this.props,
    })

    setStatusBarHidden(false)

    this.setState({
      mode: 'zooming',
      snapshotZoomed: false,
      onZoomCompletion: () => {

        this.setState({
          mode: 'pages',
          onZoomCompletion: null,
        })

      },
    })
  }

  requestHideSettings = () => {
    this.setState({ showSettings: false }, this.temporarilyPauseProcessing)
  }

  indicateLoadedCallCount = 0

  indicateLoaded = () => {
    const { mode, zoomToInfo } = this.state

    this.indicateLoadedCallCount++

    this.setState({
      bookLoaded: true,
      mode: mode === 'zooming' ? 'page' : mode,
      zoomToInfo: mode === 'zooming' ? null : zoomToInfo,
    }, this.temporarilyPauseProcessing)
  }

  showDisplaySettings = () => {
    const { location, startRecordReading } = this.props
    const bookId = getBookId(location)
    const { spineIdRef } = this.getLatestLocationObj()

    this.pauseProcessing()

    this.setState({
      showSettings: true,
      mode: 'page',
      snapshotZoomed: true,
    })

    setStatusBarHidden(true)

    startRecordReading({
      bookId,
      spineIdRef,
    })
  }

  recommendBook = () => alert('Recommend this book')

  goToHighlights = () => {
    const { history, match } = this.props

    history.push(`${match.url}/highlights`)
  }

  removeFromDevice = () => {
    const { location, books } = this.props
    const bookId = getBookId(location)

    confirmRemoveEPub({
      ...this.props,
      bookId,
      done: () => {
        history.go(-2)
      }
    })
  }

  setFlatListEl = ref => this.flatListEl = ref

  goToBookLink = () => {
    const { location, books } = this.props
    const bookId = getBookId(location)

    const bookLinkInfo = getFirstBookLinkInfo(books[bookId])

    Linking.openURL(bookLinkInfo.href).catch(err => {
      console.log('ERROR: Request to open URL failed.', err)
      history.push("/error", {
        message: i18n("Your device is not allowing us to open this link."),
      })
    })
  }

  setPauseProcessing = processingPaused => {
    clearOutTimeout(this.unpauseProcessingTimeout, this)
    this.setState({ processingPaused })
  }

  temporarilyPauseProcessing = () => {
    this.setPauseProcessing(true)
    this.unpauseProcessingTimeout = setUpTimeout(this.unpauseProcessing, 4000, this)
  }

  pauseProcessing = () => this.setPauseProcessing(true)
  unpauseProcessing = () => this.setPauseProcessing(false)

  render() {

    const { location, books, userDataByBookId, displaySettings, readerStatus } = this.props
    const bookId = getBookId(location)
    const { bookLoaded, mode, showOptions, showSettings, zoomToInfo, capturingSnapshots,
      snapshotCoords, snapshotZoomed, onZoomCompletion, statusBarHeight, hrefToGoTo, processingPaused } = this.state

    const pageCfisKey = getPageCfisKey({ displaySettings })

    const latest_location = (userDataByBookId[bookId] || {}).latest_location
    const { spineIdRef, pageIndexInSpine, pageCfisKnown } = getSpineAndPage({ latest_location, book: books[bookId], displaySettings })

    const { title } = (books && books[bookId]) || {}

    const { width } = Dimensions.get('window')
    
    if(Platform.OS !== 'web' && readerStatus !== 'ready') {
      return (
        <Layout>
          <FullScreenSpin
            text={i18n("Updating reader...")}
          />
        </Layout>
      )
    }

    return (
      <Layout>
        {mode !== 'page' && <BackFunction func={this.backToReading} />}
        <BookHeader
          title={title}
          mode={mode}
          toggleBookView={this.toggleBookView}
          toggleShowOptions={this.toggleShowOptions}
          showDisplaySettings={this.showDisplaySettings}
          width={width}  // By sending this as a prop, I force a rerender
        />
        {mode === 'page' && <CustomKeepAwake />}
        <View style={styles.pages}>
          <BookPages
            bookId={bookId}
            spineIdRef={spineIdRef}
            pageCfisKey={pageCfisKey}
            pageIndexInSpine={pageIndexInSpine}
            spines={bookLoaded && books[bookId].spines}
            zoomToPage={this.zoomToPage}
            updateSnapshotCoords={this.updateSnapshotCoords}
            statusBarHeight={statusBarHeight}
            setFlatListEl={this.setFlatListEl}
            capturingSnapshots={capturingSnapshots}
          />
        </View>
        <View style={mode === 'page' ? styles.showPage : styles.hidePage}>
          <BookPage
            bookId={bookId}
            latest_location={latest_location}
            spineIdRef={spineIdRef}
            pageIndexInSpine={pageIndexInSpine}
            requestShowPages={this.requestShowPages}
            showSettings={showSettings}
            requestHideSettings={this.requestHideSettings}
            indicateLoaded={this.indicateLoaded}
            hrefToGoTo={hrefToGoTo}
            capturingSnapshots={capturingSnapshots}
            temporarilyPauseProcessing={this.temporarilyPauseProcessing}
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
            goToHref={this.goToHref}
            toc={bookLoaded && books[bookId].toc}
          />
        </View>
        {showOptions && mode !== 'page' &&
          <Options
            requestHide={this.hideOptions}
            options={this.options}
          />
        }
        <View />

        {Platform.OS !== 'web' &&
          <PageCaptureManager
            bookId={bookId}
            setCapturingSnapshots={this.setCapturingSnapshots}
            processingPaused={processingPaused}
          />
        }

      </Layout>
    )
  }
}

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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)