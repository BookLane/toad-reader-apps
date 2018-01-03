import React from "react"
import { StyleSheet, StatusBar, View, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'
import i18n from "../../utils/i18n.js"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import BookContents from "../major/BookContents"
import Options from "../major/Options"
import DisplaySettings from "../major/DisplaySettings"
import BackFunction from '../basic/BackFunction'

import { confirmRemoveEPub } from "../../utils/removeEpub.js"

import { setDownloadStatus } from "../../redux/actions.js";

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
  backgroundColor: '#e9e9ef',
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
    goToPage: null,
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

  goToPage = params => {
    const { goToPage } = this.state

    goToPage(params)
    this.setState({ mode: 'page' })
    this.setStatusBarHidden(true)
  }
  
  goToHref = params => {
    const { goToHref } = this.state

    goToHref(params)
    this.setState({ mode: 'page' })
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
    this.setState({ mode: 'page' })
    this.setStatusBarHidden(true)
  }

  toggleShowOptions = () => {
    const { showOptions } = this.state

    this.setState({ showOptions: !showOptions })
  }
  
  hideOptions = () => this.setState({ showOptions: false })

  requestShowPages = stateVars => {
    this.setState({ ...stateVars, mode: 'pages' })
    this.setStatusBarHidden(false)
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

  render() {

    const { navigation, books } = this.props
    const { bookId } = navigation.state.params
    const { bookLoaded, mode, showOptions, showSettings } = this.state

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
            requestShowPages={this.requestShowPages}
            showSettings={showSettings}
            requestHideSettings={this.requestHideSettings}
            indicateLoaded={this.indicateLoaded}
          />
        </View>
        <View style={mode === 'pages' ? styles.showPages : styles.hidePages}>
          <BookPages
            goToPage={this.goToPage}
            spines={bookLoaded && books[bookId].spines}
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
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)