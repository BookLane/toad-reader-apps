import React from "react"
import { Constants, Updates, FileSystem } from "expo"
import { Platform, StyleSheet, WebView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content, Text, View } from "native-base"
import i18n from "../../utils/i18n.js"
import downloadAsync from "../../utils/downloadAsync.js"
import { updateReader } from "../../utils/updateReader.js"

import LibraryHeader from "../major/LibraryHeader"
import LibraryCovers from "../major/LibraryCovers"
import LibraryList from "../major/LibraryList"
import Options from "../major/Options"
import Spin from "../basic/Spin"
import FullScreenSpin from "../basic/FullScreenSpin"
import AppHeader from "../basic/AppHeader.js";
import BookDownloader from "../major/BookDownloader.js"

import { getReqOptionsWithAdditions } from "../../utils/toolbox.js"
import { removeSnapshotsIfANewUpdateRequiresIt } from "../../utils/removeEpub.js"

import { addBooks, reSort, setSort, setFetchingBooks, setDownloadStatus,
         removeAccount, updateAccount, setReaderStatus, clearAllSpinePageCfis } from "../../redux/actions.js"

const {
  APP_BACKGROUND_COLOR,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  noBooks: {
    marginTop: 50,
    textAlign: 'center',
  },
  spinnerContainer: {
    padding: 40,
  },
  content: {
    zIndex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
  },
})

class Library extends React.Component {

  state = {
    showOptions: false,
    downloadPaused: false,
  }

  componentWillMount() {
    const { books, clearAllSpinePageCfis } = this.props

    Updates.addListener(this.onUpdateEvent)
    this.getUpToDateReader()
    removeSnapshotsIfANewUpdateRequiresIt({ books, clearAllSpinePageCfis })
  }

  componentDidMount() {
    const { navigation } = this.props

    this.navigationDidFocusListener = navigation.addListener("willBlur", () => this.setState({ downloadPaused: true }))
    this.navigationDidFocusListener = navigation.addListener("didFocus", () => this.setState({ downloadPaused: false }))

    this.fetchAll()
  }

  componentWillReceiveProps(nextProps) {
    const { accounts } = this.props

    if(nextProps.accounts !== accounts) {
      this.fetchAll(nextProps)
    }
  }

  componentWillUnmount() {
    this.navigationWillBlurListener.remove()
    this.navigationDidFocusListener.remove()
  }

  getUpToDateReader = async () => {
    const { setReaderStatus } = this.props

    updateReader({ setReaderStatus })
  }

  onUpdateEvent = ({ type }) => {
    if(type === Updates.EventType.DOWNLOAD_FINISHED) {
      this.JSUpdateReady = true
    }
  }

  hasJSUpdate = () => !!this.JSUpdateReady

  async fetchAll(nextProps) {
    const { setFetchingBooks, accounts, idps, books, addBooks, reSort, updateAccount, navigation } = nextProps || this.props
    const { refreshLibraryAccountId } = navigation.state.params || {}

    const account = Object.values(accounts)[0]
    if(!account || account.needToLogInAgain) {
      // when I move to multiple accounts, this will instead need to go to the Accounts screen
      navigation.navigate("Login", {
        idpId: Object.keys(idps)[0],
        hasJSUpdate: this.hasJSUpdate,
      })
      return
    }

    // TODO: presently it gets the account libraries just one at a time; could get these in parallel to be quicker
    setFetchingBooks({ value: true })
    for(accountId in accounts) {
      try {

        // no need to get the library listing if we already have it
        if(!refreshLibraryAccountId && Object.values(books).some(book => book.accounts[accountId])) continue

        // update books
        const [ idpId ] = accountId.split(':')

        const libraryUrl = `https://${idps[idpId].domain}/epub_content/epub_library.json`
        let response = await fetch(libraryUrl, getReqOptionsWithAdditions({
          headers: {
            "x-cookie-override": accounts[accountId].cookie,
            "x-platform": Platform.OS,
          },
        }))
        // I do not catch the no internet connection error because I only get here immediately after logging in,
        // which requires the internet.

        if(response.status != 200) {
          // they need to login again
          // TODO: I should probably look for other possibilities like 3XX or 5XX errors
          updateAccount({
            accountId,
            accountInfo: {
              needToLogInAgain: true
            },
          })
          return
        }

        const newBooks = await response.json()

        addBooks({
          books: newBooks,
          accountId,
        })
        reSort()

        // get covers
        newBooks.forEach(book => {
          if(book.coverHref) {
            downloadAsync(
              `https://${idps[idpId].domain}/${book.coverHref}`,
              `${FileSystem.documentDirectory}covers/${book.id}/${book.coverHref.split('/').pop()}`,
              { skipIfExists: true }
            )
          }
        })
        
        if(refreshLibraryAccountId) {
          navigation.state.params = {}
          this.forceUpdate()
        }
        
      } catch(error) {
        navigation.navigate("ErrorMessage", {
          message: error.message || null,
        })
      }
    }
    setFetchingBooks({ value: false })
  }
  
