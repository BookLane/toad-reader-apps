const initialState = {}

export default (state = initialState, action) => {
  const newState = {...state}

  switch (action.type) {

    case "ADD_RECENT_SEARCH": {
      let { bookId, info } = action

      bookId = bookId || 'all'

      if(((state[bookId] || [])[0] || {}).str !== info.str) {
        newState[bookId] = (
          [
            info,
            ...(state[bookId] || []).filter(({ str }) => str !== info.str),
          ]
            .slice(0, 20)
        )

        return newState
      }

      return state
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