import React from "react"
import Constants from 'expo-constants'
import { TopNavigation } from 'react-native-ui-kitten'
import { Platform, StyleSheet, View } from "react-native"

import { getToolbarHeight } from '../../utils/toolbox.js'

const {
  ANDROID_TOOLBAR_COLOR,
  ANDROID_STATUS_BAR_COLOR,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
  },
  header: {
    ...(Platform.OS === 'android' ? { backgroundColor: ANDROID_TOOLBAR_COLOR } : {}),
  },
})

const AppHeader = ({
  hide,
  ...topNavigationProps,
}) => {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to force it to render properly.

  const style = {}

  if(hide) {
    style.top = getToolbarHeight() * -1
  }

  return (
    <View style={!hide && styles.container}>
      <TopNavigation {...topNavigationProps} />
      {/* <Header
        androidStatusBarColor={ANDROID_STATUS_BAR_COLOR}
        style={[
          styles.header,
          style,
        ]}
      >
        {children}
      </Header> */}
    </View>
  )
}

export default AppHeader