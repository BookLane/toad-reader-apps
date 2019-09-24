import React from "react"
import { Icon } from "react-native-ui-kitten"
import { StyleSheet, View, Text } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: -14,
    left: 5,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    paddingTop: 2
  },
  checkmark: {
    fontSize: 16,
    color: '#ffffff',
  },
})

const CoverCheck = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      <Icon name='md-checkmark' style={styles.checkmark} />
    </Text>
  </View>
)

export default CoverCheck