import React from "react"
import Constants from 'expo-constants'
import { View } from "native-base"
import { StyleSheet } from "react-native"

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_VERTICAL_MARGIN,
  LIBRARY_COVERS_BOTTOM_PADDING,
} = Constants.manifest.extra

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

class CoversRow extends React.PureComponent {

  render() {
    const { children, isFirstRow } = this.props

    return (
      <View style={[
        styles.covers,
        isFirstRow ? styles.coversFirstRow : {},
      ]}>
        {children}
      </View>
    )
  }
}

export default CoversRow