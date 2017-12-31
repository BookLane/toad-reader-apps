import React from "react"
import { View, Text } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  heading: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    backgroundColor: '#e9e9ef',
  },
  headingText: {
    fontSize: 16,
  },
})

class PagesSpineHeading extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { children } = this.props

    return (
      <View style={styles.heading}>
        <Text
          style={styles.headingText}
          numberOfLines={1}
        >
          {children}
        </Text>
      </View>
    )
  }
}

export default PagesSpineHeading