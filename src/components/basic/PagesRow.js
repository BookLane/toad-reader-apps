import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, View } from "react-native"

const {
  PAGES_VERTICAL_MARGIN,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.expoConfig.extra

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

const PagesRow = React.memo(({ children }) => (
  <View style={styles.pages}>
    {children}
  </View>
))

export default PagesRow