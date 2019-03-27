import { Constants } from "expo"

const {
  IDPS,
} = Constants.manifest.extra

const initialState = IDPS || {
  "21": {
    idpName: "Toad Reader",
    domain: "books.toadreader.com",
    idpExpire: null,
    idpNoAuth: true,
  },
}

export default function(state = initialState, action) {
  const newState = {...state}
    
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
            && JSON.stringify(state[idpId]) !== JSON.stringify(initialState[idpId])
          )
        ) {
          newState[idpId] = initialState[idpId]
          idpWasUpdated = true
        }
      }
      
      return idpWasUpdated ? newState : state

  }

  return state
}