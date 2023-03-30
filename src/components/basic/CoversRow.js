import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, View } from "react-native"

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_VERTICAL_MARGIN,
  LIBRARY_COVERS_BOTTOM_PADDING,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  covers: {
    marginRight: -LIBRARY_COVERS_HORIZONTAL_MARGIN,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: LIBRARY_COVERS_HORIZONTAL_MARGIN,
    paddingTop: 0,
    paddingBottom: LIBRARY_COVERS_BOTTOM_PADDING,
  },
  coversFirstRow: {
    paddingTop: LIBRARY_COVERS_VERTICAL_MARGIN,
  },
})

const CoversRow = React.memo(({
  children,
  isFirstRow,
}) => (
  <View style={[
    styles.covers,
    isFirstRow ? styles.coversFirstRow : {},
  ]}>
    {children}
  </View>
))

export default CoversRow