import { AsyncStorage } from "react-native"

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from '../../utils/toolbox'
import { PUSH_TOKEN_KEY } from '../../hooks/usePushToken'

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

      // async send the server the push token, when applicable (fail silently)
      ;(async () => {
        const token = await AsyncStorage.getItem(PUSH_TOKEN_KEY)
        if(token) {
          const path = `${getDataOrigin(action.idp)}/addpushtoken`
          await safeFetch(path, getReqOptionsWithAdditions({
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "x-cookie-override": action.accountInfo.cookie,
            },
            body: JSON.stringify({ token }),
          }))
        }
      })()

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

    case "ADD_BOOKS": {
      newState[action.accountId].libraryHash = action.hash
      return newState
    }

    case "DELETE_BOOK":
    case "SET_SUBSCRIPTIONS": {
      // we no longer know the proper hash
      delete newState[action.accountId].libraryHash
      return newState
    }

  }

  return state
}