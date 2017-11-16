import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Content, View } from "native-base"
import { StyleSheet } from "react-native"

import LibraryBook from "../basic/LibraryBook.js"
import fetchEpub from "../../utils/fetchEpub.js"
import BookInfo from "../basic/BookInfo.js"

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
})

class LibraryCovers extends React.Component {
  
  render() {

    const { bookList=[], navigation, setRemoveBookId, books, idps } = this.props

    return (
      <Content padder>
        <View style={styles.container}>
          {bookList.map(bookId => (
            <LibraryBook
              key={bookId}
              bookId={bookId}
              navigation={navigation}
              confirmRemove={() => setRemoveBookId(bookId)}
            >
              <BookInfo bookId={bookId} bookInfo={books[bookId]} />
            </LibraryBook>
          ))}
        </View>
      </Content>
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
