import { combineReducers } from "redux"
import reduceReducers from "reduce-reducers"

import accounts from "./reducers/accounts.js"
import bookDownloadQueue from "./reducers/bookDownloadQueue.js"
import books from "./reducers/books.js"
import currentBookId from "./reducers/currentBookId.js"
import displaySettings from "./reducers/displaySettings.js"
import downloadProgressByBookId from "./reducers/downloadProgressByBookId.js"
import fetchingBooks from "./reducers/fetchingBooks.js"
import highlights from "./reducers/highlights.js"
import idps from "./reducers/idps.js"
import library from "./reducers/library.js"
import readerStatus from "./reducers/readerStatus.js"
import userDataByBookId from "./reducers/userDataByBookId.js"
import currentReadingRecord from "./reducers/currentReadingRecord.js"
import readingRecordsByAccountId from "./reducers/readingRecordsByAccountId.js"

import setSort from "./reducers/setSort.js"
import endRecordReading from "./reducers/endRecordReading.js"

const slicedReducers = combineReducers({
  accounts,
  bookDownloadQueue,
  books,
  currentBookId,
  displaySettings,
  downloadProgressByBookId,
  fetchingBooks,
  highlights,
  idps,
  library,
  readerStatus,
  userDataByBookId,
  currentReadingRecord,
  readingRecordsByAccountId,
})

const allReducers = reduceReducers(
  {},  // initialState

  slicedReducers,

  // the following reducers receive the entire store
  setSort,
  endRecordReading,
)

export default allReducers