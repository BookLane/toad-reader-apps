import React, { useMemo } from "react"
import { StyleSheet, View, Text, Platform, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { orderSpineIdRefKeyedObj, orderCfiKeyedObj, concatText } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useDashboardData from '../../hooks/useDashboardData'
import useWideMode from "../../hooks/useWideMode"
import dummyPolls from '../../utils/dummyPolls'
import dummyStudents from '../../utils/dummyStudents'

import { VictoryPie } from "./Victory"
import CoverAndSpin from '../basic/CoverAndSpin'
import NoStudentsBox from '../basic/NoStudentsBox'

const numAnswered=  {
  fontWeight: '200',
  fontSize: 13,
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
    flex: 1,
  },
  contentContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  poll: {
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  pollWideMode: {
    marginVertical: 20,
    marginBottom: 40,
    marginHorizontal: 30,
    width: 300,
  },
  toolName: {
    fontWeight: '600',
    fontSize: 18,
  },
  question: {
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  pieContainer: {
    marginHorizontal: 20,
    maxWidth: 300,
  },
  numAnswered: {
    ...numAnswered,
    textAlign: 'center',
  },
  numAnsweredLeft: {
    ...numAnswered,
  },
})

const EnhancedPolls = React.memo(({
  bookId,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { classroomUid, idpId, classroom, students, spines } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  const { data, error } = useDashboardData({
    classroomUid,
    idp: idps[idpId],
    accounts,
    query: "getpolls",
  })

  const { orderedPolls } = useMemo(
    () => {
      let orderedPolls = []

      if((data || {}).pollsByLoc) {
        orderSpineIdRefKeyedObj({ obj: data.pollsByLoc, spines }).forEach(pollsByCfi => {
          orderCfiKeyedObj({ obj: pollsByCfi }).forEach(polls => {
            orderedPolls = [
              ...orderedPolls,
              ...polls,
            ]
          })
        })
      }

      if(students.length === 0 || orderedPolls.length === 0) return dummyPolls

      return { orderedPolls }
    },
    [ data, spines ],
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

  return (
    <ScrollView
      style={styles.container}
    >

      {(students.length === 0 || orderedPolls.length === 0) &&
        <NoStudentsBox
          message={
            students.length !== 0
            && i18n("This classroom does not contain any polls.", "", "enhanced")
          }
        />
      }

      <View style={styles.contentContainer}>

        {orderedPolls.map(({ name, question, choices, userIdsByChoiceIndex }, idx) => {
          const numResponses = userIdsByChoiceIndex.reduce((total, userIds) => total + (userIds || []).length, 0)

          return (
            <View
              key={idx}
              style={wideMode ? styles.pollWideMode : styles.poll}
            >
              <Text style={styles.toolName}>
                {name || i18n("Poll", "", "enhanced")}
              </Text>
              <Text style={styles.question}>
                {question}
              </Text>
              {numResponses > 0 &&
                <View style={styles.pieContainer}>
                  <VictoryPie
                    width={300}
                    height={300}
                    data={userIdsByChoiceIndex
                      .map((userIds, idx) => {
                        if((userIds || []).length === 0) return null
                        const y = userIds.length
                        let x = (y > 0 && choices[idx]) || ""

                        const maxLen = 40
                        const maxLineLen = 15

                        x = concatText({ text: x, maxLen })

                        x = x.split(" ").reduce((text, word) => (
                          `${text.split("\n").slice(-1)[0]} ${word}`.length > maxLineLen
                            ? `${text}\n${word}`
                            : `${text} ${word}`
                        ), "")

                        const numStudents = i18n("{{num}} student(s)", "", "enhanced", {
                          num: y,
                        })
                        const percent = i18n("{{percent}}%", "", "enhanced", {
                          percent: parseInt((y / numResponses) * 100),
                        })
                        const tooltip = `${numStudents}\n${percent}`

                        return { x, y, tooltip }
                      })
                      .filter(Boolean)
                  }
                    events={[{
                      target: "data",
                      eventHandlers: {
                        [Platform.OS === 'web' ? 'onClick' : 'onPress']: () => {
                          return [
                            {
                              target: "labels",
                              mutation: ({ text, datum: { tooltip } }) => {
                                return text === tooltip ? null : { text: tooltip }
                              }
                            }
                          ]
                        }
                      }
                    }]}              
                    colorScale={[ "blue", "red", "green" ][idx % 3]}
                  />
                  <Text style={styles.numAnswered}>
                    {i18n("{{percent}}% of students have answered.", "", "enhanced", {
                      percent: parseInt((numResponses / (students.length || dummyStudents.length)) * 100),
                    })}
                  </Text>
                </View>
              }
              {numResponses === 0 &&
                <Text style={styles.numAnsweredLeft}>
                  {i18n("No students have answered yet.", "", "enhanced")}
                </Text>
              }
            </View>
          )
        })}
      </View>
    </ScrollView>
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedPolls)