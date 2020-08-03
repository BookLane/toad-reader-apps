import React, { useState, useEffect, useCallback, useMemo } from "react"
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Platform, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import useToggle from "react-use/lib/useToggle"

import { searchBook, getAutoSuggest, getResultLineInJSX } from "../../utils/indexEpub"
import useSetTimeout from '../../hooks/useSetTimeout'
import { loadIndex } from "../../utils/indexEpub"

import Input from "../basic/Input"
import Icon from "../basic/Icon"
import CoverAndSpin from "../basic/CoverAndSpin"

import { addRecentSearch } from "../../redux/actions"

const styles = StyleSheet.create({
  header: {
    padding: 14,
    paddingTop: 4,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  suggestionContentContainer: {
    paddingVertical: 10,
  },
  suggestionScrollView: {
    flex: 1,
  },
  suggestion: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  result: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resultText: {
  },
  resultSpine: {
    opacity: .35,
    fontSize: 12,
    marginBottom: 5,
  },
  termNotFound: {
    textAlign: 'center',
    marginTop: 40,
    opacity: .35,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 40,
  },
  term: {
    fontWeight: 'bold',
  },
  clear: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
  clearIcon: {
    height: 17,
    paddingHorizontal: 10,
    paddingVertical: {
      android: 12,
      ios: 10,
      web: 9,
    }[Platform.OS],
    opacity: .7,
  },
  results: {
    position: 'relative',
    flex: 1,
  },
})

const Search = ({
  bookId,
  goTo,
  inputRef,
  idpId,
  requestClose,

  idps,
  accounts,
  books,
  recentSearchesByBookId,

  addRecentSearch,
}) => {

  const [ showResults, toggleShowResults ] = useToggle(false)
  const [ searchStr, setSearchStr ] = useState("")
  const normalizedSearchStr = searchStr.trim()
  const [ suggestions, setSuggestions ] = useState([])
  const [ results, setResults ] = useState([])

  const [ setSearchTimeout ] = useSetTimeout()

  const { cookie } = Object.values(accounts)[0] || {}

  useEffect(
    () => {
      loadIndex({ idp: idps[idpId], bookId, cookie })
    },
    [ idps[idpId], bookId, cookie ],
  )

  useEffect(
    () => {
      setSearchTimeout(
        () => {
          if(showResults) {
            setResults(searchBook(normalizedSearchStr))
          } else if(normalizedSearchStr) {
            if(suggestions.length === 0) {
              setSuggestions('fetching')
            }
            getAutoSuggest({
              partialSearchStr: normalizedSearchStr,
              setSuggestions,
              idp: idps[idpId],
              cookie,
              bookId,
            })
          } else {
            setSuggestions([])
          }
        }
      )
    },
    [ normalizedSearchStr, showResults, bookId, idps[idpId], cookie ],
  )

  useEffect(
    () => {
      if(showResults) {
        addRecentSearch({
          bookId,
          info: {
            str: normalizedSearchStr,
          },
        })
      }
    },
    [ showResults ],
  )

  const blurInput = useCallback(() => inputRef.current.blur(), [])

  const spineLabelsByBookIdAndIdRef = useMemo(
    () => {
      const labelsByBookIdAndIdRef = {}

      const booksObj = bookId ? { [bookId]: books[bookId] } : books
      Object.keys(booksObj).forEach(bookId => {
        if(booksObj[bookId].spines) {
          booksObj[bookId].spines.forEach(({ idref, label }) => {
            if(!labelsByBookIdAndIdRef[bookId]) {
              labelsByBookIdAndIdRef[bookId] = {}
            }
            labelsByBookIdAndIdRef[bookId][idref] = label
          })
        }
      })

      return labelsByBookIdAndIdRef
    },
    [ bookId ? books[bookId].spines : books ],
  )

  const renderResult = useCallback(
    ({ item: { book_id, spineIdRef, terms, text, context, hitIndex } }) => {
      const jsx = getResultLineInJSX({ text, context, terms, termStyle: styles.term })

      let charsBeforeFirstHit = 0
      for(let i=0; typeof jsx[i] === 'string'; i++) {
        charsBeforeFirstHit += jsx[i].length
      }

      return (
        <TouchableOpacity
          onPress={() => {
            goTo({
              bookId: book_id,
              spineIdRef,
              textNodeInfo: {
                content: text,
                hitIndex,
                startOffset: charsBeforeFirstHit,
                endOffset: charsBeforeFirstHit + 1,
              },
            })
          }}
        >
          <View style={styles.result}>
            <Text style={styles.resultSpine}>
              {(spineLabelsByBookIdAndIdRef[book_id] || {})[spineIdRef] || spineIdRef}
            </Text>
            <Text style={styles.resultText}>
              {jsx}
            </Text>
          </View>
        </TouchableOpacity>
      )
    },
    [ goTo ],
  )

  const clearSearchStr = useCallback(
    () => {
      setSearchStr("")
      toggleShowResults(false)
      inputRef.current.focus()
    },
    [],
  )

  const checkForEscape = useCallback(
    ({ nativeEvent: { key: keyValue } }) => {
      if(keyValue === 'Escape') {
        ;(searchStr ? clearSearchStr : requestClose)()
      }
    },
    [ !searchStr ],
  )

  if(bookId && !books[bookId]) return null

  return (
    <View
      onStartShouldSetResponder={blurInput}
      style={styles.container}
    >
      {/* <BackFunction func={historyGoBack} /> */}
      <View style={styles.header}>
        <Input
          placeholder={bookId ? i18n("Search book") : i18n("Search all books")}
          value={searchStr}
          onChangeText={setSearchStr}
          onKeyPress={checkForEscape}
          returnKeyType="search"
          returnKeyLabel={!normalizedSearchStr ? i18n("Search", "", "enhanced") : null}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={Platform.OS !== 'web'}
          onSubmitEditing={toggleShowResults}
          autoFocus={true}
          onFocus={() => toggleShowResults(false)}
          forwardRef={inputRef}
        />
        <TouchableOpacity
          onPress={searchStr ? clearSearchStr : requestClose}
          style={styles.clear}
        >
          <Icon
            name="md-close"
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      </View>
      {!showResults &&
        <View style={styles.results}>
          {!!normalizedSearchStr && suggestions.length === 0 &&
            <Text style={styles.termNotFound}>
              {i18n("Term not found")}
            </Text>
          }
          {!!normalizedSearchStr && suggestions === 'fetching' && <CoverAndSpin />}
          <ScrollView
            style={styles.suggestionScrollView}
            contentContainerStyle={styles.suggestionContentContainer}
          >
            {!(!!normalizedSearchStr && suggestions === 'fetching') &&
              (normalizedSearchStr ? suggestions : (recentSearchesByBookId[bookId || 'all'] || [])).map(({ suggestion, str }, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => {
                    setSearchStr(suggestion || str)
                    toggleShowResults(true)
                    blurInput()
                  }}
                >
                  <Text style={styles.suggestion}>
                    {suggestion || str}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      }
      {showResults &&
        <>
          {results.length === 0 &&
            <Text style={styles.noResults}>
              {i18n("No results")}
            </Text>
          }
          <FlatList
            contentContainerStyle={styles.flatListContent}
            data={results}
            renderItem={renderResult}
            keyExtractor={({ spineIdRef, id }) => `${spineIdRef}\n${id}`}
          />
        </>
      }
    </View>
  )
}

const mapStateToProps = ({ idps, accounts, books, recentSearchesByBookId }) => ({
  idps,
  accounts,
  books,
  recentSearchesByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addRecentSearch,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Search)
