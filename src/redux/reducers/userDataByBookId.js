import { latestLocationToStr } from '../../utils/toolbox.js'

const initialState = {}

export default function(state = initialState, action) {
    
  const newState = {...state}

  switch (action.type) {

    case "SET_LATEST_LOCATION":
      const latest_location = latestLocationToStr(action.latestLocation)
      const userDataForThisBook = newState[action.bookId] || {}

      if(latest_location === userDataForThisBook.latest_location) {
        return state
      }

      newState[action.bookId] = {
        ...userDataForThisBook,
        latest_location,
      }

      return newState

    case "CLEAR_USER_DATA_EXCEPT_PROGRESS":
      const resetUserDataForThisBook = {}

      if(newState[action.bookId]) {
        if(newState[action.bookId].progress !== undefined) {
          resetUserDataForThisBook = newState[action.bookId].progress
        }
  
        if(newState[action.bookId].updated_at !== undefined) {
          resetUserDataForThisBook = newState[action.bookId].updated_at
        }
      }

      if(JSON.stringify(resetUserDataForThisBook) === JSON.stringify(newState[action.bookId])) {
        return state
      }

      newState[action.bookId] = resetUserDataForThisBook

      return newState

  }

  return state
}