const initialState = []

export default (state = initialState, action) => {

  switch (action.type) {

    case "UPDATE_SUBSCRIPTIONS": {
      return action.subscriptions
    }

  }

  return state
}