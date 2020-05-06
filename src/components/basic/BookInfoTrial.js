import React from "react"
import { StyleSheet, Text } from "react-native"
import { styled } from '@ui-kitten/components'
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  trial: {
    fontSize: 13,
    fontWeight: '500',
    marginVertical: 3,
  },
})

const BookInfoTrial = ({
  style,

  themedStyle,
}) => (
  <Text
    style={[
      styles.trial,
      themedStyle,
      style,
    ]}
  >
    {i18n("Trial version")}
  </Text>
)

BookInfoTrial.styledComponentName = 'BookInfoTrial'

export default styled(BookInfoTrial)