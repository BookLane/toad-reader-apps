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
    
  switch (action.type) {

    case "UPDATE_IDPS":
      return action.idps

  }

  return state
}