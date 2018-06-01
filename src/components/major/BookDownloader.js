import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import i18n from "../../utils/i18n.js"

import { getBooksDir } from "../../utils/toolbox.js"
import { fetchZipAndAssets } from "../../utils/zipDownloader.js"
import parseEpub from "../../utils/parseEpub.js"

import { removeFromBookDownloadQueue, setDownloadProgress, setDownloadStatus, setTocAndSpines, updateAccount } from "../../redux/actions.js";

class BookDownloader extends React.Component {

  state = {
    currentDownloadBookId: null,
  }

  componentDidMount() {
    this.downloadABook()
  }

  componentWillUpdate(nextProps, nextState) {
    this.downloadABook(nextProps, nextState)
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  downloadWasCanceled = bookId => {
    const { books={} } = this.props
    const { downloadStatus } = books[bookId] || {}

    if(downloadStatus === 0) {
      this.setState({ currentDownloadBookId: null })
      return true
    }

    return false
  }

  downloadABook = async (nextProps, nextState) => {
    const { idps, accounts, bookDownloadQueue, books, removeFromBookDownloadQueue, setDownloadProgress,
            setDownloadStatus, setTocAndSpines, updateAccount, navigation } = nextProps || this.props
    const { currentDownloadBookId } = nextState || this.state

    if(currentDownloadBookId) return
    if(!books || !bookDownloadQueue || !bookDownloadQueue[0]) return
    
    const bookId = bookDownloadQueue[0]
    const { downloadStatus, title } = books[bookId] || {}
    const accountId = Object.keys((books[bookId] || {}).accounts || {})[0]

    if(downloadStatus === 2 || !accountId) {
      removeFromBookDownloadQueue({ bookId })
      return
    }

    this.setState({ currentDownloadBookId: bookId })
    console.log(`Download book with bookId ${bookId}...`)

    setDownloadStatus({ bookId, downloadStatus: 1 })

    const markDownloadComplete = downloadStatus => {
      setDownloadStatus({ bookId, downloadStatus })
      removeFromBookDownloadQueue({ bookId })
      this.setState({ currentDownloadBookId: null })
    }

    let throttleLastRan = 0
    let throttleTimeout
    const zipFetchInfo = await fetchZipAndAssets({
      zipUrl: `https://${idps[accountId.split(':')[0]].domain}/epub_content/book_${bookId}/book.epub`,
      localBaseUri: `${getBooksDir()}${bookId}/`,
      cookie: accounts[accountId].cookie,
      progressCallback: progress => {
        const throttleWaitTime = Math.max(500 - (Date.now() - throttleLastRan), 0)
        clearTimeout(throttleTimeout)
        throttleTimeout = setTimeout(() => {
          setDownloadProgress({
            bookId,
            downloadProgress: parseInt(progress * 100, 10),
          })
        }, throttleWaitTime)
      },
      title,
      requiresAuth: true,
    })
    if(this.downloadWasCanceled(bookId)) return  // check this after each await
    if(zipFetchInfo.errorMessage) {
      console.log('ERROR: fetchZipAndAssets of EPUB returned with error', bookId)
      navigation.navigate("ErrorMessage", {
        title: zipFetchInfo.errorTitle,
        message: zipFetchInfo.errorMessage,
      })
    }
    if(zipFetchInfo.noAuth) {
      // have them login again
      updateAccount({
        accountId,
        accountInfo: {
          needToLogInAgain: true
        },
      })
    }
    if(!zipFetchInfo.success) {
      markDownloadComplete(0)
      return
    }
    const { toc, spines, success } = await parseEpub({ bookId })
    if(this.downloadWasCanceled(bookId)) return
    if(!success) {
      navigation.navigate("ErrorMessage", {
        message: i18n("The EPUB for the book entitled \"{{title}}\" appears to be invalid.", { title }),
      })
      markDownloadComplete(0)
      return
    }

    // If we get to this point, the download and parsing was successful
    setTocAndSpines({ bookId, toc, spines })
    markDownloadComplete(2)
    console.log(`Done downloading book with bookId ${bookId}`)
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  idps: state.idps,
  accounts: state.accounts,
  bookDownloadQueue: state.bookDownloadQueue,
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadProgress,
  setTocAndSpines,
  setDownloadStatus,
  updateAccount,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookDownloader)
