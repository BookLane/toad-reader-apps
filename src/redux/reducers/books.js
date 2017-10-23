const initialState = {}

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "ADD_BOOKS":
      const newState = {...state}
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
          ]
        }
      })
      return newState

    case "REMOVE_ACCOUNT":
      const newState = {...state}
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
      const newState = {...state}
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