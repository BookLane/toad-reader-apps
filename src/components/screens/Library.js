import React from "react"
import { AppState, StyleSheet } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content, Text, View } from "native-base"
import { FileSystem } from "expo"
import i18n from "../../utils/i18n.js"
import downloadAsync from "../../utils/downloadAsync.js"

import LibraryHeader from "../major/LibraryHeader"
import LibraryCovers from "../major/LibraryCovers"
import LibraryList from "../major/LibraryList"
import Options from "../major/Options"
import Spin from "../basic/Spin"
import PageCaptureManager from "../major/PageCaptureManager"

import { addBooks, reSort, setSort, setFetchingBooks, setErrorMessage, setDownloadStatus } from "../../redux/actions.js"

const styles = StyleSheet.create({
  noBooks: {
    marginTop: 50,
    textAlign: 'center',
  },
  spinnerContainer: {
    padding: 40,
  },
})

class Library extends React.Component {

  state = {
    showOptions: false,
  }

  async fetchAll() {
    const { setFetchingBooks, accounts, idps, addBooks, reSort, setErrorMessage } = this.props

    // TODO: presently it gets the account libraries just one at a time; could get these in parallel to be quicker
    this.setState({ lastFetchAll: Date.now() })
    setFetchingBooks({ value: true })
    for(accountId in accounts) {
      try {

        // update books
        const [ idpId, userId ] = accountId.split(':')
        await fetch(`https://${idps[idpId].domain}/logout`)  // this forces a refresh on the library
        const libraryUrl = `https://${idps[idpId].domain}/epub_content/epub_library.json`
        let response = await fetch(libraryUrl)
        if(response.status == 403) {
          await fetch(`https://${idps[idpId].domain}`)  // gets the cookie situated on the demo acct
          response = await fetch(libraryUrl)
        }
        if(response.status != 200) {
          throw new Error('Unable to fetch library')
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
    AppState.addEventListener('change', this._handleAppStateChange)
    this.fetchAll()
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = () => {
    if(Date.now() - this.state.lastFetchAll > 60*60*1000) {  // an hour or more later
      this.fetchAll()
    }
  }

  render() {

    const { library, books, fetchingBooks, navigation, setSort } = this.props
    const { showOptions } = this.state

    let { scope } = navigation.state.params || {}
    scope = scope || "all"

    const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
    const bookList = scope == 'all'
      ? library.bookList
      : (scope == 'device'
        ? library.bookList.filter(bookId => books[bookId].downloadStatus == 2)
        : library.bookList.filter(bookId => (
          books[bookId].accountIds.some(accountId => accountId.split(':')[0] == scope.split(':')[0])
        ))
      )

    return (
      <Container>
        <LibraryHeader
          scope={scope}
          navigation={navigation}
          toggleShowOptions={() => this.setState({ showOptions: !showOptions })}
          hideOptions={() => this.setState({ showOptions: false })}
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
                <Content>
                  <LibraryViewer
                    bookList={bookList}
                    navigation={navigation}
                  />
                  <PageCaptureManager />
                </Content>
              )
          )
        }
        {showOptions && 
          <Options
            requestHide={() => this.setState({ showOptions: false })}
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
        
        {/* TODO: Add modal for error message */}
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
  errorMessage: state.errorMessage,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addBooks,
  reSort,
  setSort,
  setFetchingBooks,
  setErrorMessage,
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)
