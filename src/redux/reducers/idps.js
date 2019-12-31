import Constants from 'expo-constants'

const {
  IDPS,
} = Constants.manifest.extra

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
    delete newObj.xapiConsentShown
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
            xapiConsentShown: (state[idpId] || {}).xapiConsentShown || false,
          }
          idpWasUpdated = true
        }
      }
      
      return idpWasUpdated ? newState : state

    case "SET_XAPI_CONSENT_SHOWN":
      for(let idpId in state) {
        newState[idpId] = {
          ...state[idpId],
          xapiConsentShown: true,
        }
      }

      return newState

  }

  return state
}