const initialState = false

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_ERROR_MESSAGE":
      return action.message

  }

  return state
}