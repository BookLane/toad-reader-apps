import React from "react"
import { View } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  pages: {
    marginRight: -10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingTop: 0,
  },
})

class PagesRow extends React.Component {

  render() {
    const { children } = this.props

    return (
      <View style={styles.pages}>
        {children}
      </View>
    )
  }
}

export default PagesRow