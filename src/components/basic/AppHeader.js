import React from "react"
import { Header } from "native-base"
import { Platform } from "react-native"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

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
      style.backgroundColor = "#4075ae"
    }

    return (
      <Header
        androidStatusBarColor="#2c5b8e"
        style={style}
      >
        {this.props.children}
      </Header>
    )
  }
}

export default AppHeader