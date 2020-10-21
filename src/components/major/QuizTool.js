import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { ViewPager, Button, RadioGroup, Radio } from "@ui-kitten/components"

import { shuffleArray } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { submitToolEngagement } from "../../redux/actions"

const radio = {
  borderWidth: 1,
  borderColor: 'transparent',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    padding: 30,
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
    fontWeight: '500',
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
    fontWeight: '300',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 200,
    paddingBottom: 20,
  },
  feedback: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    fontWeight: '700',
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
    fontWeight: '700',
  },
  note: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
    fontWeight: '300',
  },
})

const QuizTool = React.memo(({
  bookId,
  toolUid,
  viewingPreview,

  questions,
  shuffle,

  books,

  submitToolEngagement,
}) => {

  const [ pageIndex, setPageIndex ] = useState(0)
  const [ selectedAnswers, setSelectedAnswers ] = useState([])
  const [ currentQuestionSubmitted, setCurrentQuestionSubmitted ] = useState(false)

  const { classroomUid, isDefaultClassroom } = useClassroomInfo({ books, bookId })

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
      if(q.question.shuffle) {
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

  const checkAnswer = useCallback(
    () => {
      if(currentQuestionSubmitted) return

      setCurrentQuestionSubmitted(true)
      
      if(!viewingPreview && pageIndex === questions.length - 1) {
        const score = numAnsweredCorrectly / preppedQuestions.length

        submitToolEngagement({
          bookId,
          classroomUid,
          toolUid,
          answers: selectedAnswers,
          score,
        })
      }
    },
    [ currentQuestionSubmitted, pageIndex, viewingPreview, questions, selectedAnswers, numAnsweredCorrectly, bookId, classroomUid, toolUid ],
  )

  return (
    <ViewPager
      style={styles.viewPager}
      selectedIndex={pageIndex}
      // onSelect={setSelectedIndex}
    >
      {preppedQuestions.map(({ question: { question, answers, answersSelection }, origQuestionIdx }, pageIdx) => (
        <ScrollView
          key={origQuestionIdx}
          contentContainerStyle={styles.page}
        >
          {isDefaultClassroom && pageIdx === 0 &&
            <Text style={styles.note}>
              {i18n("Note: No one will see your score since you are not within a classroom.")}
            </Text>
          }
          <View style={styles.questionContainer}>
            <View style={styles.question}>
              <Text style={styles.questionText}>{question}</Text>
              <RadioGroup
                style={styles.choices}
                selectedIndex={answers.map(({ origAnswerIdx }) => (selectedAnswers[origQuestionIdx] === origAnswerIdx)).indexOf(true)}
                onChange={chosenIndex => {
                  if(currentQuestionSubmitted) return
                  const newSelectedAnswers = [ ...selectedAnswers ]
                  newSelectedAnswers[origQuestionIdx] = answers[chosenIndex].origAnswerIdx
                  setSelectedAnswers(newSelectedAnswers)
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
                    ? i18n("Correct!", "", "enhanced")
                    : (
                      <Text style={styles.feedbackCorrect}>
                        {i18n("Whoops. That’s incorrect.", "", "enhanced")}
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
                    onPress={checkAnswer}
                  >
                    {i18n("Check my answer", "", "enhanced")}
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
                      ? i18n("View my score", "", "enhanced")
                      : i18n("Go to next question", "", "enhanced")
                    }
                  </Button>
                </View>
              }
            </View>
          </View>
        </ScrollView>
      ))}
      <View style={styles.container}>
        <Text style={styles.score}>
          {i18n(
            "Score: {{percent}}%",
            "",
            "enhanced",
            {
              percent: Math.round((numAnsweredCorrectly / preppedQuestions.length) * 100),
            },
          )}
        </Text>
        {!isDefaultClassroom &&
          <Text style={styles.note}>
            {i18n("Your instructor(s) will see your latest score.")}
          </Text>
        }
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              setSelectedAnswers([])
              setPageIndex(0)
              executeShuffles()
            }}
          >
            {i18n("Retake this quiz", "", "enhanced")}
          </Button>
        </View>
      </View>
    </ViewPager>
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  submitToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(QuizTool)