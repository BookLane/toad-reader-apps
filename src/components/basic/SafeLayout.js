import React from "react"
import { StyleSheet, View } from "react-native"
import { Layout } from "@ui-kitten/components"
import SafeAreaView from "react-native-safe-area-view"

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    paddingBottom: 0,
  },
})

const SafeLayout = ({
  children,
}) => (
  <Layout>
    <SafeAreaView
      style={styles.flex1}
      forceInset={{ bottom: 'never' }}
    >
      <View style={styles.flex1}>
        {children}
      </View>
    </SafeAreaView>
  </Layout>
)

export default SafeLayout

