import React from "react"
import { StyleSheet, Text } from "react-native"
import { styled } from '@ui-kitten/components'

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
    marginBottom: 3,
  },
})

const BookInfoAuthor = ({
  children,
  style,

  eva: {
    style: themedStyle,
  }={},
}) => (
  <Text
    style={[
      styles.author,
      themedStyle,
      style,
    ]}
  >
    {children}
  </Text>
)

export default styled('BookInfoAuthor')(BookInfoAuthor)