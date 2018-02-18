import React from "react"
import { View } from "native-base"
import { StyleSheet } from "react-native"

import Spin from "./Spin"

const styles = StyleSheet.create({
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, .8)',
  },
  spacer: {
    flex: 1,
  },
})

class FullScreenSpin extends React.Component {
  render() {
    const { style } = this.props
    
    return (
      <View style={[
        styles.spinnerContainer,
        style,
      ]}>
        <View style={styles.spacer} />
        <Spin />
        <View style={styles.spacer} />
      </View>
    )
  }
}

export default FullScreenSpin