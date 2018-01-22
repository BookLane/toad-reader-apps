import React from "react"
import { StyleSheet, StatusBar, View, Platform, Dimensions } from "react-native"
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
import { getPageIndexInSpine, latestLocationToObj } from "../../utils/toolbox.js"

import { setDownloadStatus } from "../../redux/actions.js";

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
  showPages: {
    ...pagesStyles,
    ...showStyles,
  },
  hidePages: {
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
    snapshotCoords: null,
    snapshotZoomed: true,
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
  
  zoomToPage = snapshotCoords => {
    this.setState({
      mode: 'zooming',
      snapshotCoords,
      snapshotZoomed: true,
    })
    this.setStatusBarHidden(true)

    // TODO
    setTimeout(this.pageLoaded, PAGE_ZOOM_MILLISECONDS)
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
    const { navigation, books, setDownloadStatus } = this.props
    const { bookId } = navigation.state.params

    confirmRemoveEPub({
      books,
      bookId,
      setDownloadStatus,
      done: () => {
        navigation.goBack(navigation.state.params.pageKey)
      }
    })    
  }

  setFlatListEl = ref => this.flatListEl = ref

  render() {

    const { navigation, books, userDataByBookId } = this.props
    const { bookId } = navigation.state.params
    const { bookLoaded, mode, showOptions, showSettings, snapshotCoords, snapshotZoomed } = this.state

    let latest_location, spineIdRef, pageIndexInSpine
    try {
      const { width, height } = Dimensions.get('window')
      latest_location = userDataByBookId[bookId].latest_location
      const latestLocation = latestLocationToObj(latest_location)
      spineIdRef = latestLocation.spineIdRef
      let pageCfis
      books[bookId].spines.some(spine => {
        if(spine.idref === spineIdRef) {
          pageCfis = spine.pageCfis[`${width}x${height}`]
          return true
        }
      })
      pageIndexInSpine = getPageIndexInSpine({ pageCfis, cfi: latestLocation.cfi })
    } catch(e) {}

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
        <View style={[ 'pages', 'zooming' ].includes(mode) ? styles.showPages : styles.hidePages}>
          <BookPages
            zoomToPage={this.zoomToPage}
            bookId={bookId}
            spineIdRef={spineIdRef}
            pageIndexInSpine={pageIndexInSpine}
            spines={bookLoaded && books[bookId].spines}
            setFlatListEl={this.setFlatListEl}
          />
        </View>
        <View style={mode === 'zooming' ? styles.showZoom : styles.hideZoom}>
          <ZoomPage
            bookId={bookId}
            spineIdRef={spineIdRef}
            pageIndexInSpine={pageIndexInSpine}
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
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)