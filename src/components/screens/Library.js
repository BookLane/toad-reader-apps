import React from "react"
import { Updates, ScreenOrientation } from "expo"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { Platform, StyleSheet, View, Text } from "react-native"
import { Switch, Route } from "../routers/react-router"
import { withRouter } from "react-router"
import { WebView } from 'react-native-webview'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SideMenu from "react-native-side-menu"
import { Layout } from "react-native-ui-kitten"
import i18n from "../../utils/i18n.js"
import downloadAsync from "../../utils/downloadAsync.js"
import { updateReader } from "../../utils/updateReader.js"

import Book from "./Book"
import Drawer from "../major/Drawer"
import LibraryHeader from "../major/LibraryHeader"
import LibraryCovers from "../major/LibraryCovers"
import LibraryList from "../major/LibraryList"
import Options from "../major/Options"
import Spin from "../basic/Spin"
import FullScreenSpin from "../basic/FullScreenSpin"
import AppHeader from "../basic/AppHeader.js"
import BookDownloader from "../major/BookDownloader.js"
import Login from "../major/Login"

import { getReqOptionsWithAdditions, setUpTimeout, unmountTimeouts, getOrigin } from "../../utils/toolbox.js"
// import { removeSnapshotsIfANewUpdateRequiresIt } from "../../utils/removeEpub.js"

import { addBooks, setCoverFilename, reSort, setSort, setFetchingBooks, setDownloadStatus,
         removeAccount, updateAccount, setReaderStatus, clearAllSpinePageCfis, autoUpdateCoreIdps } from "../../redux/actions.js"

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
    flex: 1,
  },
})

class Library extends React.Component {

  state = {
    showOptions: false,
    downloadPaused: false,
    showLogin: false,
  }

  componentWillMount() {
    const { books, clearAllSpinePageCfis, reSort, autoUpdateCoreIdps, setReaderStatus } = this.props

    Updates.addListener(this.onUpdateEvent)
    updateReader({ setReaderStatus })
    // removeSnapshotsIfANewUpdateRequiresIt({ books, clearAllSpinePageCfis })

    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
    reSort()

    autoUpdateCoreIdps()
  }

  componentDidMount() {
    const { library, reSort } = this.props

    // this.navigationWillBlurListener = navigation.addListener("willBlur", () => this.setState({ downloadPaused: true }))
    // this.navigationDidFocusListener = navigation.addListener("didFocus", () => this.setState({ downloadPaused: false }))
    // this.navigationWillFocusListener = navigation.addListener("willFocus", reSort)

    this.fetchAll()
  }

  componentWillReceiveProps(nextProps) {
    const { accounts } = this.props

    if(nextProps.accounts !== accounts) {
      this.fetchAll(nextProps)
    }
  }

  componentWillUnmount() {
    // this.navigationWillBlurListener.remove()
    // this.navigationDidFocusListener.remove()
    // this.navigationWillFocusListener.remove()

    unmountTimeouts.bind(this)()
  }

  onUpdateEvent = ({ type }) => {
    if(type === Updates.EventType.DOWNLOAD_FINISHED) {
      this.JSUpdateReady = true
    }
  }

  onLoginSuccess = () => {
    if(this.JSUpdateReady) {
      Updates.reloadFromCache()
    } else {
      this.setState({ showLogin: false })
    }
  }

  async fetchAll(nextProps) {
    const { setFetchingBooks, accounts, idps, books, addBooks,
            reSort, updateAccount, history, location } = nextProps || this.props
    const { refreshLibraryAccountId } = location.state || {}

    const account = Object.values(accounts)[0]
    if(!account || account.needToLogInAgain) {
      // when I move to multiple accounts, this will instead need to go to the Accounts screen
      this.setState({ showLogin: true })
      return
    }

    // TODO: presently it gets the account libraries just one at a time; could get these in parallel to be quicker
    setFetchingBooks({ value: true })
    for(let accountId in accounts) {
      try {

        const [ idpId ] = accountId.split(':')

        // no need to get the library listing if we already have it
        if(!refreshLibraryAccountId && Object.values(books).some(book => book.accounts[accountId])) {
          setUpTimeout(() => this.getCovers({ idpId }), 0, this)
          continue
        }

        // update books

        const libraryUrl = `${getOrigin(idps[idpId])}/epub_content/epub_library.json`
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

        setUpTimeout(() => this.getCovers({ idpId }), 0, this)

        if(refreshLibraryAccountId) {
          location.state = {}
          this.forceUpdate()
        }
        
      } catch(error) {
        history.push("/error", {
          message: error.message || null,
        })
      }
    }
    setFetchingBooks({ value: false })
  }

