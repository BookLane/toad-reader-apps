import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { getToolInfo } from '../../utils/toolInfo'

import NotesInsertTool from './NotesInsertTool'
import VideoTool from './VideoTool'
import ReflectionQuestionTool from './ReflectionQuestionTool'
import QuizTool from './QuizTool'
import EditTool from "./EditTool"

const styles = StyleSheet.create({
  topSection: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 10,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    flex: 1,
    overflow: 'auto',
  },
  name: {
    fontWeight: 600,
    fontSize: 18,
  },
})

const Tool = React.memo(({
  bookId,
  inEditMode,
  tool,
}) => {

  const { toolInfoByType } = getToolInfo()

  if(inEditMode) {
    return (
      <EditTool
        bookId={bookId}
        tool={tool}
      />
    )
  }

  const { toolType, name, data } = tool

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
  }

  return (
    <>
      <View style={styles.topSection}>
        <Text style={styles.name}>
          {name || toolInfoByType[toolType].text}
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <ToolComponent
          bookId={bookId}
          {...data}
        />
      </View>
    </>
  )
})

export default Tool