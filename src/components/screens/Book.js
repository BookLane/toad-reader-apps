import React from "react"
import { StyleSheet, StatusBar, View, Platform, Dimensions } from "react-native"
import { KeepAwake } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content } from "native-base"
import i18n from "../../utils/i18n.js"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import Options from "../major/Options"
import DisplaySettings from "../major/DisplaySettings"
import BackFunction from '../basic/BackFunction'
import FullScreenSpin from '../basic/FullScreenSpin'
import PageCaptureManager from "../major/PageCaptureManager"

import { confirmRemoveEPub } from "../../utils/removeEpub.js"
import { refreshUserData } from "../../utils/syncUserData.js"
import { getPageCfisKey, getSpineAndPage, latestLocationToObj, getToolbarHeight, getPageSize, debounce } from "../../utils/toolbox.js"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress,
         setLatestLocation, updateAccount, updateBookAccount, setUserData } from "../../redux/actions.js";

const {
  APP_BACKGROUND_COLOR,
  PAGE_ZOOM_MILLISECONDS,
} = Expo.Constants.manifest.extra

const pageStyles = {
  position: 'absolute',
  top: 0,
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
  top: 0,
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
  left: '300%',
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

class Book extends React.Component {

  constructor(props) {
    super(props)

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
      statusBarHeight: StatusBar.currentHeight || 0,
      capturingSnapshots: false,
      pageCapturePaused: true,
    }

    this.getFreshUserData()
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  componentWillUnmount() {
    StatusBar.setHidden(false)
  }

  getFreshUserData = () => {
    const { navigation, books } = this.props
    const { bookId } = navigation.state.params || {}

    Object.keys(books[bookId].accounts).forEach(accountId => {
      refreshUserData({
        accountId,
        bookId,
        info: this.props,
      })
    })
  }

  setStatusBarHidden = setHidden => {
    if(Platform.OS === 'ios') {
      StatusBar.setHidden(setHidden)
    }
  }

  zoomToPage = ({ zoomToInfo, snapshotCoords }) => {
    const { setLatestLocation, userDataByBookId, navigation } = this.props
    const { bookId } = navigation.state.params || {}

    const { spineIdRef, cfi } = zoomToInfo  // must also include pageIndexInSpine

    this.pausePageCapture()

    this.setState({
      mode: 'zooming',
      zoomToInfo,
      snapshotCoords,
      snapshotZoomed: true,
      onZoomCompletion: () => {

        const prior_latest_location = (userDataByBookId[bookId] || {}).latest_location
        const priorLatestLocation = latestLocationToObj(prior_latest_location || "{}")

        if(priorLatestLocation.spineIdRef !== spineIdRef || priorLatestLocation.cfi !== cfi) {
          this.setState({
            zoomToInfo: null,
            onZoomCompletion: null,
            bookLoaded: false,
          })
  
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
          }, this.unpausePageCapture)
        }

        this.setStatusBarHidden(true)
      },
    })
  }

  updateSnapshotCoords = snapshotCoords => this.setState({ snapshotCoords })

  setCapturingSnapshots = capturingSnapshots => this.setState({ capturingSnapshots })

  goToHref = ({ href }) => {
    this.pausePageCapture()

    this.setState({
      mode: 'page',
      snapshotZoomed: true,
      hrefToGoTo: href,
    })
    this.setStatusBarHidden(true)
  }

  toggleBookView = () => {
    const { mode } = this.state

    this.setState({
      mode: mode === 'pages' ? 'contents' : 'pages',
      showOptions: false,
    })
  }

  backToReading = () => {
    const { width, height } = Dimensions.get('window')
    const { pageWidth } = getPageSize({ width, height })

    const snapshotCoords = {
      x: width / 2  - pageWidth / 2,
      y: height,
    }
    
    this.pausePageCapture()

    this.setState({
      mode: 'zooming',
      snapshotCoords,
      snapshotZoomed: true,
      onZoomCompletion: () => {

        this.setState({
          onZoomCompletion: null,
          mode: 'page',
        }, this.unpausePageCapture)

        this.setStatusBarHidden(true)
      },
    })
  }

  toggleShowOptions = () => {
    const { showOptions } = this.state

    this.setState({ showOptions: !showOptions })
  }
  
  hideOptions = () => this.setState({ showOptions: false })

  requestShowPages = () => {
    this.pausePageCapture()
    
    this.setState({
      mode: 'zooming',
      snapshotZoomed: false,
      onZoomCompletion: () => {

        this.setState({
          mode: 'pages',
          onZoomCompletion: null,
        }, this.unpausePageCapture)

        this.setStatusBarHidden(false)
      },
    })
  }

  requestHideSettings = () => this.setState({ showSettings: false })

  indicateLoaded = () => {
    const { mode } = this.state

    this.setState({
      bookLoaded: true,
      mode: mode === 'zooming' ? 'page' : mode,
    }, this.unpausePageCapture)
  }

  showDisplaySettings = () => {
    this.setState({
      showSettings: true,
      mode: 'page',
      snapshotZoomed: true,
    })

    this.setStatusBarHidden(true)
  }

  recommendBook = () => alert('Recommend this book')

  goToHighlights = () => {
    const { navigation } = this.props

    debounce(navigation.navigate, "Highlights")
  }

  removeFromDevice = () => {
    const { navigation, books } = this.props
    const { bookId } = navigation.state.params || {}

    confirmRemoveEPub({
      ...this.props,
      bookId,
      done: () => {
        navigation.goBack(navigation.state.params.pageKey)
      }
    })
  }

  setFlatListEl = ref => this.flatListEl = ref

  options = [
    // {
    //   text: i18n("Recommend this book"),
    //   onPress: this.recommendBook,
    // },
    // {
    //   text: i18n("My highlights and notes"),
    //   onPress: this.goToHighlights,
    // },
    {
      text: i18n("Remove from device"),
      onPress: this.removeFromDevice,
    },
  ]

  pausePageCapture = () => this.setState({ pageCapturePaused: true })
  unpausePageCapture = () => this.setState({ pageCapturePaused: false })

  render() {

    const { navigation, books, userDataByBookId, displaySettings, readerStatus } = this.props
    const { bookId } = navigation.state.params || {}
    const { bookLoaded, mode, showOptions, showSettings, zoomToInfo, capturingSnapshots,
      snapshotCoords, snapshotZoomed, onZoomCompletion, statusBarHeight, hrefToGoTo, pageCapturePaused } = this.state

    const pageCfisKey = getPageCfisKey({ displaySettings })

    const latest_location = (userDataByBookId[bookId] || {}).latest_location
    const { spineIdRef, pageIndexInSpine } = getSpineAndPage({ latest_location, book: books[bookId], displaySettings })

    const { title } = (books && books[bookId]) || {}

    const { width } = Dimensions.get('window')
    
    if(readerStatus !== 'ready') {
      return (
        <Container>
          <FullScreenSpin
            text={i18n("Downloading updated reader...")}
          />
        </Container>
      )
    }

    return (
      <Container>
        {mode !== 'page' && <BackFunction func={this.backToReading} />}
        <BookHeader
          title={title}
          navigation={navigation}
          mode={mode}
          toggleBookView={this.toggleBookView}
          toggleShowOptions={this.toggleShowOptions}
          showDisplaySettings={this.showDisplaySettings}
          width={width}  // By sending this as a prop, I force a rerender
        />
        {mode === 'page' && <KeepAwake />}
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
            navigation={navigation}
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
        <Content />

        <PageCaptureManager
          bookId={bookId}
          setCapturingSnapshots={this.setCapturingSnapshots}
          pageCapturePaused={pageCapturePaused}
        />

      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  idps: state.idps,
  accounts: state.accounts,
  books: state.books,
  userDataByBookId: state.userDataByBookId,
  displaySettings: state.displaySettings,
  readerStatus: state.readerStatus,
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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)