import React from "react"
import { StyleSheet, ActivityIndicator, View, Text } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
})

const Spin = ({ percentage }) => {

  if(percentage) {
    const percent = Math.floor(percentage)
    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={50}
          width={3}
          fill={percent}
          tintColor="rgb(51, 102, 255)"
          backgroundColor="rgb(231, 236, 246)">
          {fill => (
            <Text>
              {i18n("{{percent}}%", { percent })}
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>
    )
  }
  
  return (
    <ActivityIndicator size="large" color="#0000ff" />
  )
}

export default Spin