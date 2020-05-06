import React from "react"
import { i18n } from "inline-i18n"

import { fractionToPercent, concatText } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLegend } from "./Victory"

const EnhancedAnalyticsQuizCompletions = React.memo(({
  completionsByQuiz,
  width,
  numStudents,
}) => {

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={width}
      height={300}
      padding={{
        bottom: 30,
        top: 50,
      }}
      domainPadding={{
        y: 0,
        x: (width / completionsByQuiz.length) / 2
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
      />

      <VictoryBar
        data={completionsByQuiz}
        x="name"
        y="completions"
        labels={({ datum: { completions } }) => fractionToPercent(completions / numStudents)}
      />

    </VictoryChart>
  )
})

export default EnhancedAnalyticsQuizCompletions