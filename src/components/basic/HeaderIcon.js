import React, { useCallback } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { styled } from '@ui-kitten/components'

import useRouterState from "../../hooks/useRouterState"
import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useThemedStates from "../../hooks/useThemedStates"

import Icon from './Icon'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  icon: {
    height: 22,
  },
})

const HeaderIcon = React.forwardRef(({
  iconName,
  iconPack,
  path,
  onPress,
  style,
  iconStyle,

  themedStyle,
  dispatch,

  ...otherProps
}, ref) => {

  const { historyPush } = useRouterState()

  const { baseThemedStyle, iconThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const goPath = useCallback(
    () => historyPush(path),
    [ path ],
  )

  return (
    <TouchableOpacity
      onPress={path ? goPath : onPress}
      style={[
        styles.container,
        baseThemedStyle,
        style,
      ]}
      {...themedStateEvents}
      {...otherProps}
      ref={ref}
    >
      <Icon
        style={[
          styles.icon,
          iconThemedStyle,
          iconStyle,
        ]}
        name={iconName}
        pack={iconPack}
      />
    </TouchableOpacity>
  )
})

HeaderIcon.styledComponentName = 'HeaderIcon'

export default styled(HeaderIcon)