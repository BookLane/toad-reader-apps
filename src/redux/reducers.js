import { combineReducers } from "redux"
import reduceReducers from "reduce-reducers"

import accounts from "./reducers/accounts"
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
import userDataByBookId from "./reducers/userDataByBookId"
import currentReadingRecord from "./reducers/currentReadingRecord"
import readingRecordsByAccountId from "./reducers/readingRecordsByAccountId"

import setSort from "./reducers/setSort"
import endRecordReading from "./reducers/endRecordReading"

const slicedReducers = combineReducers({
  accounts,
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