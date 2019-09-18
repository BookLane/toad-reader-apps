import React from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"
import { StyleSheet, Dimensions, FlatList } from "react-native"

import LibraryBook from "../basic/LibraryBook"
import CoversRow from "../basic/CoversRow"
import Cover from "../basic/Cover"

import { getCoverSize } from '../../utils/toolbox.js'

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

class LibraryCovers extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ...(getCoverSize()),  // coverWidth, coverHeight, coversPerRow
    }

    this.calcList()
  }

  componentDidMount() {
    // const { navigation } = this.props

    // this.navigationWillFocusListener = navigation.addListener("willFocus", this.scrollToTopIfSortIsRecent)
  }

  componentWillReceiveProps(nextProps) {
    this.calcList(nextProps)
    this.scrollToTopIfSortOrScopeChanged(nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    const { coverWidth } = this.state

    if(nextState.coverWidth !== coverWidth) {
      this.calcList(nextProps, nextState)
    }
  }

  componentWillUnmount() {
    this.navigationWillFocusListener.remove()
  }

  scrollToTopIfSortIsRecent = ({ action }) => {
    const { library={} } = this.props

    if(action.type === 'Navigation/BACK' && library.sort == 'recent') {
      this.scrollToTop()
    }
  }

  scrollToTopIfSortOrScopeChanged = nextProps => {
    const { library={} } = this.props

    if(
      nextProps.library
      && ['sort', 'scope'].some(key => (
        library[key]
        && nextProps.library[key]
        && library[key] != nextProps.library[key]
      ))
    ) {
      this.scrollToTop()
    }
  }

  scrollToTop = () => {
    this.flatListEl && this.flatListEl.scrollToOffset({ offset: 0, animated: false })
  }

  onLayout = () => this.setState({ ...(getCoverSize()) })

  doBookHighlight = (nextProps, nextState) => {
    const { bookList=[], library, books } = nextProps || this.props
    const { coversPerRow } = nextState || this.state

    return (
      library.sort == 'recent'
      && coversPerRow > 1
      && books[bookList[0]]
      && books[bookList[0]].downloadStatus === 2
    )
  }

  calcList = (nextProps, nextState) => {
    const { bookList=[] } = nextProps || this.props
    const { coversPerRow } = nextState || this.state

    if(this.doBookHighlight(nextProps, nextState)) {
      const numNormalInEachHighlightRow = coversPerRow - 2
      const startingIndexForNormalInHighlightRow1 = 1
      const startingIndexForNormalInHighlightRow2 = 1 + numNormalInEachHighlightRow
      const startingIndexForNormalRows = 1 + numNormalInEachHighlightRow * 2
      const numNormalRows = Math.ceil((bookList.length - 1 - numNormalInEachHighlightRow) / coversPerRow)
      
      this.list = [
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
      this.list = Array(numRows)
        .fill()
        .map((x, idx) => ({
          key: `i:${idx}`,
          bookIds: bookList.slice(coversPerRow * idx, coversPerRow * idx + coversPerRow),
        }))
    }
  }

  renderItem = ({ item, index }) => {
    const { books } = this.props
    const { coverWidth, coverHeight, coversPerRow } = this.state

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
      const row1Covers = row1BookIds
        .map(bookId => getCover({ bookId }))
      const row2Covers = row2BookIds
        .map(bookId => getCover({ bookId }))

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

      const covers = bookIds
        .map(bookId => getCover({ bookId }))

      return (
        <CoversRow
          isFirstRow={index === 0}
        >
          {covers}
        </CoversRow>
      )
    }
  }

  getItemLayout = (data, index) => {
    const { coverHeight } = this.state

    const { highlightedBookId } = data[0]

    const length = LIBRARY_COVERS_VERTICAL_MARGIN + coverHeight + LIBRARY_COVERS_BOTTOM_PADDING
    const highlightedRowExtraLength = highlightedBookId ? length : 0

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

  }

  setFlatListEl = ref => {
    this.flatListEl = ref
  }

  render() {
    const { bookList=[] } = this.props
    const { coverHeight } = this.state

    const { height } = Dimensions.get('window')

    const estimatedRowsPerPage =
      parseInt(height / (LIBRARY_COVERS_VERTICAL_MARGIN + coverHeight + LIBRARY_COVERS_BOTTOM_PADDING), 10)

    return (
      <View
        style={styles.container}
        onLayout={this.onLayout}
      >
        <FlatList
          data={this.list}
          renderItem={this.renderItem}
          initialNumToRender={estimatedRowsPerPage + 2}
          maxToRenderPerBatch={estimatedRowsPerPage}
          windowSize={11}  // i.e. 5 rows above and below rendered
          showsVerticalScrollIndicator={false}
          getItemLayout={this.getItemLayout}
          ref={this.setFlatListEl}
        />

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  library: state.library,
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)
