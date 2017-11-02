import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Content, Button, Text } from "native-base"
import { Image, View } from "react-native"
import { FileSystem } from "expo"

import LibraryBook from "../basic/LibraryBook.js"
import fetchEpub from "../../utils/fetchEpub.js"
// import BookInfo from "../basic/BookInfo.js"

class LibraryCovers extends React.Component {

  render() {

    const { bookList=[], navigation, books, idps } = this.props

    return (
      <Content padder>
        {bookList.map(bookId => (
          <LibraryBook
            key={bookId}
            bookId={bookId}
            navigation={navigation}
          >
            <Image
              source={{ uri: `${FileSystem.documentDirectory}covers/${bookId}/${books[bookId].coverFilename}` }}
              style={{width: 40, height: 40}}
            />
            <Text>{books[bookId].title + books[bookId].downloadStatus}</Text>
          </LibraryBook>
        ))}
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
