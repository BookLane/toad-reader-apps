import { combineReducers } from "redux"
import reduceReducers from "reduce-reducers"

import accounts from "./reducers/accounts"
import metadataKeys from "./reducers/metadataKeys"
import bookDownloadQueue from "./reducers/bookDownloadQueue"
import books from "./reducers/books"
import currentBookId from "./reducers/currentBookId"
import displaySettings from "./reducers/displaySettings"
import sidePanelSettings from "./reducers/sidePanelSettings"
import downloadProgressByBookId from "./reducers/downloadProgressByBookId"
import fetchingBooks from "./reducers/fetchingBooks"
import highlights from "./reducers/highlights"
import idps from "./reducers/idps"
import library from "./reducers/library"
import readerStatus from "./reducers/readerStatus"
import completedGuides from "./reducers/completedGuides"
import syncStatus from "./reducers/syncStatus"
import userDataByBookId from "./reducers/userDataByBookId"
import currentReadingRecord from "./reducers/currentReadingRecord"
import readingRecordsByAccountId from "./reducers/readingRecordsByAccountId"
import recentSearchesByBookId from "./reducers/recentSearchesByBookId"

import setSort from "./reducers/setSort"
import endRecordReading from "./reducers/endRecordReading"

const slicedReducers = combineReducers({
  accounts,
  metadataKeys,
  bookDownloadQueue,
  books,
  currentBookId,
  displaySettings,
  sidePanelSettings,
  downloadProgressByBookId,
  fetchingBooks,
  highlights,
  idps,
  library,
  readerStatus,
  completedGuides,
  syncStatus,
  userDataByBookId,
  currentReadingRecord,
  readingRecordsByAccountId,
  recentSearchesByBookId,
})

const allReducers = reduceReducers(
  {},  // initialState

  slicedReducers,

  // the following reducers receive the entire store
  setSort,
  endRecordReading,
)

export default allReducers