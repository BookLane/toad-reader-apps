import { getIdsFromAccountId } from '../utils/toolbox'

const useClassroomInfo = ({ books, bookId, userDataByBookId={} }) => {

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

  const isDefaultClassroom = !currentClassroomUid
  const bookVersion = Object.values(book.accounts)[0].version
  const myRole = (bookVersion === 'INSTRUCTOR' && (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role) || 'STUDENT'

  const { tools=[], instructorHighlights=[] } = classroom || {}
  const selectedTool = selectedToolUid === 'FRONT MATTER' ? {} : tools.filter(({ uid }) => uid === selectedToolUid)[0]

  if(userDataByBookId[bookId] && !selectedTool && selectedToolUid) {
    // Make this consistent when we can (i.e. when userDataByBookId is sent over).
    selectedToolUid = undefined
  }

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
    viewingFrontMatter,
    instructorHighlights,  // requires userDataByBookId to be sent in
  }
  
}

export default useClassroomInfo
