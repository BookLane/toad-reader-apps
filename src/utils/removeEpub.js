import Expo, { FileSystem } from "expo"
import i18n from "./i18n.js"
import { ActionSheet, Toast } from "native-base"

import { getBooksDir, getSnapshotsDir } from "./toolbox.js"

const {
  REMOVE_ICON_COLOR,
} = Expo.Constants.manifest.extra

const removeEpub = async ({ books, bookId, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, removeCover }) => {
  setDownloadStatus({ bookId, downloadStatus: 0 })
  clearTocAndSpines({ bookId })
  clearUserDataExceptProgress({ bookId })
  await FileSystem.deleteAsync(`${getBooksDir()}${bookId}`, { idempotent: true })
  await FileSystem.deleteAsync(`${getSnapshotsDir()}${bookId}`, { idempotent: true })
  
  if(removeCover) {
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}covers/${bookId}/${books[bookId].coverFilename}`, { idempotent: true })
  }

  console.log(`Done removing snapshots and contents for book ${bookId}.`)
}

export const clearPageCfiInfoAndSnapshots = async ({ bookId, clearAllSpinePageCfis, success }) => {
  
  clearAllSpinePageCfis({ bookId })
  await FileSystem.deleteAsync(`${getSnapshotsDir()}${bookId}`, { idempotent: true })

  console.log(`Done removing snapshots for book ${bookId}.`)
}

export const confirmRemoveEPub = ({ books, bookId, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, done }) => {
  ActionSheet.show(
    {
      options: [
        { text: i18n("Remove from device"), icon: "remove-circle", iconColor: REMOVE_ICON_COLOR },
        { text: i18n("Cancel"), icon: "close" }
      ],
      destructiveButtonIndex: 0,
      cancelButtonIndex: 1,
      title: i18n(
        'Are you sure you want to remove "{{book_title}}" from this device?',
        {
          book_title: books[bookId].title,
        }
      ),
    },
    async buttonIndex => {
      if(buttonIndex == 0) {
        await removeEpub({ bookId, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress })
        done && done()
      }
    }
  )
}

export const confirmRemoveAllEPubs = ({ books, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress }) => {
  ActionSheet.show(
    {
      options: [
        { text: i18n("Remove all books"), icon: "remove-circle", iconColor: REMOVE_ICON_COLOR },
        { text: i18n("Cancel"), icon: "close" }
      ],
      destructiveButtonIndex: 0,
      cancelButtonIndex: 1,
      title: i18n("Are you sure you want to remove all books from this device?"),
    },
    async buttonIndex => {
      if(buttonIndex == 0) {
        await Promise.all(Object.keys(books).map(bookId => (
          removeEpub({ bookId, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress })
        )))
        Toast.show({
          text: i18n("All books removed."),
          buttonText: i18n("Okay"),
          duration: 5000,
        })
      }
    }
  )
}

export const confirmRemoveAccountEPubs = ({ books, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress }, callback) => {
  ActionSheet.show(
    {
      options: [
        { text: i18n("Log out"), icon: "log-out", iconColor: REMOVE_ICON_COLOR },
        { text: i18n("Cancel"), icon: "close" }
      ],
      destructiveButtonIndex: 0,
      cancelButtonIndex: 1,
      title: i18n("Are you sure you want to log out and remove all books from this device?"),
    },
    async buttonIndex => {
      if(buttonIndex == 0) {
        await Promise.all(Object.keys(books).map(bookId => (
          removeEpub({ books, bookId, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, removeCover: true })
        )))
        callback()
      }
    }
  )
}