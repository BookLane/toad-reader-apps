import React from "react"
import { i18n } from "inline-i18n"

import { fractionToPercent } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryStack, VictoryLegend, VictoryLabel } from "./Victory"
import EnhancedAnalyticsScrollContainer from '../basic/EnhancedAnalyticsScrollContainer'

const EnhancedAnalyticsStatusesByDueDate = React.memo(({
  readingScheduleStatuses,
  numStudents,
  width,
}) => {

  const showInCondensedMode = width / readingScheduleStatuses.length < 60
  const minWidth = Math.max(readingScheduleStatuses.length * 35, width)

  const chart = (
    <VictoryChart
      theme={VictoryTheme.customMaterial}
      width={minWidth}
      height={340}
      padding={{
        bottom: showInCondensedMode ? 60 : 50,
        top: 60,
      }}
      domainPadding={{
        y: 20,
        x: (minWidth / readingScheduleStatuses.length) / 2
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

      <VictoryAxis
        tickFormat={
          !showInCondensedMode ? undefined : (
            tickLabel => {
              const [ date, time ] = tickLabel.split(/\n/)
              return i18n("{{date}}, {{time}}", "", "enhanced", { date, time })
            }
          )
        }
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
          data={readingScheduleStatuses}
          x="dueAtText"
          y="ontime"
          labels={({ datum: { ontime } }) => ontime ? fractionToPercent(ontime / numStudents) : ""}
        />

        <VictoryBar
          data={readingScheduleStatuses}
          x="dueAtText"
          y="late"
          labels={({ datum: { late } }) => late ? fractionToPercent(late / numStudents) : ""}
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

export default EnhancedAnalyticsStatusesByDueDate