import React, { useState, useEffect, useMemo, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"
import { Select } from "@ui-kitten/components"

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch,
         orderSpineIdRefKeyedObj, orderCfiKeyedObj } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import CoverAndSpin from '../basic/CoverAndSpin'
import FAB from '../basic/FAB'

const width = 130

const styles = StyleSheet.create({
  error: {
    marginVertical: 20,
    marginHorizontal: 30,
    textAlign: 'center',
    paddingTop: 50,
    color: 'red',
    fontSize: 17,
  },
  none: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 16,
    fontWeight: '100',
  },
  genericContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  container: {
    marginTop: 20,
    marginLeft: 30,
    flex: 1,
  },
  selectContainer: {
    maxWidth: 400,
  },
  question: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 25,
    marginBottom: 15,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
    paddingRight: 30,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  answer: {
  },
  student: {
    width,
    minWidth: width,
    maxWidth: width,
    marginRight: 15,
    fontWeight: '200',
  },
})

const EnhancedReflectionQuestions = React.memo(({
  bookId,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { classroomUid, idpId, isDefaultClassroom, classroom, students, toc } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ data, setData ] = useState()
  const [ error, setError ] = useState()
  const [ currentQuestionUid, setCurrentQuestionUid ] = useState()

  const accountId = Object.keys(accounts)[0] || ""

  useEffect(
    () => {

      (async () => {

        setData()

        const path = `${getDataOrigin(idps[idpId])}/getreflectionquestions/${classroomUid}`
        let response = {}

        try {
          response = await safeFetch(path, getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": accounts[accountId].cookie,
            },
          }))
        } catch(err) {
          response.statusText = err.message || 'Internet connection error'
          response.status = 500
        }

        const json = response.json ? await response.json() : {}

        if(response.status >= 400) {
          setError(json.error || response.statusText || 'Unknown error')
          return
        }

        setData(json)

      })()

    },
    [ classroomUid ],
  )

  const { orderedQuestions, answers, csvData } = useMemo(
    () => {
      const orderedQuestions = []
      const studentIndexes = {}
      const studentInfo = {}
      let studentIndex = 0
      let answers = {}
      let csvData = []

      if((data || {}).questionsByLoc) {

        orderSpineIdRefKeyedObj({ obj: data.questionsByLoc, toc }).forEach(questionssByCfi => {
          orderCfiKeyedObj({ obj: questionssByCfi }).forEach(questions => {
            questions.forEach(question => {
              orderedQuestions.push({
                ...question,
                text: question.name || i18n("Reflection question", "", "enhanced"),
              })
            })
          })
        })

        students.forEach(info => {
          studentIndexes[info.user_id] = studentIndex++
          studentInfo[info.user_id] = info
        })

        orderedQuestions.forEach(question => {
          answers[question.uid] = question.answers
        })

        csvData = [
          [
            i18n("Student", "", "enhanced"),
            i18n("Email", "", "enhanced"),
            ...orderedQuestions.map(({ text, question }) => `${text}\n${question}`),
          ],
          ...students.map(({ user_id, fullname, email }, idx) => ([
            fullname,
            email,
            ...orderedQuestions.map(({ uid }) => ((answers[uid] || {})[user_id] || "")),
          ]))
        ]

      }

      return { orderedQuestions, answers, csvData }
    },
    [ students, data, toc ],
  )

  const onSelect = useCallback(({ uid }) => setCurrentQuestionUid(uid), [])

  if(!classroomUid) return null

  if(error) {
    return (
      <Text style={styles.error}>
        Error: {error}
      </Text>
    )
  }

  if(!data) {
    return (
      <View style={styles.genericContainer}>
        <CoverAndSpin />
      </View>
    )
  }

  if(orderedQuestions.length === 0) {
    return (
      <View style={styles.genericContainer}>
        <Text style={styles.none}>
          {i18n("This classroom does not contain any reflection questions.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  if(students.length === 0) {
    return (
      <View style={styles.genericContainer}>
        <Text style={styles.none}>
          {i18n("This classroom does not yet have any students.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  const currentQuestion = orderedQuestions.filter(({ uid }) => uid === currentQuestionUid)[0] || orderedQuestions[0]

  return (
    <View style={styles.container}>
      <View style={styles.selectContainer}>
        <Select
          label={i18n("Question name", "", "enhanced")}
          style={styles.select}
          data={orderedQuestions}
          selectedOption={currentQuestion}
          onSelect={onSelect}
        />
      </View>
      <Text style={styles.question}>
        {currentQuestion.question}
      </Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {students.map(({ user_id, fullname, email }) => (
          <View style={styles.row} key={user_id}>
            <Text style={styles.student}>
              {fullname || email}
            </Text>
            <Text style={styles.answer}>
              {(answers[currentQuestion.uid] || {})[user_id] || ""}
            </Text>
          </View>
        ))}
      </ScrollView>
      {Platform.OS === 'web' &&
        <CSVLink
          data={csvData}
          filename={
            i18n("Reflection question answers")
            + " - "
            + (isDefaultClassroom
              ? i18n("Enhanced book", "", "enhanced")
              : (classroom || "").name
            )
            + " - "
            + new Date().toDateString()
          }
          target="_blank"
        >
          <FAB
            iconName="md-cloud-download"
            status="primary"
          />
        </CSVLink>
      }
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedReflectionQuestions)