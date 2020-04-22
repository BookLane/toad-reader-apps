import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { RadioGroup, Radio } from "@ui-kitten/components"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import { updateToolEngagement } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    padding: 30,
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
    fontSize: 14,
    fontWeight: '100',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
})

const PollTool = React.memo(({
  bookId,
  toolUid,
  viewingPreview,

  question,
  choices,

  books,
  userDataByBookId,

  updateToolEngagement,
}) => {

  const { isDefaultClassroom, classroomUid, selectedTool } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ selectedAnswer, setSelectedAnswer ] = useState((!viewingPreview && ((selectedTool.engagement || {}).answers || [])[0]) || null)

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
    },
    [ viewingPreview, question, choices, bookId, classroomUid, toolUid ],
  )

  return (
    <View style={styles.container}>
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
                textStyle={styles.choice}
                text={choice}
              />
            ))}
          </RadioGroup>
        </View>
      </ScrollView>
      <Text style={styles.info}>
        {isDefaultClassroom
          ? i18n("This is a poll.", "", "enhanced")
          : i18n("This is a poll. Your answer may be seen by you and your instructor(s).", "", "enhanced")
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

export default connect(mapStateToProps, matchDispatchToProps)(PollTool)