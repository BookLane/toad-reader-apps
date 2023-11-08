import React from "react"
import { StyleSheet, View, Text } from "react-native"
// import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  bottom: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  positionAndDuration: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  positionTime: {
    fontSize: 11,
  },
  durationTime: {
    fontSize: 11,
  },
  positionDurationTimeSeparator: {
    marginHorizontal: 5,
    opacity: .5,
  },
  durationLine: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
    position: 'relative',
  },
  positionLine: {
    position: 'absolute',
    height: 1,
    backgroundColor: 'rgb(51, 102, 255)',
  }
})

const getTimeStringFromMS = ms => {
  const seconds = parseInt(ms/1000, 10) || 0
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)
  return `${min}:${sec < 10 ? `0` + sec : sec}`
}

const AudiobookPlayerProgressBar = ({
  loading,
  positionMS,
  durationMS,
}) => {

  const percentage = Math.ceil(Math.min(positionMS / (durationMS || 1), 1) * 100)

  return (
    <View style={styles.bottom}>
      <View style={styles.durationLine}>
        <View
          style={[
            styles.positionLine,
            {
              width: `${percentage}%`,
            },
          ]}
        />
      </View>
      <View style={styles.positionAndDuration}>
        <Text style={styles.positionTime}>
          {getTimeStringFromMS(loading ? 0 : positionMS)}
        </Text>
        <Text style={styles.durationTime}>
          -{getTimeStringFromMS(loading ? 0 : (durationMS - positionMS))}
        </Text>
      </View>
    </View>
  )
}

export default AudiobookPlayerProgressBar