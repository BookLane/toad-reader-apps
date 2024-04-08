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
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    height: 22,
  },
})

/**
 * Header icon component
 * @param {string} iconName - Icon name
 * @param {string} iconPack - Icon pack to use (ion, material, materialCommunity, fontAwesome)
 * @param {string} path - Path to navigate to
 * @param {function} onPress - On press function
 * @param {object} style - Style object
 * @param {object} iconStyle - Icon style object
 * @param {object} eva - Eva props
 * @param {object} children - Children to render
 * @returns {React.Component} - Header icon component
 * @example
 * <HeaderIcon iconName='home' iconPack='ion' path='/home' onPress={() => console.log('Home clicked')} eva={{ dispatch: () => console.log('Dispatched') }}>
 *   <Text>Home</Text>
 * </HeaderIcon>
 */
const HeaderIcon = React.forwardRef(({
  iconName,
  iconPack,
  path,
  onPress,
  style,
  iconStyle,

  eva: {
    style: themedStyle,
    dispatch,
  }={},

  children,
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
      {children}
    </TouchableOpacity>
  )
})

export default styled('HeaderIcon')(HeaderIcon)