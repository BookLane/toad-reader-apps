import React, { useState, useEffect, useMemo } from "react"
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch,
         orderSpineIdRefKeyedObj, orderCfiKeyedObj } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import CoverAndSpin from '../basic/CoverAndSpin'
import FAB from '../basic/FAB'

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
    paddingVertical: 5,
    paddingRight: 30,
  },
  row: {
    marginVertical: 15,
  },
  toolName: {
    fontWeight: '100',
  },
  question: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
  },
  answer: {
  },
  noAnswer: {
    fontStyle: 'italic',
  },
  none: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 16,
    fontWeight: '100',
  },
})

const EnhancedMyReflectionQuestions = React.memo(({
  bookId,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { classroomUid, idpId, isDefaultClassroom, classroom, toc } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ data, setData ] = useState()
  const [ error, setError ] = useState()

  const accountId = Object.keys(accounts)[0] || ""

  useEffect(
    () => {

      (async () => {

        setData()

        const path = `${getDataOrigin(idps[idpId])}/getmyreflectionquestions/${classroomUid}`
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
      if(!data) return {}

      const dataRows = []
      const csvData = [
        [
          i18n("Question name", "", "enhanced"),
          i18n("Question", "", "enhanced"),
          i18n("My answer", "", "enhanced"),
        ],
      ]

      orderSpineIdRefKeyedObj({ obj: data.questionsByLoc, toc }).forEach(questionsByCfi => {
        orderCfiKeyedObj({ obj: questionsByCfi }).forEach(questions => {
          questions.forEach(({ name, question, answer }) => {

            if(!name) {
              name = i18n("Reflection question", "", "enhanced")
            }

            dataRows.push({
              name,
              question,
              answer,
            })

            csvData.push([
              name,
              question,
              answer,
            ])

          })
        })
      })

      return { dataRows, csvData }
    },
    [ data, toc ],
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
          {i18n("This classroom does not contain any reflection questions.", "", "enhanced")}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.containerScrollView}
        contentContainerStyle={styles.containerScrollViewContent}
      >
        {dataRows.map(({ name, question, answer }, idx) => (
          <View style={styles.row} key={idx}>
            <Text style={styles.toolName}>
              {name}
            </Text>
            <Text style={styles.question}>
              {question}
            </Text>
            <Text style={answer ? styles.answer : styles.noAnswer}>
              {answer || i18n("No answer.")}
            </Text>
          </View>
        ))}
      </ScrollView>
      {Platform.OS === 'web' &&
        <CSVLink
          data={csvData}
          filename={
            i18n("My reflection question answers")
            + " - "
            + (isDefaultClassroom
              ? i18n("Enhanced book", "", "enhanced")
              : (classroom || "").name
            )
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedMyReflectionQuestions)