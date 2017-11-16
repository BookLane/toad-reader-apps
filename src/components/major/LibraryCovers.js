import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"
import { StyleSheet } from "react-native"

import LibraryBook from "../basic/LibraryBook.js"
import fetchEpub from "../../utils/fetchEpub.js"
import Cover from "../basic/Cover.js"

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

  render() {

    const { bookList=[], navigation, setRemoveBookId, books, idps } = this.props
    
    return (
      <View style={styles.container}>
        {bookList.map(bookId => (
          <LibraryBook
            key={bookId}
            bookId={bookId}
            navigation={navigation}
            confirmRemove={() => setRemoveBookId(bookId)}
            style={styles.book}
          >
            <Cover bookId={bookId} bookInfo={books[bookId]} />
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

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)
