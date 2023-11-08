import React from "react"
import { StyleSheet, View, Text } from "react-native"
import HeaderIcon from "../basic/HeaderIcon"
// import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  chapter: {
    alignSelf: `stretch`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  chapterText: {
    fontSize: 15,
  },
  chapterIcon: {
    marginLeft: 10,
  },
})

const AudiobookPlayerChapterLine = ({
  label,
}) => {

  return (
    <View style={styles.chapter}>
      <Text style={styles.chapterText}>
        {label}
      </Text>
      <HeaderIcon
        iconName="text"
        iconPack="materialCommunity"
        // onPress={}
        uiStatus="faded"
        style={styles.chapterIcon}
      />
    </View>
  )
}

export default AudiobookPlayerChapterLine