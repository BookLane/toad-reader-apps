import React, { useCallback } from "react"
import { View, StyleSheet } from "react-native"
import { styled, Button } from "@ui-kitten/components"

import useThemedStates from "../../hooks/useThemedStates"
import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useWideMode from "../../hooks/useWideMode"
import { getToolbarHeight } from '../../utils/toolbox'

import Icon from "../basic/Icon"

const buttonContainer = {
  position: 'absolute',
  top: 0,
  bottom: 2,  // not sure why this value
  justifyContent: 'center',
  zIndex: 5,
}

const button = {
  position: 'absolute',
  width: 50,
  height: 120,
  borderRadius: 0,
}

const styles = StyleSheet.create({
  containerWideMode: {
    top: getToolbarHeight(),
  },
  leftButtonContainer: {
    ...buttonContainer,
    left: -10,
  },
  leftButton: {
    ...button,
    left: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  rightButtonContainer: {
    ...buttonContainer,
    right: -10,
  },
  rightButton: {
    ...button,
    right: 0,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  icon: {
    height: 28,
  },
})

const ToolFlipperButton = React.memo(({
  side,
  onPageChange,
  newPageIndex,
  style,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const wideMode = useWideMode()

  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const ButtonIcon = useCallback(
    ({ style }) => (
      <Icon
        style={[
          styles.icon,
          iconThemedStyle,
        ]}
        pack="fontAwesome"
        name={`angle-${side}`}
      />
    ),
    [ side, iconThemedStyle ],
  )

  const onPress = useCallback(
    () => {
      onPageChange(newPageIndex)
    },
    [ onPageChange, newPageIndex ]
  )

  return (
    <View
      style={[
        styles[`${side}ButtonContainer`],
        wideMode ? styles.containerWideMode : null,
      ]}
    >
      <Button
        onPress={onPress}
        appearance="ghost"
        style={[
          styles[`${side}Button`],
          baseThemedStyle,
          style,
        ]}
        accessoryLeft={ButtonIcon}
        {...themedStateEvents}
      />
    </View>
  )
})

export default styled('ToolFlipperButton')(ToolFlipperButton)