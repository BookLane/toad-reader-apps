import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Content, View } from "native-base"
import { StyleSheet } from "react-native"

import LibraryBook from "../basic/LibraryBook.js"
import fetchEpub from "../../utils/fetchEpub.js"
import Cover from "../basic/Cover.js"

const styles = StyleSheet.create({
  container: {
    marginRight: -10,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
              style={styles.book}
            >
              <Cover bookId={bookId} bookInfo={books[bookId]} />
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
