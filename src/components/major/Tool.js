import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

import { i18n } from "inline-i18n"
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
    flexDirection: 'row',
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
    flex: 1,
  },
  exitPreview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: 700,
    fontSize: 13,
    marginTop: 'auto',
  },
})

const Tool = React.memo(({
  bookId,
  inEditMode,
  tool,
}) => {

  const [ viewingPreview, setViewingPreview ] = useState(false)

  const { toolInfoByType } = getToolInfo()

  const onExitPreview = useCallback(() => setViewingPreview(false), [])

  if(inEditMode && !viewingPreview) {
    return (
      <EditTool
        bookId={bookId}
        tool={tool}
        setViewingPreview={setViewingPreview}
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
        {inEditMode &&
          <TouchableOpacity onPress={onExitPreview}>
            <Text style={styles.exitPreview}>
              {i18n("Exit preview")}
            </Text>
          </TouchableOpacity>
        }
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