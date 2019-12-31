import React, { useCallback, useRef } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, FlatList, View } from "react-native"
import usePrevious from "react-use/lib/usePrevious"

import LibraryBook from "../basic/LibraryBook"
import BookInfo from "../basic/BookInfo"

const {
  LIBRARY_LIST_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    padding: LIBRARY_LIST_MARGIN,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
  },
})

const LibraryList = React.memo(({
  books,
  bookList=[],
  library={},
}) => {

  const flatListRef = useRef()

  const scrollToTop = () => {
    flatListRef.current && flatListRef.current.scrollToOffset({ offset: 0, animated: false })
  }

  const prevLibrary = usePrevious(library)

  // scroll to top if sort or scope changed
  if(
    prevLibrary
    && library
    && ['sort', 'scope'].some(key => (
      prevLibrary[key]
      && library[key]
      && prevLibrary[key] != library[key]
    ))
  ) {
    scrollToTop()
  }

  // const scrollToTopIfSortIsRecent = ({ action }) => {
  //   if(action.type === 'Navigation/BACK' && library.sort == 'recent') {
  //     scrollToTop()
  //   }
  // }
  // TODO: this.navigationWillFocusListener = navigation.addListener("willFocus", this.scrollToTopIfSortIsRecent)
  // this.navigationWillFocusListener.remove()

  const renderItem = useCallback(
    ({ item: { key: bookId }, index }) => (
      <LibraryBook
        key={bookId}
        bookId={bookId}
      >
        <BookInfo
          bookId={bookId}
          bookInfo={books[bookId]}
          isFirstRow={index === 0}
        />
      </LibraryBook>
    ),
    [ books ],
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={bookList.map(bookId => ({ key: bookId }))}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
      />

    </View>
  )
})

const mapStateToProps = ({ books, library }) => ({
  books,
  library,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryList)
