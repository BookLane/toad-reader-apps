import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getBooksDir } from "../../utils/toolbox.js"
import { fetchZipAndAssets } from "../../utils/zipDownloader.js"
import parseEpub from "../../utils/parseEpub.js"

import { removeFromBookDownloadQueue, setDownloadStatus, setTocAndSpines } from "../../redux/actions.js";

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
    const { idps, bookDownloadQueue, books, removeFromBookDownloadQueue,
            setDownloadStatus, setTocAndSpines } = nextProps || this.props
    const { currentDownloadBookId } = nextState || this.state

    if(currentDownloadBookId) return
    if(!books || !bookDownloadQueue || !bookDownloadQueue[0]) return
    
    const bookId = bookDownloadQueue[0]
    const { downloadStatus } = books[bookId] || {}
    const accountId = Object.keys((books[bookId] || {}).accounts || {})[0]

    if(downloadStatus === 2 || !accountId) {
      removeFromBookDownloadQueue({ bookId })
      return
    }

    this.setState({ currentDownloadBookId: bookId })
    console.log(`Download book with bookId ${bookId}...`)

    setDownloadStatus({ bookId, downloadStatus: 1 })
    await fetchZipAndAssets({
      zipUrl: `https://${idps[accountId.split(':')[0]].domain}/epub_content/book_${bookId}/book.epub`,
      localBaseUri: `${getBooksDir()}${bookId}/`,
    })
    if(this.downloadWasCanceled(bookId)) return  // check this after each await
    const { toc, spines } = await parseEpub({ bookId })
    if(this.downloadWasCanceled(bookId)) return
    setTocAndSpines({ bookId, toc, spines })
    setDownloadStatus({ bookId, downloadStatus: 2 })
    removeFromBookDownloadQueue({ bookId })

    console.log(`Done downloading book with bookId ${bookId}`)
    this.setState({ currentDownloadBookId: null })
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  idps: state.idps,
  bookDownloadQueue: state.bookDownloadQueue,
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setTocAndSpines,
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookDownloader)
