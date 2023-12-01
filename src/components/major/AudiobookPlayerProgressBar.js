import React, { useRef, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
// import { i18n } from "inline-i18n"
import { useLayout } from '@react-native-community/hooks'
import useSetTimeout from "../../hooks/useSetTimeout"

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
  progressLineContainer: {
    paddingVertical: 15,
    marginVertical: -15,
    position: 'relative',
    zIndex: 1,
  },
  durationLine: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  positionLine: {
    top: 15,
    position: 'absolute',
    height: 1,
    backgroundColor: 'rgb(51, 102, 255)',
  },
})

const onStartShouldSetResponder = () => true

export const getTimeStringFromMS = ms => {
  const seconds = parseInt(ms/1000, 10) || 0
  const min = Math.floor(seconds / 60)
  const sec = Math.floor(seconds % 60)
  return `${min}:${sec < 10 ? `0` + sec : sec}`
}

const AudiobookPlayerProgressBar = ({
  loading,
  positionMS,
  durationMS,
  setPosition,
  getPlaying,
  pause,
  play,
  setScanIconToShow,
}) => {

  const { onLayout, width } = useLayout()
  const wasPlayingWhenPositionChangeBegan = useRef(null)
  const [ setClearScanIconToShowTimeout ] = useSetTimeout()

  const percentage = Math.min(positionMS / (durationMS || 1), 1) * 100

  const onResponderMove = useCallback(
    ({ nativeEvent }) => {

      if(typeof wasPlayingWhenPositionChangeBegan.current !== `boolean`) {
        wasPlayingWhenPositionChangeBegan.current = getPlaying()
        if(wasPlayingWhenPositionChangeBegan.current) {
          pause()
          setScanIconToShow(`pause`)
        } else {
          setScanIconToShow(`play`)
        }
      }

      const newPercentage = nativeEvent.locationX / width
      const newPositionMS = Math.max(Math.min(parseInt(newPercentage * (durationMS || 0), 10), durationMS), 0)
      setPosition(newPositionMS)
    },
    [ width, durationMS, getPlaying, play, pause, setScanIconToShow ],
  )

  const onResponderRelease = useCallback(
    () => {
      if(typeof wasPlayingWhenPositionChangeBegan.current === `boolean`) {
        wasPlayingWhenPositionChangeBegan.current && play()
        !wasPlayingWhenPositionChangeBegan.current && pause()
        wasPlayingWhenPositionChangeBegan.current = null
      }
      setClearScanIconToShowTimeout(setScanIconToShow, 500)
    },
    [ play, pause, setScanIconToShow ],
  )

  return (
    <View style={styles.bottom}>
      <View
        style={styles.progressLineContainer}
        onLayout={onLayout}
        onStartShouldSetResponderCapture={onStartShouldSetResponder}
        onStartShouldSetResponder={onStartShouldSetResponder}
        onResponderGrant={onResponderMove}
        onResponderMove={onResponderMove}
        onResponderRelease={onResponderRelease}
        onResponderTerminate={onResponderRelease}
      >
        <View style={styles.durationLine} />
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