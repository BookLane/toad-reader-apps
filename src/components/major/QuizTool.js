import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ViewPager, Button, RadioGroup, Radio } from "react-native-ui-kitten"

import { i18n } from "inline-i18n"
import { shuffleArray } from '../../utils/toolbox'
// import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
  },
  viewPager: {
    flex: 1,
  },
  page: {
    padding: 20,
    flex: 1,
    overflowY: 'auto',
  },
  spacerBeforePage: {
    flex: 1,
  },
  spacerAfterPage: {
    flex: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  question: {
    maxWidth: 400,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 10,
  },
  choices: {
    marginLeft: 10,
    marginBottom: 20,
  },
  radio: {
    marginVertical: 8,
  },
  choice: {
    fontSize: 15,
    fontWeight: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const returnTrue = () => true

const ReflectionQuestionTool = React.memo(({
  // bookId,

  questions,
  shuffle,

  // books,
}) => {

  const [ pageIndex, setPageIndex ] = useState("")
  const [ selectedAnswers, setSelectedAnswers ] = useState("")

  // const { isDefaultClassroom } = useClassroomInfo({ books, bookId })

  const executeShuffles = returnResult => {
    let preppedQs = (questions || []).map((question, origQuestionIdx) => ({ question, origQuestionIdx }))
    if(shuffle) {
      preppedQs = shuffleArray(preppedQs)
    }

    preppedQs.forEach(q => {
      q.question = {
        ...q.question,
        answers: (q.question.answers || []).map((answer, origAnswerIdx) => ({ answer, origAnswerIdx })),
      }
      if(shuffle) {
        q.question.answers = shuffleArray(q.question.answers)
      }
    })

    if(returnResult) return preppedQs
    setPreppedQuestions(preppedQs)
  }

  const [ preppedQuestions, setPreppedQuestions ] = useState(executeShuffles(true))

  return (
    <>
      <View style={styles.spacerBeforePage} />
      <View
        style={styles.container}
        onMoveShouldSetResponderCapture={returnTrue}
      >
        <ViewPager
          style={styles.viewPager}
          selectedIndex={pageIndex}
          // onSelect={setSelectedIndex}
        >
          {preppedQuestions.map(({ question: { question, answers }, origQuestionIdx }, pageIdx) => (
            <View
              key={origQuestionIdx}
              style={styles.page}
            >
              <View style={styles.questionContainer}>
                <View style={styles.question}>
                  <Text style={styles.questionText}>{question}</Text>
                  <RadioGroup
                    style={styles.choices}
                    selectedIndex={answers.map(({ origAnswerIdx }) => (selectedAnswers[origQuestionIdx] === origAnswerIdx)).indexOf(true)}
                    onChange={chosenIndex => console.log('chosenIndex', chosenIndex) || setSelectedAnswers({
                      ...selectedAnswers,
                      [origQuestionIdx]: answers[chosenIndex].origAnswerIdx,
                    })}
                  >
                    {answers.map(({ answer, origAnswerIdx }) => (
                      <Radio
                        key={`${origQuestionIdx}-${origAnswerIdx}`}
                        style={styles.radio}
                        textStyle={styles.choice}
                        text={answer}
                      />
                    ))}
                  </RadioGroup>
                  <View style={styles.buttonContainer}>
                    <Button
                      style={styles.nextButton}
                      onPress={() => console.log('hi') || setPageIndex(pageIdx + 1)}
                      size="small"
                    >
                      {i18n("Next")}
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ViewPager>
      </View>
      <View style={styles.spacerAfterPage} />
    </>
  )
})

const mapStateToProps = ({ books }) => ({
  // books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReflectionQuestionTool)