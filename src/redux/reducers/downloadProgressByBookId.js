const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}
  const oldProgress = state[action.bookId]

  switch (action.type) {

    // downloadProgress is a decimal for eBooks and an object for audiobooks
    // audiobook obj example:
      // {
      //   "cb39d609-132a-453e-abc5-f031957fc641.mp3": .452,
      //   "328fcaef-e152-4e14-b5e8-acda8171849a.aac": 1,
      // }

    case "SET_DOWNLOADED_PROGRESS":
      if(oldProgress !== action.downloadProgress) {
        newState[action.bookId] = action.downloadProgress
        return newState
      }
      return state

    case "SET_DOWNLOADED_STATUS":
      if(action.downloadStatus === 0) {
        delete newState[action.bookId]
        return newState
      }
      return state

  }

  return state
}