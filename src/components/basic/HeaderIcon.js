import React, { useCallback } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { withRouter } from "react-router"
import { Ionicons } from "@expo/vector-icons"
import { styled } from 'react-native-ui-kitten'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 22,
  },
})

const HeaderIcon = ({
  themedStyle,
  style,
  IconPack=Ionicons,
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
      <IconPack
        style={[
          styles.icon,
          themedStyle,
          style,
        ]}
        name={name}
      />
    </TouchableOpacity>
  )
}

HeaderIcon.styledComponentName = 'HeaderIcon'

export default styled(withRouter(HeaderIcon))