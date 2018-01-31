import React from "react"
import { StyleSheet, StatusBar, View, Platform, Dimensions } from "react-native"
import { KeepAwake } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'
import i18n from "../../utils/i18n.js"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import ZoomPage from "../major/ZoomPage"
import BookContents from "../major/BookContents"
import Options from "../major/Options"
import DisplaySettings from "../major/DisplaySettings"
import BackFunction from '../basic/BackFunction'

import { confirmRemoveEPub } from "../../utils/removeEpub.js"
import { getPageCfisKey, getSpineAndPage } from "../../utils/toolbox.js"

import { setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, setLatestLocation } from "../../redux/actions.js";

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
  top: nativeBasePlatformVariables.toolbarHeight,
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
  top: nativeBasePlatformVariables.toolbarHeight,
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

  state = {
    bookLoaded: false,
    mode: 'page',
    showOptions: false,
    showSettings: false,
    goToHref: null,
    zoomToInfo: null,
    snapshotCoords: null,
    snapshotZoomed: true,
    onZoomCompletion: null,
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  componentWillUnmount() {
    StatusBar.setHidden(false)
  }

  setStatusBarHidden = setHidden => {
    if(Platform.OS === 'ios') {
      StatusBar.setHidden(setHidden)
    }
  }

  pageLoaded = () => {
    this.setState({
      mode: 'page',
    })
  }
  
  zoomToPage = ({ zoomToInfo, snapshotCoords }) => {
    const { setLatestLocation } = this.props
    const { bookId, spineIdRef, cfi } = zoomToInfo  // must also include pageIndexInSpine

    this.setState({
      mode: 'zooming',
      zoomToInfo,
      snapshotCoords,
      snapshotZoomed: true,
      onZoomCompletion: () => {

        this.setState({
          zoomToInfo: null,
          onZoomCompletion: null,
        })

        setLatestLocation({
          bookId,
          latestLocation: {
            spineIdRef,
            cfi,
          },
        })

        this.pageLoaded()
        
      },
    })

    this.setStatusBarHidden(true)

  }

  goToHref = params => {
    const { goToHref } = this.state

    goToHref(params)  // triggers the postMessage to change the page in the WebView
    this.setState({
      mode: 'page',
      snapshotZoomed: true,
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
    this.setState({
      mode: 'zooming',
      snapshotZoomed: true,
    })
    this.setStatusBarHidden(true)

    // TODO
    setTimeout(this.pageLoaded, PAGE_ZOOM_MILLISECONDS)
  }

  toggleShowOptions = () => {
    const { showOptions } = this.state

    this.setState({ showOptions: !showOptions })
  }
  
  hideOptions = () => this.setState({ showOptions: false })

  requestShowPages = stateVars => {
    // TODO: snapshotCoords is off if they scrolled
    this.setState({
      ...stateVars,  // goToHref
      mode: 'zooming',
      snapshotZoomed: false,
    })
    this.setStatusBarHidden(false)

    // TODO
    setTimeout(() => {
      this.setState({
        mode: 'pages',
      })      
    }, PAGE_ZOOM_MILLISECONDS)
  }

  requestHideSettings = () => this.setState({ showSettings: false })

  indicateLoaded = () => this.setState({ bookLoaded: true })

  showDisplaySettings = () => {
    this.setState({ mode: 'page', showSettings: true })
    this.setStatusBarHidden(true)
  }

  recommendBook = () => alert('Recommend this book')

  goToHighlights = () => {
    const { navigation } = this.props

    navigation.navigate("Highlights")
  }

  removeFromDevice = () => {
    const { navigation, books } = this.props
    const { bookId } = navigation.state.params

    confirmRemoveEPub({
      ...this.props,
      bookId,
      done: () => {
        navigation.goBack(navigation.state.params.pageKey)
      }
    })    
  }

  setFlatListEl = ref => this.flatListEl = ref

  render() {

    const { navigation, books, userDataByBookId, displaySettings } = this.props
    const { bookId } = navigation.state.params
    const { bookLoaded, mode, showOptions, showSettings, zoomToInfo,
      snapshotCoords, snapshotZoomed, onZoomCompletion } = this.state

    const pageCfisKey = getPageCfisKey({ displaySettings })

    const latest_location = (userDataByBookId[bookId] || {}).latest_location
    const { spineIdRef, pageIndexInSpine } = getSpineAndPage({ latest_location, book: books[bookId], displaySettings })

    return (
      <Container>
        {mode !== 'page' && <BackFunction func={this.backToReading} />}
        <BookHeader
          bookId={bookId}
          navigation={navigation}
          mode={mode}
          toggleBookView={this.toggleBookView}
          toggleShowOptions={this.toggleShowOptions}
          showDisplaySettings={this.showDisplaySettings}
        />
        {mode === 'page' && <KeepAwake />}
        <View style={styles.pages}>
          <BookPages
            zoomToPage={this.zoomToPage}
            bookId={bookId}
            spineIdRef={spineIdRef}
            pageCfisKey={pageCfisKey}
            pageIndexInSpine={pageIndexInSpine}
            spines={bookLoaded && books[bookId].spines}
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
          />
        </View>
        <View style={mode === 'zooming' ? styles.showZoom : styles.hideZoom}>
          <ZoomPage
            bookId={zoomToInfo ? zoomToInfo.bookId : bookId}
            spineIdRef={zoomToInfo ? zoomToInfo.spineIdRef : spineIdRef}
            pageCfisKey={pageCfisKey}
            pageIndexInSpine={zoomToInfo ? zoomToInfo.pageIndexInSpine : pageIndexInSpine}
            onZoomCompletion={onZoomCompletion}
            snapshotCoords={snapshotCoords}
            zoomed={snapshotZoomed}
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
            options={[
              {
                text: i18n("Recommend this book"),
                onPress: this.recommendBook,
              },
              {
                text: i18n("My highlights and notes"),
                onPress: this.goToHighlights,
              },
              {
                text: i18n("Remove from device"),
                onPress: this.removeFromDevice,
              },
            ]}
          />
        }
        <Content />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  userDataByBookId: state.userDataByBookId,
  displaySettings: state.displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  setLatestLocation,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)