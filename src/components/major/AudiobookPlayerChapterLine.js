import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
// import { i18n } from "inline-i18n"
import { Modal } from "@ui-kitten/components"
import useToggle from 'react-use/lib/useToggle'

import useDimensions from "../../hooks/useDimensions"

import Icon from "../basic/Icon"
import Button from "../basic/Button"
import AudiobookPlayerChapterChooserLine from "./AudiobookPlayerChapterChooserLine"

const line = {
  paddingHorizontal: 17,
  paddingVertical: 10,
}

const styles = StyleSheet.create({
  chapter: {
    alignSelf: `stretch`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  chapterText: {
    flex: 1,
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
  chapters: {
    borderWidth: 6,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, .4)',
    backgroundColor: 'white',
    paddingVertical: 10,
    overflowY: 'auto',
  },
  line: {
    ...line,
  },
  selectedLine: {
    ...line,
    fontWeight: 'bold',
  },
  chaptersBackdrop: {
    backgroundColor: `transparent`,
  },
})

const AudiobookPlayerChapterLine = ({
  spines,
  currentSpineIndex,
  setCurrentSpineIndex,
}) => {

  const [ showChapters, toggleShowChapters ] = useToggle(false)
  const { width, height } = useDimensions().window

  const { label=`` } = spines[currentSpineIndex] || spines[0] || {}

  const ChaptersIcon = useCallback(({ style }) => <Icon name='text' pack="materialCommunity" style={styles.icon} />, [])

  const selectChapter = useCallback(
    index => {

      setCurrentSpineIndex(index)
      toggleShowChapters(false)

      // logEvent({
      //   eventName: `Library: Set sort`,
      //   properties: {
      //     sort,
      //   },
      // })
    },
    [ setCurrentSpineIndex, toggleShowChapters ],
  )

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
        onPress={toggleShowChapters}
      />

      <Modal
        visible={showChapters}
        onBackdropPress={toggleShowChapters}
        backdropStyle={styles.chaptersBackdrop}
        style={[
          styles.chapters,
          {
            maxWidth: width - 80,
            maxHeight: height - 80,
          }
        ]}
      >
        {spines.map(({ label }, idx) => (
          <AudiobookPlayerChapterChooserLine
            key={idx}
            index={idx}
            label={label}
            onPress={selectChapter}
            status={idx === currentSpineIndex ? `selected` : `unselected`}
          />
        ))}
      </Modal>

    </View>
  )
}

export default AudiobookPlayerChapterLine