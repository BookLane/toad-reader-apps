import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"
import { withRouter } from "react-router"

// import { debounce, getBooksDir } from "../../utils/toolbox.js"
import { confirmRemoveEPub } from "../../utils/removeEpub.js"
import i18n from "../../utils/i18n.js"

import { removeFromBookDownloadQueue, setDownloadStatus, pushToBookDownloadQueue, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions.js"

const LibraryBook = props => {
  const {
    books,
    bookId,
    removeFromBookDownloadQueue,
    setDownloadStatus,
    pushToBookDownloadQueue,
    clearTocAndSpines,
    clearUserDataExceptProgress,
    readerStatus,
    history,
    children,
  } = props

  const getDownloadStatus = useCallback(
    bookId => books[bookId].downloadStatus,
    [ books ],
  )

  const onPress = useCallback(
    async () => {
      const downloadStatus = getDownloadStatus(bookId)
      // const accountId = Object.keys(books[bookId].accounts)[0]

      if(downloadStatus == 2) {
        switch(readerStatus) {
          case 'ready':
          case 'downloading':
            history.push(`/book/${bookId}`)
            break;
          case 'waiting for internet':
            history.push("/error", {
              title: i18n("Connection error"),
              message: i18n("The app has been updated and requires an updated reader component to be downloaded. Thus, you must connect to the internet before you will be able to read."),
            })
            break;
          case 'error':
            history.push("/error", {
              message: i18n("There has been an update to the reader component that is not downloading properly. Please contact us if this issue persists."),
            })
            break;
          default:
            history.push("/error")
        }
        
      } else if(downloadStatus == 0) {
        setDownloadStatus({ bookId, downloadStatus: 1 })
        pushToBookDownloadQueue({ bookId })
      }
    },
    [ bookId, setDownloadStatus, pushToBookDownloadQueue, books, readerStatus, history ],
  )
  
  const onLongPress = useCallback(
    () => {
      if(getDownloadStatus(bookId) == 0) {
        onPress()
      } else {
        confirmRemoveEPub({ books, bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress })
      }
    },
    [ books, bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress ],
  )

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
    >{children}</TouchableOpacity>
  )
}

const mapStateToProps = (state) => ({
  books: state.books,
  idps: state.idps,
  accounts: state.accounts,
  readerStatus: state.readerStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  pushToBookDownloadQueue,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LibraryBook))
