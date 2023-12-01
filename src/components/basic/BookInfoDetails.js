import React from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { i18n } from "inline-i18n"

import Icon from "./Icon"

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  icon: {
    height: 19,
    paddingRight: 4,
  },
  details: {
    paddingTop: 1,
    fontSize: 13,
  },
})

const BookInfoDetails = ({
  bookInfo: {
    audiobookInfo,
    downloadStatus,
    // epubSizeInMB,
    // totalCharacterCount,
  },
}) => {

  const isAudiobook = !!audiobookInfo

  if(Platform.OS === 'web') return null

  if(downloadStatus == 2) {
    return (
      <View style={styles.container}>
        <Icon name='md-checkmark' style={styles.icon} />
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
      <Icon
        name={
          isAudiobook
            ? 'book-music'
            : 'md-cloud-download'
        }
        pack={
          isAudiobook
            ? 'materialCommunity'
            : 'ion'
        }
        style={styles.icon}
      />
      <Text style={styles.details}>
        {
          isAudiobook
            ? i18n("Tap to open")
            : i18n("Tap to download")
        }
      </Text>
    </View>
  )
}

export default BookInfoDetails