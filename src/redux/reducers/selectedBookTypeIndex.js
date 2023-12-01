// options: synced, patching, refreshing, error
const initialState = 0

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_SELECTED_BOOK_TYPE_INDEX":
      return action.selectedBookTypeIndex

  }

  return state
}