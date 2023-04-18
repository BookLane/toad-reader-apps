import React, { useMemo } from "react"
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"

import { orderSpineIdRefKeyedObj, orderCfiKeyedObj } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useDashboardData from '../../hooks/useDashboardData'
import useWideMode from "../../hooks/useWideMode"
import dummyStudents from '../../utils/dummyStudents'
import dummyScores from '../../utils/dummyScores'

import CoverAndSpin from '../basic/CoverAndSpin'
import NoStudentsBox from '../basic/NoStudentsBox'
import FAB from '../basic/FAB'

const height = 35
const margin = 10
const paddingTop = 30
const paddingBottom = 10

const cell = {
  maxWidth: 150,
  height,
  minHeight: height,
  maxHeight: height,
  margin,
}

const cellText = {
  fontWeight: '300',
  textAlign: 'center',
}

const cellContainer = {
  alignItems: 'flex-end',
  flexDirection: 'row',
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
  genericContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  containerWideMode: {
    marginLeft: 30,
    flex: 1,
  },
  containerScrollView: {
    flex: 1,
    minHeight: '100%',
  },
  containerScrollViewContent: {
    flex: 1,
    minHeight: '100%',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  scoreExpl: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontWeight: '200',
  },
  students: {
    backgroundColor: 'rgb(247, 249, 252)',
    flexDirection: 'column',
    paddingTop,
    paddingBottom,
    minHeight: '100%',
  },
  scrollView: {
    flex: 1,
    minHeight: '100%',
  },
  scrollViewContent: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop,
    paddingBottom,
    paddingRight: 30,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    minWidth: 340,
  },
  none: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 16,
    fontWeight: '100',
  },
  row: {
    flexDirection: 'row',
  },
  headerCellContainer: {
    ...cell,
    ...cellContainer,
  },
  headerCell: {
    ...cellText,
    fontWeight: '600',
  },
  cell: {
    ...cell,
    ...cellText,
  },
  studentNameCell: {
    ...cell,
    ...cellText,
    textAlign: 'left',
  },
})

const EnhancedScores = React.memo(({
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
    query: "getscores",
  })

  const { dataColumns, csvData, isDummy=false } = useMemo(
    () => {
      const orderedQuizzes = []
      const studentIndexes = {}
      let studentIndex = 0
      let dataColumns = []
      let csvData = []

      if((data || {}).quizzesByLoc) {

        orderSpineIdRefKeyedObj({ obj: data.quizzesByLoc, spines }).forEach(quizzesByCfi => {
          orderCfiKeyedObj({ obj: quizzesByCfi }).forEach(quizzes => {
            quizzes.forEach(quiz => {
              orderedQuizzes.push(quiz)
            })
          })
        })
  
        students.forEach(({ user_id }) => {
          studentIndexes[user_id] = studentIndex++
        })
  
        dataColumns = orderedQuizzes.map(({ name, scores }) => {
          const scoreArray = []
  
          Object.keys(scores).forEach(userId => {
            scoreArray[studentIndexes[userId]] = scores[userId]
          })
  
          return [
            name || i18n("Quiz", "", "enhanced"),
            ...scoreArray.map(score => score == undefined ? `` : i18n("{{percent}}%", {
              percent: Math.round(score * 100),
            })),
          ]
        })

        csvData = [
          [
            i18n("Student", "", "enhanced"),
            i18n("Email", "", "enhanced"),
            ...dataColumns.map(col => col[0]),
          ],
          ...students.map(({ fullname, email }, idx) => ([
            fullname,
            email,
            ...dataColumns.map(col => col[idx + 1]),
          ]))
        ]
      }

      if(students.length === 0 || dataColumns.length === 0) return dummyScores

      return { dataColumns, csvData }
    },
    [ students, data, spines ],
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

  const columnHeightStyle = {
    height: (height + margin*2) * ((isDummy ? dummyStudents : students).length + 1) + paddingTop + paddingBottom,
  }

  return (
    <View style={wideMode ? styles.containerWideMode : styles.container}>
      <ScrollView
        style={styles.containerScrollView}
        contentContainerStyle={styles.containerScrollViewContent}
      >

        {isDummy &&
          <NoStudentsBox
            message={
              students.length !== 0
              && i18n("This classroom does not contain any quizzes.", "", "enhanced")
            }
          />
        }

        <View style={styles.content}>

          <View
            style={[
              styles.students,
              columnHeightStyle,
            ]}
          >
            <View style={styles.headerCellContainer}>
              <Text
                style={styles.headerCell}
                numberOfLines={2}
              >
                {i18n("Student", "", "enhanced")}
              </Text>
            </View>
            {(isDummy ? dummyStudents : students).map(({ fullname, email }) => (
              <Text
                key={email}
                style={styles.studentNameCell}
                numberOfLines={2}
              >
                {fullname || email}
              </Text>
            ))}
          </View>
          <ScrollView
            style={[
              styles.scrollView,
              columnHeightStyle,
            ]}
            contentContainerStyle={styles.scrollViewContent}
            horizontal={true}
          >
            <Text style={styles.scoreExpl}>
              {i18n("Scores represent each student’s latest attempt.", "", "enhanced")}
            </Text>
            {dataColumns.map((column, idx) => (
              <View
                key={idx}
                style={styles.column}
              >
                {column.map((cell, idx) => (
                  idx === 0
                    ? (
                      <View
                        key={idx}
                        style={styles.headerCellContainer}
                      >
                        <Text
                          style={styles.headerCell}
                          numberOfLines={2}
                        >
                          {cell}
                        </Text>
                      </View>
                    )
                    : (
                      <Text
                        key={idx}
                        style={styles.cell}
                        numberOfLines={2}
                      >
                        {cell}
                      </Text>
                    )
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      {Platform.OS === 'web' && !!csvData &&
        <CSVLink
          data={csvData}
          filename={
            i18n("Quiz scores", "", "enhanced")
            + " - "
            + (isDefaultClassroom
              ? i18n("Interactive book", "", "enhanced")
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedScores)