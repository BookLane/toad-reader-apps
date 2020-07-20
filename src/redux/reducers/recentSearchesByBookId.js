const initialState = {}

export default (state = initialState, action) => {
  const newState = {...state}

  switch (action.type) {

    case "ADD_RECENT_SEARCH": {
      const { bookId, info } = action

      if(!(state[bookId] || []).some(({ str }) => str === info.str)) {
        newState[bookId] = (
          [
            info,
            ...(state[bookId] || []),
          ]
            .slice(0, 20)
        )

        return newState
      }
    }

    case "CLEAR_USER_DATA_EXCEPT_PROGRESS": {
      const { bookId } = action

      if(newState[bookId]) {
        delete newState[bookId]
        return newState
      }
    }

  }

  return state
}