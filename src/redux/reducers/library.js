import { logEvent } from "../../utils/analytics"

const initialState = {
  sort: "recent",
  view: "covers",
  bookList: [],
}

const viewOptions = [
  "covers",
  "list",
]

export default function(state = initialState, action) {
  const newState = {...state}
    
  switch (action.type) {

    case "TOGGLE_VIEW":
      newState.view = viewOptions[(viewOptions.indexOf(newState.view) + 1) % viewOptions.length]
      logEvent({
        eventName: `Library: Toggle view`,
        properties: {
          view: newState.view,
        },
      })
      return newState

    case "CHANGE_LIBRARY_SCOPE":
      newState.scope = action.scope || "all"
      logEvent({
        eventName: `Library: Change which books are shown`,
        properties: {
          scope: newState.scope,
        },
      })
      return newState

    case "REMOVE_ACCOUNT":
      newState.bookList = []
      return newState

    case "DELETE_BOOK":
      newState.bookList = newState.bookList.filter(bookId => bookId !== action.bookId)
      return newState
  
  }
  
  return state
}