const initialState = {}

export default function(state = initialState, action) {
  const newState = {...state}

  const removeAccount = (exceptBookIds) => {
    for(bookId in newState) {
      if(exceptBookIds.includes(bookId)) continue
      const accountIds = newState[bookId].accountIds.filter(accountId => accountId != action.accountId)
      if(accountIds.length == 0) {
        delete newState[bookId]
      } else if(newState[bookId].accountIds.length != accountIds.length) {
        newState[bookId] = {
          ...newState[bookId],
          accountIds,
        }
      }
    }
  }

  switch (action.type) {

    case "ADD_BOOKS":
      removeAccount(action.books.map(book => book.id))
      action.books.forEach(book => {
        newState[book.id] = {
          title: book.title,
          author: book.author,
          epubSizeInMB: book.epubSizeInMB,
          totalCharacterCount: book.totalCharacterCount,
          coverFilename: (book.coverHref || "").split('/').pop(),
          downloadStatus: (state[book.id] && state[book.id].downloadStatus) || 0,
          accountIds: [
            ...((newState[book.id] && newState[book.id].accountIds) || []),
            action.accountId,
          ].filter((el, i, a) => i === a.indexOf(el))  // dedup
        }
      })
      return newState

    case "REMOVE_ACCOUNT":
      removeAccount()
      return newState

    case "SET_DOWNLOADED_STATUS":
      if(newState[action.bookId]) {
        if(action.downloadStatus == 0) {
          delete newState[action.bookId].toc
          delete newState[action.bookId].spines
        }
        newState[action.bookId] = {
          ...newState[action.bookId],
          downloadStatus: action.downloadStatus,
        }
      }
      return newState

    case "SET_TOC_AND_PREP_SPINES":

      const getSpinesFromToc = toc => {
        let spines = []
        const spineHrefs = {}
  
        ;(toc || []).forEach(tocItem => {
          const spineHrefWithoutHash = tocItem.href.replace(/#.*$/, '')

          if(spineHrefs[spineHrefWithoutHash]) return
          spineHrefs[spineHrefWithoutHash] = true

          spines.push({
            "label": tocItem.label,
            "href": spineHrefWithoutHash,
          })
          spines = [...spines, ...getSpinesFromToc(tocItem.subNav)]
        })
  
        return spines
      }
        
      if(newState[action.bookId]) {
        newState[action.bookId] = {
          ...newState[action.bookId],
          toc: action.toc,
          spines: getSpinesFromToc(action.toc),
        }
      }
      return newState

  }

  return state
}