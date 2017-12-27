import React from "react"
import { View } from "native-base"
import { StyleSheet } from "react-native"

import BookInfoCover from "./BookInfoCover"
import BookInfoTitle from "./BookInfoTitle"
import BookInfoAuthor from "./BookInfoAuthor"
import BookInfoDetails from "./BookInfoDetails"

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  cover: {
    width: 100,
    marginRight: 10,
  },
  info: {
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
  },
  spacer: {
    flexGrow: 1,
  },
})

class BookInfo extends React.Component {

  render() {
    const { bookId, bookInfo } = this.props
    const { coverFilename, title, author, downloadStatus, epubSizeInMB } = bookInfo

    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <BookInfoCover bookId={bookId} bookInfo={bookInfo} />
        </View>
        <View style={styles.info}>
          <BookInfoTitle>{title}</BookInfoTitle>
          <BookInfoAuthor>{author}</BookInfoAuthor>
          <View style={styles.spacer} />
          <BookInfoDetails bookInfo={bookInfo} />
        </View>
      </View>
    )
  }
}

export default BookInfo