import React from "react"
import { ActivityIndicator } from "react-native"

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//   },
// })

const Spin = ({ percentage }) => {

  // if(percentage) {
  //   return (
  //     <View style={styles.container}>
  //       {/* <Circle progress={percentage/100} color={SPINNER_COLOR} showsText={true} size={50} textStyle={circleTextStyle} animated={false} /> */}
  //     </View>
  //   )
  // }
  
  return (
    <ActivityIndicator size="large" color="#0000ff" />
  )
}

export default Spin