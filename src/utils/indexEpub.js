import React from "react"
import { Text, Platform } from "react-native"
import MiniSearch from "minisearch"
import * as FileSystem from 'expo-file-system'

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from "./toolbox"
import downloadAsync from "./downloadAsync"

const MYSQL_DEFAULT_STOP_WORDS_OVER_THREE_CHARS = [
  'about',
  'are',
  'com',
  'for',
  'from',
  'how',
  'that',
  'the',
  'this',
  'was',
  'what',
  'when',
  'where',
  'who',
  'will',
  'with',
  'und',
  'the',
  'www',
]

let currentMiniSearch, currentIndexBookId

// const STOP_WORDS = new Set(['and', 'or', 'to', 'in', 'a', 'the', /* ...and more */ ])

// Derived from https://github.com/lucaong/minisearch/blob/master/src/MiniSearch.js
export const SPACE_OR_PUNCTUATION = "[\\n\\r -#%-*,-/:;?@[-\\]_{}\\u00A0\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u09FD\\u0A76\\u0AF0\\u0C77\\u0C84\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166E\\u1680\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2000-\\u200A\\u2010-\\u2029\\u202F-\\u2043\\u2045-\\u2051\\u2053-\\u205F\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E4F\\u3000-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65]+"

const SEARCH_RESULT_ELLIPSISIZE_TEXT_CUT_OFF_LENGTH = 70
const SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART = 3

const formQueryStr = query => {
  const params = []
  for(let key in query) {
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
  }
  return `?${params.join('&')}`
}

export const loadIndex = async ({ idp, bookId, cookie }) => {

  if(Platform.OS === 'web') return true  // no need to download
  if(!bookId || currentIndexBookId === bookId) return true  // full library search or already loaded

  currentMiniSearch = currentIndexBookId = undefined

  const searchIndexUri = `${getDataOrigin(idp)}/epub_content/book_${bookId}/search_index.json`
  const searchIndexLocalUri = `${FileSystem.documentDirectory}search_indexes/${bookId}.json`

  // download search file if not already done
  const success = await downloadAsync(
    searchIndexUri,
    searchIndexLocalUri,
    {
      skipIfExists: true,
      headers: (
        getReqOptionsWithAdditions({
          headers: {
            "x-cookie-override": cookie,
          },
        }).headers
      ),
    },
  )

  if(success === false) return false  // download failed

  console.log(`Load MiniSearch for book id ${bookId}...`)

  currentMiniSearch = MiniSearch.loadJSON(
    await FileSystem.readAsStringAsync(searchIndexLocalUri),
    {
      idField: 'id',
      fields: ['text'],  // fields to index for full-text search
      storeFields: ['spineIdRef', 'text', 'hitIndex', 'id', 'context'],  // fields to return with search results
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
    },
  )

  console.log(`...loaded.`)

  currentIndexBookId = bookId

  return true  // download successful
}

const cachedSuggestionsByBookIdAndTerm = {}  // cached with each session
let currentAutoSuggestInfo = ``

export const getAutoSuggest = async ({ partialSearchStr, setSuggestions, bookId, idp, cookie }) => {

  let suggestions
  const thisAutoSuggestInfo = currentAutoSuggestInfo = `${bookId} ${partialSearchStr}`

  const partialSearchStrParts = partialSearchStr.split(new RegExp(`(${SPACE_OR_PUNCTUATION})`, 'u'))
  const partialFinalTerm = partialSearchStrParts.slice(-1)[0]

  if(!currentMiniSearch) {
    if(!cachedSuggestionsByBookIdAndTerm[bookId || 'all']) {
      cachedSuggestionsByBookIdAndTerm[bookId || 'all'] = {}
    }

    suggestions = cachedSuggestionsByBookIdAndTerm[bookId || 'all'][partialFinalTerm]

    if(!suggestions) {
      // get from the server

      try {

        const query = {
          termPrefix: partialFinalTerm,
        }
        const path = `${getDataOrigin(idp)}/searchtermsuggest${bookId ? `/${bookId}` : ``}${formQueryStr(query)}`
        const response = await safeFetch(path, getReqOptionsWithAdditions({
          headers: {
            "x-cookie-override": cookie,
          },
        }))
        suggestions = (
          await response.json()
        ).suggestions.map(suggestion => ({ suggestion }))

        cachedSuggestionsByBookIdAndTerm[bookId || 'all'][partialFinalTerm] = suggestions

      } catch(err) {
        console.log(`/searchtermsuggest error`, err)
      } finally {
        if(!suggestions) return
      }

    }

  } else {
    suggestions = (
      currentMiniSearch.autoSuggest(
        partialFinalTerm,
        {
          prefix: true,
          fuzzy: term => term.length > 3 ? 0.2 : null,
        }
      )
        .slice(0, 100)
        .filter(({ terms }) => terms.length === 1)
        .slice(0, 10)
    )
  }

  // rejoin the multi-word suggestions
  suggestions = suggestions
    .map(obj => ({
      ...obj,
      suggestion: (
        [
          ...partialSearchStrParts.slice(0, -1),
          obj.suggestion,
        ].join('')
      ),
    }))

  // set the suggestions for the UI
  if(thisAutoSuggestInfo === currentAutoSuggestInfo) {
    try { setSuggestions(suggestions) } catch(e) {}
  }
}

