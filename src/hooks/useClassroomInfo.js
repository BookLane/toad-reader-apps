import { useMemo } from "react"
import { getIdsFromAccountId, getDraftToolByCurrentlyPublishedToolUid } from "../utils/toolbox"

const useClassroomInfo = ({ books, bookId, userDataByBookId={}, inEditMode }) => {

  const book = books[bookId] || {}
  const { toc, spines, accounts } = book
  let { currentClassroomUid, selectedToolUid } = book
  const accountId = Object.keys(accounts)[0] || ""
  const { idpId, userId } = getIdsFromAccountId(accountId)
  
  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const defaultClassroomUid = `${idpId}-${bookId}`
  let classroomUid = currentClassroomUid || defaultClassroomUid
  let classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]

  // Ensure existence of classroom when we can (i.e. when userDataByBookId is sent over).
  // If it doesn't exist, make the classroomUid's undefined.
  if(userDataByBookId[bookId] && !classroom && classroomUid !== defaultClassroomUid) {
    currentClassroomUid = undefined
    classroomUid = defaultClassroomUid
    classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]
  }
  if(userDataByBookId[bookId] && !classroom) {
    classroomUid = undefined
  }

  const isDefaultClassroom = classroomUid === defaultClassroomUid
  const bookVersion = Object.values(book.accounts)[0].version
  const myRole = (bookVersion === 'INSTRUCTOR' && (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role) || 'STUDENT'

  const { tools=[], instructorHighlights=[] } = classroom || {}

  const draftToolByCurrentlyPublishedToolUid = useMemo(
    () => getDraftToolByCurrentlyPublishedToolUid(tools),
    [ tools ],
  )

  const visibleTools = inEditMode == null
    ? tools
    : tools.filter(({ uid, published_at, _delete }) => {
      const isVisible = (
        !_delete
        && !(
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

  const selectedTool = ['FRONT MATTER', 'ENHANCED HOMEPAGE'].includes(selectedToolUid) ? {} : tools.filter(({ uid }) => uid === selectedToolUid)[0]

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
    classroomUid,
    currentClassroomUid,
    isDefaultClassroom,
    defaultClassroomUid,
    classroom,  // requires userDataByBookId to be sent in
    bookVersion,
    myRole,  // requires userDataByBookId to be sent in
    tools,  // requires userDataByBookId to be sent in
    selectedToolUid,
    selectedTool,  // requires userDataByBookId to be sent in
    viewingEnhancedHomepage,
    viewingFrontMatter,
    instructorHighlights,  // requires userDataByBookId to be sent in
    draftToolByCurrentlyPublishedToolUid,  // requires userDataByBookId to be sent in
    visibleTools,  // requires userDataByBookId and inEditMode to be sent in
  }
  
}

export default useClassroomInfo
