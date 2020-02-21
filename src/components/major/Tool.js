import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native"
import { i18n } from "inline-i18n"

import { getToolInfo } from '../../utils/toolInfo'
import useWideMode from '../../hooks/useWideMode'

import NotesInsertTool from './NotesInsertTool'
import VideoTool from './VideoTool'
import ReflectionQuestionTool from './ReflectionQuestionTool'
import QuizTool from './QuizTool'
import EditTool from "./EditTool"
import LTITool from "./LTITool"
import HeaderIcon from "../basic/HeaderIcon"

const topSection = {
  paddingHorizontal: 30,
  paddingTop: 35,
  paddingBottom: 10,
  flexDirection: 'row',
}

const close = {
  position: 'absolute',
  top: -33,
  bottom: -20,
  right: -14,
  height: 40,
}

const styles = StyleSheet.create({
  topSection: {
    ...topSection,
  },
  topSectionWideMode: {
    ...topSection,
    paddingTop: 20,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    flex: 1,
  },
  bottomSectionContent: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
  },
  exitPreview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 'auto',
  },
  closeContainer: {
    alignSelf: 'center',
  },
  close: {
    ...close,
  },
  closeWideMode: {
    ...close,
    top: -20,
    right: -10,
  },
})

const Tool = React.memo(({
  bookId,
  inEditMode,
  tool,
  xOutOfTool,
}) => {

  const [ viewingPreview, setViewingPreview ] = useState(false)

  const wideMode = useWideMode()

  const { toolInfoByType } = getToolInfo()

  const onExitPreview = useCallback(() => setViewingPreview(false), [])

  if(inEditMode && !viewingPreview) {
    return (
      <EditTool
        bookId={bookId}
        tool={tool}
        setViewingPreview={setViewingPreview}
        xOutOfTool={xOutOfTool}
      />
    )
  }

  const { toolType, name, data, cfi } = tool
  const isInlineTool = !!cfi

  let ToolComponent = View

  switch(toolType) {
    case 'NOTES_INSERT': {
      ToolComponent = NotesInsertTool
      break
    }
    case 'VIDEO': {
      ToolComponent = VideoTool
      break
    }
    case 'REFLECTION_QUESTION': {
      ToolComponent = ReflectionQuestionTool
      break
    }
    case 'QUIZ': {
      ToolComponent = QuizTool
      break
    }
    case 'LTI': {
      ToolComponent = LTITool
      break
    }
  }

  return (
    <>
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
        <Text style={styles.name}>
          {name || toolInfoByType[toolType].text}
        </Text>
        {inEditMode &&
          <TouchableOpacity onPress={onExitPreview}>
            <Text style={styles.exitPreview}>
              {i18n("Exit preview", "", "enhanced")}
            </Text>
          </TouchableOpacity>
        }
        {!inEditMode && (isInlineTool || !wideMode) &&
          <View style={styles.closeContainer}>
            <HeaderIcon
              iconName="md-close"
              onPress={xOutOfTool}
              uiStatus="faded"
              style={wideMode ? styles.closeWideMode : styles.close}
            />
          </View>
        }
      </View>
      <ScrollView
        style={styles.bottomSection}
        contentContainerStyle={styles.bottomSectionContent}
      >
        <ToolComponent
          bookId={bookId}
          toolUid={tool.uid}
          inEditMode={inEditMode}
          viewingPreview={viewingPreview}
          {...data}
        />
      </ScrollView>
    </>
  )
})

export default Tool