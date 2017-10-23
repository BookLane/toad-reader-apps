const initialState = {}

export default function(state = initialState, action) {
  let newState

  switch (action.type) {

    case "ADD_BOOKS":
      newState = {...state}
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
      // TODO: needs to remove books that have been removed from this acct, and delete them from device
      return newState

    case "REMOVE_ACCOUNT":
      newState = {...state}
      for(bookId in newState) {
        const accountIds = book.accountIds.filter(accountId => accountId != action.accountId)
        if(accountIds.length == 0) {
          delete newState[bookId]
        } else if(newState[bookId].accountIds.length != accountIds.length) {
          newState[bookId] = {
            ...newState[bookId],
            accountIds,
          }
        }
      }
      return newState

    case "SET_DOWNLOADED_VALUE":
      newState = {...state}
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