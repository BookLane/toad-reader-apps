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

export const addBooks = ({ books, accountId, hash }) => ({
  type: "ADD_BOOKS",
  books,
  accountId,
  hash,
})

export const deleteBook = ({ bookId, accountId }) => ({
  type: "DELETE_BOOK",
  bookId,
  accountId,
})

export const setCoverFilename = ({ bookId, coverFilename }) => ({
  type: "SET_COVER_FILENAME",
  bookId,
  coverFilename,
})

export const updateBookAccount = ({ bookId, accountId, accountInfo }) => ({
  type: "UPDATE_BOOK_ACCOUNT",
  bookId,
  accountId,
  accountInfo,
})

export const setDownloadProgress = ({ bookId, downloadProgress }) => ({
  type: "SET_DOWNLOADED_PROGRESS",
  bookId,
  downloadProgress,
})

export const setDownloadStatus = ({ bookId, downloadStatus }) => ({
  type: "SET_DOWNLOADED_STATUS",
  bookId,
  downloadStatus,
})

export const setCurrentClassroom = ({ bookId, uid }) => ({
  type: "SET_CURRENT_CLASSROOM",
  bookId,
  uid,
})

export const setSelectedToolUid = ({ bookId, uid }) => ({
  type: "SET_SELECTED_TOOL_UID",
  bookId,
  uid,
})

export const createClassroom = ({ uid, bookId, name, userId, duplicateFromUid }) => ({
  type: "CREATE_CLASSROOM",
  uid,
  bookId,
  name,
  userId,
  duplicateFromUid,
  doPatch: true,
})

export const updateClassroom = ({ uid, bookId, name, access_code, instructor_access_code, syllabus, scheduleDates, introduction, lti_configurations, classroom_highlights_mode, closes_at, draftData, published_at }) => ({
  type: "UPDATE_CLASSROOM",
  uid,
  bookId,
  name,
  access_code,
  instructor_access_code,
  syllabus,
  scheduleDates,
  introduction,
  lti_configurations,
  classroom_highlights_mode,
  closes_at,
  draftData,
  published_at,
  doPatch: true,
})

export const deleteClassroom = ({ uid, bookId }) => ({
  type: "UPDATE_CLASSROOM",
  uid,
  bookId,
  _delete: true,
  doPatch: true,
})

export const deleteClassroomMember = ({ classroomUid, bookId, userId }) => ({
  type: "UPDATE_CLASSROOM_MEMBER",
  classroomUid,
  bookId,
  userId,
  _delete: true,
  doPatch: true,
})

export const createTool = ({ bookId, classroomUid, uid, spineIdRef, cfi, ordering, name, toolType, data, due_at, closes_at, currently_published_tool_uid }) => ({
  type: "CREATE_TOOL",
  bookId,
  classroomUid,
  uid,
  spineIdRef,
  cfi,
  ordering,
  name,
  toolType,
  data,
  due_at,
  closes_at,
  currently_published_tool_uid,
  doPatch: true,
})

export const updateTool = ({ bookId, classroomUid, uid, spineIdRef, cfi, ordering, name, toolType, data, due_at, closes_at }) => ({
  type: "UPDATE_TOOL",
  bookId,
  classroomUid,
  uid,
  spineIdRef,
  cfi,
  ordering,
  name,
  toolType,
  data,
  due_at,
  closes_at,
  doPatch: true,
})

export const publishTool = ({ bookId, classroomUid, uid }) => ({
  type: "PUBLISH_TOOL",
  bookId,
  classroomUid,
  uid,
  doPatch: true,
})

export const updateToolEngagement = ({ bookId, classroomUid, toolUid, text, answers }) => ({
  type: "UPDATE_TOOL_ENGAGEMENT",
  bookId,
  classroomUid,
  toolUid,
  text,
  answers,
  doPatch: true,
})

export const submitToolEngagement = ({ bookId, classroomUid, toolUid, uid, text, answers, score }) => ({
  type: "SUBMIT_TOOL_ENGAGEMENT",
  bookId,
  classroomUid,
  toolUid,
  uid,  // tools with submission times have uid's and a single user can have more than one engagement per tool
  text,
  answers,
  score,
  doPatch: true,
})

