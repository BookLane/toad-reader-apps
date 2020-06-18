import React from "react"
import { StyleSheet, Text } from "react-native"
import { i18n } from "inline-i18n"
import { styled } from '@ui-kitten/components'

const styles = StyleSheet.create({
  size: {
    fontSize: 13,
    color: "rgba(0,0,0,.4)",
  },
})

const BookInfoSize = ({
  epubSizeInMB,
  style,

  themedStyle,
}) => (
  <Text
    style={[
      styles.size,
      themedStyle,
      style,
    ]}
  >
    {i18n("Size: {{mb}} mb", { mb: epubSizeInMB })}
  </Text>
)

BookInfoSize.styledComponentName = 'BookInfoSize'

export default styled(BookInfoSize)