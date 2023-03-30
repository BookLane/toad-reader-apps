import Constants from 'expo-constants'

const {
  IDPS,
} = Constants.expoConfig.extra

const initialState = IDPS || {
  "21": {
    name: "Toad Reader",
    domain: "books.toadreader.com",
    authMethod: "NONE_OR_EMAIL",
  },
}

export default function(state = initialState, action) {
  const newState = {...state}

  const getJSONWithoutConsent = obj => {
    const newObj = {...obj}
    delete newObj.consentShown
    return JSON.stringify(newObj)
  }

  switch (action.type) {

    case "UPDATE_IDPS":
      return action.idps
      
    case "AUTO_UPDATE_CORE_IDPS":
      let idpWasUpdated = false

      for(let idpId in initialState) {
        if(
          !state[idpId]
          || (
            !state[idpId].locked
            && getJSONWithoutConsent(state[idpId]) !== getJSONWithoutConsent(initialState[idpId])
          )
        ) {
          newState[idpId] = {
            ...initialState[idpId],
            consentShown: (state[idpId] || {}).consentShown || false,
          }
          idpWasUpdated = true
        }
      }
      
      return idpWasUpdated ? newState : state

    case "SET_CONSENT_SHOWN":
      for(let idpId in state) {
        newState[idpId] = {
          ...state[idpId],
          consentShown: true,
        }
      }

      return newState

  }

  return state
}