import React from "react"
import { Constants } from "expo"
import { Header } from "native-base"
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

class AppHeader extends React.Component {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to force it to render properly.

  render() {
    const { hide } = this.props

    const style = {}

    if(hide) {
      style.top = getToolbarHeight() * -1
    }

    return (
      <View style={!hide && styles.container}>
        <Header
          androidStatusBarColor={ANDROID_STATUS_BAR_COLOR}
          style={[
            styles.header,
            style,
          ]}
        >
          {this.props.children}
        </Header>
      </View>
    )
  }
}

export default AppHeader