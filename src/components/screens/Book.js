import React from "react"
import { StyleSheet, StatusBar, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'
import i18n from "../../utils/i18n.js"

import BookPage from "../major/BookPage"
import BookHeader from "../major/BookHeader"
import BookPages from "../major/BookPages"
import BookContents from "../major/BookContents"
import BookProgress from "../major/BookProgress"
import Options from "../major/Options"

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
  bottom: nativeBasePlatformVariables.footerHeight,
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
  backgroundColor: '#eee',
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

  constructor() {
    super()
    this.state = {
      mode: 'page',
      subtitle: 'chapter here',
      showOptions: false,
      goToHref: null,
      goToPage: null,
    }
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  componentWillUnmount() {
    StatusBar.setHidden(false)
  }
  
  render() {

    const { navigation, books, setDownloadStatus } = this.props
    const { bookId } = navigation.state.params
    const { mode, subtitle, showOptions, goToHref, goToPage } = this.state

    return (
      <Container>
        <BookHeader
          bookId={bookId}
          subtitle={mode === 'pages' && subtitle}
          navigation={navigation}
          mode={mode}
          toggleBookView={() => this.setState({
            mode: mode === 'pages' ? 'contents' : 'pages',
            showOptions: false,
          })}
          toggleShowOptions={() => this.setState({ showOptions: !showOptions })}
          hide={mode === 'page'}
        />
        <View style={mode === 'page' ? styles.showPage : styles.hidePage}>
          <BookPage
            navigation={navigation}
            showBook={stateVars => this.setState({ ...stateVars, mode: 'pages' })}
          />
        </View>
        <View style={mode === 'pages' ? styles.showPages : styles.hidePages}>
          <BookPages
          goToPage={params => {
            goToPage(params)
            this.setState({ mode: 'page' })
          }}
          navigation={navigation}
          />
        </View>
        <View style={mode === 'contents' ? styles.showContents : styles.hideContents}>
          <BookContents
            goToHref={params => {
              goToHref(params)
              this.setState({ mode: 'page' })
            }}
            navigation={navigation}
          />
        </View>
        {showOptions && mode !== 'page' &&
          <Options
            requestHide={() => this.setState({ showOptions: false })}
            options={[
              {
                text: i18n("Display settings"),
                onPress: () => alert('Display settings'),
              },
              {
                text: i18n("Recommend this book"),
                onPress: () => alert('Recommend this book'),
              },
              {
                text: i18n("My highlights and notes"),
                onPress: () => navigation.navigate("Highlights"),
              },
              {
                text: i18n("Remove from device"),
                onPress: () => confirmRemoveEPub({
                  books,
                  bookId,
                  setDownloadStatus,
                  done: () => {
                    navigation.goBack(navigation.state.params.pageKey)
                  }
                }),
              },
            ]}
          />
        }
        <Content />
        <BookProgress
          hide={mode !== 'pages'}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)