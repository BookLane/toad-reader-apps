const sortOptions = [
  "recent",
  "title",
  "author",
]

export default function(state, action) {

  const newState = {
    ...state,
    library: {...state.library},
  }
    
  switch (action.type) {

    case "SET_SORT":
      newState.library.sort = sortOptions.includes(action.sort) ? action.sort : (newState.library.sort || sortOptions[0])
      newState.library.bookList = Object.keys(newState.books)

      const getInfo = bookId => {
        const updatedAtTime = ((newState.userDataByBookId[bookId] || {}).updated_at || -0) * -1

        return (
          newState.library.sort == "recent"
            ? (
              updatedAtTime  // First group == books which have been opened, ordered by most recent update time
              || (
                (3 - ((newState.books[bookId] || {}).downloadStatus || 0))  // Then order by download status
                + ((newState.books[bookId] || {}).title || "").toUpperCase()  // Then by title
              )
            )
            : ((newState.books[bookId] || {})[newState.library.sort] || "").toUpperCase()
        )
      }

      newState.library.bookList.sort((bookId1, bookId2) => {
        const bookInfo1 = getInfo(bookId1)
        const bookInfo2 = getInfo(bookId2)
        if(typeof bookInfo1 !== typeof bookInfo2) {
          // For "recent" sort, those books with an updated_at time are put before those never opened.
          return typeof bookInfo1 === 'number' ? -1 : 1
        }
        return bookInfo1 < bookInfo2 ? -1 : (bookInfo1 > bookInfo2 ? 1 : 0)
      })

      return newState
  }
  
  return state
}