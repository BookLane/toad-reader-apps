import React from "react"
import { Text } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
  },
})

class BookInfoAuthor extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Text style={styles.author}>{children}</Text>
    )
  }
}

export default BookInfoAuthor