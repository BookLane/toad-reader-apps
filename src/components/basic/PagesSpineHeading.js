import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Text } from "react-native"

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

const PagesSpineHeading = React.memo(({ children }) => (
  <View style={styles.heading}>
    <Text
      style={styles.headingText}
      numberOfLines={1}
    >
      {children}
    </Text>
  </View>
))

export default PagesSpineHeading