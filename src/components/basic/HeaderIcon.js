import React, { useCallback } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import styled from "../../utils/styled"

import useRouterState from "../../hooks/useRouterState"

import Icon from './Icon'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
  },
  icon: {
    height: 22,
  },
})

const HeaderIcon = React.forwardRef(({
  baseThemedStyle,
  style,
  pack,
  name,
  path,
  onPress,
  ...otherProps
}, ref) => {

  const { historyPush } = useRouterState()

  const goPath = useCallback(
    () => historyPush(path),
    [ path ],
  )

  return (
    <TouchableOpacity
      onPress={path ? goPath : onPress}
      style={styles.container}
      {...otherProps}
      ref={ref}
    >
      <Icon
        style={[
          styles.icon,
          baseThemedStyle,
          style,
        ]}
        name={name}
        pack={pack}
      />
    </TouchableOpacity>
  )
})

export default styled(HeaderIcon, 'HeaderIcon')