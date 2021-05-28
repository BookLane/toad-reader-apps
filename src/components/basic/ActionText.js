import React, { useCallback } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { styled } from "@ui-kitten/components"

import useThemedStates from "../../hooks/useThemedStates"

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})

const ActionText = React.memo(({
  id,
  info,
  style,
  onPress,

  eva: {
    style: themedStyle,
    dispatch,
  }={},

  ...otherProps
}) => {

  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const customOnPress = useCallback(
    () => {
      onPress && onPress({ id, info })
    },
    [ id, info, onPress ],
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={customOnPress}
        {...themedStateEvents}
      >
        <Text
          style={[
            themedStyle,
            style,
          ]}
          {...otherProps}
        />
      </TouchableOpacity>
    </View>
  )
})

export default styled('ActionText')(ActionText)