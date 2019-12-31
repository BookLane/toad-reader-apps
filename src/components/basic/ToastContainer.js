import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"

import useDimensions from "../../hooks/useDimensions"

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
  },
  container2: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  spacer: {
    flex: 1,
  },
  toast: {
    backgroundColor: 'rgb(30, 30, 30)',
    padding: 13,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
})

const ToastContainer = ({
  text,
  buttonText=i18n("Okay"),
}) => {

  const { width, height } = useDimensions().window
  
  return (
    <View
      style={[
        styles.container1,
        {
          width,
          top: height,
        }
      ]}
    >
      <View style={styles.container2}>
        <View style={styles.spacer} />
        <View style={styles.toast}>
          <Text
            style={styles.text}
            numberOfLines={1}
          >
            {text}
          </Text>
        </View>
        <View style={styles.spacer} />
      </View>
    </View>
  )
}

export default ToastContainer