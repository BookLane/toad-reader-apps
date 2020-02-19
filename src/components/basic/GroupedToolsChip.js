import React from "react"
import { StyleSheet, Text } from "react-native"
import { styled } from '@ui-kitten/components'

const styles = StyleSheet.create({
  numWithin: {
    borderRadius: 10,
    width: 19,
    height: 19,
    flexShrink: 0,
    lineHeight: 18,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '600',
    marginVertical: -6,
    marginLeft: 8,
    paddingRight: 1, // not sure why I need this
  },
})

const GroupedToolsChip = ({
  numToolsWithin,
  themedStyle,
  style,
}) => (
  <Text
    style={[
      styles.numWithin,
      themedStyle,
      style,
    ]}
  >
    {numToolsWithin}
  </Text>
)

GroupedToolsChip.styledComponentName = 'GroupedToolsChip'

export default styled(GroupedToolsChip)