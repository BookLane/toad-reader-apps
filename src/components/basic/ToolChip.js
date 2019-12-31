import React, { useState, useCallback } from "react"
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
  hide: {
    opacity: 0,
  },
})

const ToolChip = React.memo(({
  uid,
  label,
  toolType,
  onPress,
  onToolMove,
  onToolRelease,
  style,
  iconStyle,

  themedStyle,
}) => {

  const [ hideTool, setHideTool ] = useState(false)
  const { toolInfoByType } = getToolInfo()

  const onResponderMove = useCallback(
    ({ nativeEvent }) => {
      if(onToolMove({
        nativeEvent,
        uid,
        label,
        toolType,
      })) {
        setHideTool(true)
      }
    },
    [ onToolMove, uid, label, toolType ],
  )

  const onResponderRelease = useCallback(
    () => {
      setHideTool(false)
      onToolRelease()
    },
    [ onToolRelease ],
  )

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
      {...(!onToolMove ? {} : {
        onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
        onResponderMove: onResponderMove,
        onResponderRelease: onResponderRelease,
        onResponderTerminate: onResponderRelease,
        style: hideTool ? styles.hide : null,
      })}
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