export const deleteToolEngagement = ({ bookId, classroomUid, toolUid, uid }) => ({
  type: "DELETE_TOOL_ENGAGEMENT",
  bookId,
  classroomUid,
  toolUid,
  uid,
  doPatch: true,
})

export const deleteTool = ({ bookId, classroomUid, uid }) => ({
  type: "UPDATE_TOOL",
  bookId,
  classroomUid,
  uid,
  _delete: true,
  doPatch: true,
})

export const createInstructorHighlight = ({ bookId, classroomUid, spineIdRef, cfi }) => ({
  type: "CREATE_INSTRUCTOR_HIGHLIGHT",
  bookId,
  classroomUid,
  spineIdRef,
  cfi,
  doPatch: true,
})

export const deleteInstructorHighlight = ({ bookId, classroomUid, spineIdRef, cfi }) => ({
  type: "DELETE_INSTRUCTOR_HIGHLIGHT",
  bookId,
  classroomUid,
  spineIdRef,
  cfi,
  doPatch: true,
})

export const pushToBookDownloadQueue = ({ bookId }) => ({
  type: "PUSH_TO_BOOK_DOWNLOAD_QUEUE",
  bookId,
})

export const removeFromBookDownloadQueue = ({ bookId }) => ({
  type: "REMOVE_FROM_BOOK_DOWNLOAD_QUEUE",
  bookId,
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

export const setSubscriptions = ({ bookId, accountId, subscriptions }) => ({
  type: "SET_SUBSCRIPTIONS",
  bookId,
  accountId,
  subscriptions,
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

export const setSidePanelWidth = ({ width }) => ({
  type: "SET_SIDE_PANEL_WIDTH",
  width,
})

export const toggleSidePanelOpen = () => ({
  type: "TOGGLE_SIDE_PANEL_OPEN",
})

export const toggleView = () => ({
  type: "TOGGLE_VIEW",
})

export const changeLibraryScope = ({ scope }) => ({
  type: "CHANGE_LIBRARY_SCOPE",
  scope,
})

export const setLatestLocation = ({ bookId, latestLocation }) => ({
  type: "SET_LATEST_LOCATION",
  bookId,
  latestLocation,
  doPatch: true,
})

export const setHighlight = ({ bookId, spineIdRef, cfi, color, note }) => ({
  type: "SET_HIGHLIGHT",
  bookId,
  spineIdRef,
  cfi,
  color,
  note,
  doPatch: true,
})

export const deleteHighlight = ({ bookId, spineIdRef, cfi }) => ({
  type: "DELETE_HIGHLIGHT",
  bookId,
  spineIdRef,
  cfi,
  doPatch: true,
})

export const shareHighlight = ({ bookId, spineIdRef, cfi, share_quote, forceNewShareCode }) => ({
  type: "SHARE_HIGHLIGHT",
  bookId,
  spineIdRef,
  cfi,
  share_quote,
  forceNewShareCode,
  doPatch: true,
})

export const setUserData = ({ bookId, userData, lastSuccessfulPatch }) => ({
  type: "SET_USER_DATA",
  bookId,
  userData,
  lastSuccessfulPatch,
})

export const setReaderStatus = ({ readerStatus }) => ({
  type: "SET_READER_STATUS",
  readerStatus,
})

export const setSyncStatus = syncStatus => ({
  type: "SET_SYNC_STATUS",
  syncStatus,
})

export const startRecordReading = ({ bookId, spineIdRef }) => ({
  type: "START_RECORD_READING",
  bookId,
  spineIdRef,
})

export const endRecordReading = () => ({
  type: "END_RECORD_READING",
  doReportReadings: true,
})

export const flushReadingRecords = ({ accountId, numberOfRecords }) => ({
  type: "FLUSH_READING_RECORDS",
  accountId,
  numberOfRecords,
})

export const autoUpdateCoreIdps = () => ({
  type: "AUTO_UPDATE_CORE_IDPS",
})

export const setXapiConsentShown = () => ({
  type: "SET_XAPI_CONSENT_SHOWN",
})
