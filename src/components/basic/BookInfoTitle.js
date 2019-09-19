import React from "react"
import { Text } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  },
})

const BookInfoTitle = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
)

export default BookInfoTitle