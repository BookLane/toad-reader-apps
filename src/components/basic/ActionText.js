import React, { useCallback } from "react"
import { Text, TouchableOpacity } from "react-native"
import { styled } from "@ui-kitten/components"

import useThemedStates from "../../hooks/useThemedStates"

const ActionText = React.memo(({
  id,
  info,
  style,
  onPress,

  themedStyle,
  dispatch,

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
  )
})

ActionText.styledComponentName = 'ActionText'

export default styled(ActionText)