import React, { useCallback, useRef } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View } from "react-native"
import { FlashList } from "@shopify/flash-list"
import usePrevious from "react-use/lib/usePrevious"

import useCoverSize from "../../hooks/useCoverSize"

import LibraryBook from "../basic/LibraryBook"
import BookInfo from "../basic/BookInfo"
import BookInfoSkeleton from "../basic/BookInfoSkeleton"

const {
  LIBRARY_LIST_MARGIN,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  container: {
    padding: LIBRARY_LIST_MARGIN,
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
  },
  flatlist: {
    height: 270,
  },
})

const LibraryList = React.memo(({
  books,
  bookList=[],
  library={},
  handleNewLibrary,
  viewingAudiobooks,
  fetchingBooks,
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
    ({ item: { key: bookId }, index }) => {
      if (fetchingBooks) {
        return (
          <BookInfoSkeleton
            key={bookId}
            isFirstRow={index === 0}
          />
        )
      }

      return (
        <LibraryBook
          key={bookId}
          bookId={bookId}
        >
          <BookInfo
            bookId={bookId}
            bookInfo={books[bookId]}
            isFirstRow={index === 0}
            handleNewLibrary={handleNewLibrary}
          />
        </LibraryBook>
      )
    },
    [ books, handleNewLibrary, fetchingBooks ],
  )

  const { coverHeight } = useCoverSize({ viewingAudiobooks })

  return (
    <View style={styles.container}>
      <FlashList
        data={bookList.map(bookId => ({ key: bookId }))}
        renderItem={renderItem}
        estimatedItemSize={coverHeight + LIBRARY_LIST_MARGIN}
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        ListFooterComponent={<View style={styles.flatlist} />}
      />
    </View>
  )
})

const mapStateToProps = ({ books, library, fetchingBooks }) => ({
  books,
  library,
  fetchingBooks,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryList)
