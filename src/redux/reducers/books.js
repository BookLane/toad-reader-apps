const initialState = 0

export default function(state = initialState, action) {
    
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
  }

  return state
}