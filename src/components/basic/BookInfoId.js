import React from "react"
import { StyleSheet, Text } from "react-native"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  id: {
    fontSize: 13,
    color: "rgba(0,0,0,.4)",
  },
})

const BookInfoId = ({ id }) => (
  <Text style={styles.id}>{i18n("Book id: {{id}}", { id })}</Text>
)

export default BookInfoId