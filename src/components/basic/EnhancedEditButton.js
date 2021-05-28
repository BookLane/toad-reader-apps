import React, { useCallback } from "react"
import { StyleSheet, View, TouchableWithoutFeedback, Alert, Platform } from "react-native"
import { styled } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

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

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const alertToNoEditing = useCallback(
    () => {
      Alert.alert(
        i18n("Note"),
        i18n("Editing is currently restricted to the web app."),
      )
    },
    [],
  )

  return (
    <TouchableWithoutFeedback
      onPress={Platform.OS === 'web' ? onPress : alertToNoEditing}
    >
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

export default styled('EnhancedEditButton')(EnhancedEditButton)