import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ViewPager, Button, RadioGroup, Radio } from "react-native-ui-kitten"

import { i18n } from "inline-i18n"
import { shuffleArray } from '../../utils/toolbox'
// import useClassroomInfo from '../../hooks/useClassroomInfo'

const radio = {
  borderWidth: 1,
  borderColor: 'transparent',
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '100%',
  },
  viewPager: {
    flex: 1,
  },
  page: {
    padding: 30,
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
    marginLeft: 2,
    marginBottom: 20,
  },
  radio: {
    ...radio,
    margin: 10,
  },
  correctRadio: {
    ...radio,
    padding: 10,
    backgroundColor: 'rgb(231, 236, 246)',
    borderRadius: 4,
    borderColor: 'rgb(51, 102, 255)',
  },
  choice: {
    fontSize: 15,
    fontWeight: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 200,
  },
  feedback: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 700,
    height: 20,
    lineHeight: 20,
  },
  feedbackCorrect: {
    color: 'rgb(255, 61, 113)',
  },
  score: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 700,
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
  const [ selectedAnswers, setSelectedAnswers ] = useState({})
  const [ currentQuestionSubmitted, setCurrentQuestionSubmitted ] = useState(false)

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

  const numAnsweredCorrectly = preppedQuestions.filter(({ origQuestionIdx, question: { answersSelection } }) => (
    answersSelection === selectedAnswers[origQuestionIdx]
  )).length

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
          {preppedQuestions.map(({ question: { question, answers, answersSelection }, origQuestionIdx }, pageIdx) => (
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
                    onChange={chosenIndex => {
                      if(currentQuestionSubmitted) return
                      setSelectedAnswers({
                        ...selectedAnswers,
                        [origQuestionIdx]: answers[chosenIndex].origAnswerIdx,
                      })
                    }}
                  >
                    {answers.map(({ answer, origAnswerIdx }) => {
                      const submittedAndCorrect = currentQuestionSubmitted && answersSelection === origAnswerIdx
                      return (
                        <Radio
                          key={`${origQuestionIdx}-${origAnswerIdx}`}
                          style={submittedAndCorrect ? styles.correctRadio : styles.radio}
                          textStyle={styles.choice}
                          text={answer}
                          disabled={currentQuestionSubmitted && answersSelection !== origAnswerIdx}
                        />
                      )
                  })}
                  </RadioGroup>
                  {currentQuestionSubmitted && (
                    <Text style={styles.feedback}>
                      {answersSelection === selectedAnswers[origQuestionIdx]
                        ? i18n("Correct!")
                        : (
                          <Text style={styles.feedbackCorrect}>
                            {i18n("Whoops. That’s incorrect.")}
                          </Text>
                        )
                      }
                    </Text>
                  )}
                  {!currentQuestionSubmitted &&
                    <View style={styles.buttonContainer}>
                      <Button
                        style={styles.button}
                        disabled={selectedAnswers[origQuestionIdx] == null}
                        onPress={() => setCurrentQuestionSubmitted(true)}
                      >
                        {i18n("Check my answer")}
                      </Button>
                    </View>
                  }
                  {currentQuestionSubmitted &&
                    <View style={styles.buttonContainer}>
                      <Button
                        style={styles.button}
                        onPress={() => {
                          setCurrentQuestionSubmitted(false)
                          setPageIndex(pageIdx + 1)
                        }}
                      >
                        {pageIdx === preppedQuestions.length - 1
                          ? i18n("View my score")
                          : i18n("Go to next question")
                        }
                      </Button>
                    </View>
                  }
                  {!currentQuestionSubmitted && <Text style={styles.feedback} />}
                </View>
              </View>
            </View>
          ))}
          <View style={styles.container}>
            <Text style={styles.score}>
              {i18n("Score: {{percent}}%", {
                percent: Math.round((numAnsweredCorrectly / preppedQuestions.length) * 100),
              })}
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => {
                  setSelectedAnswers({})
                  setPageIndex(0)
                  executeShuffles()
                }}
              >
                {i18n("Retake this quiz")}
              </Button>
            </View>
          </View>
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