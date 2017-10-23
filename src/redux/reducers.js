import { combineReducers } from 'redux'

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

const allReducers= combineReducers({
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

export default allReducers