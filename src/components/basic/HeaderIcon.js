import React, { useCallback } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { withRouter } from "react-router"
import { styled } from '@ui-kitten/components'

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

const HeaderIcon = ({
  themedStyle,
  style,
  pack,
  name,
  path,
  onPress,
  history,
  ...otherProps
}) => {

  const goPath = useCallback(
    () => history.push(path),
    [ path ],
  )

  return (
    <TouchableOpacity
      onPress={path ? goPath : onPress}
      style={styles.container}
      {...otherProps}
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
}

HeaderIcon.styledComponentName = 'HeaderIcon'

export default styled(withRouter(HeaderIcon))