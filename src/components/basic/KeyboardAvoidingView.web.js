import React from "react"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
  },
})

const KeyboardAvoidingView = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <View style={[ styles.view, style ]} {...otherProps}>
      {children}
    </View>
  )
}

export default KeyboardAvoidingView
