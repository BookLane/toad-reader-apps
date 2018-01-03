export const addBooks = ({ books, accountId }) => ({
  type: "ADD_BOOKS",
  books,
  accountId,
})

export const setDownloadStatus = ({ bookId, downloadStatus }) => ({
  type: "SET_DOWNLOADED_STATUS",
  bookId,
  downloadStatus,
})

export const setTocAndSpines = ({ bookId, toc, spines }) => ({
  type: "SET_TOC_AND_SPINES",
  bookId,
  toc,
  spines,
})

export const addSpineNumPagesCount = ({ bookId, idref, key, numPages }) => ({
  type: "ADD_SPINE_NUM_PAGES_COUNT",
  bookId,
  idref,
  key,
  numPages,
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

export const setTextSize = ({ textSize }) => ({
  type: "SET_TEXT_SIZE",
  textSize,
})

export const setTextSpacing = ({ textSpacing }) => ({
  type: "SET_TEXT_SPACING",
  textSpacing,
})

export const setTheme = ({ theme }) => ({
  type: "SET_THEME",
  theme,
})

export const setErrorMessage = ({ message }) => ({
  type: "SET_ERROR_MESSAGE",
  message,
})

export const toggleView = () => ({
  type: "TOGGLE_VIEW",
})

