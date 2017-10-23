const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}

  const removeAccount = (exceptBookIds) => {
    for(bookId in newState) {
      if(exceptBookIds.includes(bookId)) continue
      const accountIds = newState[bookId].accountIds.filter(accountId => accountId != action.accountId)
      if(accountIds.length == 0) {
        delete newState[bookId]
      } else if(newState[bookId].accountIds.length != accountIds.length) {
        newState[bookId] = {
          ...newState[bookId],
          accountIds,
        }
      }
    }
  }

  switch (action.type) {

    case "ADD_BOOKS":
      removeAccount(action.books.map(book => book.id))
      action.books.forEach(book => {
        newState[book.id] = {
          title: book.title,
          author: book.author,
          epubSizeInMB: book.epubSizeInMB,
          totalCharacterCount: book.totalCharacterCount,
          downloaded: !!(newState[book.id] && newState[book.id].downloaded),
          accountIds: [
            ...((newState[book.id] && newState[book.id].accountIds) || []),
            action.accountId,
          ].filter((el, i, a) => i === a.indexOf(el))  // dedup
        }
      })
      return newState

    case "REMOVE_ACCOUNT":
      removeAccount()
      return newState

    case "SET_DOWNLOADED_VALUE":
      if(newState[action.bookId]) {
        newState[action.bookId] = {
          ...newState[action.bookId],
          downloaded: !!action.value,
        }
      }
      return newState

  }

  return state
}