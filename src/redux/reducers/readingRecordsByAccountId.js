const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {

    case "FLUSH_READING_RECORDS": {
      newState[action.accountId] =
        (state[action.accountId] || []).slice(action.numberOfRecords || 0)

      return newState

    }

    case "ADD_ACCOUNT": {  // I need this for NONE_OR_EMAIL with new email login
      // TODO: If I enable multiple accounts at once, this will need to be changed.
      return {}
    }

    case "REMOVE_ACCOUNT": {
      // TODO: If I enable multiple accounts at once, this will need to be changed.
      return {}
    }
      
  }

  return state
}