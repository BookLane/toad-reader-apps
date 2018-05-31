import React from "react"
import { StyleSheet, WebView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content, Text, View } from "native-base"
import { FileSystem } from "expo"
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

import { addBooks, reSort, setSort, setFetchingBooks, setDownloadStatus,
         removeAccount, updateAccount, setReaderStatus } from "../../redux/actions.js"

const {
  APP_BACKGROUND_COLOR,
} = Expo.Constants.manifest.extra

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
  }

  componentWillMount() {
    this.getUpToDateReader()
  }

  getUpToDateReader = async () => {
    const { setReaderStatus, navigation } = this.props
    // TODO: first test for an active internet connection

    updateReader({ setReaderStatus }).then(success => {
      if(!success) {
        navigation.navigate("ErrorMessage", {
          message: i18n("The updated reader is not downloading properly. Please contact us if this issue persists."),
        })
        // No need to cancel the following timeout on unmount since this is the base screen
        // and never unmounts.
        setTimeout(() => this.getUpToDateReader(), 15000)
      }
    })
  }

  async fetchAll(nextProps) {
    const { setFetchingBooks, accounts, idps, books, addBooks, reSort, updateAccount, navigation } = nextProps || this.props
    const { refreshLibraryAccountId } = navigation.state.params || {}

    const account = Object.values(accounts)[0]
    if(!account || account.needToLogInAgain) {
      // when I move to multiple accounts, this will instead need to go to the Accounts screen
      navigation.navigate("Login", {
        idpId: Object.keys(idps)[0],
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
          },
        }))
        // TODO: what about no internet connection? I should catch this. I might also use NetInfo. 

        if(response.status != 200) {
          // they need to login again
          // TODO: I should probably look for other possibilities like 3XX or 5XX errors
          updateAccount({
            accountId,
            accountInfo: {
              needToLogInAgain: true
            },
          })
          // TODO: I probably need to refetch after?
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
  
  componentDidMount() {
    this.fetchAll()
  }

  componentWillReceiveProps(nextProps) {
    const { accounts } = this.props

    if(nextProps.accounts !== accounts) {
      this.fetchAll(nextProps)
    }
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

  logOurUrlOnError = () => {
    // TODO: I should probably delete the cookie from here (if I am not already) and inform them it only half-logged out.
  }
  
  render() {
    const { library, accounts, books, fetchingBooks, navigation, setSort } = this.props
    const { showOptions } = this.state

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
              },
            })}
            onLoad={this.logOurUrlOnLoad}
            onError={this.logOurUrlOnError}
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

        <BookDownloader navigation={navigation} />
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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)
