import { getIdsFromAccountId } from '../utils/toolbox'

const useClassroomInfo = ({ books, bookId, userDataByBookId={} }) => {

  const book = books[bookId] || {}
  const { toc, spines, accounts, currentClassroomUid } = book
  let { selectedToolUid } = book
  const accountId = Object.keys(accounts)[0] || ""
  const { idpId, userId } = getIdsFromAccountId(accountId)
  
  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const defaultClassroomUid = `${idpId}-${bookId}`
  const classroomUid = currentClassroomUid || defaultClassroomUid
  const isDefaultClassroom = !currentClassroomUid
  const classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]
  const { tools=[] } = classroom || {}
  const selectedTool = tools.filter(({ uid }) => uid === selectedToolUid)[0]

  if(userDataByBookId[bookId] && !selectedTool && selectedToolUid) {
    // Make this consistent when we can (i.e. when userDataByBookId is sent over).
    // And inconsistency here could be caused by a tool removal, etc.
    selectedToolUid = undefined
  }

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
    tools,  // requires userDataByBookId to be sent in
    selectedToolUid,
    selectedTool,  // requires userDataByBookId to be sent in
  }
  
}

export default useClassroomInfo
