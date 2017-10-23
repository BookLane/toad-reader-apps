const initialState = {}

export default function(state = initialState, action) {
  let newState

  switch (action.type) {

    case "ADD_ACCOUNT":
      newState = {...state}
      newState[`${action.idpId}:${action.userId}`] = action.accountInfo
      return newState

    case "REMOVE_ACCOUNT":
      newState = {...state}
      delete newState[action.accountId]
      return newState
      
  }

  return state
}