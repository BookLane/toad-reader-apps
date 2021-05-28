import React, { useState, useEffect, useCallback, useRef } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { Audio } from 'expo-av'

import useInstanceValue from "../../hooks/useInstanceValue"

import CoverAndSpin from "../basic/CoverAndSpin"
import Icon from "../basic/Icon"
import Button from "../basic/Button"

const button = {
  borderRadius: 35,
  height: 70,
  width: 70,
  maxWidth: 70,
  paddingHorizontal: 0,
  paddingVertical: 0,
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    maxHeight: 400,
    alignItems: 'center',
  },
  top: {
    flex: 1,
    maxWidth: 300,
    justifyContent: 'center',
  },
  bottom: {
    width: '100%',
    maxWidth: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  forwardBackButton: {
    ...button,
  },
  playPauseButton: {
    ...button,
  },
  icon: {
    height: 30,
  },
  bigIcon: {
    height: 40,
  },
  positionAndDuration: {
    flexDirection: 'row',
    marginTop: 10,
  },
  positionDurationTimeSeparator: {
    marginHorizontal: 5,
    opacity: .5,
  },
  durationTime: {
    opacity: .5,
  },
  durationLine: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
    position: 'relative',
  },
  error: {
    color: 'red',
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

const AudioPlayer = ({
  source,
}) => {

  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState()
  const [ playing, setPlaying ] = useState(false)
  const [ positionMS, setPositionMS ] = useState(0)
  const [ durationMS, setDurationMS ] = useState(0)

  const getLoading = useInstanceValue(loading)
  const getPlaying = useInstanceValue(playing)
  const getPositionMS = useInstanceValue(positionMS)
  const getDurationMS = useInstanceValue(durationMS)

  const soundObj = useRef()

  const onPlaybackStatusUpdate = useCallback(
    ({ isLoaded, error, isPlaying, isBuffering, positionMillis, durationMillis, didJustFinish }) => {

      if(error) {
        setError(error)
        return
      }

      const isLoadingOrBuffering = !isLoaded || isBuffering
      if(isLoadingOrBuffering !== getLoading()) {
        setLoading(isLoadingOrBuffering)
      }

      if(isPlaying !== getPlaying()) {
        setPlaying(isPlaying)
      }

      const newPositionMS = didJustFinish ? 0 : positionMillis
      if(newPositionMS !== getPositionMS()) {
        setPositionMS(newPositionMS)
      }

      if(durationMillis !== getDurationMS()) {
        setDurationMS(durationMillis)
      }

    },
    [],
  )

  useEffect(
    () => {
      (async () => {

        try {

          setLoading(true)
          setError()
          setPlaying(false)
          setPositionMS(0)
          setDurationMS(0)

          const { sound, status } = await Audio.Sound.createAsync(
            source,
            {
              progressUpdateIntervalMillis: 16,
              rate: 1,
              shouldCorrectPitch: true,
              volume: 1,
            },
            onPlaybackStatusUpdate,
            true,
          )

          soundObj.current = sound

        } catch (error) {
          setError(error.message)
        }
  
      })()
    },
    [ source ],
  )

  const play = useCallback(() => soundObj.current.setStatusAsync({ shouldPlay: true }), [])
  const pause = useCallback(() => soundObj.current.setStatusAsync({ shouldPlay: false }), [])

  useEffect(() => (soundObj.isLoaded && pause), [])  // pause on unload

  const setPosition = useCallback(
    async ms => {
      await soundObj.current.setStatusAsync({
        positionMillis: Math.max(0, Math.min(durationMS || 1000*60*60, ms)),
      })
    },
    [ durationMS ],
  )

  const backFive = useCallback(() => setPosition(positionMS - 5000), [ positionMS, setPosition ])
  const forwardFive = useCallback(() => setPosition(positionMS + 5000), [ positionMS, setPosition ])

  const percentage = Math.ceil(Math.min(positionMS / (durationMS || 1), 1) * 100)

  const BackFiveIcon = useCallback(({ style }) => <Icon name='replay-5' pack="material" style={styles.icon} />, [])
  const ForwardFiveIcon = useCallback(({ style }) => <Icon name='forward-5' pack="material" style={styles.icon} />, [])
  const PlayIcon = useCallback(({ style }) => <Icon name='md-play' style={styles.bigIcon} />, [])
  const PauseIcon = useCallback(({ style }) => <Icon name='md-pause' style={styles.bigIcon} />, [])

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {!!error &&
          <Text style={styles.error}>
            {i18n("Error: {{error}}", "", "enhanced", { error })}
          </Text>
        }
        {!error && loading && <CoverAndSpin />}
        {!error && !loading &&
          <View style={styles.buttonContainer}>
            <Button
              style={styles.forwardBackButton}
              status="basic"
              appearance="ghost"
              accessoryLeft={BackFiveIcon}
              onPress={backFive}
              disabled={loading}
            />
            <Button
              style={styles.playPauseButton}
              appearance="ghost"
              accessoryLeft={playing ? PauseIcon : PlayIcon}
              onPress={playing ? pause : play}
              disabled={loading}
            />
            <Button
              style={styles.forwardBackButton}
              status="basic"
              appearance="ghost"
              accessoryLeft={ForwardFiveIcon}
              onPress={forwardFive}
              disabled={loading}
            />
          </View>
        }
      </View>
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
          <Text style={styles.positionDurationTimeSeparator}>
            /
          </Text>
          <Text style={styles.durationTime}>
            {getTimeStringFromMS(loading ? 0 : durationMS)}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default AudioPlayer