import React from "react"
import { Constants } from "expo"
import { View } from "native-base"
import { StyleSheet } from "react-native"

const {
  PAGES_VERTICAL_MARGIN,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  pages: {
    marginRight: -PAGES_HORIZONTAL_MARGIN,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: PAGES_HORIZONTAL_MARGIN,
    paddingTop: 0,
    paddingBottom: PAGES_VERTICAL_MARGIN,
  },
})

class PagesRow extends React.PureComponent {

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