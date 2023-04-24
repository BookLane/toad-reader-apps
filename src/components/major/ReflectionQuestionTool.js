import React, { useState, useCallback, useRef } from "react"
import { StyleSheet, Text, View, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { updateToolEngagement } from "../../redux/actions"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useSetTimeout from '../../hooks/useSetTimeout'

import TextInput from "../basic/TextInput"

const info = {
  fontSize: 14,
  fontWeight: '200',
  fontStyle: 'italic',
  marginBottom: 20,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 0,
    marginHorizontal: 30,
    flex: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  info: {
    ...info,
  },
  emphasizedInfo: {
    ...info,
    fontWeight: '400',
    color: 'red',
  },
  answer: {
    ...(Platform.OS !== 'web' ? {} : { outlineStyle: 'none' }),
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
  logUsageEvent,

  question,

  books,

  updateToolEngagement,
}) => {

  const { isDefaultClassroom, classroomUid } = useClassroomInfo({ books, bookId })

  const [ answerValue, setAnswerValue ] = useState((!viewingPreview && (priorEngagement || {}).text) || "")
  const shouldLogUsage = useRef((priorEngagement || {}).text == null)

  const [ setAnswerSaveTimeout ] = useSetTimeout({ fireOnUnmount: true })

  const safeAreaInsets = useSafeAreaInsets()

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

      if(shouldLogUsage.current) {
        logUsageEvent({
          toolUid,
          usageType: `Reflection question answer`,
        })
        shouldLogUsage.current = false
      }
    },
    [ goUpdateEngagement, toolUid ],
  )

  return (
    <View style={styles.container}>
      <Text style={isDefaultClassroom ? styles.emphasizedInfo : styles.info}>
        {i18n("This is a reflection question.", "", "enhanced")}
        {` `}
        {isDefaultClassroom
          ? i18n("No one will see your answer since you are not within a classroom.", "", "enhanced")
          : i18n("Your answer may be seen by you and your instructor(s).", "", "enhanced")
        }
      </Text>
      <Text style={styles.question}>
        {question}
      </Text>
      <TextInput
        placeholder={i18n("Enter your answer here.", "", "enhanced")}
        multiline
        value={answerValue}
        onChangeText={onChangeText}
        style={[
          styles.answer,
          {
            paddingBottom: 30 + safeAreaInsets.bottom,
          },
        ]}
      />
    </View>
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReflectionQuestionTool)