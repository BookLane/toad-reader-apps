const initialState = {
  sort: "recent",
  view: "covers",
  bookList: [],
}

const viewOptions = [
  "covers",
  "list",
]

export default function(state = initialState, action) {
  const newState = {...state}
    
  switch (action.type) {

    case "TOGGLE_VIEW":
      newState.view = viewOptions[(viewOptions.indexOf(newState.view) + 1) % viewOptions.length]
      return newState

    case "REMOVE_ACCOUNT":
      newState.bookList = []
      return newState
      
  }
  
  return state
}