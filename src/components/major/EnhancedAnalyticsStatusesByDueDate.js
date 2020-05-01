import React from "react"
import { i18n } from "inline-i18n"

import { fractionToPercent } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryStack, VictoryLegend } from "./Victory"

const EnhancedAnalyticsStatusesByDueDate = React.memo(({
  statusesByDuesDate,
  numStudents,
  fullPageWidth,
}) => {

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={fullPageWidth}
      height={300}
      padding={{
        left: 0,
        right: 0,
        bottom: 50,
      }}
      domainPadding={{
        y: 20,
        x: (fullPageWidth / statusesByDuesDate.length) / 2
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
            name: i18n("On-time", "", "enhanced"),
          },
          {
            name: i18n("Late", "", "enhanced"),
          },
        ]}
      />

      <VictoryAxis />

      <VictoryStack
        colorScale="heatmap"
      >

        <VictoryBar
          data={statusesByDuesDate}
          x="dueDate"
          y="ontime"
          labels={({ datum: { ontime } }) => ontime ? fractionToPercent(ontime / numStudents) : ""}
        />

        <VictoryBar
          data={statusesByDuesDate}
          x="dueDate"
          y="late"
          labels={({ datum: { late } }) => late ? fractionToPercent(late / numStudents) : ""}
        />

      </VictoryStack>

    </VictoryChart>
  )
})

export default EnhancedAnalyticsStatusesByDueDate