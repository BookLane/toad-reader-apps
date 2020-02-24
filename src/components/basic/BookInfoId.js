import React from "react"
import { StyleSheet, Text } from "react-native"
import { i18n } from "inline-i18n"
import { styled } from '@ui-kitten/components'

const styles = StyleSheet.create({
  id: {
    fontSize: 13,
    color: "rgba(0,0,0,.4)",
  },
})

const BookInfoId = ({
  id,
  style,

  themedStyle,
}) => (
  <Text
    style={[
      styles.id,
      themedStyle,
      style,
    ]}
  >
    {i18n("Book id: {{id}}", { id })}
  </Text>
)

BookInfoId.styledComponentName = 'BookInfoId'

export default styled(BookInfoId)