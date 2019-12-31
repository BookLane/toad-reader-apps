import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: -10,
    right: 4,
  },
})

const PagesBookmark = () => (
  <Ionicons name='bookmark' style={styles.icon} />
)

export default PagesBookmark