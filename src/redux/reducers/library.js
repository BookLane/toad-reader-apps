const initialState = {
  onlyShowAccountId: null,
  sort: "recent",
  view: "covers",
}

const sortOptions = [
  "title",
  "author",
  "recent",
]

const viewOptions = [
  "cover",
  "list",
]

export default function(state = initialState, action) {
    
  switch (action.type) {

    case "SET_ONLY_SHOW_ACCOUNT_ID":
      return {
        ...state,
        onlyShowAccountId: parseInt(action.value) || null,
      }

// I need to know store.books and store.userDataByBookId - set up differently?
    // case "SET_SORT":
    //   const newState = {
    //     ...state,
    //     sort: sortOptions.includes(action.sort) ? action.sort : state.sort,
    //     bookList: Object.keys(action.books),
    //   }
    //   if(newState.sort == "recent") {
    //     action
    //   } else {
    //       newState.bookList.sort((a, b) => {
    //         if(action.books[a]) {
    //           return -1
    //         } else if() {
    //           return 1
    //         } else {
    //           return 0
    //         }
    //       })
    //   }
    //   return newState

    case "SET_VIEW":
      return {
        ...state,
        view: viewOptions.includes(action.view) ? action.view : state.sort
      }

  }

  return state
}