const initialState = false

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_VALUE":
      return !!action.value

  }

  return state
}