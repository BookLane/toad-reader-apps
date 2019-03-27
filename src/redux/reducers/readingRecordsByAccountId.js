const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {

    case "FLUSH_READING_RECORDS":
      newState[action.accountId] =
        (state[action.accountId] || []).slice(action.numberOfRecords || 0)

      return newState
      
  }

  return state
}