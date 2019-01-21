import React from "react"
import { Constants } from "expo"
import { StyleSheet } from "react-native"
import { Spinner, View } from "native-base"

import { Circle } from 'react-native-progress'

const {
  SPINNER_COLOR,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
})

const circleTextStyle = { fontSize: 12 }

class Spin extends React.Component {

  render() {
    const { percentage } = this.props

    if(percentage) {
      return (
        <View style={styles.container}>
          <Circle progress={percentage/100} color={SPINNER_COLOR} showsText={true} size={50} textStyle={circleTextStyle} animated={false} />
        </View>
      )
    }
    
    return (
      <Spinner color={SPINNER_COLOR} />
    )
  }
}

export default Spin