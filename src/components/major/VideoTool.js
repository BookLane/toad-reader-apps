import React, { useEffect, useCallback, useRef } from "react"
import { StyleSheet, View, Dimensions, Platform } from "react-native"
import * as ScreenOrientation from 'expo-screen-orientation'
import { getLocale } from "inline-i18n"
import { Video } from 'expo-av'

import useWideMode from "../../hooks/useWideMode"

import WebView from "./WebView"

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  videoSizer: {
    paddingBottom: '56.25%',
  },
  webViewContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  webView: {
    width: '100%',
    height: '100%',
  },
})

export const vimeoRegex = /^https:\/\/(?:www\.)?vimeo\.com\/(?:.*?\/video\/|channels\/[^\/]*\/)?([0-9]+)(?:\/[^\/]*)?\/?$/
export const youtubeRegex = /^https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]*).*$/
export const shortYoutubeRegex = /^https:\/\/youtu\.be\/([^?]+).*$/

const VideoTool = React.memo(({
  toolUid,
  videoLink,
  startTime,
  endTime,
  subtitlesOn,
  containerStyle,
  logUsageEvent,
}) => {

  const wideModeWithEitherOrientation = useWideMode(true)

  const videoRef = useRef()
  const prevIsPlaying = useRef(false)
  const totalTimePlayed = useRef(0)
  const currentPlaybackStartTime = useRef()

  useEffect(
    () => async () => {
      if(Platform.OS === 'ios' && !wideModeWithEitherOrientation) {

        const { width, height } = Dimensions.get('window')

        if(width > height) {
          // iOS has a bug where Dimensions presents backwards values after a fullscreen video
          // which had its orientation changed. The following is the only fix I have found.
          ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
          ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        }
      }
    },
    [],
  )

  const onFullscreenUpdate = useCallback(
    ({ fullscreenUpdate }) => {
      if(wideModeWithEitherOrientation) return
      if(Platform.OS === 'web') return

      if(fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
        try {
          videoRef.current.pauseAsync()
        } catch(err) {}  // ignore as it just means the state is already what I am setting it to be
      }

      if(Platform.OS === 'android') {

        if(fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
          ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
        } else if(fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
          ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        }

      }
    },
    [ wideModeWithEitherOrientation ],
  )

  const onPlaybackStatusUpdate = useCallback(
    ({ isPlaying, didJustFinish }) => {
      (async () => {

        if(!prevIsPlaying.current && isPlaying) {
          currentPlaybackStartTime.current = Date.now()
        } else if(!isPlaying && currentPlaybackStartTime.current) {
          totalTimePlayed.current += Math.round((Date.now() - currentPlaybackStartTime.current) / 1000)
          currentPlaybackStartTime.current = null
        }

        if(
          !wideModeWithEitherOrientation
          && Platform.OS !== 'web'
        ) {
          try {
            if(!prevIsPlaying.current && isPlaying) {
              await videoRef.current.presentFullscreenPlayer()
            } else if(didJustFinish) {
              await videoRef.current.dismissFullscreenPlayer()
            }
          } catch(err) {}  // ignore as it just means the state is already what I am setting it to be
        }

        prevIsPlaying.current = isPlaying

      })()
    },
    [ wideModeWithEitherOrientation ],
  )

  useEffect(
    () => (
      () => {
        if(logUsageEvent && totalTimePlayed.current) {
          logUsageEvent({
            toolUid,
            usageType: `Video playback`,
            'total playback time in seconds': totalTimePlayed.current,
          })
        }
      }
    ),
    [],
  )

  videoLink = videoLink || ""

  // let iframeAttributes = false
  let uri = ''

  const getSecondsFromTimeString = timeString => (
    String(timeString || '')
      .split(":")
      .reverse()
      .reduce(
        (total, timeSegment, idx) => (
          total + (parseInt(timeSegment || 0, 10) || 0) * [1, 60, 60*60, 60*60*24][idx]
        ),
        0
      )
  )

  let startSecs = getSecondsFromTimeString(startTime)
  let endSecs = getSecondsFromTimeString(endTime)

  const getVideoComponent = () => {

    if(videoLink.match(vimeoRegex)) {

      const vimeoIframeId = `vimeoiframe-${videoLink.replace(/"/g, '')}-${startTime}-${endTime}`

      // if((startSecs || endSecs) && typeof document !== 'undefined') {

      //   const setupStartEnd = () => {
      //     try {
      //       const player = new Vimeo.Player(document.getElementById(vimeoIframeId))

      //       if(startSecs) {
      //         if(startSecs) player.setCurrentTime(startSecs)
      //         startSecs = 0
      //       }

      //       if(endSecs) {
      //         player.on("timeupdate", data => {
      //             if(endSecs && data.seconds >= endSecs) {
      //               player.pause()
      //               endSecs = 0
      //             }
      //         })
      //       }
      //     } catch(e) {}
      //   }

      //   document.flipEditorSetupVimeoStartEndFuncs = [
      //     ...(document.flipEditorSetupVimeoStartEndFuncs || []),
      //     setupStartEnd,
      //   ]

      //   document.flipEditorSetupVimeoStartEnd = () => {
      //     if(typeof Vimeo === 'undefined') return

      //     const func = document.flipEditorSetupVimeoStartEndFuncs.pop()

      //     if(func) {
      //       func()
      //       document.flipEditorSetupVimeoStartEnd()
      //     }
      //   }

      //   if(!document.getElementById("flipeditor-vimeoscript")) {
      //     const script = document.createElement('script')
      //     script.id = 'flipeditor-vimeoscript'
      //     script.type = 'text/javascript'
      //     script.async = true
      //     script.onload = document.flipEditorSetupVimeoStartEnd
      //     script.src = 'https://player.vimeo.com/api/player.js'
      //     document.getElementsByTagName('head')[0].appendChild(script)
      //   } else {
      //     setTimeout(document.flipEditorSetupVimeoStartEnd)  // this needs to get run after the insertion of the iframe, hence the timeout
      //   }

      // }

      uri = videoLink.replace(
        vimeoRegex, 
        `https://player.vimeo.com/video/$1`
          + `?portrait=0`
          + `&autoplay=0`
          + (subtitlesOn ? `&texttrack=${getLocale() || `en`}` : ``)
      )

      return (
        <WebView
          containerStyle={styles.webViewContainer}
          style={styles.webView}
          source={{ uri }}
          allowsFullscreenVideo={true}
        />
      )

    } else {
      let regex = youtubeRegex
      let matches = videoLink.match(regex)

      if(!matches) {
        regex = shortYoutubeRegex
        matches = videoLink.match(regex)
      }

      if(matches && matches[1]) {

        uri = videoLink.replace(
          regex, 
          `https://www.youtube.com/embed/$1`
            + `?rel=0`
            + `&modestbranding=1`
            + (startSecs ? `&start=${startSecs}` : ``)
            + (endSecs ? `&end=${endSecs}` : ``)
            + (subtitlesOn ? `&cc_load_policy=${1}&cc_lang_pref=${getLocale() || `en`}` : ``)
        )

        return (
          <WebView
            containerStyle={styles.webViewContainer}
            style={styles.webView}
            source={{ uri }}
            allowsFullscreenVideo={true}
            // allowsInlineMediaPlayback={true}
          />
        )

      } else {
        return (
          <Video
            ref={videoRef}
            source={{ uri: videoLink }}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            useNativeControls
            style={styles.webViewContainer}
            onFullscreenUpdate={onFullscreenUpdate}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          />
        )
      }
    }

  }

  return (
    <View style={containerStyle || styles.container}>
      <View style={styles.videoSizer}>
        {getVideoComponent()}
      </View>
    </View>
  )
})

export default VideoTool