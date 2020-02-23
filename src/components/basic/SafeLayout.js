import React from "react"
import { StyleSheet, View } from "react-native"
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
  <Layout style={styles.layout}>
    <View style={styles.view}>
      {children}
    </View>
  </Layout>
)

export default SafeLayout

