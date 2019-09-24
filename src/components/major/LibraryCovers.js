import React from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"
import { StyleSheet, Dimensions, FlatList } from "react-native"
import usePrevious from "react-use/lib/usePrevious"
import useDimensions from "../../hooks/useDimensions"
import useCoverSize from '../../hooks/useCoverSize'

import LibraryBook from "../basic/LibraryBook"
import CoversRow from "../basic/CoversRow"
import Cover from "../basic/Cover"

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_VERTICAL_MARGIN,
  LIBRARY_COVERS_BOTTOM_PADDING,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  normalCoversRow1InHighlightedRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: LIBRARY_COVERS_BOTTOM_PADDING,
  },
  normalCoversRow2InHighlightedRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

const LibraryCovers = ({
  books,
  bookList=[],
  library={},
}) => {

  const { coverWidth, coverHeight, coversPerRow } = useCoverSize()

  const doBookHighlight = (
    library.sort == 'recent'
    && coversPerRow > 1
    && books[bookList[0]]
    && books[bookList[0]].downloadStatus === 2
  )

  const list = useMemo(
    () => {

      if(doBookHighlight) {
        const numNormalInEachHighlightRow = coversPerRow - 2
        const startingIndexForNormalInHighlightRow1 = 1
        const startingIndexForNormalInHighlightRow2 = 1 + numNormalInEachHighlightRow
        const startingIndexForNormalRows = 1 + numNormalInEachHighlightRow * 2
        const numNormalRows = Math.ceil((bookList.length - 1 - numNormalInEachHighlightRow) / coversPerRow)
        
        return [
          {
            key: `i:0`,
            highlightedBookId: bookList[0],
            row1BookIds: bookList.slice(
              startingIndexForNormalInHighlightRow1,
              startingIndexForNormalInHighlightRow1 + numNormalInEachHighlightRow
            ),
            row2BookIds: bookList.slice(
              startingIndexForNormalInHighlightRow2,
              startingIndexForNormalInHighlightRow2 + numNormalInEachHighlightRow
            ),
          },
          ...Array(numNormalRows)
            .fill()
            .map((x, idx) => ({
              key: `i:${idx + 1}`,
              bookIds: bookList.slice(
                startingIndexForNormalRows + coversPerRow * idx,
                startingIndexForNormalRows + coversPerRow * idx + coversPerRow
              ),
            }))
        ]

      } else {  // no highlight row
        const numRows = Math.ceil(bookList.length / coversPerRow)
        return Array(numRows)
          .fill()
          .map((x, idx) => ({
            key: `i:${idx}`,
            bookIds: bookList.slice(coversPerRow * idx, coversPerRow * idx + coversPerRow),
          }))
      }
    },
    [ coversPerRow, bookList ],
  )

  const flatListRef = useRef()

  const scrollToTop = () => {
    flatListRef.current && flatListRef.current.scrollToOffset({ offset: 0, animated: false })
  }

  const prevLibrary = usePrevious(library)

  // scroll to top if sort or scope changed
  if(
    library
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
  // TODO: navigation.addListener("willFocus", scrollToTopIfSortIsRecent)
  // this.navigationWillFocusListener.remove()


  const renderItem = useCallback(
    ({ item, index }) => {
      const { bookIds, highlightedBookId, row1BookIds, row2BookIds } = item

      const getCover = ({ bookId, width, height }) => (
        <LibraryBook
          key={bookId}
          bookId={bookId}
        >
          <Cover
            bookId={bookId}
            bookInfo={books[bookId]}
            bookWidth={width || coverWidth}
            bookHeight={height || coverHeight}
          />
        </LibraryBook>
      )

      if(highlightedBookId) {  // this is a highlight row
        
        const highlightedCover = getCover({
          bookId: highlightedBookId,
          width: coverWidth + LIBRARY_COVERS_HORIZONTAL_MARGIN + coverWidth,
          height: coverHeight + LIBRARY_COVERS_BOTTOM_PADDING + LIBRARY_COVERS_VERTICAL_MARGIN + coverHeight,
        })
        const row1Covers = row1BookIds.map(bookId => getCover({ bookId }))
        const row2Covers = row2BookIds.map(bookId => getCover({ bookId }))

        return (
          <CoversRow
            isFirstRow={index === 0}
          >
            {highlightedCover}
            <View>
              <View style={styles.normalCoversRow1InHighlightedRow}>
                {row1Covers}
              </View>
              <View style={styles.normalCoversRow2InHighlightedRow}>
                {row2Covers}
              </View>
            </View>
          </CoversRow>
        )
    
      } else {

        const covers = bookIds.map(bookId => getCover({ bookId }))

        return (
          <CoversRow
            isFirstRow={index === 0}
          >
            {covers}
          </CoversRow>
        )
      }
    },
    [ books, coverWidth, coverHeight ],
  )

  const getItemLayout = useCallback(
    (data, index) => {
      // const { highlightedBookId } = data[0]

      const length = LIBRARY_COVERS_VERTICAL_MARGIN + coverHeight + LIBRARY_COVERS_BOTTOM_PADDING
      // const highlightedRowExtraLength = highlightedBookId ? length : 0

      if(index === 0) {
        return {
          offset: 0,
          length: length + LIBRARY_COVERS_VERTICAL_MARGIN,
          index: 0,
        }
      }

      return {
        offset: LIBRARY_COVERS_VERTICAL_MARGIN + length * index,  // the distance from the top of the first row to this row
        length,  // the height of the row
        index,
      }

    },
    [ coverHeight ],
  )

  const { height } = useDimensions().window

  const estimatedRowsPerPage =
    parseInt(height / (LIBRARY_COVERS_VERTICAL_MARGIN + coverHeight + LIBRARY_COVERS_BOTTOM_PADDING), 10)

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={list}
        renderItem={renderItem}
        initialNumToRender={estimatedRowsPerPage + 2}
        maxToRenderPerBatch={estimatedRowsPerPage}
        windowSize={11}  // i.e. 5 rows above and below rendered
        showsVerticalScrollIndicator={false}
        getItemLayout={getItemLayout}
        ref={flatListRef}
      />

    </View>
  )
}

const mapStateToProps = (state) => ({
  library: state.library,
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)
