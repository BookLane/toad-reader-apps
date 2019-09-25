import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, View } from "react-native"
import { Spinner } from "react-native-ui-kitten"

// import { Circle } from 'react-native-progress'

const {
  SPINNER_COLOR,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
})

// const circleTextStyle = { fontSize: 12 }

const Spin = ({ percentage }) => {

  if(percentage) {
    return (
      <View style={styles.container}>
        {/* <Circle progress={percentage/100} color={SPINNER_COLOR} showsText={true} size={50} textStyle={circleTextStyle} animated={false} /> */}
      </View>
    )
  }
  
  return (
    null
    // <Spinner />
    // TODO <Spinner color={SPINNER_COLOR} />
  )
}

export default Spin