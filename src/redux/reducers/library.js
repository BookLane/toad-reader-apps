const initialState = {
  onlyShowAccountId: null,
  sort: "recent",
  view: "title",  // TODO: should be "recent" once that is supported
  bookList: [],
}

const viewOptions = [
  "cover",
  "list",
]

export default function(state = initialState, action) {
  const newState = {...state}
    
  switch (action.type) {

    case "SET_ONLY_SHOW_ACCOUNT_ID":
      newState.onlyShowAccountId = parseInt(action.accountId) || null
      return newState

    case "SET_VIEW":
      newState.view = viewOptions.includes(action.view) ? action.view : newState.view
      return newState
      
  }
  
  return state
}