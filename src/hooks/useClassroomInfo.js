import { useMemo } from "react"
import { Platform } from "react-native"

import { getIdsFromAccountId, getDraftToolByCurrentlyPublishedToolUid, splitDraftDataToOptionsAndFrontMatter } from "../utils/toolbox"
import useRouterState from "./useRouterState"

const useClassroomInfo = ({ books, bookId, userDataByBookId={}, inEditMode, rawInEditMode }) => {

  const { routerState } = useRouterState()
  const { widget } = routerState

  const book = useMemo(
    () => (books[bookId] || {}),
    [ books[bookId] ]
  )
  const { toc, spines, accounts } = book
  let { currentClassroomUid: classroomUid, selectedToolUid } = book
  const accountId = Object.keys(accounts || {})[0] || ""
  const { idpId, userId } = getIdsFromAccountId(accountId)
  
  const defaultClassroomUid = `${idpId}-${bookId}`
  const classrooms = useMemo(
    () => (
      ((userDataByBookId[bookId] || {}).classrooms || [])
        .filter(({ uid, _delete, members=[] }) => (
          !_delete
          && (
            uid === defaultClassroomUid
            || members.some(({ user_id, _delete }) => (user_id === userId && !_delete))
          )
        ))
    ),
    [ (userDataByBookId[bookId] || {}).classrooms ]
  )

  const sortedClassrooms = useMemo(
    () => {
      const classroomsBeingSorted = [ ...classrooms ]

      classroomsBeingSorted.sort((a, b) => {
        if(a.uid === defaultClassroomUid) return -1
        if(b.uid === defaultClassroomUid) return 1
        const aName = a.name.toUpperCase()
        const bName = b.name.toUpperCase()
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0
      })

      classroomsBeingSorted.unshift({
        uid: null,
      })

      return classroomsBeingSorted
    },
    [ classrooms, defaultClassroomUid ]
  )

  if(classroomUid === undefined) classroomUid = defaultClassroomUid
  let classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]

  // Ensure existence of classroom when we can (i.e. when userDataByBookId is sent over).
  // If it doesn't exist, make the classroomUid's undefined (signifying that the enhanced
  // content is turned off).
  if(
    (
      userDataByBookId[bookId]
      && !classroom
      && classroomUid !== defaultClassroomUid
    )
    || !classroomUid
  ) {
    classroomUid = null
  }

  const enhancedIsOff = !classroomUid
  const [ optionsDraftData, frontMatterDraftData ] = splitDraftDataToOptionsAndFrontMatter((classroom || {}).draftData)
  const hasOptionsDraftData = Object.keys(optionsDraftData).length > 0
  const hasFrontMatterDraftData = Object.keys(frontMatterDraftData).length > 0
  const isDefaultClassroom = classroomUid === defaultClassroomUid
  const bookVersion = (!accounts || widget) ? 'BASE' : Object.values(accounts)[0].version
  const hasFrontMatter = !!(
    (classroom || {}).syllabus
    || ((classroom || {}).scheduleDates || []).length > 0
    || (classroom || {}).introduction
  )

  const members = useMemo(
    () => ((classroom || {}).members || []).filter(({ _delete }) => !_delete),
    [ (classroom || {}).members ],
  )

  const myRole = (bookVersion === 'INSTRUCTOR' && (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role) || 'STUDENT'
  const iCanEdit = (bookVersion === 'PUBLISHER' && isDefaultClassroom) || (myRole === 'INSTRUCTOR' && !isDefaultClassroom)

  const students = useMemo(
    () => (
      myRole === 'INSTRUCTOR'
        ? members.filter(({ role }) => role === 'STUDENT')
        : null
    ),
    [ myRole, members ],
  )

  if(rawInEditMode !== undefined) {
    inEditMode = !!(
      rawInEditMode
      && iCanEdit
      && !['DASHBOARD', 'HIGHLIGHTS'].includes(selectedToolUid)
    )
  }

  const canViewDashboard = !enhancedIsOff && [ 'INSTRUCTOR', 'ENHANCED' ].includes(bookVersion)

  const canViewOptions = inEditMode

  const canViewFrontMatter = !!(
    !enhancedIsOff
    && bookVersion !== 'PUBLISHER'
    && (
      hasFrontMatter
      || inEditMode
    )
  )

  if(
    !canViewDashboard
    && selectedToolUid === 'DASHBOARD'
  ) {
    selectedToolUid = null
  }

  if(
    selectedToolUid === 'OPTIONS OR SETTINGS'
    && !canViewOptions
  ) {
    selectedToolUid = null
  }

  if(
    !canViewFrontMatter
    && selectedToolUid === 'FRONT MATTER'
  ) {
    selectedToolUid = null
  }

  if(
    selectedToolUid === 'FRONT MATTER'
    && !hasFrontMatter
    && inEditMode === false
  ) {
    selectedToolUid = null
  }

  const tools = useMemo(
    () => ((classroom || {}).tools || []).filter(({ _delete }) => !_delete),
    [ (classroom || {}).tools ]
  )
  const instructorHighlights = useMemo(
    () => ((classroom || {}).instructorHighlights || []).filter(({ _delete }) => !_delete),
    [ (classroom || {}).instructorHighlights ]
  )

  const draftToolByCurrentlyPublishedToolUid = useMemo(
    () => getDraftToolByCurrentlyPublishedToolUid(tools),
    [ tools ],
  )

  const visibleTools = useMemo(
    () => (
      enhancedIsOff
        ? []
        : (
          inEditMode == null
            ? tools
            : tools.filter(({ uid, published_at }) => {
              const isVisible = (
                !(
                  !inEditMode
                  && !published_at
                )
                && !(
                  inEditMode
                  && published_at
                  && draftToolByCurrentlyPublishedToolUid[uid]
                )
              )

              if(!isVisible && uid === selectedToolUid) {
                selectedToolUid = undefined
              }

              return isVisible
            })
        )
    ),
    [ enhancedIsOff, inEditMode, tools, draftToolByCurrentlyPublishedToolUid, selectedToolUid ]
  )

  const selectedTool = [ 'HIGHLIGHTS', 'DASHBOARD', 'OPTIONS OR SETTINGS', 'FRONT MATTER' ].includes(selectedToolUid) ? {} : visibleTools.filter(({ uid }) => uid === selectedToolUid)[0]

  if(userDataByBookId[bookId] && !selectedTool && selectedToolUid) {
    // Make this consistent when we can (i.e. when userDataByBookId is sent over).
    selectedToolUid = undefined
  }

  const viewingHighlights = selectedToolUid === 'HIGHLIGHTS'
  const viewingDashboard = selectedToolUid === 'DASHBOARD'
  const viewingOptions = selectedToolUid === 'OPTIONS OR SETTINGS'
  const viewingFrontMatter = selectedToolUid === 'FRONT MATTER'

  const scheduleDatesToDisplay = useMemo(
    () => {
      if(!classroom) return null

      const { scheduleDates, draftData } = classroom

      let datesToDisplay = []
      const hasDraft = (draftData || {}).scheduleDates !== undefined
    
      if(inEditMode && hasDraft) {
        datesToDisplay = draftData.scheduleDates
      } else if(scheduleDates) {
        datesToDisplay = scheduleDates
      }

      return datesToDisplay
    },
    [ classroom, inEditMode ],
  )

  return {
    book,
    toc,
    spines,
    accounts,
    accountId,
    idpId,
    userId,
    classrooms,  // requires userDataByBookId to be sent in
    sortedClassrooms,  // requires userDataByBookId to be sent in
    classroomUid,
    enhancedIsOff,
    isDefaultClassroom,
    defaultClassroomUid,
    classroom,  // requires userDataByBookId to be sent in
    hasFrontMatter,  // requires userDataByBookId to be sent in
    canViewDashboard,  // requires userDataByBookId to be sent in
    canViewOptions,  // requires userDataByBookId and inEditMode to be sent in
    canViewFrontMatter,  // requires userDataByBookId and inEditMode to be sent in
    hasOptionsDraftData,  // requires userDataByBookId to be sent in
    hasFrontMatterDraftData,  // requires userDataByBookId to be sent in
    bookVersion,
    myRole,  // requires userDataByBookId to be sent in
    members,  // requires userDataByBookId to be sent in
    students,  // requires userDataByBookId to be sent in
    inEditMode,  // requires userDataByBookId and rawInEditMode to be sent in
    iCanEdit,  // requires userDataByBookId to be sent in
    tools,  // requires userDataByBookId to be sent in
    selectedToolUid,  // requires userDataByBookId and inEditMode to be sent in to be most accurate
    selectedTool,  // requires userDataByBookId and inEditMode to be sent in
    viewingHighlights,
    viewingDashboard,
    viewingOptions,  // requires inEditMode to be sent in
    viewingFrontMatter,  // requires inEditMode to be sent in
    instructorHighlights,  // requires userDataByBookId to be sent in
    draftToolByCurrentlyPublishedToolUid,  // requires userDataByBookId to be sent in
    visibleTools,  // requires userDataByBookId and inEditMode to be sent in
    scheduleDatesToDisplay,  // requires userDataByBookId and inEditMode to be sent in
  }
  
}

export default useClassroomInfo
