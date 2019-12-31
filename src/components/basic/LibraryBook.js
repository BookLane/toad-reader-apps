import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity, Platform } from "react-native"
import { withRouter } from "react-router"

// import { debounce, getBooksDir } from "../../utils/toolbox"
import { confirmRemoveEPub } from "../../utils/removeEpub"
// import { i18n } from "inline-i18n"

import { removeFromBookDownloadQueue, setDownloadStatus, pushToBookDownloadQueue, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions"

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

      if(downloadStatus == 2 || Platform.OS === 'web') {
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

  if(Platform.OS === 'web') return children

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
    >{children}</TouchableOpacity>
  )
}

const mapStateToProps = ({ books, idps, accounts }) => ({
  books,
  idps,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  pushToBookDownloadQueue,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LibraryBook))
