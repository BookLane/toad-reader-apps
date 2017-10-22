const initialState = null

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_VALUE":
      return parseInt(action.bookId) || null

  }

  return state
}