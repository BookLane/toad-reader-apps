import React, { useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { getDateLine, getTimeLine, orderSpineIdRefKeyedObj, orderCfiKeyedObj } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useWideMode from "../../hooks/useWideMode"
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"
import useDashboardData from "../../hooks/useDashboardData"

import CoverAndSpin from '../basic/CoverAndSpin'
import EnhancedAnalyticsTotalReading from './EnhancedAnalyticsTotalReading'
import EnhancedAnalyticsReadingBySpine from './EnhancedAnalyticsReadingBySpine'
import EnhancedAnalyticsReadingOverTime from './EnhancedAnalyticsReadingOverTime'
import EnhancedAnalyticsStatusesByDueDate from './EnhancedAnalyticsStatusesByDueDate'
import EnhancedAnalyticsQuizCompletions from './EnhancedAnalyticsQuizCompletions'
import EnhancedAnalyticsQuizScores from './EnhancedAnalyticsQuizScores'

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
  },
  chart: {
    marginVertical: 20,
  },
  chartWideMode: {
    marginVertical: 20,
    marginBottom: 40,
    marginHorizontal: 30,
  },
  chartName: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 20,
  },
  chartExpl: {
    fontWeight: '100',
    fontSize: 13,
    marginTop: -14,
    marginBottom: 20,
  },
})

const EnhancedAnalytics = React.memo(({
  bookId,

  idps,
  accounts,
  books,
  userDataByBookId,
  sidePanelSettings,
}) => {

  const { classroomUid, idpId, isDefaultClassroom, classroom, students, spines } = useClassroomInfo({ books, bookId, userDataByBookId })

  const { fullPageWidth } = useAdjustedDimensions({ sidePanelSettings })
  const wideMode = useWideMode()

  const { data, error } = useDashboardData({
    classroomUid,
    idp: idps[idpId],
    accounts,
    query: "getanalytics",
  })

  const orderedData = useMemo(
    () => {
      if(!data) return {}

      const spineLabels = {}
      spines.forEach(({ idref, label }) => {
        spineLabels[idref] = label
      })

      Object.keys(data.readingBySpine).forEach(spineIdRef => {
        data.readingBySpine[spineIdRef] = {
          minutes: data.readingBySpine[spineIdRef],
          spine: spineLabels[spineIdRef]
        }
      })

      const readingBySpine = orderSpineIdRefKeyedObj({ obj: data.readingBySpine, spines })

      const { readingOverTime } = data

      const readingScheduleStatuses = data.readingScheduleStatuses.map(({ due_at, ontime, late }) => ({
        dueAtText: `${getDateLine({ timestamp: due_at, short: true })}\n${getTimeLine({ timestamp: due_at, short: true })}`,
        ontime,
        late,
      }))

      const completionsByQuiz = []
      const averageScoresByQuiz = []

      orderSpineIdRefKeyedObj({ obj: data.quizzesByLoc, spines }).forEach(quizzesByCfi => {
        orderCfiKeyedObj({ obj: quizzesByCfi }).forEach(quizzes => {
          quizzes.forEach(({ name, data: [ completions, avgFirstScore, avgBestScore ] }) => {
            completionsByQuiz.push({
              name,
              completions,
            })
            averageScoresByQuiz.push({
              name,
              avgFirstScore,
              avgBestScore,
            })
          })
        })
      })

      return {
        readingBySpine,
        readingOverTime,
        readingScheduleStatuses,
        completionsByQuiz,
        averageScoresByQuiz,
      }
      
    },
    [ data ],
  )

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

  if(students.length === 0) {
    return (
      <View style={styles.genericContainer}>
        <Text style={styles.none}>
          {i18n("This classroom does not yet have any students.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={wideMode ? styles.chartWideMode : styles.chart}>
        <Text style={styles.chartName}>
          {i18n("Total reading", "", "enhanced")}
        </Text>
        <EnhancedAnalyticsTotalReading
          readingBySpine={orderedData.readingBySpine}
          numStudents={students.length}
        />
      </View>

      <View style={wideMode ? styles.chartWideMode : styles.chart}>
        <Text style={styles.chartName}>
          {i18n("Reading time by chapter", "", "enhanced")}
        </Text>
        <EnhancedAnalyticsReadingBySpine
          readingBySpine={orderedData.readingBySpine}
          fullPageWidth={fullPageWidth}
        />
      </View>

      <View style={wideMode ? styles.chartWideMode : styles.chart}>
        <Text style={styles.chartName}>
          {i18n("Reading over time", "", "enhanced")}
        </Text>
        <EnhancedAnalyticsReadingOverTime
          readingOverTime={orderedData.readingOverTime}
          fullPageWidth={fullPageWidth}
        />
      </View>

      <View style={wideMode ? styles.chartWideMode : styles.chart}>
        <Text style={styles.chartName}>
          {i18n("Reading schedule statuses", "", "enhanced")}
        </Text>
        <Text style={styles.chartExpl}>
          {i18n("A chapter is considered complete when a student has spent at least 5 minutes reading it.", "", "enhanced")}
        </Text>
        <EnhancedAnalyticsStatusesByDueDate
          readingScheduleStatuses={orderedData.readingScheduleStatuses}
          fullPageWidth={fullPageWidth}
          numStudents={students.length}
        />
      </View>

      <View style={wideMode ? styles.chartWideMode : styles.chart}>
        <Text style={styles.chartName}>
          {i18n("Quizzes taken", "", "enhanced")}
        </Text>
        <EnhancedAnalyticsQuizCompletions
          completionsByQuiz={orderedData.completionsByQuiz}
          fullPageWidth={fullPageWidth}
          numStudents={students.length}
        />
      </View>

      <View style={wideMode ? styles.chartWideMode : styles.chart}>
        <Text style={styles.chartName}>
          {i18n("Quiz scores", "", "enhanced")}
        </Text>
        <EnhancedAnalyticsQuizScores
          averageScoresByQuiz={orderedData.averageScoresByQuiz}
          fullPageWidth={fullPageWidth}
        />
      </View>

    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId, sidePanelSettings }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
  sidePanelSettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedAnalytics)