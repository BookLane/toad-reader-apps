import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { Button } from '@ui-kitten/components'

import styled from "../../utils/styled"

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
  baseThemedStyle,
  iconThemedStyle,
  style,
  iconName,
  iconPack,
  iconStyle,
  ...buttonProps
}) => {

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
      {...buttonProps}
    />
  )
}

export default styled(FAB, 'FAB')