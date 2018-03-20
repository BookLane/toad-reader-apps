const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}
  const oldProgress = state[action.bookId]

  switch (action.type) {

    case "SET_DOWNLOADED_PROGRESS":
      if(oldProgress !== action.downloadProgress) {
        newState[action.bookId] = action.downloadProgress
        return newState
      }
      return state

    case "SET_DOWNLOADED_STATUS":
      if(oldProgress !== undefined) {
        delete newState[action.bookId]
        return newState
      }
      return state

  }

  return state
}