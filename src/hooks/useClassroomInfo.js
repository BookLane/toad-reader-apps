import { useMemo } from "react"
import { getIdsFromAccountId, getDraftToolByCurrentlyPublishedToolUid } from "../utils/toolbox"

const useClassroomInfo = ({ books, bookId, userDataByBookId={}, inEditMode, rawInEditMode }) => {

  const book = useMemo(
    () => (books[bookId] || {}),
    [ books[bookId] ]
  )
  const { toc, spines, accounts } = book
  let { currentClassroomUid: classroomUid, selectedToolUid } = book
  const accountId = Object.keys(accounts)[0] || ""
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
        if(a.uid === defaultClassroomUid) return 1
        if(b.uid === defaultClassroomUid) return -1
        const aName = a.name.toUpperCase()
        const bName = b.name.toUpperCase()
        return (aName < bName) ? -1 : (aName > bName) ? 1 : 0
      })

      classroomsBeingSorted.push({
        uid: undefined,
      })

      return classroomsBeingSorted
    },
    [ classrooms, defaultClassroomUid ]
  )

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
    classroomUid = undefined
  }

  const enhancedIsOff = !classroomUid
  const hasFrontMatter = !!((classroom || {}).syllabus || (classroom || {}).introduction)
  const hasDraftData = Object.keys((classroom || {}).draftData || {}).length > 0
  const isDefaultClassroom = classroomUid === defaultClassroomUid
  const bookVersion = Object.values(book.accounts)[0].version
  const myRole = (bookVersion === 'INSTRUCTOR' && (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role) || 'STUDENT'
  const iCanEdit = (bookVersion === 'PUBLISHER' && isDefaultClassroom) || (myRole === 'INSTRUCTOR' && !isDefaultClassroom)

  if(
    enhancedIsOff
    || (
      ['FRONT MATTER', 'ENHANCED HOMEPAGE'].includes(selectedToolUid)
      && isDefaultClassroom
    )
  ) {
    selectedToolUid = null
  }

  if(rawInEditMode) {
    inEditMode = !!(
      rawInEditMode
      && iCanEdit
      && !['ENHANCED HOMEPAGE'].includes(selectedToolUid)
    )
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

  const selectedTool = ['FRONT MATTER', 'ENHANCED HOMEPAGE'].includes(selectedToolUid) ? {} : visibleTools.filter(({ uid }) => uid === selectedToolUid)[0]

  if(userDataByBookId[bookId] && !selectedTool && selectedToolUid) {
    // Make this consistent when we can (i.e. when userDataByBookId is sent over).
    selectedToolUid = undefined
  }

  const viewingEnhancedHomepage = selectedToolUid === 'ENHANCED HOMEPAGE'
  const viewingFrontMatter = selectedToolUid === 'FRONT MATTER'

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
    hasDraftData,  // requires userDataByBookId to be sent in
    bookVersion,
    myRole,  // requires userDataByBookId to be sent in
    inEditMode,  // requires userDataByBookId and rawInEditMode to be sent in
    iCanEdit,  // requires userDataByBookId to be sent in
    tools,  // requires userDataByBookId to be sent in
    selectedToolUid,  // requires userDataByBookId and inEditMode to be sent in to be most accurate
    selectedTool,  // requires userDataByBookId and inEditMode to be sent in
    viewingEnhancedHomepage,
    viewingFrontMatter,
    instructorHighlights,  // requires userDataByBookId to be sent in
    draftToolByCurrentlyPublishedToolUid,  // requires userDataByBookId to be sent in
    visibleTools,  // requires userDataByBookId and inEditMode to be sent in
  }
  
}

export default useClassroomInfo
