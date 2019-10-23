import { useState } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import i18n from "../../utils/i18n.js"
import useInstanceValue from '../../hooks/useInstanceValue'
import useSetTimeout from '../../hooks/useSetTimeout'
import useRouterState from '../../hooks/useRouterState'

import { getBooksDir, getDataOrigin } from "../../utils/toolbox.js"
import { fetchZipAndAssets } from "../../utils/zipDownloader.js"
import parseEpub from "../../utils/parseEpub.js"

import { removeFromBookDownloadQueue, setDownloadProgress, setDownloadStatus, setTocAndSpines, updateAccount } from "../../redux/actions.js"

const BookDownloader = ({
  downloadPaused,
  idps,
  accounts,
  bookDownloadQueue,
  books,
  removeFromBookDownloadQueue,
  setDownloadProgress,
  setDownloadStatus,
  setTocAndSpines,
  updateAccount,
  history,
}) => {

  const [ currentDownloadBookId, setCurrentDownloadBookId ] = useState(null)

  const [ setThrottleTimeout ] = useSetTimeout()
  const getDownloadPaused = useInstanceValue(downloadPaused)
  const getBooks = useInstanceValue(books)
  const [ pushToHistory ] = useRouterState({ history })

  if(currentDownloadBookId) return null
  if(!getBooks() || !bookDownloadQueue || !bookDownloadQueue[0]) return null
  if(getDownloadPaused()) return null

  const downloadWasCanceled = bookId => {
    const { downloadStatus } = (getBooks() || {})[bookId] || {}

    if(downloadStatus === 0) {
      setCurrentDownloadBookId(null)
      return true
    }

    return false
  }

  ;(async () => {

    const bookId = bookDownloadQueue[0]
    const { downloadStatus, title } = getBooks()[bookId] || {}
    const accountId = Object.keys((getBooks()[bookId] || {}).accounts || {})[0]

    if(downloadStatus === 2 || !accountId) {
      removeFromBookDownloadQueue({ bookId })
      return
    }

    setCurrentDownloadBookId(bookId)
    console.log(`Download book with bookId ${bookId}...`)

    setDownloadStatus({ bookId, downloadStatus: 1 })

    const markDownloadComplete = downloadStatus => {
      setDownloadStatus({ bookId, downloadStatus })
      removeFromBookDownloadQueue({ bookId })
      setCurrentDownloadBookId(null)
    }

    let throttleLastRan = 0
    const zipFetchInfo = await fetchZipAndAssets({
      zipUrl: `${getDataOrigin(idps[accountId.split(':')[0]])}/epub_content/book_${bookId}/book.epub`,
      localBaseUri: `${getBooksDir()}${bookId}/`,
      cookie: accounts[accountId].cookie,
      progressCallback: progress => {
        const throttleWaitTime = Math.max(500 - (Date.now() - throttleLastRan), 0)
        setThrottleTimeout(() => {
          setDownloadProgress({
            bookId,
            downloadProgress: parseInt(progress * 100, 10),
          })
        }, throttleWaitTime)
      },
      getDownloadPaused,
      title,
      requiresAuth: true,
    })
    if(getDownloadPaused()) {
      console.log(`Download of book with bookId ${bookId} was deferred due to a book open.`)
      setDownloadProgress({
        bookId,
        downloadProgress: 0,
      })
      setCurrentDownloadBookId(null)
      return
    }
    if(downloadWasCanceled(bookId)) return  // check this after each await
    if(zipFetchInfo.errorMessage) {
      console.log('ERROR: fetchZipAndAssets of EPUB returned with error', bookId)
      pushToHistory("/error", {
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
    if(downloadWasCanceled(bookId)) return
    if(!success) {
      pushToHistory("/error", {
        message: i18n("The EPUB for the book entitled \"{{title}}\" appears to be invalid.", { title }),
      })
      markDownloadComplete(0)
      return
    }

    // If we get to this point, the download and parsing was successful
    setTocAndSpines({ bookId, toc, spines })
    markDownloadComplete(2)
    console.log(`Done downloading book with bookId ${bookId}`)

  })()

  return null
}

const mapStateToProps = ({ idps, accounts, bookDownloadQueue, books }) => ({
  idps,
  accounts,
  bookDownloadQueue,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadProgress,
  setTocAndSpines,
  setDownloadStatus,
  updateAccount,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookDownloader))
