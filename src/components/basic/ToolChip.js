import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
import { styled, Button } from 'react-native-ui-kitten'
import { i18n } from "inline-i18n"

import Icon from "./Icon"
import { getToolInfo } from "../../utils/toolInfo"

const styles = StyleSheet.create({
  icon: {
    // backgroundColor: 'transparent',
    // height: 14,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'transparent',
    borderRadius: 17,
  },
})

const ToolChip = ({
  label,
  toolType,
  onPress,
  style,
  iconStyle,

  themedStyle,
}) => {

  const { toolInfoByType } = getToolInfo()

  const ButtonIcon = useCallback(
    iconStyle => (
      <Icon
        {...toolInfoByType[toolType]}
        style={[
          styles.icon,
          // iconStyle,
        ]}
      />
    ),
    [ toolType ],
  )

  return (
    <Button
      style={[
        styles.button,
        themedStyle,
        style,
      ]}
      size='tiny'
      icon={ButtonIcon}
      iconStyle={iconStyle}
      onPress={onPress}
    >
      {label || toolInfoByType[toolType].text}
    </Button>
  )
}

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)