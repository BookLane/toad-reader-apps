import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import TextInput from "../basic/TextInput"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useSetTimeout from '../../hooks/useSetTimeout'

import { updateToolEngagement } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    fontWeight: '100',
    marginTop: 20,
  },
  answer: {
    ...(Platform.OS !== 'web' ? {} : { outlineWidth: 0 }),
    paddingHorizontal: 30,
    marginHorizontal: -30,
    flex: 1,
  },
})

const ReflectionQuestionTool = React.memo(({
  bookId,
  toolUid,
  inEditMode,
  viewingPreview,

  question,

  books,
  userDataByBookId,

  updateToolEngagement,
}) => {

  const { isDefaultClassroom, classroomUid, selectedTool } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const [ answerValue, setAnswerValue ] = useState((!viewingPreview && (selectedTool.engagement || {}).text) || "")

  const [ setAnswerSaveTimeout ] = useSetTimeout({ fireOnUnmount: true })

  const goUpdateEngagement = useCallback(
    updates => {

      updateToolEngagement({
        bookId,
        classroomUid,
        toolUid,
        ...updates,
      })

    },
    [ bookId, classroomUid, toolUid ],
  )

  const onChangeText = useCallback(
    text => {
      setAnswerValue(text)

      if(!viewingPreview) {
        setAnswerSaveTimeout(
          () => goUpdateEngagement({ text }),
          300,
        )
      }
    },
    [ goUpdateEngagement ],
  )

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {question}
      </Text>
      <TextInput
        placeholder={i18n("Enter your answer here.")}
        multiline
        value={answerValue}
        onChangeText={onChangeText}
        style={styles.answer}
      />
      <Text style={styles.info}>
        {isDefaultClassroom
          ? i18n("This is a reflection question. Your answer is private.")
          : i18n("This is a reflection question. Your answer may be seen by you and your instructor(s).")
        }
      </Text>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReflectionQuestionTool)