import React from "react"
import { ScrollView, View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  scrollCover: {
    ...StyleSheet.absoluteFillObject,
  },
})

const EnhancedAnalyticsScrollContainer = React.memo(({
  chart,
  minWidth,
}) => {

  return (
    <ScrollView
      horizontal={true}
      containerContentStyle={{
        minWidth,
      }}
    >
      {chart}
      <View style={styles.scrollCover} />
    </ScrollView>
  )
})

export default EnhancedAnalyticsScrollContainer