import React, { useState, useEffect, useMemo } from "react"
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch, getDateLine,
         getTimeLine, combineItems, orderSpineIdRefKeyedObj, orderCfiKeyedObj } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import CoverAndSpin from '../basic/CoverAndSpin'
import FAB from '../basic/FAB'

const height = 35
const margin = 10
const paddingVertical = 10

const cell = {
  height,
  minHeight: height,
  maxHeight: height,
  margin,
}

const cellText = {
  fontWeight: '300',
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
  },
  containerScrollView: {
    flex: 1,
    minHeight: '100%',
  },
  containerScrollViewContent: {
    flex: 1,
    minHeight: '100%',
    flexDirection: 'row',
  },
  quizNames: {
    backgroundColor: 'rgb(247, 249, 252)',
    flexDirection: 'column',
    paddingVertical,
    minHeight: '100%',
  },
  scrollView: {
    flex: 1,
    minHeight: '100%',
  },
  scrollViewContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 30,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  none: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 16,
    fontWeight: '100',
  },
  cell: {
    ...cell,
    ...cellText,
  },
  quizNameCell: {
    ...cell,
    ...cellText,
    maxWidth: 150,
  },
  previousAttempts: {
    fontWeight: '100',
  },
})

const EnhancedMyScores = React.memo(({
  bookId,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { classroomUid, idpId, isDefaultClassroom, classroom, spines } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ data, setData ] = useState()
  const [ error, setError ] = useState()

  const accountId = Object.keys(accounts)[0] || ""

  useEffect(
    () => {

      (async () => {

        setData()

        const path = `${getDataOrigin(idps[idpId])}/getmyscores/${classroomUid}`
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

  const { dataRows, csvData } = useMemo(
    () => {
      const dataRows = []
      const csvData = [
        [
          i18n("Quiz name", "", "enhanced"),
          i18n("Most recent score", "", "enhanced"),
          i18n("Most recent attempt date", "", "enhanced"),
          i18n("Most recent attempt time", "", "enhanced"),
          i18n("Most recent attempt raw date and time", "", "enhanced"),
          i18n("Previous attempts", "", "enhanced"),
        ],
      ]

      if((data || {}).quizzesByLoc) {
        orderSpineIdRefKeyedObj({ obj: data.quizzesByLoc, spines }).forEach(quizzesByCfi => {
          orderCfiKeyedObj({ obj: quizzesByCfi }).forEach(quizzes => {
            quizzes.forEach(({ name, scores }) => {
              const formattedScores = scores.map(({ score, submitted_at }, idx) => (
                score == undefined
                  ? ``
                  : i18n("{{percent}}% ({{date}})", "", "enhanced", {
                      percent: Math.round(score * 100),
                      date: getDateLine({ timestamp: submitted_at, short: true }),
                    })
              ))

              dataRows.push({
                name: name || i18n("Quiz", "", "enhanced"),
                scores: formattedScores,
              })

              const { score, submitted_at } = scores[0] || {}
              csvData.push([
                name || i18n("Quiz", "", "enhanced"),
                score || ``,
                submitted_at ? getDateLine({ timestamp: submitted_at }) : ``,
                submitted_at ? getTimeLine({ timestamp: submitted_at }) : ``,
                submitted_at ? new Date(submitted_at).toString() : ``,
                formattedScores.slice(1).join("\n"),
              ])
            })
          })
        })
      }

      return { dataRows, csvData }
    },
    [ data, spines ],
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

  if(dataRows.length === 0) {
    return (
      <View style={styles.genericContainer}>
        <Text style={styles.none}>
          {i18n("This classroom does not contain any quizzes.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  const columnHeightStyle = {
    height: (height + margin*2) * dataRows.length + paddingVertical*2,
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.containerScrollView}
        contentContainerStyle={styles.containerScrollViewContent}
      >
        <View
          style={[
            styles.quizNames,
            columnHeightStyle,
          ]}
        >
          {dataRows.map(({ name }, idx) => (
            <Text
              key={idx}
              style={styles.quizNameCell}
              numberOfLines={2}
            >
              {name}
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
          {dataRows.map(({ scores }, idx) => (
            <Text
              key={idx}
              style={styles.cell}
              numberOfLines={2}
            >
              {scores[0]}
              {"   "}
              {scores.length > 1 &&
                <Text style={styles.previousAttempts}>
                  {i18n("Previous attempts: {{scores}}", "", "enhanced", { scores: combineItems(...scores.slice(1)) })}
                </Text>
              }
            </Text>
          ))}
        </ScrollView>
      </ScrollView>
      {Platform.OS === 'web' &&
        <CSVLink
          data={csvData}
          filename={
            i18n("My scores")
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedMyScores)