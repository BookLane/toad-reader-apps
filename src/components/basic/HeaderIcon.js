import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { withRouter } from "react-router"
import { Ionicons } from "@expo/vector-icons"
import { TopNavigationAction, styled } from 'react-native-ui-kitten'

const styles = StyleSheet.create({
  icon: {
    fontSize: 22,
  },
})

const HeaderIcon = ({
  themedStyle,
  style,
  name,
  path,
  onPress,
  history,
  ...otherProps
}) => {

  const icon = useCallback(
    () => <Ionicons style={[ styles.icon, themedStyle, style ]} name={name} />,
    [ themedStyle, style, name ],
  )

  const goPath = useCallback(
    () => history.push(path),
    [ path ],
  )

  return (
    <TopNavigationAction
      icon={icon}
      onPress={path ? goPath : onPress}
      {...otherProps}
    />
  )
}

HeaderIcon.styledComponentName = 'HeaderIcon'

export default styled(withRouter(HeaderIcon))