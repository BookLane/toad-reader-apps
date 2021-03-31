const initialState = []

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "ADD_COMPLETED_GUIDE": {
      if(action.guideId) {
        return [
          ...new Set([
            ...state,
            action.guideId,
          ])
        ]
      }
    }

  }

  return state
}