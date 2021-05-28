import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { Button, styled } from '@ui-kitten/components'

import useThemedStyleSets from "../../hooks/useThemedStyleSets"

import Icon from "./Icon"

const styles = StyleSheet.create({
  icon: {
    tintColor: 'white',
    height: 28,
  },
  button: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 25,
    width: 50,
    height: 50,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
})

const FAB = ({
  style,
  iconName,
  iconPack,
  iconStyle,
  status,
  onPress,

  eva: {
    style: themedStyle,
  }={},
}) => {

  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)

  const ButtonIcon = useCallback(
    style => (
      <Icon
        name={iconName}
        pack={iconPack}
        style={[
          styles.icon,
          iconThemedStyle,
          iconStyle,
        ]}
      />
    ),
    [ iconName, iconPack, iconThemedStyle, iconStyle ],
  )

  return (
    <Button
      style={[
        styles.button,
        baseThemedStyle,
        style,
      ]}
      accessoryLeft={ButtonIcon}
      status={status}
      onPress={onPress}
    />
  )
}

export default styled('FAB')(FAB)