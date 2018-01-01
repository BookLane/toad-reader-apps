import React from "react"
import { StyleSheet, Platform, Animated } from "react-native"
import { View, Text } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

const footerHeight = nativeBasePlatformVariables.footerHeight - (nativeBasePlatformVariables.isIphoneX ? 34 : 0)

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    left: 0,
    backgroundColor: Platform.OS === 'android' ? 'white' : 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    fontSize: 10,
    color: Platform.OS === 'android' ? 'black' : 'white',
  },
})

class ProgressDot extends React.Component {

  render() {
    const { left, size, label } = this.props
    
    const dotStyles = {
      top: (footerHeight - size) / 2,
      width: size,
      height: size,
      borderRadius: size / 2,
      marginLeft: size / -2,
      marginRight: size / -2,
      transform: [
        {
          translateX: left,
        },
      ],
    }

    return (
      <Animated.View
        style={[
          styles.dot,
          dotStyles,
        ]}
      >
        <Text style={styles.dotText}>{label}</Text>
      </Animated.View>
    )
  }
}

export default ProgressDot