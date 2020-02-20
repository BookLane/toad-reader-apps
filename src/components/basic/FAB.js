import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { Button, styled } from '@ui-kitten/components'

import useThemedStyleSets from "../../hooks/useThemedStyleSets"

import Icon from "./Icon"

const styles = StyleSheet.create({
  icon: {
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
  },
})

const FAB = ({
  style,
  iconName,
  iconPack,
  iconStyle,
  status,
  onPress,

  themedStyle,
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
    [],
  )

  return (
    <Button
      style={[
        styles.button,
        baseThemedStyle,
        style,
      ]}
      icon={ButtonIcon}
      status={status}
      onPress={onPress}
    />
  )
}

FAB.styledComponentName = 'FAB'

export default styled(FAB)