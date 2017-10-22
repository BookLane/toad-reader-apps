const initialState = {
  textSize: 100,
  textSpacing: 1.3,
  theme: "night-theme"
}

const themeOptions = [
  "author-theme",
  "default-theme",
  "night-theme",
]

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_TEXT_SIZE":
      return {
        ...state,
        textSize: parseInt(action.textSize) || state.textSize,
      }

    case "SET_TEXT_SPACING":
      return {
        ...state,
        textSpacing: parseFloat(action.textSpacing) || state.textSpacing,
      }

    case "SET_THEME":
      const newState = {
        ...state,
        theme: themeOptions.includes(action.theme) ? action.theme : state.theme,
      }

  }

  return state
}