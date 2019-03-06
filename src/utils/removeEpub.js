import { Constants, FileSystem } from "expo"
import i18n from "./i18n.js"
import { AsyncStorage } from "react-native"
import { ActionSheet, Toast } from "native-base"

import { getBooksDir, getSnapshotsDir } from "./toolbox.js"
import { cancelFetch } from "./zipDownloader.js"

const {
  REMOVE_ICON_COLOR,
} = Constants.manifest.extra

// This constant is better here than in app.json since it needs to accord with the 
// current version of the reader apps, not specific tenants.
const MOST_RECENT_CHANGE_REQUIRING_PAGE_RECAPTURE_DATE = "2019-03-06"
// The exact value of this constant does not so much matter. It just needs to uniquely
// change each time there is a modification to the apps that may change the layout
// flow of the epubs.

const removeEpub = async ({ books, bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, removeCover }) => {
  const localBaseUri = `${getBooksDir()}${bookId}/`

  removeFromBookDownloadQueue({ bookId })
  cancelFetch({ localBaseUri })
  setDownloadStatus({ bookId, downloadStatus: 0 })
  clearTocAndSpines({ bookId })
  clearUserDataExceptProgress({ bookId })
  AsyncStorage.removeItem(`assetDownloads:${localBaseUri}`)
  await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
  await FileSystem.deleteAsync(`${getSnapshotsDir()}${bookId}`, { idempotent: true })
  
  if(removeCover) {
    await FileSystem.deleteAsync(`${FileSystem.documentDirectory}covers/${bookId}/${books[bookId].coverFilename}`, { idempotent: true })
  }

  console.log(`Done removing snapshots and contents for book ${bookId}.`)
}

export const removeSnapshotsIfANewUpdateRequiresIt = async ({ books, clearAllSpinePageCfis }) => {

  const dateOfMostRecentChangeRequiringPageRecapture = await AsyncStorage.getItem('dateOfMostRecentChangeRequiringPageRecapture')

  if(dateOfMostRecentChangeRequiringPageRecapture !== MOST_RECENT_CHANGE_REQUIRING_PAGE_RECAPTURE_DATE) {
    for(let bookId in books) {
      await clearPageCfiInfoAndSnapshots({ bookId, clearAllSpinePageCfis })
    }

    console.log(`Done removing snapshots for all books.`)
    await AsyncStorage.setItem('dateOfMostRecentChangeRequiringPageRecapture', MOST_RECENT_CHANGE_REQUIRING_PAGE_RECAPTURE_DATE)
  }

}

export const clearPageCfiInfoAndSnapshots = async ({ bookId, clearAllSpinePageCfis }) => {

  clearAllSpinePageCfis({ bookId })
  await FileSystem.deleteAsync(`${getSnapshotsDir()}${bookId}`, { idempotent: true })

  console.log(`Done removing snapshots for book ${bookId}.`)
}

export const confirmRemoveEPub = ({ books, bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, done }) => {
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
        await removeEpub({ bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress })
        done && done()
      }
    }
  )
}

export const confirmRemoveAllEPubs = ({ books, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress }) => {
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
          removeEpub({ bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress })
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

export const confirmRemoveAccountEPubs = ({ books, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress }, callback) => {
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
          removeEpub({ books, bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, removeCover: true })
        )))
        callback()
      }
    }
  )
}