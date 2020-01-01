const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}

  switch (action.type) {

    case "ADD_ACCOUNT": {
      newState[`${action.idpId}:${action.userId}`] = action.accountInfo

      // weed out needToLogInAgain accounts
      Object.keys(newState).forEach(accountId => {
        if(newState[accountId].needToLogInAgain) {
          delete newState[accountId]
        }
      })

      return newState
    }

    case "UPDATE_ACCOUNT": {
      newState[action.accountId] = {
        ...state[action.accountId],
        ...action.accountInfo,
      }
      return newState
    }

    case "REMOVE_ACCOUNT": {
      delete newState[action.accountId]
      return newState
    }
      
  }

  return state
}