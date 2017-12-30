import React from "react"
import { StyleSheet, Platform } from "react-native"
import { View, Text } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

const footerHeight = nativeBasePlatformVariables.footerHeight - (nativeBasePlatformVariables.isIphoneX ? 34 : 0)

const styles = StyleSheet.create({
  dotText: {
    fontSize: 10,
    color: Platform.OS === 'android' ? 'black' : 'white',
  },
})

class ProgressDot extends React.Component {

  render() {
    const { left, size, label } = this.props
    
    const dotBaseStyles = {
      position: 'absolute',
      top: (footerHeight - size) / 2,
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: Platform.OS === 'android' ? 'white' : 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: size / -2,
      marginRight: size / -2,
    }

    return (
      <View style={{ ...dotBaseStyles, left }}>
        <Text style={styles.dotText}>{label}</Text>
      </View>
    )
  }
}

export default ProgressDot