let currentSearchInfo = ``

export const searchBook = async ({ searchStr, setResults, bookId, idp, cookie }) => {

  const terms = searchStr
    .split(new RegExp(SPACE_OR_PUNCTUATION, 'u'))
    .filter(term => (
      term.length >= 3
      && !MYSQL_DEFAULT_STOP_WORDS_OVER_THREE_CHARS.includes(term)
    ))
  searchStr = terms.join(' ')

  if(!searchStr) return false

  let results
  const thisSearchInfo = currentSearchInfo = `${bookId} ${searchStr}`

  if(!currentMiniSearch) {
    // get from the server

    try {

      const query = {
        searchStr,
        limit: 100,
        offset: 0,
      }
      const path = `${getDataOrigin(idp)}/search${bookId ? `/${bookId}` : ``}${formQueryStr(query)}`
      const response = await safeFetch(path, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": cookie,
        },
      }))
      results = (
        await response.json()
      ).results

      results.forEach(result => {
        result.terms = terms
      })

    } catch(err) {
      console.log(`/search error`, err)
    } finally {
      if(!results) return false
    }

  } else {
    results = currentMiniSearch.search(searchStr, {})
  }

  // set the suggestions for the UI
  if(thisSearchInfo === currentSearchInfo) {
    try { setResults(results) } catch(e) {}
  }

  return true
}

export const getResultLineInJSX = ({ text, context, terms, termStyle }) => {
  const lowerCaseTerms = terms.map(term => term.toLowerCase())
  const splitRegex = new RegExp(`(${SPACE_OR_PUNCTUATION})`, 'u')
  const allSpaceOrPunctuationRegex = new RegExp(`^(${SPACE_OR_PUNCTUATION}|)$`, 'u')

  // split on spaces
  const textPieces = text.split(splitRegex)
  let relevantPieces = []

  // wrap hits in a text component; group non-hits together
  textPieces.forEach((piece, idx) => {
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

  // add context (this is purposely done after hits are marked so that any context hits are NOT marked)
  const preContextPieces = context[0].split(splitRegex).filter(Boolean)
  const postContextPieces = context[1].split(splitRegex).filter(Boolean)

  if(relevantPieces[0] instanceof Array) {
    relevantPieces[0] = [
      ...preContextPieces,
      ...relevantPieces[0],
    ]
  } else {
    relevantPieces.unshift(preContextPieces)
  }

  if(relevantPieces[relevantPieces.length - 1] instanceof Array) {
    relevantPieces[relevantPieces.length - 1] = [
      ...relevantPieces[relevantPieces.length - 1],
      ...postContextPieces,
    ]
  } else {
    relevantPieces.push(postContextPieces)
  }

  const trimSpacesOrPunctuation = ({ ary, side }) => (
    ary.filter((str, idx) => !(
      (
        (
          [ 'start', 'both' ].includes(side)
          && idx === 0
        )
        || (
          [ 'end', 'both' ].includes(side)
          && idx === ary.length - 1
        )
      )
      && allSpaceOrPunctuationRegex.test(str)
    ))
  )

  // join non-hits together, reducing length where relevant
  relevantPieces = relevantPieces.map((piece, idx) => {
    if(piece instanceof Array) {
      if(text.length > SEARCH_RESULT_ELLIPSISIZE_TEXT_CUT_OFF_LENGTH) {

        if(idx === 0) {  // beginning of the text
          if(piece.length > SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 2) {
            piece = [
              '...',
              ...trimSpacesOrPunctuation({
                ary: piece.slice(piece.length - SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 2),
                side: 'start',
              }),
            ]
          } else {
            piece = trimSpacesOrPunctuation({
              ary: piece,
              side: 'start',
            })
          }

        } else if(idx === relevantPieces.length - 1) {  // end of the text
          if(piece.length > SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 2) {
            piece = [
              ...trimSpacesOrPunctuation({
                ary: piece.slice(0, SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 2),
                side: 'end',
              }),
              '...',
            ]
          } else {
            piece = trimSpacesOrPunctuation({
              ary: piece,
              side: 'end',
            })
          }

        } else {  // middle of the text
          if(piece.length > SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 4 + 1) {
            piece = [
              ...trimSpacesOrPunctuation({
                ary: piece.slice(0, SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 2),
                side: 'end',
              }),
              '...',
              ...trimSpacesOrPunctuation({
                ary: piece.slice(piece.length - SEARCH_RESULT_ELLIPSISIZE_TEXT_MIN_WORDS_IN_PART * 2),
                side: 'start',
              }),
            ]
          }
        }

        return piece.join('')

      } else {
        return piece.join('')
      }

    }

    // It is a jsx hit; just return it
    return piece
  })

  if(
    preContextPieces.length > 0  // may be more inline before the context
    && (
      typeof relevantPieces[0] !== 'string'
      || !/^\.\.\./.test(relevantPieces[0])
    )
  ) {
    relevantPieces.unshift('...')
  }

  if(
    postContextPieces.length > 0  // may be more inline after the context
    && (
      typeof relevantPieces.slice(-1)[0] !== 'string'
      || !/\.\.\.$/.test(relevantPieces.slice(-1)[0])
    )
  ) {
    relevantPieces.push('...')
  }

  return relevantPieces
}