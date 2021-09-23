import { getIdsFromAccountId, getQueryString } from "../../utils/toolbox"
import { logEvent } from "../../utils/analytics"

const maxInactivityMs = 1000*60*5

export default function(state, action) {

  const newState = {
    ...state,
    readingRecordsByAccountId: {...state.readingRecordsByAccountId},
  }

  const goEndRecordReading = () => {

    const { bookId, spineIdRef, startTime, lastActivityTime } = state.currentReadingRecord
    const book = state.books[bookId]
    const endTime = Math.min(Date.now(), lastActivityTime + maxInactivityMs)

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
          return true
        }
      })

      const properties = {
        'book title': book.title || `Book id: ${bookId}`,
        'book author': book.author || ``,
        'book version': book.version,
        'book id': bookId,
        'spine label': spineLabel,
        'spine id ref': spineIdRef,
        'duration in seconds': parseInt((endTime - startTime) / 1000, 10),
      }

      if(book.version !== 'BASE') {
        try {  // this block accords with logic in useClassroomInfo
          let classroomUid = book.currentClassroomUid
          const query = getQueryString()
          if(query.widget) classroomUid = null
          const isDefaultClassroom = (classroomUid === undefined || classroomUid.split('-')[1] === bookId)
          let classroom = state.userDataByBookId[bookId].classrooms.filter(({ uid }) => uid === classroomUid)[0]
          if(classroom || isDefaultClassroom) {
            if(isDefaultClassroom) {
              properties['classroom name'] = 'Enhanced book (default)'
              properties['classroom id'] = `publisher default for book id ${bookId}`
            } else {
              properties['classroom name'] = classroom.name
              properties['classroom id'] = classroom.uid
            }
          }
        } catch(e) {}
      }

      logEvent({
        eventName: `Read book`,
        properties,
      })
    }

  }

  switch (action.type) {

    case "END_RECORD_READING": {

      if(!state.currentReadingRecord) {
        console.log('ERROR: Tried ending non-existant reading record.')
        return state
      }

      const { bookId, spineIdRef, startTime, lastActivityTime } = state.currentReadingRecord

      if(
        !bookId
        || !spineIdRef
        || !startTime
        || !lastActivityTime
      ) {
        console.log('ERROR: Tried ending invalid reading record.', state.currentReadingRecord)
        
        newState.currentReadingRecord = null
        return newState
      }

      goEndRecordReading()
      newState.currentReadingRecord = null

      return newState

    }

    case "INDICATE_RECORD_READING_ACTIVITY": {

      if(!state.currentReadingRecord) {
        console.log('ERROR: Tried to indicate activity on non-existant reading record.')
        return state
      }

      const { bookId, spineIdRef, startTime, lastActivityTime } = state.currentReadingRecord

      if(
        !bookId
        || !spineIdRef
        || !startTime
        || !lastActivityTime
      ) {
        console.log('ERROR: Tried to indicate activity on invalid reading record.', state.currentReadingRecord)
        
        newState.currentReadingRecord = null
        return newState
      }

      const now = Date.now()

      if(now - lastActivityTime > maxInactivityMs) {
        goEndRecordReading()
        newState.currentReadingRecord = {
          ...newState.currentReadingRecord,
          startTime: now,
        }
      }

      newState.currentReadingRecord = {
        ...newState.currentReadingRecord,
        lastActivityTime: now,
      }

      return newState

    }

  }

  return state
}