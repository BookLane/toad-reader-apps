import React from "react"

import { getHoursMinutesStr, concatText } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar } from "./Victory"

const EnhancedAnalyticsReadingBySpine = React.memo(({
  readingBySpine,
  width,
}) => {

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={width}
      height={300}
      padding={{
        left: 0,
        right: 0,
        bottom: 30,
      }}
      domainPadding={{
        y: 20,
        x: (width / readingBySpine.length) / 2
      }}
    >

      <VictoryAxis
        tickFormat={spine => concatText({ text: spine, maxLen: 15 })}
      />

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