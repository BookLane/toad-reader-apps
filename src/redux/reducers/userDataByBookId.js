import { latestLocationToStr, createAccessCode } from '../../utils/toolbox'

const initialState = {}

export default function(state = initialState, action) {
    
  const newState = {...state}
  const userDataForThisBook = newState[action.bookId] || {}
  let highlights = (userDataForThisBook.highlights || [])
  let classrooms = [ ...(userDataForThisBook.classrooms || []) ]
  const now = Date.now()

  const retainFilter = items => (items || []).filter(({ updated_at, _delete }) => updated_at > action.lastSuccessfulPatch && !_delete)

  switch (action.type) {

    case "SET_USER_DATA": {
      // It is possible that a new edit was made since the refreshUserData was called, so I need to
      // retain anything newer than lastSuccessfulPatch

      const highlightsToRetain = retainFilter(highlights)
      const partialHighlightsFromTheRefresh = action.userData.highlights.filter(highlight => (
        !highlightsToRetain.some(localHighlight => (
          localHighlight.spineIdRef === highlight.spineIdRef
          && localHighlight.cfi === highlight.cfi
        ))
      ))

      // insert in classrooms
      let newClassrooms = [ ...(action.userData.classrooms || []) ]
      retainFilter(classrooms).forEach(classroom => {
        let foundClassroom = false
        newClassrooms = newClassrooms.map(newClassroom => {
          if(classroom.uid === newClassrooms.uid) {
            foundClassroom = true
            return {
              ...classroom,
              members: newClassrooms.members,
              tools: newClassrooms.tools,
            }
          }
          return newClassroom
        })
        if(!foundClassroom) {
          newClassrooms.push(classroom)
        }
      })

      // insert in members and tools
      classrooms.forEach(({ uid, members=[], tools=[] }) => {
        const membersToRetain = retainFilter(members)
        const toolsToRetain = retainFilter(tools)

        if(membersToRetain.length + toolsToRetain.length === 0) return

        newClassrooms = newClassrooms.map(newClassroom => {
          if(uid === newClassrooms.uid) {

            let newMembers = [ ...(newClassroom.members || []) ]
            let newTools = [ ...(newClassroom.tools || []) ]

            membersToRetain.forEach(member => {
              let foundMember = false
              newMembers = newMembers.map(newMember => {
                if(member.user_id === newMember.user_id) {
                  foundMember = true
                  return member
                }
                return newMember
              })        
              if(!foundMember) {
                newMembers.push(member)
              }
            })

            toolsToRetain.forEach(tool => {
              let foundTool = false
              newTools = newTools.map(newTool => {
                if(tool.uid === newTool.uid) {
                  foundTool = true
                  return tool
                }
                return newTool
              })
              if(!foundTool) {
                newTool.push(tool)
              }
            })

            return {
              ...newClassroom,
              members: newMember,
              tools: newTools,
            }
          }
          return newClassroom
        })
      })

      newState[action.bookId] = {
        ...action.userData,
        highlights: [
          ...partialHighlightsFromTheRefresh,
          ...highlightsToRetain,
        ],
        classrooms: newClassrooms,
      }

      // TODO: To set up multiple accounts properly, I need to merge all highlight sets from different
      // accounts together.

      return newState
    }

    case "SET_LATEST_LOCATION": {
    // In the case there is no latest location data, do not update
      if(typeof action.latestLocation !== 'object' || action.latestLocation.spineIdRef == null) {
        return state
      }

      const latest_location = latestLocationToStr(action.latestLocation)

      // The typeof condition is an attempt to avoid an occasional error with an unknown cause.
      if(latest_location === userDataForThisBook.latest_location || typeof userDataForThisBook !== 'object') {
        return state
      }

      newState[action.bookId] = {
        ...userDataForThisBook,
        latest_location,
        updated_at: now,
      }

      return newState
    }

    case "SET_HIGHLIGHT": {
      let noChange
      highlights = highlights.filter(highlight => {
        if(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi) {
          if(highlight.color === action.color && highlight.note === action.note && !highlight._delete) {
            noChange = true
          } else {
            return false
          }
        }
        return true
      })

      if(noChange) {
        return state
      }

      highlights.push({
        spineIdRef: action.spineIdRef,
        cfi: action.cfi,
        color: action.color,
        note: action.note,
        updated_at: now,
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        highlights,
      }

      return newState
    }

    case "DELETE_HIGHLIGHT": {
      let highlightToDel
      highlights = highlights.filter(highlight => {
        if(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi) {
          highlightToDel = highlight
          return false
        }
        return true
      })

      if(!highlightToDel) {
        return state
      }

      highlights.push({
        ...highlightToDel,
        _delete: true,
        updated_at: now,
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        highlights,
      }

      return newState
    }

    case "CLEAR_USER_DATA_EXCEPT_PROGRESS": {
      let resetUserDataForThisBook = {}

      if(newState[action.bookId]) {
        if(newState[action.bookId].progress !== undefined) {
          resetUserDataForThisBook = newState[action.bookId].progress
        }
  
        if(newState[action.bookId].updated_at !== undefined) {
          resetUserDataForThisBook = newState[action.bookId].updated_at
        }
      }

      if(JSON.stringify(resetUserDataForThisBook) === JSON.stringify(newState[action.bookId])) {
        return state
      }

      newState[action.bookId] = resetUserDataForThisBook

      return newState
    }

    case "CREATE_CLASSROOM": {
      classrooms.push({
        uid: action.uid,
        name: action.name,
        updated_at: now,
        access_code: createAccessCode(),
        instructor_access_code: createAccessCode(),
        members: [
          {
            user_id: action.userId,
            role: 'INSTRUCTOR',
            updated_at: now,
          },
        ]
      })

      newState[action.bookId] = {
        ...userDataForThisBook,
        classrooms,
      }

      return newState
    }

    case "REMOVE_ACCOUNT": {
      // TODO: If I enable multiple accounts at once, this will need to be changed.
      return {}
    }

  }

  return state
}