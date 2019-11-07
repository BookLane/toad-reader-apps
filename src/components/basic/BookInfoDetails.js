import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View, Text, Platform } from "react-native"
import i18n from "../../utils/i18n"

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  icon: {
    fontSize: 19,
    paddingRight: 4,
  },
  details: {
    paddingTop: 1,
    fontSize: 13,
  },
})

const BookInfoDetails = ({
  bookInfo: {
    downloadStatus,
    // epubSizeInMB,
    // totalCharacterCount,
  },
}) => {

  if(Platform.OS === 'web') return null

  if(downloadStatus == 2) {
    return (
      <View style={styles.container}>
        <Ionicons name='md-checkmark' style={styles.icon} />
        <Text style={styles.details}>{i18n("On device")}</Text>
      </View>
    )
  }

  if(downloadStatus == 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.details}>{i18n("Downloading...")}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Ionicons name='md-cloud-download' style={styles.icon} />
      <Text style={styles.details}>{i18n("Tap to download")}</Text>
    </View>
  )
}

export default BookInfoDetails