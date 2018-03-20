import React from "react"
import { View, Text } from "native-base"
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
  textContainer: {
    padding: "10%",
    paddingTop: 0,
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
})

class FullScreenSpin extends React.Component {
  render() {
    const { style, text, percentage } = this.props
    
    return (
      <View style={[
        styles.spinnerContainer,
        style,
      ]}>
        <View style={styles.spacer} />
        {!!text &&
          <View style={styles.textContainer}>
            <Text>{text}</Text>
          </View>
        }
        <Spin
          percentage={percentage}
        />
        <View style={styles.spacer} />
      </View>
    )
  }
}

export default FullScreenSpin