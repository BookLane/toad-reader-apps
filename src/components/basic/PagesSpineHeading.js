import React from "react"
import { View, Text } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  heading: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  headingText: {
    fontSize: 16,
  },
})

class PagesSpineHeading extends React.Component {

  render() {
    const { children } = this.props

    return (
      <View style={styles.heading}>
        <Text style={styles.headingText}>{children}</Text>
      </View>
    )
  }
}

export default PagesSpineHeading