const initialState = {
  sort: "recent",
  view: "title",  // TODO: should be "recent" once that is supported
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
      
  }
  
  return state
}