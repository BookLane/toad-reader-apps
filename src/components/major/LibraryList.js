import React from "react"
import Constants from 'expo-constants'
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
    // const { navigation } = this.props

    // this.navigationWillFocusListener = navigation.addListener("willFocus", this.scrollToTopIfSortIsRecent)
  }

  componentWillReceiveProps(nextProps) {
    this.scrollToTopIfSortOrScopeChanged(nextProps)
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

  renderItem = ({ item: { key: bookId }, index }) => {
    const { books } = this.props
  
    return (
      <LibraryBook
        key={bookId}
        bookId={bookId}
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
