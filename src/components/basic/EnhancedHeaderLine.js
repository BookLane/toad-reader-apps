import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { styled } from "@ui-kitten/components"

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useThemedStates from "../../hooks/useThemedStates"

import Icon from '../basic/Icon'

const styles = StyleSheet.create({
  line: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 16,
    marginRight: 6,
  },
  label: {
    flex: 1,
  },
})

const EnhancedHeaderLine = React.memo(({
  label,
  iconName,
  iconPack,
  buttons,
  onPress,
  uiStatus,
  style,
  iconStyle,
  labelStyle,

  themedStyle,
  dispatch,
}) => {

  const { baseThemedStyle, iconThemedStyle, labelThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const line = (
    <View
      style={[
        styles.line,
        baseThemedStyle,
        style,
      ]}
    >
      {!!iconName &&
        <Icon
          name={iconName}
          pack={iconPack}
          style={[
            styles.icon,
            iconThemedStyle,
            iconStyle,
          ]}
        />
      }
      <Text
        style={[
          styles.label,
          labelThemedStyle,
          labelStyle,
        ]}
      >
        {label}
      </Text>
      {buttons}
    </View>
  )

  if(uiStatus === 'unselected') {
    return (
      <TouchableOpacity
        onPress={onPress}
        {...themedStateEvents}
      >
        {line}
      </TouchableOpacity>
    )
  }

  return line

})

EnhancedHeaderLine.styledComponentName = 'EnhancedHeaderLine'

export default styled(EnhancedHeaderLine)