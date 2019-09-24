import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, View } from "react-native"

import BookInfoCover from "./BookInfoCover"
import BookInfoTitle from "./BookInfoTitle"
import BookInfoAuthor from "./BookInfoAuthor"
import BookInfoDetails from "./BookInfoDetails"

const {
  LIBRARY_LIST_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: LIBRARY_LIST_MARGIN,
  },
  containerFirstRow: {
    marginTop: LIBRARY_LIST_MARGIN,
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

const BookInfo = ({
  bookId,
  bookInfo,
  isFirstRow,
}) => {

  const { title, author } = bookInfo

  return (
    <View style={[
      styles.container,
      isFirstRow ? styles.containerFirstRow : {},
    ]}>
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

export default BookInfo