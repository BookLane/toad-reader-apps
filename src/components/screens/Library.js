import React from "react"
import { AppState, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Spinner, Content, Text, ActionSheet } from "native-base"
import { FileSystem } from "expo"
import i18n from "../../utils/i18n.js"
import downloadAsync from "../../utils/downloadAsync.js"

import LibraryHeader from "../major/LibraryHeader.js"
import LibraryCovers from "../major/LibraryCovers.js"
import LibraryList from "../major/LibraryList.js"

import removeEpub from "../../utils/removeEpub.js"

import { addBooks, reSort, setFetchingBooks, setErrorMessage, setDownloadStatus } from "../../redux/actions.js"

class Library extends React.Component {

  async fetchAll() {
    const { setFetchingBooks, accounts, idps, addBooks, reSort, setErrorMessage } = this.props

    // TODO: presently it gets the account libraries just one at a time; could get these in parallel to be quicker
    this.setState({ lastFetchAll: Date.now() })
    setFetchingBooks({ value: true })
    for(accountId in accounts) {
      try {

        // update books
        const [ idpId, userId ] = accountId.split(':')
        // await fetch(`https://${idps[idpId].domain}/logout`)  // this forces a refresh on the library
        const libraryUrl = `https://${idps[idpId].domain}/epub_content/epub_library.json`
        let response = await fetch(libraryUrl)
        if(response.status == 403) {
          await fetch(`https://${idps[idpId].domain}`)  // gets the cookie situated on the demo acct
          response = await fetch(libraryUrl)
        }
        if(response.status != 200) {
          throw new Error('Unable to fetch library');
        }
        const books = await response.json()
        // TODO: needs to call function to remove books that are no longer in the account
        addBooks({
          books,
          accountId,
        })
        reSort()
        
        // get covers
        books.forEach(async book => {
          if(book.coverHref) {
            await downloadAsync(
              `https://${idps[idpId].domain}/${book.coverHref}`,
              `${FileSystem.documentDirectory}covers/${book.id}/${book.coverHref.split('/').pop()}`,
              { skipIfExists: true }
            )
          }
        })

      } catch(error) {
        console.log('error', error)
        setErrorMessage({ message: error.message || error || "Unknown error." })
      }
    }
    setFetchingBooks({ value: false })
  }
  
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.fetchAll()
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = () => {
    if(Date.now() - this.state.lastFetchAll > 60*60*1000) {  // an hour or more later
      this.fetchAll()
    }
  }

  removeBook = bookId => {
    const { books, setDownloadStatus } = this.props

    setDownloadStatus({ bookId, downloadStatus: 0 })
    removeEpub({ bookId })
  }
  
  render() {

    const { library, books, fetchingBooks, navigation } = this.props

    let { scope } = navigation.state.params || {}
    scope = scope || "all"
    
    const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
    const bookList = scope == 'all'
      ? library.bookList
      : library.bookList.filter(bookId => (
        books[bookId].accountIds.some(accountId => accountId.split(':')[0] == scope)
      ))
  
    return (
      <Container>
        <LibraryHeader
          scope={scope}
          navigation={navigation}
        />
        {fetchingBooks && bookList.length == 0
          ? <Spinner color='red' />
          : (
            bookList.length == 0
              ? (
                <View>
                  <Text>{i18n("No books found.")}</Text>
                </View>
              )
              : (
                <LibraryViewer
                  bookList={bookList}
                  navigation={navigation}
                  setRemoveBookId={bookId => ActionSheet.show(
                    {
                      options: [
                        { text: i18n("Remove from device"), icon: "remove-circle", iconColor: "#fa213b" },
                        { text: i18n("Cancel"), icon: "close" }
                      ],
                      destructiveButtonIndex: 0,
                      cancelButtonIndex: 1,
                      title: i18n(
                        'Are you sure you want to remove "{{book_title}}" from this device?',
                        {
                          book_title: books[bookId].title,
                        }
                      ),
                    },
                    buttonIndex => {
                      if(buttonIndex == 0) this.removeBook(bookId)
                    }
                  )}
                />
              )
          )
        }
        {/* TODO: show options */}
        {/* {showOptions &&
          <Content>
            <Text>
              options!
            </Text>
          </Content>
        } */}
        
        {/* TODO: Add modal for error message */}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  idps: state.idps,
  books: state.books,
  library: state.library,
  fetchingBooks: state.fetchingBooks,
  errorMessage: state.errorMessage,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addBooks,
  reSort,
  setFetchingBooks,
  setErrorMessage,
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)
