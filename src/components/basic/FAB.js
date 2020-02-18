import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { styled, Button } from '@ui-kitten/components'

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
  themedStyle,
  style,
  iconName,
  iconPack,
  iconStyle,
  ...buttonProps
}) => {

  const iconThemedStyle = {}

  for(let key in themedStyle) {
    if(/^icon/.test(key)) {
      iconThemedStyle[key] = themedStyle[key]
      delete themedStyle[key]
    }
  }

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
        themedStyle,
        style,
      ]}
      icon={ButtonIcon}
      {...buttonProps}
    />
  )
}

FAB.styledComponentName = 'FAB'

export default styled(FAB)