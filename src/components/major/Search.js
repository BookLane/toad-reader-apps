import React, { useState, useEffect, useRef, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import useToggle from "react-use/lib/useToggle"

// import {  } from "../../utils/toolbox"
import { searchBook, getAutoSuggest, getResultLineInJSX } from "../../utils/indexEpub"
import useSetTimeout from '../../hooks/useSetTimeout'
import { loadIndex } from "../../utils/indexEpub"

import Input from "../basic/Input"

const styles = StyleSheet.create({
  header: {
    padding: 14,
    paddingTop: 4,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingVertical: 10,
  },
  suggestion: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  result: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  term: {
    fontWeight: 'bold',
  },
})

const Search = ({
  bookId,

  idp,
  accounts,
  books,
  recentSearchesByBookId,
}) => {

  const [ showResults, toggleShowResults ] = useToggle(false)
  const [ searchStr, setSearchStr ] = useState("")
  const normalizedSearchStr = searchStr.trim()
  const [ suggestions, setSuggestions ] = useState([])
  const [ results, setResults ] = useState([])

  const [ setSearchTimeout ] = useSetTimeout()

  const inputRef = useRef()

  const accountId = Object.keys((books[bookId] || {}).accounts || {})[0]
  const { cookie } = accounts[accountId] || {}

  useEffect(
    () => {
      loadIndex({ idp, bookId, cookie })
    },
    [ idp, bookId, cookie ],
  )

  useEffect(
    () => {
      setSearchTimeout(
        () => {
          if(showResults) {
            setResults(searchBook(normalizedSearchStr))
          } else if(normalizedSearchStr) {
            setSuggestions(
              getAutoSuggest(normalizedSearchStr)
                .slice(0, 100)
                .filter(({ terms }) => terms.length === 1)
                .slice(0, 10)
            )
          }
        }
      )
    },
    [ normalizedSearchStr, showResults ],
  )

  const blurInput = useCallback(() => inputRef.current.blur(), [])

  const renderSuggestion = useCallback(
    ({ item: { suggestion } }) => (
      <TouchableOpacity
        key={suggestion}
        onPress={() => {
          setSearchStr(suggestion)
          toggleShowResults(true)
          blurInput()
        }}
      >
        <Text style={styles.suggestion}>
          {suggestion}
        </Text>
      </TouchableOpacity>
    ),
    [],
  )

  const renderResult = useCallback(
    ({ item: { spineIdRef, cfi, terms, text } }) => (
      <View
        key={`${spineIdRef}\n${cfi}`}
        style={styles.result}
      >
        <Text>
          {getResultLineInJSX({ text, terms, termStyle: styles.term })}
        </Text>
        <Text>{spineIdRef}</Text>
        <Text>{cfi}</Text>
      </View>
    ),
    [],
  )

  if(!books[bookId]) return null

  const { title } = books[bookId]

  return (
    <View
      onStartShouldSetResponder={blurInput}
      style={styles.container}
    >
      {/* <BackFunction func={historyGoBack} /> */}
      <View style={styles.header}>
        <Input
          placeholder={i18n("Search {{title}}", {
            title,
          })}
          value={searchStr}
          onChangeText={setSearchStr}
          returnKeyType="search"
          returnKeyLabel={!normalizedSearchStr ? i18n("Search", "", "enhanced") : null}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={Platform.OS !== 'web'}
          onSubmitEditing={toggleShowResults}
          autoFocus={true}
          onFocus={() => toggleShowResults(false)}
          forwardRef={inputRef}
        />
      </View>
      {!showResults && !normalizedSearchStr &&
        <Text>
          History
        </Text>
      }
      {!showResults && !!normalizedSearchStr &&
        <>
          <FlatList
            contentContainerStyle={styles.flatListContent}
            data={suggestions}
            renderItem={renderSuggestion}
            keyExtractor={({ suggestion }) => suggestion}
            keyboardShouldPersistTaps='handled'
          />
          {suggestions.length === 0 &&
            <Text>
              Term not found
            </Text>
          }
        </>
      }
      {showResults &&
        <>
          <FlatList
            contentContainerStyle={styles.flatListContent}
            data={results}
            renderItem={renderResult}
            keyExtractor={({ spineIdRef, cfi }) => `${spineIdRef}\n${cfi}`}
          />
          {results.length === 0 &&
            <Text>
              No results
            </Text>
          }
        </>
      }
    </View>
  )
}

const mapStateToProps = ({ idp, accounts, books, recentSearchesByBookId }) => ({
  idp,
  accounts,
  books,
  recentSearchesByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Search)
