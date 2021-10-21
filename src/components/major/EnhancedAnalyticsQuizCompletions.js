import React from "react"
import { i18n } from "inline-i18n"
import { StyleSheet, Text } from "react-native"

import { fractionToPercent, concatText } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLegend, VictoryLabel } from "./Victory"
import EnhancedAnalyticsScrollContainer from '../basic/EnhancedAnalyticsScrollContainer'

const styles = StyleSheet.create({
  noQuizzes: {
    fontWeight: '200',
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.2)",
    alignSelf: 'center',
    padding: 20,
  },
})

const EnhancedAnalyticsQuizCompletions = React.memo(({
  completionsByQuiz,
  width,
  numStudents,
}) => {

  const showInCondensedMode = width / completionsByQuiz.length < 90
  const minWidth = Math.max(completionsByQuiz.length * 35, width)

  if(completionsByQuiz.length === 0) {
    return (
      <Text style={styles.noQuizzes}>
        {i18n("This classroom does not contain any quizzes.")}
      </Text>
    )
  }

  const chart = (
    <VictoryChart
      theme={VictoryTheme.customMaterial}
      width={minWidth}
      height={300}
      padding={{
        bottom: showInCondensedMode ? 60 : 30,
        top: 50,
      }}
      domainPadding={{
        y: 0,
        x: (minWidth / completionsByQuiz.length) / 2
      }}
    >

      <VictoryLegend
        x={5}
        y={0}
        style={{
          labels: {
            fontSize: 15,
            lineHeight: .5,
          }
        }}
        data={[
          {
            name: i18n("Percentage of students", "", "enhanced"),
            symbol: {
              fill: 'black',
            },
          },
        ]}
      />

      <VictoryAxis
        tickFormat={name => concatText({ text: name, maxLen: 15 })}
        tickLabelComponent={
          !showInCondensedMode ? undefined : (
            <VictoryLabel
              angle={30}
              textAnchor="start"
              dy={-5}
              dx={-5}
            />
          )
        }
      />

      <VictoryBar
        data={completionsByQuiz}
        x="name"
        y="completions"
        labels={({ datum: { completions } }) => fractionToPercent(completions / numStudents)}
      />

    </VictoryChart>
  )

  if(minWidth > width) {
    return (
      <EnhancedAnalyticsScrollContainer
        chart={chart}
        minWidth={minWidth}
      />
    )
  } else {
    return chart
  }

})

export default EnhancedAnalyticsQuizCompletions