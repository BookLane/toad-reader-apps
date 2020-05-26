import React from "react"
import { i18n } from "inline-i18n"

import { fractionToPercent, concatText } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryStack, VictoryLegend, VictoryLabel } from "./Victory"
import EnhancedAnalyticsScrollContainer from '../basic/EnhancedAnalyticsScrollContainer'

const EnhancedAnalyticsQuizScores = React.memo(({
  averageScoresByQuiz,
  width,
}) => {

  const showInCondensedMode = width / averageScoresByQuiz.length < 90
  const minWidth = Math.max(averageScoresByQuiz.length * 35, width)

  const chart = (
    <VictoryChart
      theme={VictoryTheme.customMaterial}
      width={minWidth}
      height={360}
      padding={{
        bottom: showInCondensedMode ? 60 : 30,
        top: 80,
      }}
      domainPadding={{
        y: 0,
        x: (minWidth / averageScoresByQuiz.length) / 2
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

export default EnhancedAnalyticsQuizScores