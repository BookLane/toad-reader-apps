import React, { useState, useEffect, useMemo } from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import CoverAndSpin from '../basic/CoverAndSpin'

const width = 130
const height = 35
const margin = 10
const paddingVertical = 10

const cell = {
  width,
  minWidth: width,
  maxWidth: width,
  height,
  minHeight: height,
  maxHeight: height,
  margin,
}

const cellText = {
  fontWeight: '300',
}

const studentCell = {
  minWidth: 'auto',
  width: 'auto',
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
  container: {
    marginLeft: 30,
    flex: 1,
    flexDirection: 'row',
  },
  students: {
    backgroundColor: 'rgba(0,0,0,.04)',
    flexDirection: 'column',
    paddingVertical,
    minHeight: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 30,
    flex: 'none',
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
  studentHeaderCellContainer: {
    ...cell,
    ...studentCell,
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
  studentHeaderCell: {
    ...cellText,
    fontWeight: '600',
  },
  studentCell: {
    ...cell,
    ...studentCell,
    ...cellText,
  },
})

const EnhancedScores = React.memo(({
  bookId,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { classroomUid, idpId } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ data, setData ] = useState()
  const [ error, setError ] = useState()

  const accountId = Object.keys(accounts)[0] || ""

  useEffect(
    () => {

      (async () => {

        setData()

        const path = `${getDataOrigin(idps[idpId])}/getscores/${classroomUid}`
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

  const { students, headerRow, dataRows } = useMemo(
    () => {
      if(!(data || {}).studentsWithScores) return {}

      const students = []
      const quizzes = {}
      const headerRow = []
      let quizIndex = 0

      const addHeaderRows = info => {
        info.forEach(({ uid, name }) => {
          if(!quizzes[uid]) {
            quizzes[uid] = quizIndex++
            headerRow.push(name || i18n("Quiz", "", "enhanced"))
          }
        })
      }

      addHeaderRows(data.quizzesWithoutScores)
      data.studentsWithScores.forEach(({ scores }) => addHeaderRows(scores))

      const dataRows = data.studentsWithScores.map(({ user, scores }) => {
        const scoreArray = []

        scores.forEach(({ uid, score }) => {
          scoreArray[quizzes[uid]] = score
        })

        students.push(user.fullname)

        return scoreArray.map(score => i18n("{{percent}}%", {
          percent: Math.round(score * 100),
        }))
      })

      return { students, headerRow, dataRows }
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
      <View style={styles.container}>
        <CoverAndSpin />
      </View>
    )
  }

  if(headerRow.length === 1) {
    return (
      <View style={styles.container}>
        <Text style={styles.none}>
          {i18n("This classroom does not contain any quizzes.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  if(dataRows.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.none}>
          {i18n("This classroom does not yet have any students.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.students,
          {
            height: (height + margin*2) * (students.length + 1) + paddingVertical*2,
          },
        ]}
      >
        <View style={styles.studentHeaderCellContainer}>
          <Text
            style={styles.studentHeaderCell}
            numberOfLines={2}
          >
            {i18n("Student", "", "enhanced")}
          </Text>
        </View>
        {students.map(cell => (
          <Text
            style={styles.studentCell}
            numberOfLines={2}
          >
            {cell}
          </Text>
        ))}
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        horizontal={true}
      >
        <View style={styles.row}>
          {headerRow.map(cell => (
            <View style={styles.headerCellContainer}>
              <Text
                style={styles.headerCell}
                numberOfLines={2}
              >
                {cell}
              </Text>
            </View>
          ))}
        </View>
        {dataRows.map(row => (
          <View style={styles.row}>
            {row.map(cell => (
              <Text
                style={styles.cell}
                numberOfLines={2}
              >
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
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