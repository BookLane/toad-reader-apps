import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Content } from "native-base"

import LibraryBook from "../basic/LibraryBook.js"
import fetchEpub from "../../utils/fetchEpub.js"
import BookInfo from "../basic/BookInfo.js"

class LibraryCovers extends React.Component {
  
  render() {

    const { bookList=[], navigation, setRemoveBookId, books, idps } = this.props

    return (
      <Content padder>
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
