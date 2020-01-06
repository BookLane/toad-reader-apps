import { latestLocationToStr, createAccessCode, createShareCode } from '../../utils/toolbox'
import { getToolInfo } from "../../utils/toolInfo"

const initialState = {}

const getPlacementKey = ({ spineIdRef, cfi=null }) => JSON.stringify({ spineIdRef, cfi })

const fixToolOrdering = ({
  tools,
  modifiedTool,
  now,
}) => {

  const modifiedToolPlacementKey = getPlacementKey(modifiedTool)

  // adjust ordering key of other tools with same spineIdRef/cfi combo
  const ordering = {
    [modifiedToolPlacementKey]: modifiedTool.ordering === 0 ? 1 : 0,
  }

  tools.forEach((tool, idx) => {
    if(tool._delete) return
    if(tool.uid === modifiedTool.uid) return

    const placementKey = getPlacementKey(tool)
    const properOrdering = ordering[placementKey] || 0

    if(tool.ordering !== properOrdering) {
      tools[idx] = tool = { ...tool }
      tool.ordering = properOrdering
      tool.updated_at = now
    }

    ordering[placementKey] = properOrdering + 1
    if(
      placementKey === modifiedToolPlacementKey
      && ordering[placementKey] === modifiedTool.ordering
    ) {
      ordering[placementKey]++
    }
  })

  // sort properly
  tools.sort((a, b) => a.ordering - b.ordering)

}

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
      let noChange, highlightShareInfo = {}
      highlights = highlights.filter(highlight => {
        if(highlight.spineIdRef === action.spineIdRef && highlight.cfi === action.cfi) {
          if(highlight.color === action.color && highlight.note === action.note && !highlight._delete) {
            noChange = true
          } else {
            if(highlight.share_code) {
              highlightShareInfo = {
                share_code: highlight.share_code,
                share_quote: highlight.share_quote,
              }
            }
            return false
          }
        }
        return true
      })

      if(noChange) {
        return state
      }

      highlights.push({
        ...highlightShareInfo,
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

    case "SHARE_HIGHLIGHT": {
      let highlightToShare
      highlights = highlights.filter(highlight => {
        if(
          highlight.spineIdRef === action.spineIdRef
          && highlight.cfi === action.cfi
          && (!highlight.share_code || action.forceNewShareCode)
          && !highlight._delete
        ) {
          highlightToShare = highlight
          return false
        }
        return true
      })

      if(!highlightToShare) {
        return state
      }

      highlights.push({
        ...highlightToShare,
        share_code: createShareCode(),
        share_quote: action.share_quote,
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

    case "UPDATE_CLASSROOM": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.uid) {

          classroom = classrooms[idx] = { ...classroom }

          ;[
            'name',
            'access_code',
            'instructor_access_code',
            'syllabus',
            'introduction',
            'classroom_highlights_mode',
            'closes_at',
            '_delete',
          ].forEach(param => {
            if(action[param] !== undefined) {
              classroom[param] = action[param]
            }
          })

          classroom.updated_at = now

          return true

        }
      })) {

        newState[action.bookId] = {
          ...userDataForThisBook,
          classrooms,
        }
  
        return newState

      }

      return state
    }

    case "CREATE_TOOL": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const tools = [ ...(classroom.tools || []) ]

          const newTool = {
            uid: action.uid,
            spineIdRef: action.spineIdRef,
            cfi: action.cfi,
            ordering: action.ordering,
            name: action.name,
            toolType: action.toolType || getToolInfo().toolTypes[0].toolType,
            undo_array: [],
            data: {},
            updated_at: now,
          }

          tools.push(newTool)

          fixToolOrdering({
            tools,
            modifiedTool: newTool,
            now,
          })

          classrooms[idx] = {
            ...classroom,
            tools,
          }

          return true
        }
      })) {

        newState[action.bookId] = {
          ...userDataForThisBook,
          classrooms,
        }
  
        return newState

      }

      return state

    }

    case "UPDATE_TOOL": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const tools = [ ...(classroom.tools || []) ]

          return tools.some((tool, idx2) => {
            if(tool.uid === action.uid) {
              tools[idx2] = tool = { ...tool }

              // If I'm moving a tool down in the same spineIdRef/cfi, take into
              // account that it will be moving out of the way.
              if(
                (action.spineIdRef || tool.spineIdRef) === tool.spineIdRef
                && (action.cfi || tool.cfi) == tool.cfi
                && action.ordering > tool.ordering
              ) {
                action.ordering--
              }

              ;[
                'spineIdRef',
                'cfi',
                'ordering',
                'name',
                'toolType',
                'data',
                'due_at',
                'closes_at',
                '_delete',
              ].forEach(param => {
                if(action[param] !== undefined) {
                  tool[param] = action[param]
                }
              })

              tool.updated_at = now

              fixToolOrdering({
                tools,
                modifiedTool: tool,
                now,
              })

              classrooms[idx] = {
                ...classroom,
                tools,
              }
  
              return true
            }
          })
        }
      })) {

        newState[action.bookId] = {
          ...userDataForThisBook,
          classrooms,
        }
  
        return newState

      }

      return state

    }

    case "CREATE_INSTRUCTOR_HIGHLIGHT": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const instructorHighlights = (classroom.instructorHighlights || [])
            .filter(({ spineIdRef, cfi, isMine }) => !(spineIdRef === action.spineIdRef && cfi === action.cfi && isMine))

          const newInstructorHighlight = {
            spineIdRef: action.spineIdRef,
            cfi: action.cfi,
            created_at: now,
            isMine: true,
          }

          instructorHighlights.push(newInstructorHighlight)

          classrooms[idx] = {
            ...classroom,
            instructorHighlights,
          }

          return true
        }
      })) {

        newState[action.bookId] = {
          ...userDataForThisBook,
          classrooms,
        }
  
        return newState

      }

      return state

    }

    case "DELETE_INSTRUCTOR_HIGHLIGHT": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const instructorHighlights = [ ...(classroom.instructorHighlights || []) ]

          return instructorHighlights.some((instructorHighlight, idx2) => {
            if(instructorHighlight.spineIdRef === action.spineIdRef && instructorHighlight.cfi === action.cfi && instructorHighlight.isMine) {
              instructorHighlights[idx2] = instructorHighlight = { ...instructorHighlight }

              instructorHighlight._delete = true

              // Since there is no updated_at one's own instructor highlights, we need
              // to update created_at so patch knows to run it. This field will not 
              // actually get updated in the db.
              instructorHighlight.created_at = now

              classrooms[idx] = {
                ...classroom,
                instructorHighlights,
              }
  
              return true
            }
          })
        }
      })) {

        newState[action.bookId] = {
          ...userDataForThisBook,
          classrooms,
        }
  
        return newState

      }

      return state

    }

    case "REMOVE_ACCOUNT": {
      // TODO: If I enable multiple accounts at once, this will need to be changed.
      return {}
    }

  }

  return state
}