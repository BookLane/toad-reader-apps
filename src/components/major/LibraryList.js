import React from "react"
import { Constants } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"
import { StyleSheet, FlatList } from "react-native"

import LibraryBook from "../basic/LibraryBook"
import BookInfo from "../basic/BookInfo"

const {
  LIBRARY_LIST_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    padding: LIBRARY_LIST_MARGIN,
    paddingBottom: 0,
  },
})

class LibraryList extends React.PureComponent {

  renderItem = ({ item: { key: bookId }, index }) => {
    const { navigation, books } = this.props
  
    return (
      <LibraryBook
        key={bookId}
        bookId={bookId}
        navigation={navigation}
      >
        <BookInfo bookId={bookId} bookInfo={books[bookId]} />
      </LibraryBook>
    )
  }

  render() {

    const { bookList=[] } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={bookList.map(bookId => ({ key: bookId }))}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
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

export default connect(mapStateToProps, matchDispatchToProps)(LibraryList)
