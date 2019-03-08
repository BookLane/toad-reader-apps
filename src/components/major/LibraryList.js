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
    paddingTop: 0,
    paddingBottom: 0,
  },
})

class LibraryList extends React.PureComponent {

  componentDidMount() {
    const { navigation } = this.props

    this.navigationWillFocusListener = navigation.addListener("willFocus", this.scrollToTopIfSortIsRecent)
  }

  componentWillUnmount() {
    this.navigationWillFocusListener.remove()
  }

  scrollToTopIfSortIsRecent = () => {
    const { library } = this.props

    if(library.sort == 'recent') {
      this.flatListEl && this.flatListEl.scrollToOffset({ offset: 0 })
    }
  }

  renderItem = ({ item: { key: bookId }, index }) => {
    const { navigation, books } = this.props
  
    return (
      <LibraryBook
        key={bookId}
        bookId={bookId}
        navigation={navigation}
      >
        <BookInfo
          bookId={bookId}
          bookInfo={books[bookId]}
          isFirstRow={index === 0}
        />
      </LibraryBook>
    )
  }

  setFlatListEl = ref => {
    this.flatListEl = ref
  }

  render() {

    const { bookList=[] } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={bookList.map(bookId => ({ key: bookId }))}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          ref={this.setFlatListEl}
        />

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  library: state.library,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryList)
