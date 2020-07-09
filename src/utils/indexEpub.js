import React from "react"
import { Text } from "react-native"
import MiniSearch from "minisearch"

import getEpubTextNodeDocuments from "./getEpubTextNodeDocuments"
import { getBooksDir } from "./toolbox"

let currentMiniSearch, currentIndexBookId

// const STOP_WORDS = new Set(['and', 'or', 'to', 'in', 'a', 'the', /* ...and more */ ])

// Derived from https://github.com/lucaong/minisearch/blob/master/src/MiniSearch.js
const SPACE_OR_PUNCTUATION = "[\\n\\r -#%-*,-/:;?@[-\\]_{}\\u00A0\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u09FD\\u0A76\\u0AF0\\u0C77\\u0C84\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166E\\u1680\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2000-\\u200A\\u2010-\\u2029\\u202F-\\u2043\\u2045-\\u2051\\u2053-\\u205F\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E4F\\u3000-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65]+"

const SEARCH_RESULT_ELLIPSISIZE_TEXT_CUT_OFF_LENGTH = 70
const SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART_HALF = 3

export const indexBook = async ({ bookId, spines }) => {

  const startTime = Date.now()

  currentIndexBookId = undefined
  currentMiniSearch = new MiniSearch({
    idField: 'cfi',
    fields: ['text'],  // fields to index for full-text search
    storeFields: ['spineIdRef', 'cfi', 'text'],  // fields to return with search results
    tokenize: str => str.split(new RegExp(SPACE_OR_PUNCTUATION, 'u')),
    // Using STOP_WORDS did not significantly speed up indexing or reduce the index size. Thus, it is commented out.
    // processTerm: term => {
    //   const lowerCaseTerm = term.toLowerCase()
    //   return STOP_WORDS.has(lowerCaseTerm) ? null : lowerCaseTerm
    // },
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

    await currentMiniSearch.addAllAsync(documents)
  }

  console.log('TOTAL INDEX SECONDS:', (Date.now() - startTime)/1000)
  console.log('INDEX SIZE:', JSON.stringify(currentMiniSearch.toJSON()).length)

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

export const getResultLineInJSX = ({ text, terms, termStyle }) => {
  const lowerCaseTerms = terms.map(term => term.toLowerCase())

  // split on spaces
  const allPieces = text.split(new RegExp(`(${SPACE_OR_PUNCTUATION})`, 'u'))
  let relevantPieces = []

  // wrap hits in a text component; group non-hits together
  allPieces.forEach((piece, idx) => {
    if(lowerCaseTerms.includes(piece.toLowerCase())) {
      relevantPieces.push(
        <Text
          key={idx}
          style={termStyle}
        >
          {piece}
        </Text>
      )
    } else {
      let lastArray = relevantPieces.slice(-1)[0]
      if(!(lastArray instanceof Array)) {
        lastArray = []
        relevantPieces.push(lastArray)
      }
      lastArray.push(piece)
    }
  })

  // join non-hits together, reducing length where relevant
  relevantPieces = relevantPieces.map((piece, idx) => {
    if(piece instanceof Array) {
      if(
        text.length > SEARCH_RESULT_ELLIPSISIZE_TEXT_CUT_OFF_LENGTH
        && piece.length > SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART_HALF * 2
      ) {

        return piece
          .map((word, idx2) => (
            idx2 === SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART_HALF * 2
              ? '...'
              : word
          ))
          .filter((word, idx3, ary) => (
            (
              idx !== 0
              && idx3/2 <= SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART_HALF
            )
            || (
              idx !== relevantPieces.length - 1
              && (ary.length - idx3 - 1)/2 < SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART_HALF
            )
          ))
          .join('')

      } else {
        return piece.join('')
      }

    }
    return piece
  })

  return relevantPieces
}