import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { RadioGroup, Radio } from "@ui-kitten/components"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import { updateToolEngagement } from "../../redux/actions"
import useInstanceValue from "../../hooks/useInstanceValue"

const info = {
  marginVertical: 20,
  marginHorizontal: 30,
  textAlign: 'center',
  fontSize: 14,
  fontWeight: '200',
  fontStyle: 'italic',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 30,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  question: {
    maxWidth: 400,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  choices: {
    marginLeft: 2,
  },
  radio: {
    borderWidth: 1,
    borderColor: 'transparent',
    margin: 10,
  },
  choice: {
    fontSize: 15,
    fontWeight: '300',
  },
  info: {
    ...info,
  },
  emphasizedInfo: {
    ...info,
    fontWeight: '400',
    color: 'red',
  },
})

const PollTool = React.memo(({
  bookId,
  toolUid,
  viewingPreview,
  priorEngagement,
  logUsageEvent,

  question,
  choices,

  books,

  updateToolEngagement,
}) => {

  const { isDefaultClassroom, classroomUid } = useClassroomInfo({ books, bookId })

  const [ selectedAnswer, setSelectedAnswer ] = useState(() => {
    if(!viewingPreview) {
      const { answers } = priorEngagement || {}
      const [ answer ] = answers || []

      if(answer != null) {
        return answer
      }
    }

    return null
  })

  const getSelectedAnswer = useInstanceValue(selectedAnswer)

  const selectAnswer = useCallback(
    answer => {
      setSelectedAnswer(answer)

      if(viewingPreview) return
      
      updateToolEngagement({
        bookId,
        classroomUid,
        toolUid,
        answers: [ answer ],
      })

      if(getSelectedAnswer() == null) {
        // Only log when they first answer
        logUsageEvent({
          toolUid,
          usageType: `Poll answer`,
        })
      }

    },
    [ viewingPreview, question, choices, bookId, classroomUid, toolUid, getSelectedAnswer ],
  )

  return (
    <View style={styles.container}>
      <Text style={isDefaultClassroom ? styles.emphasizedInfo : styles.info}>
        {i18n("This is a poll.", "", "enhanced")}
        {` `}
        {isDefaultClassroom
          ? i18n("No one will see your answer since you are not within a classroom.", "", "enhanced")
          : i18n("Your answer may be seen by you and your instructor(s).", "", "enhanced")
        }
      </Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.question}>
          <Text style={styles.questionText}>{question}</Text>
          <RadioGroup
            style={styles.choices}
            selectedIndex={selectedAnswer}
            onChange={selectAnswer}
          >
            {choices.map((choice, idx) => (
              <Radio
                key={idx}
                style={styles.radio}
              >
                {eva => (
                  <Text
                    {...eva}
                    style={[
                      eva.style,
                      styles.choice,
                    ]}
                  >
                    {choice}
                  </Text>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </View>
      </ScrollView>
    </View>
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PollTool)