  toggleShowOptions = () => {
    const { showOptions } = this.state

    this.setState({ showOptions: !showOptions })
  }
  
  hideOptions = () => this.setState({ showOptions: false })

  logOurUrlOnLoad = () => {
    const { navigation, removeAccount, updateAccount } = this.props
    const { logOutAccountId, refreshLibraryAccountId } = navigation.state.params || {}

    if(refreshLibraryAccountId) {
      updateAccount({
        accountId: refreshLibraryAccountId,
        accountInfo: {
          needToLogInAgain: true,
        },
      })
    }

    if(logOutAccountId) {
      removeAccount({ accountId: logOutAccountId })
      navigation.state.params = {}
      this.forceUpdate()
    }
  }
  
  render() {
    const { library, accounts, books, fetchingBooks, navigation, setSort } = this.props
    const { showOptions, downloadPaused } = this.state

    let { scope, logOutUrl, logOutAccountId, refreshLibraryAccountId } = navigation.state.params || {}
    scope = scope || "all"

    const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
    const bookList = scope == 'all'
      ? library.bookList
      : (scope == 'device'
        ? library.bookList.filter(bookId => books[bookId].downloadStatus == 2)
        : library.bookList.filter(bookId => (
          Object.keys(books[bookId].accounts).some(accountId => accountId.split(':')[0] == scope.split(':')[0])
        ))
      )

    if(logOutUrl) {
      return (
        <Container>
          <AppHeader hide={true} />
          <WebView
            style={styles.flex1}
            source={getReqOptionsWithAdditions({
              uri: logOutUrl,
              headers: {
                "x-cookie-override": (accounts[logOutAccountId || refreshLibraryAccountId] || {}).cookie,
                "x-platform": Platform.OS,
              },
            })}
            onLoad={this.logOurUrlOnLoad}
            onError={this.logOurUrlOnLoad}  // Even if it fails, log them out on the device at least
          />
          <FullScreenSpin
            text={i18n("Logging out...")}
            style={{ backgroundColor: 'white' }}
          />
        </Container>
      )
    }

    return (
      <Container>
        <LibraryHeader
          scope={scope}
          navigation={navigation}
          toggleShowOptions={this.toggleShowOptions}
          hideOptions={this.hideOptions}
        />
        {fetchingBooks && bookList.length == 0
          ? (
            <View style={styles.spinnerContainer}>
              <Spin />
            </View>
          )
          : (
            bookList.length == 0
              ? (
                <Text style={styles.noBooks}>{i18n("No books found.")}</Text>
              )
              : (
                <Content style={styles.content}>
                  <LibraryViewer
                    bookList={bookList}
                    navigation={navigation}
                  />
                </Content>
              )
          )
        }
        {!!showOptions && 
          <Options
            requestHide={this.hideOptions}
            headerText={i18n("Sort by...")}
            options={[
              {
                text: i18n("Title"),
                selected: library.sort == 'title',
                onPress: () => setSort({ sort: 'title' }),
              },
              {
                text: i18n("Author"),
                selected: library.sort == 'author',
                onPress: () => setSort({ sort: 'author' }),
              },
            ]}
          />
        }

        <BookDownloader
          downloadPaused={downloadPaused}
          navigation={navigation}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  idps: state.idps,
  books: state.books,
  library: state.library,
  fetchingBooks: state.fetchingBooks,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addBooks,
  reSort,
  setSort,
  setFetchingBooks,
  setDownloadStatus,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)
