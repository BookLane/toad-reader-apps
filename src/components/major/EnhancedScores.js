import React, { useState, useEffect, useMemo } from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import CoverAndSpin from '../basic/CoverAndSpin'

const height = 35
const margin = 10
const paddingVertical = 10

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
    marginLeft: 30,
    flex: 1,
    flexDirection: 'row',
  },
  students: {
    backgroundColor: 'rgb(247, 249, 252)',
    flexDirection: 'column',
    paddingVertical,
    minHeight: '100%',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexDirection: 'row',
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
  headerCell: {
    ...cellText,
    fontWeight: '600',
  },
  cell: {
    ...cell,
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

  const dataColumns = useMemo(
    () => {
      const orderedQuizzes = []
      const studentIndexes = {}
      let studentIndex = 0
      let dataColumns = []

      if((data || {}).students) {

        // TODO: sort spines
        Object.values(data.quizzesByLoc).forEach(quizzesByCfi => {
          // TODO: sort cfis
          Object.values(quizzesByCfi).forEach(quizzes => {
            quizzes.forEach(quiz => {
              orderedQuizzes.push(quiz)
            })
          })
        })
  
        data.students.forEach(({ id }) => {
          studentIndexes[id] = studentIndex++
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

      }

      return dataColumns
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

  if(dataColumns.length === 0) {
    return (
      <View style={styles.genericContainer}>
        <Text style={styles.none}>
          {i18n("This classroom does not contain any quizzes.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  if(data.students.length === 0) {
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
      <View
        style={[
          styles.students,
          {
            height: (height + margin*2) * (data.students.length + 1) + paddingVertical*2,
          },
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
        {data.students.map(({ fullname }) => (
          <Text
            style={styles.cell}
            numberOfLines={2}
          >
            {fullname}
          </Text>
        ))}
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        horizontal={true}
      >
        {dataColumns.map(column => (
          <View style={styles.column}>
            {column.map((cell, idx) => (
              idx === 0
                ? (
                  <View style={styles.headerCellContainer}>
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