import React from "react"
import { i18n } from "inline-i18n"

import { fractionToPercent, concatText } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryStack, VictoryLegend } from "./Victory"

const EnhancedAnalyticsQuizScores = React.memo(({
  averageScoresByQuiz,
  width,
}) => {

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={width}
      height={360}
      padding={{
        bottom: 50,
        top: 80,
      }}
      domainPadding={{
        y: 0,
        x: (width / averageScoresByQuiz.length) / 2
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
        colorScale="heatmap"
        data={[
          {
            name: i18n("Average score on first attempt", "", "enhanced"),
          },
          {
            name: i18n("Average best score", "", "enhanced"),
          },
        ]}
      />

      <VictoryAxis
        tickFormat={name => concatText({ text: name, maxLen: 15 })}
      />

      <VictoryStack
        colorScale="heatmap"
      >

        <VictoryBar
          data={averageScoresByQuiz}
          x="name"
          y="avgFirstScore"
          labels={({ datum: { avgFirstScore } }) => avgFirstScore ? fractionToPercent(avgFirstScore) : ""}
          labels={({ datum: { avgBestScore, avgFirstScore } }) => (
            (avgFirstScore && avgBestScore - avgFirstScore > .1)
              ? fractionToPercent(avgFirstScore)
              : ""
          )}
        />

        <VictoryBar
          data={
            averageScoresByQuiz.map(({ name, avgFirstScore, avgBestScore }) => ({
              name,
              avgBestScore,
              avgBestScoreImprovement: avgBestScore - avgFirstScore,
            }))
          }
          x="name"
          y="avgBestScoreImprovement"
          labels={({ datum: { avgBestScore } }) => avgBestScore ? fractionToPercent(avgBestScore) : ""}
        />

      </VictoryStack>

    </VictoryChart>
  )
})

export default EnhancedAnalyticsQuizScores