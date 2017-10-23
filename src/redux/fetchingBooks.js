const initialState = false

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_FETCHING_BOOKS":
      return !!action.value

  }

  return state
}