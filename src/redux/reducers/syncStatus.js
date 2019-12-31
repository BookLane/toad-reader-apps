// options: synced, patching, refreshing, error
const initialState = "synced"

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_SYNC_STATUS":
      return action.syncStatus

  }

  return state
}