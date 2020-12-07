import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native"
import { i18n } from "inline-i18n"

import { getToolInfo } from '../../utils/toolInfo'
import useWideMode from '../../hooks/useWideMode'

import NotesInsertTool from './NotesInsertTool'
import VideoTool from './VideoTool'
import ReflectionQuestionTool from './ReflectionQuestionTool'
import DiscussionQuestionTool from './DiscussionQuestionTool'
import QuizTool from './QuizTool'
import EditTool from "./EditTool"
import LTITool from "./LTITool"
import PollTool from "./PollTool"
import DocumentTool from "./DocumentTool"
import ImagesTool from "./ImagesTool"
import AudioTool from "./AudioTool"
import HeaderIcon from "../basic/HeaderIcon"
import SaveStateHeaderIcon from "../basic/SaveStateHeaderIcon"

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
  saveState: {
    position: 'absolute',
    top: -33,
    bottom: -20,
    right: 24,
    height: 40,
  },
})

const Tool = React.memo(({
  bookId,
  inEditMode,
  tool,
  xOutOfTool,
  classroomQueryString,
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

  const { toolType, name, data, cfi, engagement } = tool
  const isInlineTool = !!cfi

  let ToolComponent = View
  let editableByStudent = false

  switch(toolType) {
    case 'NOTES_INSERT': {
      ToolComponent = NotesInsertTool
      break
    }
    case 'VIDEO': {
      ToolComponent = VideoTool
      break
    }
    case 'QUESTION': {
      ToolComponent = data.isDiscussion ? DiscussionQuestionTool : ReflectionQuestionTool
      editableByStudent = true
      break
    }
    case 'QUIZ': {
      ToolComponent = QuizTool
      editableByStudent = true
      break
    }
    case 'POLL': {
      ToolComponent = PollTool
      editableByStudent = true
      break
    }
    case 'IMAGES': {
      ToolComponent = ImagesTool
      break
    }
    case 'AUDIO': {
      ToolComponent = AudioTool
      break
    }
    case 'DOCUMENT': {
      ToolComponent = DocumentTool
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
          {name || (toolInfoByType[toolType] || {}).text || ""}
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
            {!wideMode && editableByStudent &&
              <SaveStateHeaderIcon
                style={styles.saveState}
              />
            }
          </View>
        }
      </View>
      <ScrollView
        style={styles.bottomSection}
        contentContainerStyle={styles.bottomSectionContent}
      >
        <ToolComponent
          key={tool.uid}
          bookId={bookId}
          toolUid={tool.uid}
          toolName={tool.name}
          viewingPreview={viewingPreview}
          priorEngagement={engagement}
          classroomQueryString={classroomQueryString}
          {...data}
        />
      </ScrollView>
    </>
  )
})

export default Tool