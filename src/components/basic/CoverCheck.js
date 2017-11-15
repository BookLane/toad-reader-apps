import React from "react"
import { View, Text, Icon } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: -14,
    left: 5,
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

class CoverCheck extends React.Component {

  render() {
    const { downloadStatus } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Icon name='checkmark' style={styles.checkmark} />
        </Text>
      </View>
    )
  }
}

export default CoverCheck