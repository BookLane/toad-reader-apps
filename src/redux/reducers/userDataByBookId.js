import { latestLocationToStr } from '../../utils/toolbox'
import uuidv4 from 'uuid/v4'

const initialState = {}

export default function(state = initialState, action) {
    
  const newState = {...state}
  const userDataForThisBook = newState[action.bookId] || {}
  let highlights = (userDataForThisBook.highlights || [])
  let classrooms = [ ...(userDataForThisBook.classrooms || []) ]
  const now = Date.now()

  switch (action.type) {

    case "SET_USER_DATA":
      // It is possible that a new edit was made since the refreshUserData was called, so I need to
      // retain anything newer than lastSuccessfulPatch
      const highlightsToRetain = highlights.filter(highlight => highlight.updated_at > action.lastSuccessfulPatch && !highlight._delete)
      const partialHighlightsFromTheRefresh = action.userData.highlights.filter(highlight => (
        !highlightsToRetain.some(localHighlight => (
          localHighlight.spineIdRef === highlight.spineIdRef
          && localHighlight.cfi === highlight.cfi
        ))
      ))

      newState[action.bookId] = {
        ...action.userData,
        highlights: [
          ...partialHighlightsFromTheRefresh,
          ...highlightsToRetain,
        ],
      }

      // TODO: To set up multiple accounts properly, I need to merge all highlight sets from different
      // accounts together.

      return newState

    case "SET_LATEST_LOCATION":
    // In the case there is no latest location data, do not update
      if(typeof action.latestLocation !== 'object' || action.latestLocation.spineIdRef == null) {
        return state
      }

      const latest_location = latestLocationToStr(action.latestLocation)

      // The typeof condition is an attempt to avoid an occasional error with an unknown cause.
      if(latest_location === userDataForThisBook.latest_location || typeof userDataForThisBook !== 'object') {
        return state
      }

      newState[action.bookId] = {
        ...userDataForThisBook,
        latest_location,
        updated_at: now,
      }

      return newState

    case "SET_HIGHLIGHT":
      let noChange
      highlights = highlights.filter(highlight => {
        if(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi) {
          if(highlight.color === action.color && highlight.note === action.note && !highlight._delete) {
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
        updated_at: now,
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        highlights,
      }

      return newState

    case "DELETE_HIGHLIGHT":
      let highlightToDel
      highlights = highlights.filter(highlight => {
        if(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi) {
          highlightToDel = highlight
          return false
        }
        return true
      })

      if(!highlightToDel) {
        return state
      }

      highlights.push({
        ...highlightToDel,
        _delete: true,
        updated_at: now,
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        highlights,
      }

      return newState

    case "CLEAR_USER_DATA_EXCEPT_PROGRESS":
      let resetUserDataForThisBook = {}

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

    case "CREATE_CLASSROOM":
      classrooms.push({
        uid: uuidv4(),
        name: action.name,
        updated_at: now,
        members: [
          {
            user_id: action.userId,
            role: 'INSTRUCTOR',
            updated_at: now,
          },
        ]
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        classrooms,
      }

      return newState

  }

  return state
}