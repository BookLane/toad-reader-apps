const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

    case "UPDATE_METADATA_KEYS": {
      return action.metadataKeys
    }

  }

  return state
}