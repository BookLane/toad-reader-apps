const initialState = {
  onlyShowColor: null,
}

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_ONLY_SHOW_COLOR":
      return {
        ...state,
        onlyShowColor: parseInt(action.onlyShowColor) || state.onlyShowColor,
      }

  }

  return state
}