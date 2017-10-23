import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import accounts from './reducers/accounts.js'
import books from './reducers/books.js'
import count from './reducers/count.js'
import currentBookId from './reducers/currentBookId.js'
import displaySettings from './reducers/displaySettings.js'
import highlights from './reducers/highlights.js'
import idps from './reducers/idps.js'
import library from './reducers/library.js'
import serverTimeOffset from './reducers/serverTimeOffset.js'
import userDataByBookId from './reducers/userDataByBookId.js'
import setSort from './reducers/setSort.js'

const slicedReducers = combineReducers({
  accounts,
  books,
  count,
  currentBookId,
  displaySettings,
  highlights,
  idps,
  library,
  serverTimeOffset,
  userDataByBookId,
})

const allReducers = reduceReducers(
  slicedReducers,

  // the following reducers receive the entire store
  setSort,
)

export default allReducers