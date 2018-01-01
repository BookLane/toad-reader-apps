import React from "react"
import Expo from "expo"
import { View } from "native-base"
import { StyleSheet } from "react-native"

const {
  PAGES_ROW_EXTRA_VERTICAL_SPACE,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  pages: {
    marginRight: -10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    paddingTop: 0,
    paddingBottom: PAGES_ROW_EXTRA_VERTICAL_SPACE,
  },
})

class PagesRow extends React.Component {

  shouldComponentUpdate() {
    return false
  }

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