import React, { useState, useCallback } from "react"
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native"
import { styled } from '@ui-kitten/components'

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useThemedStates from "../../hooks/useThemedStates"
import { getToolInfo } from "../../utils/toolInfo"

import Icon from "./Icon"

const onMoveShouldSetResponderCapture = () => true

const styles = StyleSheet.create({
  chip: {
    borderRadius: 17,
    flexDirection: 'row',
    height: 28,
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingBottom: 1,
  },
  icon: {
    height: 13,
    marginRight: 3,
  },
  label: {
    paddingHorizontal: 3,
    fontWeight: '400',
    fontSize: 12,
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
  style,
  iconStyle,
  labelStyle,
  type,

  themedStyle,
  dispatch,
}) => {

  const [ hideTool, setHideTool ] = useState(false)
  const { toolInfoByType } = getToolInfo()
  const { baseThemedStyle, iconThemedStyle, labelThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

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
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.chip,
            baseThemedStyle,
            style,
          ]}
          {...themedStateEvents}
        >
          <Icon
            {...toolInfoByType[toolType]}
            style={[
              styles.icon,
              iconThemedStyle,
              iconStyle,
            ]}
          />
          <Text
            style={[
              styles.label,
              labelThemedStyle,
              labelStyle,
            ]}
          >
            {label || toolInfoByType[toolType].text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
})

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)