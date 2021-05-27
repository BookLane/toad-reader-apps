import { useState, useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useInstanceValue from '../../hooks/useInstanceValue'
import useSetTimeout from '../../hooks/useSetTimeout'
import useRouterState from '../../hooks/useRouterState'
import { getBookCookie } from '../../hooks/useBookCookies'
import { getBooksDir, getDataOrigin, getIdsFromAccountId, getIDPOrigin } from "../../utils/toolbox"
import { fetchZipAndAssets } from "../../utils/zipDownloader"
import parseEpub from "../../utils/parseEpub"

import { setBookCookies, removeFromBookDownloadQueue, setDownloadProgress,
         setDownloadStatus, setTocAndSpines, updateAccount } from "../../redux/actions"

const BookDownloader = ({
  downloadPaused,
  idps,
  accounts,
  bookDownloadQueue,
  books,

  setBookCookies,
  removeFromBookDownloadQueue,
  setDownloadProgress,
  setDownloadStatus,
  setTocAndSpines,
  updateAccount,
}) => {

  const [ currentDownloadBookId, setCurrentDownloadBookId ] = useState(null)

  const [ setThrottleTimeout ] = useSetTimeout()
  const getDownloadPaused = useInstanceValue(downloadPaused)
  const getBooks = useInstanceValue(books)
  const { historyPush } = useRouterState()

  useEffect(
    () => {
      ;(async () => {

        if(currentDownloadBookId) return
        if(!getBooks() || !bookDownloadQueue || !bookDownloadQueue[0]) return
        if(getDownloadPaused()) return

        const downloadWasCanceled = bookId => {
          const { downloadStatus } = (getBooks() || {})[bookId] || {}
      
          if(downloadStatus === 0) {
            setCurrentDownloadBookId(null)
            return true
          }

          return false
        }

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
        const { idpId } = getIdsFromAccountId(accountId)
        const idp = idps[idpId]
        const downloadOrigin = __DEV__ ? getDataOrigin(idp) : getIDPOrigin(idp)
        const cookie = (
          __DEV__
            ? accounts[accountId].cookie
            : await getBookCookie({
              books: getBooks(),
              accounts,
              idp,
              setBookCookies,
              bookId,
            })
        )
        const zipFetchInfo = await fetchZipAndAssets({
          zipUrl: `${downloadOrigin}/epub_content/book_${bookId}/book.epub`,
          localBaseUri: `${getBooksDir()}${bookId}/`,
          cookie,
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
          historyPush("/error", {
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
          historyPush("/error", {
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
    },
  )

  return null
}

const mapStateToProps = ({ idps, accounts, bookDownloadQueue, books }) => ({
  idps,
  accounts,
  bookDownloadQueue,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setBookCookies,
  removeFromBookDownloadQueue,
  setDownloadProgress,
  setTocAndSpines,
  setDownloadStatus,
  updateAccount,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookDownloader)
