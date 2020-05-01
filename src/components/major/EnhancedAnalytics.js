import React, { useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useWideMode from "../../hooks/useWideMode"
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"

import CoverAndSpin from '../basic/CoverAndSpin'
import EnhancedAnalyticsTotalReading from './EnhancedAnalyticsTotalReading'
import EnhancedAnalyticsReadingBySpine from './EnhancedAnalyticsReadingBySpine'
import EnhancedAnalyticsReadingOverTime from './EnhancedAnalyticsReadingOverTime'
import EnhancedAnalyticsStatusesByDueDate from './EnhancedAnalyticsStatusesByDueDate'

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

  // const { data, error } = useDashboardData({
  //   classroomUid,
  //   idp: idps[idpId],
  //   accounts,
  //   query: "getanalytics",
  // })
  let error

  const data = {
    readingBySpine: {

    },
    readingOverTime: {

    },
    readingByDueDate: [

    ],
    completionsByQuiz: {

    },
    averageScoresByQuiz: {

    },
  }

  const orderedData = {
    readingBySpine: [
      {
        minutes: 15,
        spine: 'test',
      },
      {
        minutes: 25,
        spine: 'test2',
      },
      {
        minutes: 105,
        spine: 'test3',
      },
      {
        minutes: 35,
        spine: 'test4',
      },
      {
        minutes: 5,
        spine: 'test5',
      },
      {
        minutes: 7,
        spine: 'test6',
      },
    ],
    readingOverTime: {
      startTime: 1585705612819,
      totals: [
        101,
        61,
        41,
        10,
        121,
        13,
        201,
        51,
        19,
        102,
        12,
        401,
        11,
      ],
      numReaders: [
        11,
        6,
        4,
        1,
        21,
        3,
        21,
        11,
        9,
        12,
        2,
        31,
        1,
      ],
    },
    statusesByDuesDate: [
      {
        dueDate: 'Jan 1\n3pm',
        ontime: 1,
        late: 2,
      },
      {
        dueDate: 'Jan 4\n10am',
        ontime: 4,
        late: 0,
      },
      {
        dueDate: 'Jan 5\n3pm',
        ontime: 3,
        late: 1,
      },
      {
        dueDate: 'Jan 7\n1pm',
        ontime: 2,
        late: 0,
      },
      {
        dueDate: 'Jan 10\n3pm',
        ontime: 1,
        late: 0,
      },
    ],
    completionsByQuiz: [

    ],
    averageScoresByQuiz: [

    ],
  }

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
        <EnhancedAnalyticsStatusesByDueDate
          statusesByDuesDate={orderedData.statusesByDuesDate}
          fullPageWidth={fullPageWidth}
          numStudents={students.length}
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