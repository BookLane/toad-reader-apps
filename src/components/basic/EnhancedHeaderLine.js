import React from "react"
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import Constants from 'expo-constants'
import { styled } from "@ui-kitten/components"

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useThemedStates from "../../hooks/useThemedStates"

import Icon from '../basic/Icon'

const {
  ENHANCED_LOGO_WIDTH=75,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  line: {
    paddingLeft: 20,
    paddingRight: 10,
    height: 37,
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
  image: {
    height: 37,
    width: ENHANCED_LOGO_WIDTH,
    marginRight: 10,
  }
})

const EnhancedHeaderLine = React.memo(({
  label,
  iconName,
  iconPack,
  buttons,
  onPress,
  showLogo,
  style,
  iconStyle,
  labelStyle,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { baseThemedStyle, iconThemedStyle, labelThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const LabelContainer = typeof label === 'string' ? Text : View

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
      <LabelContainer
        style={[
          styles.label,
          labelThemedStyle,
          labelStyle,
        ]}
        selectable={false}
      >
        {label}
      </LabelContainer>
      {buttons}
      {showLogo &&
        <Image
          source={require("../../../assets/icons/enhanced-logo.png")}
          style={styles.image}
        />
      }
    </View>
  )

  if(onPress) {
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

export default styled('EnhancedHeaderLine')(EnhancedHeaderLine)