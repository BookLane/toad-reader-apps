import uuidv4 from 'uuid/v4'

import { latestLocationToStr, createAccessCode, getDraftToolByCurrentlyPublishedToolUid, createShareCode } from '../../utils/toolbox'
import { getToolInfo } from "../../utils/toolInfo"

const MAX_QUOTE_WORD_LENGTH = 300
const MAX_QUOTE_CHARACTER_LENGTH = 1500

const initialState = {}

const getPlacementKey = ({ spineIdRef, cfi=null }) => JSON.stringify({ spineIdRef, cfi })

const fixToolOrdering = ({
  tools,
  modifiedTool,
  now,
}) => {

  const modifiedToolPlacementKey = getPlacementKey(modifiedTool)
  const nonDeletedModifiedToolOrdering = modifiedTool._delete ? -1 : modifiedTool.ordering

  // adjust ordering key of other tools with same spineIdRef/cfi combo
  const ordering = {
    [modifiedToolPlacementKey]: nonDeletedModifiedToolOrdering === 0 ? 1 : 0,
  }

  let draftToolByCurrentlyPublishedToolUid = getDraftToolByCurrentlyPublishedToolUid(tools)

  tools.forEach((tool, idx) => {
    if(tool._delete) return
    if(tool.uid === modifiedTool.uid) return

    // if there are both published and draft versions of a tool, deal only with the draft here
    if(tool.published_at && draftToolByCurrentlyPublishedToolUid[tool.uid]) return

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
      && ordering[placementKey] === nonDeletedModifiedToolOrdering
    ) {
      ordering[placementKey]++
    }
  })

  // Refetch because tools info may have changed.
  draftToolByCurrentlyPublishedToolUid = getDraftToolByCurrentlyPublishedToolUid(tools)

  // conform placement of all published tools which have draft versions to accord with their draft version
  tools.forEach((tool, idx) => {
    if(tool._delete) return

    if(tool.published_at && draftToolByCurrentlyPublishedToolUid[tool.uid]) {
      const { spineIdRef, cfi, ordering } = draftToolByCurrentlyPublishedToolUid[tool.uid]

      if(
        tool.spineIdRef !== spineIdRef
        || tool.cfi !== cfi
        || tool.ordering !== ordering
      ) {
        tools[idx] = tool = { ...tool }
        tool.spineIdRef = spineIdRef
        tool.cfi = cfi
        tool.ordering = ordering
        tool.updated_at = now
      }
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

  const retainFilter = items => (items || []).filter(({ updated_at, forcePatch, _delete }) => (
    (
      updated_at > action.lastSuccessfulPatch
      || forcePatch
    )
    && !_delete
  ))

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
          if(classroom.uid === newClassroom.uid) {
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

      // insert in members and tools, and restore classroomQueryString
      classrooms.forEach(({ uid, classroomQueryString, members=[], tools=[] }) => {
        const membersToRetain = retainFilter(members)
        const toolsToRetain = retainFilter(tools)

        newClassrooms = newClassrooms.map(newClassroom => {
          if(uid === newClassroom.uid) {

            if(classroomQueryString) {
              newClassroom.classroomQueryString = classroomQueryString
            }

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
              members: newMembers,
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
          if(
            highlight.color === action.color
            && highlight.note === action.note
            && !!highlight.forcePatch === !!action.forcePatch
            && !highlight._delete
            && !!highlight.share_quote
            && !!highlight.share_code
          ) {
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

      if(
        !highlightShareInfo.share_code
        || action.forceNewShareCode
      ) {
        highlightShareInfo.share_code = createShareCode()
      }

      if(!highlightShareInfo.share_quote && action.share_quote) {
        highlightShareInfo.share_quote = action.share_quote
        if(highlightShareInfo.share_quote.split(' ').length > MAX_QUOTE_WORD_LENGTH) {
          highlightShareInfo.share_quote = `${highlightShareInfo.share_quote.split(' ').slice(0, MAX_QUOTE_WORD_LENGTH).join(' ')}...`
        }
        if(highlightShareInfo.share_quote.length > MAX_QUOTE_CHARACTER_LENGTH) {
          highlightShareInfo.share_quote = `${highlightShareInfo.share_quote.substr(0, MAX_QUOTE_CHARACTER_LENGTH - 3)}...`
        }
      }

      highlights.push({
        spineIdRef: action.spineIdRef,
        cfi: action.cfi,
        color: action.color,
        note: action.note,
        ...highlightShareInfo,
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
      const newClassroom = {
        uid: action.uid,
        name: action.name,
        created_at: now,
        updated_at: now,
        access_code: createAccessCode(),
        instructor_access_code: createAccessCode(),
        members: [
          {
            user_id: action.userId,
            role: 'INSTRUCTOR',
            updated_at: now,
            fullname: action.fullname,
            email: action.email,
          },
        ],
        isNew: true,
      }

      classrooms.push(newClassroom)

      if(action.based_off_classroom_uid) {
        classrooms.some((classroom, idx) => {
          if(classroom.uid === action.based_off_classroom_uid) {
  
            ;[
              'syllabus',
              'scheduleDates',
              'introduction',
              'lti_configurations',
              'classroom_highlights_mode',
              'closes_at',
              'draftData',
            ].forEach(param => {
              if(classroom[param] !== undefined) {
                newClassroom[param] = classroom[param]
                if(param !== 'draftData') {
                  newClassroom.published_at = now
                }
              }
            })

            newClassroom.based_off_classroom_uid = action.based_off_classroom_uid

            // TODO: When I get classroom_group's working, be sure to insert an updated classroom_group_uid where relevant
            // TODO: I may need to adjust due_at and closes_at in a smart way when an old classroom is being copied from
            newClassroom.tools = []
            const oldToNewUidMap = {}
            const pushOnTools = doDraftsOfPublished => {
              ;(classroom.tools || []).forEach(({ uid: oldUid, currently_published_tool_uid, _delete, classroom_group_uid, ...otherToolInfo }) => {
                if(_delete) return
                if(doDraftsOfPublished && !currently_published_tool_uid) return
                if(!doDraftsOfPublished && currently_published_tool_uid) return

                const uid = uuidv4()
                oldToNewUidMap[oldUid] = uid

                newClassroom.tools.push({
                  ...otherToolInfo,
                  uid,
                  undo_array: [],
                  currently_published_tool_uid: oldToNewUidMap[currently_published_tool_uid] || null,
                  created_at: now,
                  updated_at: now,
                })
              })
            }
            pushOnTools(false)
            pushOnTools(true)

            newClassroom.instructorHighlights = []
            ;(classroom.instructorHighlights || []).forEach(({ _delete, ...otherInstructorHighlightInfo }) => {
              if(_delete) return
              newClassroom.instructorHighlights.push({
                ...otherInstructorHighlightInfo,
                created_at: now,
              })
            })
  
          }
        })
      }

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
            'scheduleDates',
            'introduction',
            'lti_configurations',
            'classroom_highlights_mode',
            'closes_at',
            'draftData',
            'published_at',
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

    case "UPDATE_CLASSROOM_MEMBER": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          return (classroom.members || []).some((member, idx) => {
            if(member.user_id === action.userId) {

              classroom = classrooms[idx] = {
                ...classroom,
                members: [
                  ...classroom.members,
                ],
              }
              member = classroom.members[idx] = { ...member }

              ;[
                'classroom_group_uid',
                'role',
                '_delete',
              ].forEach(param => {
                if(action[param] !== undefined) {
                  member[param] = action[param]
                }
              })

              member.updated_at = now

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
            data: action.data || {},
            undo_array: [],
            created_at: now,
            updated_at: now,
            due_at: action.due_at,
            closes_at: action.closes_at,
            currently_published_tool_uid: action.currently_published_tool_uid,
            creatorType: action.creatorType,
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

    case "PUBLISH_TOOL": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const tools = [ ...(classroom.tools || []) ]

          return tools.some((tool, idx2) => {
            if(tool.uid === action.uid) {
              tools[idx2] = tool = { ...tool }

              const oldPublishedToolUid = tool.currently_published_tool_uid

              tool.published_at = now
              tool.currently_published_tool_uid = null
              tool.updated_at = now

              classrooms[idx] = {
                ...classroom,
                // simply get rid the previous version (if exists) as the backend will take care of its data updates
                tools: tools.filter(({ uid }) => uid !== oldPublishedToolUid),
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

    case "UPDATE_TOOL_ENGAGEMENT": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const tools = [ ...(classroom.tools || []) ]

          return tools.some((tool, idx2) => {
            if(tool.uid === action.toolUid) {
              tools[idx2] = tool = { ...tool }
              
              if(tool.engagement) {
                tool.engagement = { ...tool.engagement }
              } else {
                tool.engagement = {
                  created_at: now,
                }
              }

              ;[
                'text',
                'answers',
              ].forEach(param => {
                if(action[param] !== undefined) {
                  tool.engagement[param] = action[param]
                }
              })
  
              tool.engagement.updated_at = now

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

    case "SUBMIT_TOOL_ENGAGEMENT": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const tools = [ ...(classroom.tools || []) ]

          return tools.some((tool, idx2) => {
            if(tool.uid === action.toolUid) {
              tools[idx2] = tool = { ...tool }

              const newEngagement = {
                // tools with submission times have uid's and a single user can have more than one engagement per tool
                uid: uuidv4(),
                created_at: now,
                updated_at: now,
                submitted_at: now,
              }

              ;[
                'text',
                'answers',
                'score',
              ].forEach(param => {
                if(action[param] !== undefined) {
                  newEngagement[param] = action[param]
                }
              })

              tool.engagements = [
                ...(tool.engagements || []),
                newEngagement,
              ]

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

    case "DELETE_TOOL_ENGAGEMENT": {
      if(classrooms.some((classroom, idx) => {
        if(classroom.uid === action.classroomUid) {

          const tools = [ ...(classroom.tools || []) ]

          return tools.some((tool, idx2) => {
            if(tool.uid === action.toolUid) {
              tools[idx2] = tool = { ...tool }

              tool.engagements = [ ...(tool.engagements || []) ]

              return tool.engagements.some((engagement, idx3) => {
                if(engagement.uid === action.uid) {
                  tool.engagements[idx3] = engagement = { ...engagement }

                  engagement._delete = true
                  engagement.updated_at = now

                  classrooms[idx] = {
                    ...classroom,
                    tools,
                  }
      
                  return true
                }
              })
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

    case "ADD_ACCOUNT": {
      // Previously saved highlights should get flagged so that they get saved

      let hasHighlightsToUpdate = false

      for(let bookId in newState) {

        const userDataForThisBook = newState[bookId] || {}
        const highlights = (userDataForThisBook.highlights || [])

        if(highlights.length === 0) continue

        hasHighlightsToUpdate = true

        highlights.forEach((highlight, idx) => {
          highlights[idx] = {
            ...highlight,
            forcePatch: true,
          }
        })

        newState[bookId] = {
          ...userDataForThisBook,
          highlights,
        }

      }

      return hasHighlightsToUpdate ? newState : state
    }

    case "SET_CLASSROOM_QUERY_STRING": {

      const { bookId, classroomUid, queryString, expireAt } = action

      if(queryString && expireAt && classrooms.some((classroom, idx) => {
        if(classroom.uid === classroomUid) {
          classroom = classrooms[idx] = { ...classroom }
          classroom.classroomQueryString = {
            queryString,
            expireAt,
          }
          return true
        }
      })) {

        newState[bookId] = {
          ...userDataForThisBook,
          classrooms,
        }
  
        return newState

      }

      return state
    }

  }

  return state
}