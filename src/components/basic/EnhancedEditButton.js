import React from "react"
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native"
import { styled } from "@ui-kitten/components"

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useThemedStates from "../../hooks/useThemedStates"

import Icon from '../basic/Icon'

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginVertical: -12,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
  },
})

const EnhancedEditButton = React.memo(({
  onPress,
  style,
  iconStyle,

  themedStyle,
  dispatch,
}) => {

  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          baseThemedStyle,
          style,
        ]}
        {...themedStateEvents}
      >
        <Icon
          name="pencil"
          pack="materialCommunity"
          style={[
            styles.icon,
            iconThemedStyle,
            iconStyle,
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  )

})

EnhancedEditButton.styledComponentName = 'EnhancedEditButton'

export default styled(EnhancedEditButton)