import React from "react"
import { View, Text } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
  },
  heading: {
    padding: 10,
    paddingBottom: 0,
  },
  headingText: {
    fontSize: 16,
  },
  pages: {
    marginRight: -10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingBottom: 0,
  },
})

class PagesSpine extends React.Component {

  render() {
    const { children, heading } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>{heading}</Text>
        </View>
        <View style={styles.pages}>
          {children}
        </View>
      </View>
    )
  }
}

export default PagesSpine