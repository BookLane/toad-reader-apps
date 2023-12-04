import React, { useState, useEffect, useCallback, useRef } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Audio } from 'expo-av'
import useUpdateEffect from "react-use/lib/useUpdateEffect"
import { i18n } from "inline-i18n"

import useDimensions from "../../hooks/useDimensions"
import useRefState from "../../hooks/useRefState"
import useSetInterval from "../../hooks/useSetInterval"
import useInstanceValue from "../../hooks/useInstanceValue"
import useSetTimeout from "../../hooks/useSetTimeout"
import { getReqOptionsWithAdditions } from "../../utils/toolbox"

import AudiobookPlayerChapterLine from "./AudiobookPlayerChapterLine"
import AudiobookPlayerProgressBar from "./AudiobookPlayerProgressBar"
import AudiobookPlayerButtonRow from "./AudiobookPlayerButtonRow"

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
  error: {
    height: 70,
    justifyContent: 'center',
    color: 'red',
  },
})

const AudiobookPlayer = ({
  uriBase,
  localSourceBase,
  latestLocation,
  downloadProgressByFilename,
  toggleDownloaded,
  updateLatestLocation,
  cookie,

  audiobookInfo,
  author,
  downloadStatus,
  epubSizeInMB,
  title,
  // logUsageEvent,
}) => {

  const { spines=[] } = audiobookInfo || {}

  const [ loading, setLoading, getLoading ] = useRefState(true)
  const [ buffering, setBuffering, getBuffering ] = useRefState(true)
  const [ pseudoLoading, setPseudoLoading ] = useState(false)
  const [ error, setError ] = useState()
  const [ playing, setPlaying, getPlaying ] = useRefState(false)
  const [ positionMS, setPositionMS, getPositionMS ] = useRefState(0)
  const [ playbackSpeed, setPlaybackSpeed, getPlaybackSpeed ] = useRefState(1)
  const { filename: llFilename, positionMS: llPositionMS } = latestLocation || {}
  const llCurrentSpineIndex = spines.findIndex(({ filename }) => filename === llFilename)
  const [ currentSpineIndex, setCurrentSpineIndex, getCurrentSpineIndex ] = useRefState(llCurrentSpineIndex === -1 ? 0 : llCurrentSpineIndex)
  const [ scanIconToShow, setScanIconToShow ] = useState()  // this makes things more fluid looking when scanning

  const { filename, durationMS: durationMSFromInfo } = spines[currentSpineIndex] || spines[0] || {}
  const getFilename = useInstanceValue(filename)
  const getSpines = useInstanceValue(spines)
  const uri = `${downloadProgressByFilename[filename] === 1 ? localSourceBase : uriBase}${filename}`
  const [ setUpdateLatestLocationTimeout ] = useSetTimeout()

  const [ durationMS, setDurationMS, getDurationMS ] = useRefState(durationMSFromInfo)

  const soundObj = useRef()
  const totalTimePlayed = useRef(0)
  const currentPlaybackStartTime = useRef(null)
  const lastLLPositionAtPrevTimeout = useRef(0)
  const previousFilename = useRef()
  const isUnmounted = useRef(false)

  const { width, height } = useDimensions().window

  const [ setPositionUpdateInterval, clearPositionUpdateInterval ] = useSetInterval()

  const goUpdateLatestLocation = useCallback(
    () => {
      const positionMS = getPositionMS()
      if(positionMS != null) {
        updateLatestLocation({
          filename: getFilename(),
          positionMS: positionMS,
        })
      }
    },
    [ updateLatestLocation, getFilename, getPositionMS ],
  )

  const play = useCallback(() => soundObj.current && !isUnmounted.current && soundObj.current.setStatusAsync({ shouldPlay: true }), [])
  const pause = useCallback(() => soundObj.current && soundObj.current.setStatusAsync({ shouldPlay: false }), [])

  const updateSpot = useCallback(
    () => {
      setUpdateLatestLocationTimeout(goUpdateLatestLocation, 500)
      lastLLPositionAtPrevTimeout.current = getPositionMS()
    },
    [ setUpdateLatestLocationTimeout, goUpdateLatestLocation, getPositionMS ],
  )

  const pauseAndUpdateLatestLocation = useCallback(
    () => {
      if(soundObj.current) {
        pause()
        updateSpot()
      }
    },
    [ pause, updateSpot ],
  )

  const onPlaybackStatusUpdate = useCallback(
    ({ isLoaded, error, isPlaying, isBuffering, positionMillis, durationMillis, didJustFinish }) => {

      if(error) {
        clearPositionUpdateInterval()
        setError(error)
        return
      }

      if(!isLoaded !== getLoading()) setLoading(!isLoaded)
      if(isBuffering !== getBuffering()) setBuffering(isBuffering)

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
      if(newPositionMS !== getPositionMS() && newPositionMS != null) {
        setPositionMS(newPositionMS)

        if(
          Math.abs(newPositionMS - lastLLPositionAtPrevTimeout.current) > 5000  // if position has changed by more than five seconds
          || !isPlaying
        ) {
          updateSpot()
        }
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

      if(durationMillis && durationMillis !== getDurationMS()) {
        setDurationMS(durationMillis)
      }

    },
    [ updateSpot ],
  )

  useUpdateEffect(updateSpot, [ currentSpineIndex ])

  useEffect(
    () => {
      (async () => {

        try {

          const isFirstLoad = !soundObj.current

          if(getPlaying()) await pause()
          if(!isFirstLoad) setPseudoLoading(true)
          setLoading(true)
          setBuffering(true)
          setError()
          if(filename !== previousFilename.current) setPositionMS(0)
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
              positionMillis: (
                filename === previousFilename.current
                  ? getPositionMS()  // it was just downloaded; don't change the spot
                  : (
                    llFilename === filename
                      ? llPositionMS
                      : 0
                  )
              ),
            },
            onPlaybackStatusUpdate,
            true,
          )
          previousFilename.current = filename

          // These don't work either
          // await sound.setProgressUpdateIntervalAsync(16)
          // await sound.setStatusAsync({ progressUpdateIntervalMillis: 16 })

          soundObj.current = sound
          
          if(!isFirstLoad) await play()

        } catch (error) {
          if(/Unable to resolve host/.test(error.message)) {
            setError(i18n("Internet connection error"))
            return
          }
          setError(error.message.replace(/^.*Exception: /))
        }
  
      })()
    },
    [ uri, !!cookie ],
  )

  useEffect(
    () => () => {
      pause()  // pause on unload
      isUnmounted.current = true
    },
    [],
  )

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
        pause={pauseAndUpdateLatestLocation}
        playbackSpeed={playbackSpeed}
        getPlaybackSpeed={getPlaybackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
        downloadStatus={downloadStatus}
        toggleDownloaded={toggleDownloaded}
        loading={loading || buffering || pseudoLoading}
        error={error}
      />

      {!!error && <Text style={styles.error}>{error}</Text>}

    </View>

  )
}

export default AudiobookPlayer