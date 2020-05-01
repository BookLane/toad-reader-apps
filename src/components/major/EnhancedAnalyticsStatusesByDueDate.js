import React from "react"
import { i18n } from "inline-i18n"

import { fractionToPercent } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryStack, VictoryLegend } from "./Victory"

const EnhancedAnalyticsStatusesByDueDate = React.memo(({
  readingScheduleStatuses,
  numStudents,
  fullPageWidth,
}) => {

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={fullPageWidth}
      height={340}
      padding={{
        bottom: 50,
        top: 60,
      }}
      domainPadding={{
        y: 20,
        x: (fullPageWidth / readingScheduleStatuses.length) / 2
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
          data={readingScheduleStatuses}
          x="dueDateText"
          y="ontime"
          labels={({ datum: { ontime } }) => ontime ? fractionToPercent(ontime / numStudents) : ""}
        />

        <VictoryBar
          data={readingScheduleStatuses}
          x="dueDateText"
          y="late"
          labels={({ datum: { late } }) => late ? fractionToPercent(late / numStudents) : ""}
        />

      </VictoryStack>

    </VictoryChart>
  )
})

export default EnhancedAnalyticsStatusesByDueDate