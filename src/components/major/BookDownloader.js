import { useState, useEffect } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useInstanceValue from '../../hooks/useInstanceValue'
import useSetTimeout from '../../hooks/useSetTimeout'
import useRouterState from '../../hooks/useRouterState'
import { getBookCookie } from '../../hooks/useBookCookies'
import { getBooksDir, getDataOrigin, getIdsFromAccountId, getIDPOrigin } from "../../utils/toolbox"
import { fetchEpubAndAssets } from "../../utils/epubDownloader"
import parseEpub from "../../utils/parseEpub"
import downloadAsync from "../../utils/downloadAsync"

import { setBookCookies, removeFromBookDownloadQueue, setDownloadProgress,
         setDownloadStatus, setTocAndSpines, updateAccount } from "../../redux/actions"

const BookDownloader = ({
  downloadPaused,
  idps,
  accounts,
  bookDownloadQueue,
  books,
  downloadProgressByBookId,

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
  const getDownloadProgressByBookId = useInstanceValue(downloadProgressByBookId)
  const getBooks = useInstanceValue(books)
  const { historyPush } = useRouterState()

  useEffect(
    () => {
      ;(async () => {

        if(currentDownloadBookId) return
        if(!getBooks() || !bookDownloadQueue || !bookDownloadQueue[0]) return

        const bookId = bookDownloadQueue[0]
        const { downloadStatus, title, audiobookInfo } = getBooks()[bookId] || {}
        const isAudiobook = !!audiobookInfo
        const accountId = Object.keys((getBooks()[bookId] || {}).accounts || {})[0]

        if(getDownloadPaused() && !audiobookInfo) return

        const downloadWasCanceled = bookId => {
          const { downloadStatus } = (getBooks() || {})[bookId] || {}
      
          if(downloadStatus === 0) {
            setCurrentDownloadBookId(null)
            return true
          }

          return false
        }

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

        if(isAudiobook) {

          const { spines } = audiobookInfo

          for(let spine of spines) {

            if((getDownloadProgressByBookId()[bookId] || {})[spine.filename] === 1) continue

            const uri = `${downloadOrigin}/epub_content/book_${bookId}/${spine.filename}`

            const success = await downloadAsync(
              uri,
              `${getBooksDir()}${bookId}/${spine.filename}`,
              {
                headers: {
                  [__DEV__ ? "x-cookie-override" : "cookie"]: cookie,
                },
              },
            )

            if(success) {

              setDownloadProgress({
                bookId,
                downloadProgress: {
                  ...(getDownloadProgressByBookId()[bookId] || {}),
                  [spine.filename]: 1,
                },
              })

            } else {

              console.log(`Could not download audiobook spine from ${uri}. (Could be bad internet connection.)`)
              sentry(`Could not download audiobook spine from ${uri}. (Could be bad internet connection.)`)
              historyPush("/error", {
                title: i18n("Connection error"),
                message: i18n("You are probbably not connected to the internet. Please check your connection and try again."),
              })
              markDownloadComplete(0)
              return

            }

          }

          markDownloadComplete(2)
          console.log(`Done downloading audiobook with bookId ${bookId}`)
          return

        }

        const epubFetchInfo = await fetchEpubAndAssets({
          downloadOrigin,
          bookId,
          cookie,
          progressCallback: progress => {
            setDownloadProgress({
              bookId,
              downloadProgress: parseInt(progress * 100, 10),
            })
          },
          getDownloadPaused,
          title,
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
        if(epubFetchInfo.errorMessage) {
          console.log('ERROR: fetchEpubAndAssets of EPUB returned with error', bookId)
          historyPush("/error", {
            title: epubFetchInfo.errorTitle,
            message: epubFetchInfo.errorMessage,
          })
        }
        if(epubFetchInfo.noAuth) {
          // have them login again
          updateAccount({
            accountId,
            accountInfo: {
              needToLogInAgain: true
            },
          })
        }
        if(!epubFetchInfo.success) {
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

const mapStateToProps = ({ idps, accounts, bookDownloadQueue, books, downloadProgressByBookId }) => ({
  idps,
  accounts,
  bookDownloadQueue,
  books,
  downloadProgressByBookId,
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
