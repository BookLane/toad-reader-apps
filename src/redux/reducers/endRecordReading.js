import { getIdsFromAccountId } from "../../utils/toolbox"
import { logEvent } from "../../utils/analytics"

const initialState = {}

export default function(state, action) {

  const newState = {
    ...state,
    readingRecordsByAccountId: {...state.readingRecordsByAccountId},
  }

  switch (action.type) {

    case "END_RECORD_READING":
      if(!state.currentReadingRecord) {
        console.log('ERROR: Tried ending non-existant reading record.')
        return state
      }

      const { bookId, spineIdRef, startTime } = state.currentReadingRecord

      if(
        !bookId
        || !spineIdRef
        || !startTime
      ) {
        console.log('ERROR: Tried ending invalid reading record.', state.currentReadingRecord)
        
        newState.currentReadingRecord = null
        return newState
      }

      const book = state.books[bookId]
      const endTime = Date.now()

      if(book && endTime - startTime > 5*1000) {
        Object.keys(book.accounts || {}).forEach(accountId => {
          const { idpId } = getIdsFromAccountId(accountId)
          const idp = state.idps[idpId]
  
          if(!(idp || {}).xapiOn && !(idp || {}).readingSessionsOn) return
  
          newState.readingRecordsByAccountId[accountId] = [
            ...(newState.readingRecordsByAccountId[accountId] || []),
            {
              ...state.currentReadingRecord,
              endTime,
            },
          ]
        })

        let spineLabel = ``
        ;(book.spines || []).some(({ idref, label }) => {
          if(idref === spineIdRef) {
            spineLabel = label
          }
        })

        logEvent({
          eventName: `Read book`,
          properties: {
            'book title': book.title || `Book id: ${bookId}`,
            'book author': book.author || ``,
            'book id': bookId,
            'spine label': spineLabel,
            'spine id ref': spineIdRef,
            "duration in seconds": parseInt((endTime - startTime) / 1000, 10),
          },
        })
      }

      newState.currentReadingRecord = null

      return newState
      
  }

  return state
}