  getCovers = ({ idpId }) => {
    const { idps={}, books={}, setCoverFilename } = this.props

    for(let bookId in books) {
      const book = books[bookId]

      if(book.coverHref && !book.coverFilename) {
        const idp = idps[idpId]

        if(idp) {
          const coverFilename = book.coverHref.split('/').pop()

          downloadAsync(
            `${getOrigin(idp)}/${book.coverHref}`,
            `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`,
          ).then(successful => {
            if(successful) {
              setCoverFilename({
                bookId,
                coverFilename,
              })
            }
          })
        }
        
      }
    }
  }
  
  toggleShowOptions = () => {
    const { showOptions } = this.state

    this.setState({ showOptions: !showOptions })
  }
  
  hideOptions = () => this.setState({ showOptions: false })

  logOutUrlOnLoad = () => {
    const { location, removeAccount, updateAccount } = this.props
    const { logOutAccountId, refreshLibraryAccountId } = location.state || {}

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
      location.state = {}
      this.forceUpdate()
    }
  }

  sideMenuOnChange = isOpen => {
    const { history, location } = this.props

    if(!isOpen && location.pathname === '/drawer') {
      history.goBack()
    }
  }
  
  render() {
    const { library, accounts, idps, books, fetchingBooks, setSort, location } = this.props
    const { showOptions, downloadPaused, showLogin } = this.state

    let { logOutUrl, logOutAccountId, refreshLibraryAccountId } = location.state || {}
    const scope = library.scope || "all"

    const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
    const bookList = scope == 'all'
      ? library.bookList
      : (scope == 'device'
        ? library.bookList.filter(bookId => books[bookId].downloadStatus == 2)
        : library.bookList.filter(bookId => (
          Object.keys(books[bookId].accounts).some(accountId => accountId.split(':')[0] == scope.split(':')[0])
        ))
      )

    if(showLogin) {
      return (
        <Login
          idpId={Object.keys(idps)[0]}
          onSuccess={this.onLoginSuccess}
        />
      )
    }

    if(logOutUrl) {
      return (
        <Layout>
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
            onLoad={this.logOutUrlOnLoad}
            onError={this.logOutUrlOnLoad}  // Even if it fails, log them out on the device at least
          />
          <FullScreenSpin
            text={
              Object.values(idps).every(idp => idp.idpNoAuth)
                ? i18n("Finding books...")
                : i18n("Logging out...")
            }
            style={{ backgroundColor: 'white' }}
          />
        </Layout>
      )
    }

    return (
      <SideMenu
        menu={<Drawer />}
        openMenuOffset={280}
        isOpen={location.pathname === '/drawer'}
        onChange={this.sideMenuOnChange}
      >
        <Layout>
          <LibraryHeader
            scope={scope}
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
                  <View style={styles.content}>
                    <LibraryViewer
                      bookList={bookList}
                    />
                  </View>
                )
            )
          }
          {!!showOptions && 
            <Options
              requestHide={this.hideOptions}
              headerText={i18n("Sort by...")}
              options={[
                {
                  text: i18n("Recent"),
                  selected: library.sort == 'recent',
                  onPress: () => setSort({ sort: 'recent' }),
                },
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
          />
        </Layout>

        <Switch>
          <Route path="/book/:id" component={Book} />
        </Switch>

      </SideMenu>
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
  setCoverFilename,
  reSort,
  setSort,
  setFetchingBooks,
  setDownloadStatus,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Library))
