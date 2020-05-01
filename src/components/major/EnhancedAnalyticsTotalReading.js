import React, { useMemo } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"

import { getHoursMinutesStr } from '../../utils/toolbox'

const totalReadingSize = 220

const styles = StyleSheet.create({
  totalReading: {
    width: totalReadingSize,
    maxWidth: totalReadingSize,
    height: totalReadingSize,
    maxHeight: totalReadingSize,
    borderColor: 'rgba(0,0,0,.3)',
    backgroundColor: 'rgba(0,0,0,.05)',
    borderWidth: 1,
    borderRadius: totalReadingSize/2,
    justifyContent: 'center',
  },
  totalReadingTime: {
    fontWeight: '900',
    fontSize: 36,
    marginBottom: 5,
    textAlign: 'center',
  },
  totalReadingPerStudent: {
    fontWeight: '200',
    fontSize: 14,
    textAlign: 'center',
  },
})

const EnhancedAnalyticsTotalReading = React.memo(({
  readingBySpine,
  numStudents,
}) => {

  const totalReading = useMemo(
    () => readingBySpine.reduce((acc, { minutes }) => acc + minutes, 0),
    [ readingBySpine ],
  )

  return (
    <View style={styles.totalReading}>
      <Text style={styles.totalReadingTime}>
        {getHoursMinutesStr(totalReading)}
      </Text>
      <Text style={styles.totalReadingPerStudent}>
        {i18n("Avg: {{time}} per student", "", "enhanced", { time: getHoursMinutesStr(parseInt(totalReading / numStudents, 10)) })}
      </Text>
    </View>
  )
})

export default EnhancedAnalyticsTotalReading