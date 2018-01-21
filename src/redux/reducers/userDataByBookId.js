import { latestLocationToStr } from '../../utils/toolbox.js'

const initialState = {}

export default function(state = initialState, action) {
    
  const newState = {...state}

  switch (action.type) {

    case "SET_LATEST_LOCATION":
      const { bookId, latestLocation } = action

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

  }

  return state
}