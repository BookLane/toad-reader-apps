import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { getToolbarHeight } from '../../utils/toolbox'

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    padding: 8,
    height: getToolbarHeight(),
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: "400",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "400",
  },

})

const AppHeader = ({
  hide,
  title,
  subtitle,
  leftControl,
  rightControls=[],
  ...topNavigationProps
}) => {

  if(hide) return null

  return (
    <View style={styles.container}>
      {!!leftControl &&
        <View>
          {leftControl}
        </View>
      }
      <View style={styles.titleView}>
        <Text
          numberOfLines={1}
          style={styles.title}
        >
          {title}
        </Text>
        {!!subtitle &&
          <Text
            numberOfLines={1}
            style={styles.subtitle}
          >
            {subtitle}
          </Text>
        }
      </View>
      {rightControls.map((rightControl, idx) => (
        <View key={idx}>
          {rightControl}
        </View>
      ))}
    </View>
  )
}

export default AppHeader