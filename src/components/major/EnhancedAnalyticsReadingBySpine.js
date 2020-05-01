import React from "react"

import { getHoursMinutesStr } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar } from "./Victory"

const EnhancedAnalyticsReadingBySpine = React.memo(({
  readingBySpine,
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
        bottom: 30,
      }}
      domainPadding={{
        y: 20,
        x: (fullPageWidth / readingBySpine.length) / 2
      }}
    >
      <VictoryAxis />
      <VictoryBar
        data={readingBySpine}
        x="spine"
        y="minutes"
        labels={({ datum: { minutes } }) => getHoursMinutesStr(minutes)}
      />
    </VictoryChart>
  )
})

export default EnhancedAnalyticsReadingBySpine