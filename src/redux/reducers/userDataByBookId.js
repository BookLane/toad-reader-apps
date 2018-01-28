import { latestLocationToStr } from '../../utils/toolbox.js'

const initialState = {}

export default function(state = initialState, action) {
    
  const newState = {...state}
  const { type, bookId, latestLocation } = action

  switch (type) {

    case "SET_LATEST_LOCATION":
      const latest_location = latestLocationToStr(latestLocation)
      const userDataForThisBook = newState[bookId] || {}

      if(latest_location === userDataForThisBook.latest_location) {
        return state
      }

      newState[bookId] = {
        ...userDataForThisBook,
        latest_location,
      }

      return newState

    case "CLEAR_USER_DATA_EXCEPT_PROGRESS":
      const resetUserDataForThisBook = {}

      if(newState[bookId]) {
        if(newState[bookId].progress !== undefined) {
          resetUserDataForThisBook = newState[bookId].progress
        }
  
        if(newState[bookId].updated_at !== undefined) {
          resetUserDataForThisBook = newState[bookId].updated_at
        }
      }

      if(JSON.stringify(resetUserDataForThisBook) === JSON.stringify(newState[bookId])) {
        return state
      }

      newState[bookId] = resetUserDataForThisBook

      return newState

  }

  return state
}