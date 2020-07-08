import MiniSearch from "minisearch"

import getEpubTextNodeDocuments from "./getEpubTextNodeDocuments"
import { getBooksDir } from "./toolbox"

let currentMiniSearch, currentIndexBookId

export const indexBook = async ({ bookId, spines }) => {

  currentIndexBookId = undefined
  currentMiniSearch = new MiniSearch({
    idField: 'cfi',
    fields: ['text'],  // fields to index for full-text search
    storeFields: ['spineIdRef', 'cfi', 'text'],  // fields to return with search results
    searchOptions: {
      // prefix: term => term.length > 3,
      // fuzzy: term => term.length > 3 ? 0.2 : null,
      combineWith: 'AND',
     },
  })

  if(spines.length > 0 && !spines[0].path) {
    // TODO: I need to re-parse the OPF to get spine paths
    return
  }

  for(let spine of spines) {
    const spineItemPath = `${getBooksDir()}${bookId}/${spine.path}`

    const documents = await getEpubTextNodeDocuments({ spineItemPath, spineIdRef: spine.idref })

    currentMiniSearch.addAll(documents)
  }

  currentIndexBookId = bookId
}

export const getCurrentIndexBookId = () => currentIndexBookId

export const getAutoSuggest = partialSearchStr => {

  return currentMiniSearch.autoSuggest(
    partialSearchStr,
    {
      // prefix: true,
      fuzzy: term => term.length > 3 ? 0.2 : null,
      combineWith: 'AND',
    }
  )

}

export const searchBook = searchStr => {

  return currentMiniSearch.search(
    searchStr,
    {

    },
  )

}