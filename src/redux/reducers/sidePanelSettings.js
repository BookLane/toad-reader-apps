const initialState = {
  width: 350,
  open: true,  // only relevant when in wideMode
}

export default function(state = initialState, action) {
 
  const newState = {...state}

  switch (action.type) {

    case "SET_SIDE_PANEL_WIDTH":
      newState.width = action.width
      return newState

    case "TOGGLE_SIDE_PANEL_OPEN":
      newState.open = !newState.open
      return newState
  
  }

  return state
}