import React from "react"
import { StyleSheet, Text } from "react-native"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  id: {
    fontSize: 13,
    color: "rgba(0,0,0,.4)",
    marginTop: 2,
  },
})

const BookInfoIsbn = ({ isbn }) => (
  <Text style={styles.id}>{i18n("ISBN: {{isbn}}", { isbn })}</Text>
)

export default BookInfoIsbn