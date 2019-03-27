const initialState = null

export default function(state = initialState, action) {

  switch (action.type) {

    case "START_RECORD_READING":
      if(state) {
        // Should not normally get here unless the app crashed.
        console.log('ERROR: Reading record unended.', state)
      }

      const { bookId, spineIdRef } = action

      const newState = {
        bookId,
        spineIdRef,
        startTime: Date.now(),
      }

      return newState
      
  }

  return state
}