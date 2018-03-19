import { combineReducers } from "redux"
import reduceReducers from "reduce-reducers"

import accounts from "./reducers/accounts.js"
import bookDownloadQueue from "./reducers/bookDownloadQueue.js"
import books from "./reducers/books.js"
import currentBookId from "./reducers/currentBookId.js"
import displaySettings from "./reducers/displaySettings.js"
import errorMessage from "./reducers/errorMessage.js"
import fetchingBooks from "./reducers/fetchingBooks.js"
import highlights from "./reducers/highlights.js"
import idps from "./reducers/idps.js"
import library from "./reducers/library.js"
import readerStatus from "./reducers/readerStatus.js"
import userDataByBookId from "./reducers/userDataByBookId.js"

import setSort from "./reducers/setSort.js"

const slicedReducers = combineReducers({
  accounts,
  bookDownloadQueue,
  books,
  currentBookId,
  displaySettings,
  errorMessage,
  fetchingBooks,
  highlights,
  idps,
  library,
  readerStatus,
  userDataByBookId,
})

const allReducers = reduceReducers(
  slicedReducers,

  // the following reducers receive the entire store
  setSort,
)

export default allReducers