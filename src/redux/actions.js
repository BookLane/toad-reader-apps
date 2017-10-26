export const increment = () => ({
  type: "INCREMENT",
})

export const decrement = () => ({
  type: "DECREMENT",
})

export const addBooks = ({ books, accountId }) => ({
  type: "ADD_BOOKS",
  books,
  accountId,
})

export const setSort = ({ sort }) => ({
  type: "SET_SORT",
  sort,
})

export const reSort = () => ({
  type: "SET_SORT",
})

export const setFetchingBooks = ({ value }) => ({
  type: "SET_FETCHING_BOOKS",
  value,
})

export const setErrorMessage = ({ message }) => ({
  type: "SET_ERROR_MESSAGE",
  message,
})

export const toggleView = () => ({
  type: "TOGGLE_VIEW",
})

