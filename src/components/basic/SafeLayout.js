import React from "react"
import { StyleSheet, View, Platform } from "react-native"
import { Layout } from "@ui-kitten/components"

import { statusBarHeight } from "../../utils/toolbox"

const styles = StyleSheet.create({
  layout: {
    paddingTop: statusBarHeight,
  },
  view: {
    flex: 1,
  },
})

const SafeLayout = ({
  children,
}) => (
  <Layout style={Platform.OS === 'android' ? null : styles.layout}>
    <View style={styles.view}>
      {children}
    </View>
  </Layout>
)

export default SafeLayout

