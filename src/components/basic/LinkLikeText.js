import React from "react"
import { Platform, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import { styled } from "@ui-kitten/components"

import useThemedStyleSets from '../../hooks/useThemedStyleSets'
import useThemedStates from '../../hooks/useThemedStates'

const Touchable = Platform.OS === 'web' ? TouchableOpacity : TouchableWithoutFeedback  // hacky fix to vertical alignment issue while maintaining hover on web

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
})

const LinkLikeText = ({
  onPress,
  children,
  style,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { baseThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  return (
    <Touchable
      {...themedStateEvents}
      onPress={onPress}
    >
      <Text
        style={[
          styles.link,
          baseThemedStyle,
          style,
        ]}
      >
        {children}
      </Text>
    </Touchable>
  )
}

export default styled('LinkLikeText')(LinkLikeText)
