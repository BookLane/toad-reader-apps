import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity, Platform, Alert } from "react-native"
import { withRouter } from "react-router"

// import { debounce, getBooksDir } from "../../utils/toolbox"
import { removeEpub } from "../../utils/removeEpub"
import { i18n } from "inline-i18n"

import { removeFromBookDownloadQueue, setDownloadStatus, pushToBookDownloadQueue, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions"

const LibraryBook = ({
  bookId,
  children,

  books,

  removeFromBookDownloadQueue,
  setDownloadStatus,
  pushToBookDownloadQueue,
  clearTocAndSpines,
  clearUserDataExceptProgress,

  history,
}) => {

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
        Alert.alert(
          i18n("Remove from device"),
          i18n("Are you sure you want to remove “{{book_title}}” from this device?", {
            book_title: books[bookId].title,
          }),
          [
            {
              text: i18n("Cancel"),
              style: 'cancel',
            },
            {
              text: i18n("Remove"),
              onPress: async () => {
                await removeEpub({
                  bookId,
                  removeFromBookDownloadQueue,
                  setDownloadStatus,
                  clearTocAndSpines,
                  clearUserDataExceptProgress,
                })

                Alert.alert(i18n("The book was removed."))
              },
              // style: 'destructive',
            },
          ],
          { cancelable: false }
        )
      }
    },
    [ books, bookId ],
  )

  if(Platform.OS === 'web') return children

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
    >{children}</TouchableOpacity>
  )
}

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  pushToBookDownloadQueue,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LibraryBook))
