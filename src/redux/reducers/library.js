const initialState = {
  onlyShowAccountId: null,
  sort: "recent",
  view: "title",  // TODO: should be "recent" once that is supported
  bookList: [],
}

const sortOptions = [
  // "recent",
  "title",
  "author",
]

const viewOptions = [
  "cover",
  "list",
]

export default function(state, action) {

  const newState = {
    ...state,
    library: state.library ? {...state.library} : initialState,
  }
    
  switch (action.type) {

    case "SET_ONLY_SHOW_ACCOUNT_ID":
      newState.library.onlyShowAccountId = parseInt(action.accountId) || null
      return newState

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

    case "SET_VIEW":
      newState.library.view = viewOptions.includes(action.view) ? action.view : newState.library.view
      return newState
      
  }
  
  return state.library ? state : newState
}