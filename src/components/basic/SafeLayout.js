import React from "react"
import { StyleSheet, View } from "react-native"
import { Layout } from "@ui-kitten/components"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})

const SafeLayout = ({
  children,
}) => {

  const safeAreaInsets = useSafeAreaInsets()

  return (
    <Layout
      style={{
        paddingTop: safeAreaInsets.top,
      }}
    >
      <View style={styles.view}>
        {children}
      </View>
    </Layout>
  )
}

export default SafeLayout

