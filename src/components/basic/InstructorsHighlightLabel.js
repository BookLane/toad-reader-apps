import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { styled } from '@ui-kitten/components'

import useThemedStyleSets from "../../hooks/useThemedStyleSets"

import Icon from "./Icon"

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 18,
    marginRight: 7,
  },
  label: {
    fontWeight: '600',
  },
})

const InstructorsHighlightLabel = ({
  style,
  iconStyle,

  eva: {
    style: themedStyle,
  }={},
}) => {

  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)

  return (
    <View style={styles.container}>
      <Icon
        name='marker'
        pack='materialCommunity'
        style={[
          styles.icon,
          iconThemedStyle,
          style,
        ]}
      />
      <Text
        style={[
          styles.label,
          baseThemedStyle,
          style,
        ]}
      >
        {i18n("Highlighted by your instructor.")}
      </Text>
    </View>
  )

}

export default styled('InstructorsHighlightLabel')(InstructorsHighlightLabel)
