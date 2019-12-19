import { getIdsFromAccountId } from '../utils/toolbox'

const useClassroomInfo = ({ books, bookId, userDataByBookId={} }) => {

  const book = books[bookId] || {}
  const { toc, accounts, currentClassroomUid } = book
  const accountId = Object.keys(accounts)[0] || ""
  const { idpId, userId } = getIdsFromAccountId(accountId)
  
  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const defaultClassroomUid = `${idpId}-${bookId}`
  const classroomUid = currentClassroomUid || defaultClassroomUid
  const classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]
  const { tools=[] } = classroom || {}

  return {
    book,
    toc,
    accounts,
    accountId,
    idpId,
    userId,
    classrooms,  // requires userDataByBookId to be sent in
    classroomUid,
    currentClassroomUid,
    defaultClassroomUid,
    classroom,  // requires userDataByBookId to be sent in
    tools,  // requires userDataByBookId to be sent in
  }
  
}

export default useClassroomInfo
