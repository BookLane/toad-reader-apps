import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import TextInput from "../basic/TextInput"

import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    fontWeight: 100,
    marginTop: 20,
  },
  answer: {
    outlineWidth: 0,
    paddingHorizontal: 20,
    marginHorizontal: -20,
    flex: 1,
  },
})

const ReflectionQuestionTool = React.memo(({
  bookId,

  question,

  books,
}) => {

  const [ answerValue, setAnswerValue ] = useState("")

  const { isDefaultClassroom } = useClassroomInfo({ books, bookId })

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {question}
      </Text>
      <TextInput
        placeholder={i18n("Enter your answer here.")}
        multiline
        value={answerValue}
        onChangeText={setAnswerValue}
        style={styles.answer}
      />
      <Text style={styles.info}>
        {isDefaultClassroom
          ? i18n("This is a reflection question. The answer is private.")
          : i18n("This is a reflection question and may be seen by you and your instructor(s).")
        }
      </Text>
    </View>
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReflectionQuestionTool)