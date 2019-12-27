import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// import { i18n } from "inline-i18n"
import { getToolbarHeight } from '../../utils/toolbox'
import { getToolInfo } from '../../utils/toolInfo'

import NotesInsertTool from './NotesInsertTool'
import VideoTool from './VideoTool'
import ReflectionQuestionTool from './ReflectionQuestionTool'
import QuizTool from './QuizTool'
import EditTool from "./EditTool"

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    zIndex: 5,
  },
  constainerWideMode: {
    top: getToolbarHeight(),
  },
  topSection: {
    padding: 20,
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

  books,
  userDataByBookId,
}) => {

  const { toolInfoByType } = getToolInfo()

  const { selectedTool } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  if(!selectedTool) return null

  if(inEditMode) {
    return (
      <EditTool bookId={bookId} />
    )
  }

  const { toolType, name, data } = selectedTool

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
    <View
      style={[
        styles.container,
        wideMode ? styles.constainerWideMode : null,
      ]}
    >
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
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Tool)