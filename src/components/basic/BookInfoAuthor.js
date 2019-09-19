import React from "react"
import { Text } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
  },
})

const BookInfoAuthor = ({ children }) => (
  <Text style={styles.author}>{children}</Text>
)

export default BookInfoAuthor