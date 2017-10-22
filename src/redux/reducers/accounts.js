const initialState = {}

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "ADD_ACCOUNT":
      const newState = {...state}
      newState[`${action.idpId}:${action.userId}`] = action.accountInfo
      return newState

    case "REMOVE_ACCOUNT":
      const newState = {...state}
      delete newState[action.accountId]
      return newState
      
  }

  return state
}