const initialState = []

export default function(state = initialState, action) {
  const newState = Object.values(state)
  const { bookId, pushToFront } = action

  switch (action.type) {

    case "PUSH_TO_BOOK_DOWNLOAD_QUEUE": {
      if(!state.includes(bookId)) {
        newState[pushToFront ? 'unshift' : 'push'](bookId)
        return newState
      }
      return state
    }

    case "REMOVE_FROM_BOOK_DOWNLOAD_QUEUE": {
      return state.filter(bookIdToDownload => bookIdToDownload != bookId)
    }

  }

  return state
}