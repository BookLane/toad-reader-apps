import React from "react"
import { View } from "native-base"
import { StyleSheet } from "react-native"
import { PAGES_ROW_EXTRA_VERTICAL_SPACE } from "../../utils/constants.js"

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