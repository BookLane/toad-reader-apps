import React from "react"
import Expo from "expo"
import { Header } from "native-base"
import { Platform } from "react-native"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

const {
  ANDROID_TOOLBAR_COLOR,
  ANDROID_STATUS_BAR_COLOR,
} = Expo.Constants.manifest.extra

class AppHeader extends React.Component {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to force it to render properly.

  render() {
    const { hide } = this.props

    const style = {
      zIndex: 3,
    }

    if(hide) {
      style.top = nativeBasePlatformVariables.toolbarHeight * -1
    }

    if(Platform.OS === 'android') {
      style.backgroundColor = ANDROID_TOOLBAR_COLOR
    }

    return (
      <Header
        androidStatusBarColor={ANDROID_STATUS_BAR_COLOR}
        style={style}
      >
        {this.props.children}
      </Header>
    )
  }
}

export default AppHeader