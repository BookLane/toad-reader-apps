import * as FileSystem from 'expo-file-system/legacy'
// import { i18n } from "inline-i18n"
import { Platform } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getBooksDir, getSnapshotsDir } from "./toolbox"
import { cancelFetch } from "./epubDownloader"

// This constant is better here than in app.json since it needs to accord with the 
// current version of the reader apps, not specific tenants.
const MOST_RECENT_CHANGE_REQUIRING_PAGE_RECAPTURE_DATE = "2024-02-17"
// The exact value of this constant does not so much matter. It just needs to uniquely
// change each time there is a modification to the apps that may change the layout
// flow of the epubs.

export const removeEpub = async ({ books, bookId, removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress }) => {
  const localBaseUri = `${getBooksDir()}${bookId}/`
  const searchIndexLocalUri = `${FileSystem.documentDirectory}search_indexes/${bookId}.json`

  removeFromBookDownloadQueue({ bookId })
  cancelFetch({ bookId })
  setDownloadStatus({ bookId, downloadStatus: 0 })
  clearTocAndSpines && clearTocAndSpines({ bookId })
  clearUserDataExceptProgress({ bookId })

  const asyncTasks = [
    FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true }),
    FileSystem.deleteAsync(`${getSnapshotsDir()}${bookId}`, { idempotent: true }),
    FileSystem.deleteAsync(searchIndexLocalUri, { idempotent: true }),
  ]
  
  await Promise.all(asyncTasks)

  console.log(`Done removing snapshots and contents for book ${bookId}.`)
}

export const removeSnapshotsIfANewUpdateRequiresIt = async ({ books, clearAllSpinePageCfis }) => {

  if(Platform.OS === 'web') return

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

  if(Platform.OS === 'web') return

  clearAllSpinePageCfis({ bookId })
  await FileSystem.deleteAsync(`${getSnapshotsDir()}${bookId}`, { idempotent: true })

  console.log(`Done removing snapshots for book ${bookId}.`)
}

export const removeAllEPubs = async ({ books, ...otherParams }) => {
  await Promise.all(Object.keys(books).map(bookId => (
    books[bookId].downloadStatus > 0
      ? removeEpub({ bookId, ...otherParams })
      : null
  )))
}

export const removeAccountEPubs = async ({ books, ...otherParams }) => {
  await Promise.all(Object.keys(books).map(bookId => (
    books[bookId].downloadStatus > 0
      ? removeEpub({ books, bookId, ...otherParams })
      : null
  )))
}