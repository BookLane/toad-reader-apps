import React, { useState, useMemo, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"
import { Select, SelectItem, IndexPath } from "@ui-kitten/components"

import { orderSpineIdRefKeyedObj, orderCfiKeyedObj } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useDashboardData from '../../hooks/useDashboardData'
import useWideMode from "../../hooks/useWideMode"

import CoverAndSpin from '../basic/CoverAndSpin'
import FAB from '../basic/FAB'

const width = 130

const container = {
  marginTop: 20,
  marginLeft: 20,
  flex: 1,
}

const scrollViewContent = {
  paddingBottom: 20,
  paddingRight: 20,
}

const selectContainer = {
  maxWidth: 400,
  marginRight: 20,
}

const question = {
  fontWeight: '600',
  fontSize: 16,
  marginTop: 25,
  marginBottom: 15,
  marginRight: 20,
}

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
    ...container,
  },
  containerWideMode: {
    ...container,
    marginLeft: 30,
  },
  selectContainer: {
    ...selectContainer,
  },
  selectContainerWideMode: {
    ...selectContainer,
    marginRight: 30,
  },
  question: {
    ...question,
  },
  questionWideMode: {
    ...question,
    marginRight: 30,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    ...scrollViewContent,
  },
  scrollViewContentWideMode: {
    ...scrollViewContent,
    paddingRight: 30,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  answer: {
    flex: 1,
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

  const { classroomUid, idpId, isDefaultClassroom, classroom, students, spines } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  const { data, error } = useDashboardData({
    classroomUid,
    idp: idps[idpId],
    accounts,
    query: "getreflectionquestions",
  })

  const [ currentQuestionUid, setCurrentQuestionUid ] = useState()

  const { orderedQuestions, answers, csvData } = useMemo(
    () => {
      const orderedQuestions = []
      const studentIndexes = {}
      const studentInfo = {}
      let studentIndex = 0
      let answers = {}
      let csvData = []

      if((data || {}).questionsByLoc) {

        orderSpineIdRefKeyedObj({ obj: data.questionsByLoc, spines }).forEach(questionssByCfi => {
          orderCfiKeyedObj({ obj: questionssByCfi }).forEach(questions => {
            questions.forEach(question => {
              orderedQuestions.push({
                ...question,
                title: question.name || i18n("Question", "", "enhanced"),
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
            ...orderedQuestions.map(({ title, question }) => `${title}\n${question}`),
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
    [ students, data, spines ],
  )

  const onSelect = useCallback(
    ({ row: index }) => setCurrentQuestionUid(orderedQuestions[index].uid),
    [ orderedQuestions ],
  )

  if(!classroomUid) return null

  if(error && !classroom.isNew) {
    return (
      <Text style={styles.error}>
        Error: {error}
      </Text>
    )
  }

  if(!data && !(error && classroom.isNew)) {
    return (
      <View style={styles.genericContainer}>
        <CoverAndSpin />
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

  if(orderedQuestions.length === 0) {
    return (
      <View style={styles.genericContainer}>
        <Text style={styles.none}>
          {i18n("This classroom does not contain any reflection questions.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  const currentQuestion = orderedQuestions.filter(({ uid }) => uid === currentQuestionUid)[0] || orderedQuestions[0]

  return (
    <View style={wideMode ? styles.containerWideMode : styles.container}>
      <View style={wideMode ? styles.selectContainerWideMode : styles.selectContainer}>
        <Select
          label={i18n("Question name", "", "enhanced")}
          style={styles.select}
          value={currentQuestion.title}
          selectedIndex={new IndexPath(orderedQuestions.indexOf(currentQuestion))}
          onSelect={onSelect}
        >
          {orderedQuestions.map(({ title }, idx) => (
            <SelectItem
              key={idx}
              title={title}
            />
          ))}
        </Select>
      </View>
      <Text style={wideMode ? styles.questionWideMode : styles.question}>
        {currentQuestion.question}
      </Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={wideMode ? styles.scrollViewContentWideMode : styles.scrollViewContent}
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
            + ".csv"
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