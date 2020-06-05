import React, { useState, useCallback } from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { styled } from '@ui-kitten/components'

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useThemedStates from "../../hooks/useThemedStates"
import { getToolInfo } from "../../utils/toolInfo"

import Icon from "./Icon"

// const onMoveShouldSetResponderCapture = all => console.log(all)
const onMoveShouldSetResponderCapture = ({ touchHistory: { touchBank } }) => {
  const touch = touchBank.filter(Boolean)[0] || {}
  const { startPageX, startPageY, currentPageX, currentPageY } = touch

  if(!startPageX) return

  return (
    Math.sqrt(
      Math.pow(currentPageX - startPageX, 2)
        +
      Math.pow(currentPageY - startPageY, 2)
    ) > 5
  )
}

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
  data,
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
        data,
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

  const toolInfo = toolInfoByType[toolType] || {}

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
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.chip,
            baseThemedStyle,
            style,
          ]}
          {...themedStateEvents}
        >
          <Icon
            {...(
              typeof toolInfo.icon === 'function'
                ? toolInfo.icon(data)
                : toolInfo.icon
            )}
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
            selectable={false}
          >
            {label || toolInfo.text || ""}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
})

ToolChip.styledComponentName = 'ToolChip'

export default styled(ToolChip)