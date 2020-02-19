import React, { useCallback } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { styled } from '@ui-kitten/components'

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
  style,
  pack,
  name,
  path,
  onPress,

  themedStyle,

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
          themedStyle,
          style,
        ]}
        name={name}
        pack={pack}
      />
    </TouchableOpacity>
  )
})

HeaderIcon.styledComponentName = 'HeaderIcon'

export default styled(HeaderIcon)