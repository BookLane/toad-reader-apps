import React from "react"
import { StyleSheet, View } from "react-native"
import { getLocale } from "inline-i18n"

import WebView from "./WebView"
import { Video } from 'expo-av'

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
  videoLink,
  startTime,
  endTime,
  subtitlesOn,
}) => {

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
            allowsInlineMediaPlayback={true}
          />
        )

      } else {
        return (
          <Video
            source={{ uri: videoLink }}
            resizeMode="cover"
            useNativeControls
            style={styles.webViewContainer}
          />
        )
      }
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.videoSizer}>
        {getVideoComponent()}
      </View>
    </View>
  )
})

export default VideoTool