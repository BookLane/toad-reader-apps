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

export const setFetchingBooks = ({ value }) => ({
  type: "SET_FETCHING_BOOKS",
  value,
})