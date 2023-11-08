import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
// import { i18n } from "inline-i18n"

import Icon from "../basic/Icon"
import Button from "../basic/Button"

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
  button: {
    marginLeft: 10,
    borderRadius: 25,
    height: 34,
    width: 34,
    maxWidth: 34,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  icon: {
    height: 18,
  },
})

const AudiobookPlayerChapterLine = ({
  label,
}) => {

  const ChaptersIcon = useCallback(({ style }) => <Icon name='text' pack="materialCommunity" style={styles.icon} />, [])

  return (
    <View style={styles.chapter}>
      <Text style={styles.chapterText}>
        {label}
      </Text>
      <Button
        style={styles.button}
        status="basic"
        appearance="ghost"
        accessoryLeft={ChaptersIcon}
        // onPress={backTen}
      />
    </View>
  )
}

export default AudiobookPlayerChapterLine