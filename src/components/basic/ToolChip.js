import React, { useState, useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { Button, styled } from '@ui-kitten/components'

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import { getToolInfo } from "../../utils/toolInfo"

import Icon from "./Icon"

const onMoveShouldSetResponderCapture = () => true

const text = {
  fontWeight: '400',
  fontSize: 12,
}

const styles = StyleSheet.create({
  text: {
    ...text,
  },
  draftText: {
    ...text,
    fontStyle: 'italic',
  },
  icon: {
    height: 13,
    marginRight: 0,
  },
  button: {
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
  isDraft,
  onPress,
  onToolMove,
  onToolRelease,
  themedStyle,
  style,
  iconStyle,
}) => {

  const [ hideTool, setHideTool ] = useState(false)
  const { toolInfoByType } = getToolInfo()
  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)

  const onResponderMove = useCallback(
    ({ nativeEvent }) => {
      if(onToolMove({
        nativeEvent,
        uid,
        label,
        toolType,
        isDraft,
      })) {
        setHideTool(true)
      }
    },
    [ onToolMove, uid, label, toolType, isDraft ],
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
          iconThemedStyle,
        ]}
      />
    ),
    [ toolType, isDraft ],
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
          baseThemedStyle,
          style,
        ]}
        size='tiny'
        icon={ButtonIcon}
        iconStyle={iconStyle}
        textStyle={isDraft ? styles.draftText : styles.text}
        onPress={onPress}
      >
        {label || toolInfoByType[toolType].text}
      </Button>
    </View>
  )
})

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)