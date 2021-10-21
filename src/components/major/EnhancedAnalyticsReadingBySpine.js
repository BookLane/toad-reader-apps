import React from "react"
import { i18n } from "inline-i18n"
import { StyleSheet, Text } from "react-native"

import { getHoursMinutesStr, concatText } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryBar, VictoryLabel } from "./Victory"
import EnhancedAnalyticsScrollContainer from '../basic/EnhancedAnalyticsScrollContainer'

const styles = StyleSheet.create({
  notEnoughData: {
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

const EnhancedAnalyticsReadingBySpine = React.memo(({
  readingBySpine,
  width,
}) => {

  const showInCondensedMode = width / readingBySpine.length < 90
  const minWidth = Math.max(readingBySpine.length * 35, width)

  if(readingBySpine.length === 0) {
    return (
      <Text style={styles.notEnoughData}>
        {i18n("There is not yet enough data to display this chart.")}
      </Text>
    )
  }

  const chart = (
    <VictoryChart
      theme={VictoryTheme.customMaterial}
      width={minWidth}
      height={300}
      padding={{
        left: 0,
        right: 0,
        bottom: showInCondensedMode ? 60 : 30,
      }}
      domainPadding={{
        y: 20,
        x: (minWidth / readingBySpine.length) / 2
      }}
    >

      <VictoryAxis
        tickFormat={spine => concatText({ text: spine, maxLen: 15 })}
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
        data={readingBySpine}
        x="spine"
        y="minutes"
        labels={({ datum: { minutes } }) => getHoursMinutesStr(minutes)}
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

export default EnhancedAnalyticsReadingBySpine