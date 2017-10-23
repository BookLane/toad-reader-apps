const initialState = null

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_CURRENT_BOOK_ID":
      return parseInt(action.bookId) || null

  }

  return state
}