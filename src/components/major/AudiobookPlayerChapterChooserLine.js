import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
// import { i18n } from "inline-i18n"
import { styled } from "@ui-kitten/components"

import useThemedStates from "../../hooks/useThemedStates"
import useThemedStyleSets from "../../hooks/useThemedStyleSets"

const line = {
  paddingHorizontal: 17,
  paddingVertical: 10,
}

const styles = StyleSheet.create({
  line: {
    ...line,
  },
  selectedLine: {
    ...line,
    fontWeight: 'bold',
  },
})

const AudiobookPlayerChapterChooserLine = React.memo(({
  index,
  label,
  onPress,
  style,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { baseThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const onPressWithIndex = useCallback(() => onPress(index), [ index ])

  return (
    <Text
      style={[
        styles.line,
        baseThemedStyle,
        style,
      ]}
      {...themedStateEvents}
      onPress={onPressWithIndex}
    >
      {label}
    </Text>
  )

})

export default styled('AudiobookPlayerChapterChooserLine')(AudiobookPlayerChapterChooserLine)