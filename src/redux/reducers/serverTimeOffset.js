const initialState = 0

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_OFFSET":
      return parseInt(action.offset) || state  // in milliseconds

  }

  return state
}