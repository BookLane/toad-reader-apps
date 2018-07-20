const {
  IDPS,
} = Expo.Constants.manifest.extra

const initialState = IDPS || {
  "1": {
    idpName: "Toad Reader",
    domain: "books.toadreader.com",
    idpExpire: null,
    noCloudSave: true,
  },
}

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "UPDATE_IDPS":
      return action.idps

  }

  return state
}