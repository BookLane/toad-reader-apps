import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"
import { StyleSheet, Dimensions } from "react-native"

import LibraryBook from "../basic/LibraryBook"
import Cover from "../basic/Cover"

const MAXIMUM_BOOK_WIDTH = 100

const styles = StyleSheet.create({
  container: {
    marginRight: -10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingBottom: 0,
  },
})

class LibraryCovers extends React.Component {

  state = {
    bookWidth: MAXIMUM_BOOK_WIDTH,
  }

  componentDidMount() {
    this.calcBookWidth()
  }

  calcBookWidth = () => {
    const windowWidth = Dimensions.get('window').width
    const booksPerRow = parseInt(windowWidth / MAXIMUM_BOOK_WIDTH)
    const bookWidth = (windowWidth - ((booksPerRow + 1) * 10)) / booksPerRow
    this.setState({ bookWidth })
  }

  render() {

    const { bookList=[], navigation, books, idps } = this.props
    const { bookWidth } = this.state
    
    return (
      <View
        style={styles.container}
        onLayout={this.calcBookWidth}
      >
        {bookList.map(bookId => (
          <LibraryBook
            key={bookId}
            bookId={bookId}
            navigation={navigation}
            style={styles.book}
          >
            <Cover
              bookId={bookId}
              bookInfo={books[bookId]}
              bookWidth={bookWidth}
            />
          </LibraryBook>
        ))}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  idps: state.idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)
