// options: missing, downloading, ready
const initialState = "missing"

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_READER_STATUS":
      return action.readerStatus

  }

  return state
}