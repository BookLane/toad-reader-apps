import { latestLocationToStr } from '../../utils/toolbox.js'

const initialState = {}

export default function(state = initialState, action) {
    
  const newState = {...state}
  const userDataForThisBook = newState[action.bookId] || {}
  let highlights = (userDataForThisBook.highlights || [])

  switch (action.type) {

    case "SET_LATEST_LOCATION":
      const latest_location = latestLocationToStr(action.latestLocation)

      if(latest_location === userDataForThisBook.latest_location) {
        return state
      }

      newState[action.bookId] = {
        ...userDataForThisBook,
        latest_location,
      }

      return newState

    case "SET_HIGHLIGHT":
      let noChange
      highlights = highlights.filter(highlight => {
        if(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi) {
          if(highlight.color === action.color && highlight.note === action.note) {
            noChange = true
          } else {
            return false
          }
        }
        return true
      })

      if(noChange) {
        return state
      }

      highlights.push({
        spineIdRef: action.spineIdRef,
        cfi: action.cfi,
        color: action.color,
        note: action.note,
        updated_at: Date.now(),
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        highlights
      }

      return newState

    case "DELETE_HIGHLIGHT":
      const lengthBeforeFilter = highlights.length
      highlights = highlights.filter(highlight => (
        !(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi)
      ))

      if(highlights.length === lengthBeforeFilter) {
        return state
      }

      newState[action.bookId] = {
        ...userDataForThisBook,
        highlights
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