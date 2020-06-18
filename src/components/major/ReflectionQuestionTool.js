import React, { useState, useCallback } from "react"
import { StyleSheet, KeyboardAvoidingView, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { updateToolEngagement } from "../../redux/actions"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useSetTimeout from '../../hooks/useSetTimeout'
import { isIPhoneX } from "../../utils/toolbox"

import TextInput from "../basic/TextInput"

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 30,
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
    textAlignVertical: 'top',
    flex: 1,
  },
})

const ReflectionQuestionTool = React.memo(({
  bookId,
  toolUid,
  viewingPreview,
  priorEngagement,

  question,

  books,

  updateToolEngagement,
}) => {

  const { isDefaultClassroom, classroomUid } = useClassroomInfo({ books, bookId })

  const [ answerValue, setAnswerValue ] = useState((!viewingPreview && (priorEngagement || {}).text) || "")

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
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={(Platform.OS === 'android' || isIPhoneX) ? 80 : 70}
      enabled={!(Platform.OS === 'android' && __DEV__)}
    >
      <Text style={styles.question}>
        {question}
      </Text>
      <TextInput
        placeholder={i18n("Enter your answer here.", "", "enhanced")}
        multiline
        value={answerValue}
        onChangeText={onChangeText}
        style={styles.answer}
      />
      <Text style={styles.info}>
        {isDefaultClassroom
          ? i18n("This is a reflection question. Your answer is private.", "", "enhanced")
          : i18n("This is a reflection question. Your answer may be seen by you and your instructor(s).", "", "enhanced")
        }
      </Text>
    </KeyboardAvoidingView>
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReflectionQuestionTool)