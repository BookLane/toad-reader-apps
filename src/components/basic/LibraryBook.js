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
        history.push(`/book/${bookId}`)
        
      } else if(downloadStatus == 0) {
        setDownloadStatus({ bookId, downloadStatus: 1 })
        pushToBookDownloadQueue({ bookId })
      }
    },
    [ bookId, setDownloadStatus, pushToBookDownloadQueue, books, history ],
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
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  pushToBookDownloadQueue,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LibraryBook))
