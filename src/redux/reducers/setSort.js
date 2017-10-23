const sortOptions = [
  // "recent",
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
      newState.library.sort = sortOptions.includes(action.sort) ? action.sort : newState.sort
      newState.library.bookList = Object.keys(newState.books)
      const getInfo = bookId => (
        newState.library.sort == "recent"
          ? ((newState.userDataByBookId[bookId] || {}).updated_at || 0) * -1
          : ((newState.books[bookId] || {})[newState.library.sort] || "").toUpperCase()
      )
      newState.library.bookList.sort((bookId1, bookId2) => {
        const bookInfo1 = getInfo(bookId1)
        const bookInfo2 = getInfo(bookId2)
        return bookInfo1 < bookInfo2 ? -1 : (bookInfo1 > bookInfo2 ? 1 : 0)
      })
      return newState
      
  }
  
  return state
}