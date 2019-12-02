import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
import { styled, Button } from 'react-native-ui-kitten'
import { i18n } from "inline-i18n"

import Icon from "./Icon"

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

  const defaultLabelsByToolType = {
    'NOTES_INSERT': i18n("Notes"),
    'QUIZ': i18n("Quiz"),
  }

  const iconNameAndPackByToolType = {
    'NOTES_INSERT': {
      name: 'note',
      pack: 'simpleLine',
    },
    'QUIZ': {
      name: 'assessment',
      pack: 'material',
    },
  }

  const ButtonIcon = useCallback(
    iconStyle => (
      <Icon
        {...iconNameAndPackByToolType[toolType]}
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
      {label || defaultLabelsByToolType[toolType]}
    </Button>
  )
}

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)