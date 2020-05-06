import React, { useMemo } from "react"
import { i18n, getLocale } from "inline-i18n"

import { getHoursMinutesStr } from '../../utils/toolbox'

import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLine, VictoryLegend } from "./Victory"

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
}) => {

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

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{
        top: 0,
        left: 70,
        right: 50,
        bottom: 30,
      }}
      domainPadding={{
        y: 20,
      }}
      width={width}
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
          {
            name: i18n("Number of readers", "", "enhanced"),
            symbol: {
              fill: color2,
            },
          },
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
          return date.toLocaleString(
            getLocale(),
            {
              month: 'short',
              day: 'numeric',
              year: readingOverTimeTotalsData.length > 500 ? 'numeric' : undefined,
            }
          )
        }}
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

      <VictoryAxis
        dependentAxis
        orientation="right"
        standalone={false}
        style={readingOverTimeStyles.numReaders.axis}
        tickFormat={num => num * maxNumReaders}
        offsetX={50}
      />

      <VictoryLine
        data={readingOverTimeNumReadersData}
        interpolation="monotoneX"
        standalone={false}
        x="idx"
        y="num"
        style={readingOverTimeStyles.numReaders.line}
      />

    </VictoryChart>
  )
})

export default EnhancedAnalyticsReadingOverTime