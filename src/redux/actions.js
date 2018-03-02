export const addAccount = ({ idpId, userId, accountInfo }) => ({
  type: "ADD_ACCOUNT",
  idpId,
  userId,
  accountInfo,
})

export const updateAccount = ({ accountId, accountInfo }) => ({
  type: "UPDATE_ACCOUNT",
  accountId,
  accountInfo,
})

export const removeAccount = ({ accountId }) => ({
  type: "REMOVE_ACCOUNT",
  accountId,
})

export const addBooks = ({ books, accountId, domain }) => ({
  type: "ADD_BOOKS",
  books,
  accountId,
  domain,
})

export const updateBookAccount = ({ bookId, accountId, accountInfo }) => ({
  type: "UPDATE_BOOK_ACCOUNT",
  bookId,
  accountId,
  accountInfo,
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

export const clearTocAndSpines = ({ bookId }) => ({
  type: "CLEAR_TOC_AND_SPINES",
  bookId,
})

export const clearUserDataExceptProgress = ({ bookId }) => ({
  type: "CLEAR_USER_DATA_EXCEPT_PROGRESS",
  bookId,
})

export const addSpinePageCfis = ({ bookId, idref, key, pageCfis }) => ({
  type: "ADD_SPINE_PAGE_CFIS",
  bookId,
  idref,
  key,
  pageCfis,
})

export const clearAllSpinePageCfis = ({ bookId }) => ({
  type: "CLEAR_ALL_SPINE_PAGE_CFIS",
  bookId,
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

export const setLatestLocation = ({ bookId, latestLocation, patchInfo }) => ({
  type: "SET_LATEST_LOCATION",
  bookId,
  latestLocation,
  patchInfo,
})

export const setHighlight = ({ bookId, spineIdRef, cfi, color, note, patchInfo }) => ({
  type: "SET_HIGHLIGHT",
  bookId,
  spineIdRef,
  cfi,
  color,
  note,
  patchInfo,
})

export const deleteHighlight = ({ bookId, spineIdRef, cfi, patchInfo }) => ({
  type: "DELETE_HIGHLIGHT",
  bookId,
  spineIdRef,
  cfi,
  patchInfo,
})

export const setUserData = ({ bookId, userData, lastSuccessfulPatch }) => ({
  type: "SET_USER_DATA",
  bookId,
  userData,
  lastSuccessfulPatch,
})
