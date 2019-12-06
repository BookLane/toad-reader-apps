import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
import { styled, Button } from 'react-native-ui-kitten'
import { i18n } from "inline-i18n"

import Icon from "./Icon"
import { getToolInfo } from "../../utils/toolInfo"

const styles = StyleSheet.create({
  text: {
    fontWeight: 400,
    fontSize: 12,
  },
  icon: {
    tintColor: 'rgb(149, 174, 224)',
    height: 13,
    marginRight: 0,
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
      textStyle={styles.text}
      onPress={onPress}
    >
      {label || toolInfoByType[toolType].text}
    </Button>
  )
}

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)