import React from "react"
import { StyleSheet, Text } from "react-native"
import { styled } from '@ui-kitten/components'

const styles = StyleSheet.create({
  author: {
    fontSize: 14,
  },
})

const BookInfoAuthor = ({
  children,
  style,

  themedStyle,
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

BookInfoAuthor.styledComponentName = 'BookInfoAuthor'

export default styled(BookInfoAuthor)