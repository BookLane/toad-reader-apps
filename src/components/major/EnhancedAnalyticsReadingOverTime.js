import React, { useMemo } from "react"
import { i18n } from "inline-i18n"
import { StyleSheet, Text } from "react-native"

import { getHoursMinutesStr, getDateLine } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLine, VictoryLegend } from "./Victory"
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

const color1 = '#d62020'
const color2 = '#f1b00e'

const readingOverTimeStyles = {
  totals: {
    axis: {
      tickLabels: {
        fill: color1,
      },
    },
    line: {
      data: {
        stroke: color1,
      },
    },
  },
  numReaders: {
    axis: {
      tickLabels: {
        fill: color2,
      },
    },
    line: {
      data: {
        stroke: color2,
      },
    },
  },
}

const EnhancedAnalyticsReadingOverTime = React.memo(({
  readingOverTime,
  width,
  singleUser,
}) => {

  const minWidth = readingOverTime.totals.length < 5 ? width : Math.max(500, width)

  const { readingOverTimeTotalsData, readingOverTimeNumReadersData, maxTotal, maxNumReaders } = useMemo(
    () => {
      const getCleanMax = ary => {
        const max = Math.max(...ary)
        return (
          max > 25
            ? Math.ceil(max / 10) * 10
            : (
              max > 10
                ? Math.ceil(max / 5) * 5
                : max
            )
        )
      }

      const maxTotal = getCleanMax(readingOverTime.totals)
      const maxNumReaders = getCleanMax(readingOverTime.numReaders)

      return {
        readingOverTimeTotalsData: readingOverTime.totals.map((total, idx) => ({
          idx,
          total: total / maxTotal,
        })),
        readingOverTimeNumReadersData: readingOverTime.numReaders.map((num, idx) => ({
          idx,
          num: num / maxNumReaders,
        })),
        maxTotal,
        maxNumReaders
      }
    },
    [ readingOverTime ],
  )

  if(readingOverTime.totals.length < 2) {
    return (
      <Text style={styles.notEnoughData}>
        {i18n("There is not yet enough data to display this chart.")}
      </Text>
    )
  }

  const chart = (
    <VictoryChart
      theme={VictoryTheme.customMaterial}
      padding={{
        top: 0,
        left: 70,
        right: 50,
        bottom: 30,
      }}
      domainPadding={{
        y: 20,
      }}
      width={minWidth}
      height={300}
      // containerComponent={
      //   <VictoryVoronoiContainer
      //     voronoiDimension="x"
      //     labels={({ datum: { idx } }) => idx}
      //     labelComponent={
      //       <VictoryTooltip
      //         cornerRadius={0}
      //         // flyoutStyle={{fill: "white"}}
      //       />
      //     }
      //   />
      // }
    >

      <VictoryLegend
        x={85}
        y={5}
        style={{
          labels: {
            fontSize: 15,
            lineHeight: .5,
          }
        }}
        data={[
          {
            name: i18n("Total reading", "", "enhanced"),
            symbol: {
              fill: color1,
            },
          },
          ...(singleUser ? [] : [{
            name: i18n("Number of readers", "", "enhanced"),
            symbol: {
              fill: color2,
            },
          }]),
        ]}
      />

      <VictoryAxis
        domain={[
          0,
          readingOverTime.totals.length - 1,
        ]}
        tickFormat={idx => {
          const date = new Date(readingOverTime.startTime)
          date.setDate(date.getDate() + idx)
          return getDateLine({ timestamp: date.getTime(), short: true })
        }}
        tickCount={Math.min(Math.ceil(minWidth / 150), readingOverTime.totals.length)}
        standalone={false}
      />

      <VictoryAxis
        dependentAxis
        standalone={false}
        style={readingOverTimeStyles.totals.axis}
        tickFormat={total => getHoursMinutesStr(total * maxTotal)}
      />

      <VictoryLine
        data={readingOverTimeTotalsData}
        interpolation="monotoneX"
        x="idx"
        y="total"
        standalone={false}
        style={readingOverTimeStyles.totals.line}
      />

      {!singleUser &&
        <VictoryAxis
          dependentAxis
          orientation="right"
          standalone={false}
          style={readingOverTimeStyles.numReaders.axis}
          tickFormat={num => num * maxNumReaders}
          offsetX={50}
        />
      }

      {!singleUser &&
        <VictoryLine
          data={readingOverTimeNumReadersData}
          interpolation="monotoneX"
          standalone={false}
          x="idx"
          y="num"
          style={readingOverTimeStyles.numReaders.line}
        />
      }

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

export default EnhancedAnalyticsReadingOverTime