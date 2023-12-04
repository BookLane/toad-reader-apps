import React, { useState, useEffect, useCallback, useRef } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Audio } from 'expo-av'

import useDimensions from "../../hooks/useDimensions"
import useRefState from "../../hooks/useRefState"
import useSetInterval from "../../hooks/useSetInterval"
import useInstanceValue from "../../hooks/useInstanceValue"
import { getReqOptionsWithAdditions } from "../../utils/toolbox"

import AudiobookPlayerChapterLine from "./AudiobookPlayerChapterLine"
import AudiobookPlayerProgressBar from "./AudiobookPlayerProgressBar"
import AudiobookPlayerButtonRow from "./AudiobookPlayerButtonRow"

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
})

const AudiobookPlayer = ({
  uriBase,
  localSourceBase,
  downloadProgressByFilename,
  toggleDownloaded,
  cookie,

  audiobookInfo,
  author,
  downloadStatus,
  epubSizeInMB,
  title,
  // logUsageEvent,
}) => {

  const [ loading, setLoading, getLoading ] = useRefState(true)
  const [ pseudoLoading, setPseudoLoading ] = useState(false)
  const [ error, setError ] = useState()
  const [ playing, setPlaying, getPlaying ] = useRefState(false)
  const [ positionMS, setPositionMS, getPositionMS ] = useRefState(0)
  const [ playbackSpeed, setPlaybackSpeed, getPlaybackSpeed ] = useRefState(1)
  const [ currentSpineIndex, setCurrentSpineIndex, getCurrentSpineIndex ] = useRefState(0)
  const [ scanIconToShow, setScanIconToShow ] = useState()  // this makes things more fluid looking when scanning

  const { spines=[] } = audiobookInfo || {}
  const { filename, durationMS: durationMSFromInfo } = spines[currentSpineIndex] || spines[0] || {}
  const getSpines = useInstanceValue(spines)
  const uri = `${downloadProgressByFilename[filename] === 1 ? localSourceBase : uriBase}${filename}`

  const [ durationMS, setDurationMS, getDurationMS ] = useRefState(durationMSFromInfo)

  const soundObj = useRef()
  const totalTimePlayed = useRef(0)
  const currentPlaybackStartTime = useRef(null)

  const { width, height } = useDimensions().window

  const [ setPositionUpdateInterval, clearPositionUpdateInterval ] = useSetInterval()

  const play = useCallback(() => soundObj.current && soundObj.current.setStatusAsync({ shouldPlay: true }), [])
  const pause = useCallback(() => soundObj.current && soundObj.current.setStatusAsync({ shouldPlay: false }), [])

  const onPlaybackStatusUpdate = useCallback(
    ({ isLoaded, error, isPlaying, isBuffering, positionMillis, durationMillis, didJustFinish }) => {

      if(error) {
        clearPositionUpdateInterval()
        setError(error)
        return
      }

      const isLoadingOrBuffering = !isLoaded || isBuffering
      if(isLoadingOrBuffering !== getLoading()) {
        setLoading(isLoadingOrBuffering)
      }

      if(isPlaying !== getPlaying()) {
        setPlaying(isPlaying)

        if(isPlaying) {
          setPseudoLoading(false)
          currentPlaybackStartTime.current = Date.now()
        } else if(currentPlaybackStartTime.current) {
          totalTimePlayed.current += Math.round((Date.now() - currentPlaybackStartTime.current) / 1000)
          currentPlaybackStartTime.current = null
        }
      }

      if(didJustFinish && getCurrentSpineIndex() < getSpines().length - 1) {
        setCurrentSpineIndex(getCurrentSpineIndex() + 1)
      }

      const newPositionMS = didJustFinish ? 0 : positionMillis
      if(newPositionMS !== getPositionMS()) {
        setPositionMS(newPositionMS)
      }

      if(isPlaying) {
        // Doing this since progressUpdateIntervalMillis doesn't work (it will not change from 500ms)
        const intervalMS = 50
        setPositionUpdateInterval(
          () => setPositionMS(getPositionMS() + intervalMS),
          intervalMS,
        )
      } else {
        clearPositionUpdateInterval()
      }

      if(durationMillis != null && durationMillis !== getDurationMS()) {
        setDurationMS(durationMillis)
      }

    },
    [],
  )

  useEffect(
    () => {
      (async () => {

        try {

          const isFirstLoad = !soundObj.current

          if(getPlaying()) await pause()
          if(!isFirstLoad) setPseudoLoading(true)
          setLoading(true)
          setError()
          setPositionMS(0)
          setDurationMS(durationMSFromInfo)

          if(!cookie && !__DEV__) return

          await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
            staysActiveInBackground: true,
          })
          const { sound, status } = await Audio.Sound.createAsync(
            {
              uri,
              ...(downloadProgressByFilename[filename] === 1 ? {} : getReqOptionsWithAdditions({
                headers: {
                  cookie,
                },
              })),
            },
            {
              progressUpdateIntervalMillis: 500,  // this does not actually work, so I have it set to the default that it will always use
              rate: getPlaybackSpeed(),
              shouldCorrectPitch: true,
              volume: 1,
            },
            onPlaybackStatusUpdate,
            true,
          )

          // These don't work either
          // await sound.setProgressUpdateIntervalAsync(16)
          // await sound.setStatusAsync({ progressUpdateIntervalMillis: 16 })

          soundObj.current = sound

          if(!isFirstLoad) await play()

        } catch (error) {
          setError(error.message)
        }
  
      })()
    },
    [ uri, !!cookie ],
  )

  useEffect(() => pause, [])  // pause on unload

  useEffect(
    () => {
      ;(async () => {
        if(!soundObj.current) return
        await soundObj.current.setRateAsync(playbackSpeed, true)
      })()
    },
    [ playbackSpeed ],
  )

  // useEffect(
  //   () => (
  //     () => {
  //       if(logUsageEvent && totalTimePlayed.current) {
  //         logUsageEvent({
  //           usageType: `Audio playback`,
  //           'total playback time in seconds': totalTimePlayed.current,
  //         })
  //       }
  //     }
  //   ),
  //   [],
  // )

  const setPosition = useCallback(
    async ms => {
      if(!soundObj.current) return
      await soundObj.current.setStatusAsync({
        positionMillis: Math.max(0, Math.min((durationMS || 1000*60*60) - 10, ms)),
      })
    },
    [ durationMS ],
  )

  return (

    <View
      style={[
        styles.container,
        {
          width: Math.min(400, width - 70),
        },
      ]}
    >

      <AudiobookPlayerChapterLine
        spines={spines}
        currentSpineIndex={currentSpineIndex}
        setCurrentSpineIndex={setCurrentSpineIndex}
      />

      <AudiobookPlayerProgressBar
        loading={loading}
        positionMS={positionMS}
        durationMS={durationMS}
        setPosition={setPosition}
        getPlaying={getPlaying}
        pause={pause}
        play={play}
        setScanIconToShow={setScanIconToShow}
      />

      <AudiobookPlayerButtonRow
        positionMS={positionMS}
        setPosition={setPosition}
        playing={playing}
        scanIconToShow={scanIconToShow}
        play={play}
        pause={pause}
        playbackSpeed={playbackSpeed}
        getPlaybackSpeed={getPlaybackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
        downloadStatus={downloadStatus}
        toggleDownloaded={toggleDownloaded}
        loading={loading || pseudoLoading}
        error={error}
      />

      <Text style={styles.error}>
        {error}
      </Text>

    </View>

  )
}

export default AudiobookPlayer


// TODOs
  // fix jitter on progressMS when scanning (android)
  // do not restart chapter when it is downloaded
  // do NOT keep it from going to sleep if listening to audiobook
  // latest location!
  // better error message when no internet connection and not downloaded

  // play in background


// report to analytics
// warn of downloading over cell data? (include audibook size in warning)
// what happens when an audio files is added or changed after user has downloaded it?
  // that chapter requires user to be online