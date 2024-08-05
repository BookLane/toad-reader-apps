import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity, Platform, Alert } from "react-native"

import useRouterState from "../../hooks/useRouterState"

// import { debounce, getBooksDir } from "../../utils/toolbox"
import { removeEpub } from "../../utils/removeEpub"
import { logEvent } from "../../utils/analytics"
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
}) => {

  const { historyPush } = useRouterState()

  const getBookInfo = useCallback(bookId => books[bookId], [ books, bookId ])

  const onPress = useCallback(
    async () => {
      const { downloadStatus, audiobookInfo } = getBookInfo(bookId)
      const isAudiobook = !!audiobookInfo
      // const accountId = Object.keys(books[bookId].accounts)[0]

      if(downloadStatus == 2 || Platform.OS === 'web' || isAudiobook) {
        historyPush(`/book/${bookId}`)

      } else if(downloadStatus == 0) {
        setDownloadStatus({ bookId, downloadStatus: 1 })
        pushToBookDownloadQueue({ bookId })

        logEvent({
          eventName: `Download book`,
          properties: {
            title: books[bookId].title || `Book id: ${bookId}`,
            type: `ebook`,
          },
        })
      }
    },
    [ bookId, setDownloadStatus, pushToBookDownloadQueue, books ],
  )
  
  const onLongPress = useCallback(
    () => {
      const { downloadStatus, audiobookInfo } = getBookInfo(bookId)
      const isAudiobook = !!audiobookInfo

      if(downloadStatus == 0) {
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

                logEvent({
                  eventName: `Remove book`,
                  properties: {
                    title: books[bookId].title || `Book id: ${bookId}`,
                    type: isAudiobook ? `audiobook` : `ebook`,
                  },
                })
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

export default connect(mapStateToProps, matchDispatchToProps)(LibraryBook)
