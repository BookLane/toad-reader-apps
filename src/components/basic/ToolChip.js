import React, { useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { styled, Button } from 'react-native-ui-kitten'

import Icon from "./Icon"
import { getToolInfo } from "../../utils/toolInfo"

const onMoveShouldSetResponderCapture = () => true

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

const ToolChip = React.memo(({
  label,
  toolType,
  onPress,
  style,
  iconStyle,
  onResponderMove,
  onResponderRelease,

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
    <View
      onMoveShouldSetResponderCapture={onMoveShouldSetResponderCapture}
      onResponderMove={onResponderMove}
      onResponderRelease={onResponderRelease}
      onResponderTerminate={onResponderRelease}
    >
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
    </View>
  )
})

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)