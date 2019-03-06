import React from "react"
import { Constants } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"
import { StyleSheet, Dimensions, FlatList } from "react-native"

import LibraryBook from "../basic/LibraryBook"
import CoversRow from "../basic/CoversRow"
import Cover from "../basic/Cover"

import { getCoverSize } from '../../utils/toolbox.js'

const {
  LIBRARY_COVERS_VERTICAL_MARGIN,
  LIBRARY_COVERS_BOTTOM_PADDING,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  componentWillReceiveProps(nextProps) {
    this.calcList(nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    const { coverWidth } = this.state

    if(nextState.coverWidth !== coverWidth) {
      this.calcList(nextProps, nextState)
    }
  }

  onLayout = () => this.setState({ ...(getCoverSize()) })

  calcList = (nextProps, nextState) => {
    const { bookList=[] } = nextProps || this.props
    const { coversPerRow } = nextState || this.state

    const numRows = Math.ceil(bookList.length / coversPerRow)
    this.list = Array(numRows).fill().map((x, idx) => ({ key: `i:${idx}` }))
  }

  renderItem = ({ item, index }) => {
    const { bookList=[], navigation, books } = this.props
    const { coverWidth, coverHeight, coversPerRow } = this.state

    if(false) {  // Book currently being read
      
      return null

    } else {

      const startingIndex = coversPerRow * index
      const covers = bookList.slice(startingIndex, startingIndex + coversPerRow).map(bookId => (
        <LibraryBook
          key={bookId}
          bookId={bookId}
          navigation={navigation}
        >
          <Cover
            bookId={bookId}
            bookInfo={books[bookId]}
            bookWidth={coverWidth}
            bookHeight={coverHeight}
          />
        </LibraryBook>
      ))

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

    const length = LIBRARY_COVERS_VERTICAL_MARGIN + coverHeight + LIBRARY_COVERS_BOTTOM_PADDING

    return {
      offset: LIBRARY_COVERS_VERTICAL_MARGIN + length * index,  // the distance from the top of the first row to this row
      length,  // the height of the row
      index,
    }

    // I'm not sure why the following is not calculating correctly, but the above is.
    
    // if(index === 0) {
    //   return {
    //     offset: 0,
    //     length: length + LIBRARY_COVERS_VERTICAL_MARGIN,
    //   }
    // }

    // return {
    //   offset: LIBRARY_COVERS_VERTICAL_MARGIN + length * index,  // the distance from the top of the first row to this row
    //   length,  // the height of the row
    //   index,
    // }
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
        />

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)
