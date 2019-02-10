import React from "react"
import { Constants } from "expo"
import { View, Text } from "native-base"
import { StyleSheet } from "react-native"

const {
  PAGE_LIST_HEADER_ROW_HEIGHT,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  heading: {
    height: PAGE_LIST_HEADER_ROW_HEIGHT,
    paddingLeft: PAGES_HORIZONTAL_MARGIN,
    paddingRight: PAGES_HORIZONTAL_MARGIN,
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