import React, { useCallback } from "react"
import { Platform, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import { styled } from "@ui-kitten/components"

import { openURL } from '../../utils/toolbox'

import useThemedStyleSets from '../../hooks/useThemedStyleSets'
import useThemedStates from '../../hooks/useThemedStates'
import useRouterState from '../../hooks/useRouterState'

const Touchable = Platform.OS === 'web' ? TouchableOpacity : TouchableWithoutFeedback  // hacky fix to vertical alignment issue while maintaining hover on web

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
  },
})

const LinkLikeText = ({
  onPress,
  url,
  children,
  style,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { baseThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })
  const { historyPush } = useRouterState()

  const openLink = useCallback(
    () => {
      openURL({ url, historyPush })
    },
    [ url ],
  )

  return (
    <Touchable
      {...themedStateEvents}
      onPress={onPress || openLink}
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
