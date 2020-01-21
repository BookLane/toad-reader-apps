import React, { useRef, useEffect } from "react"
import Constants from 'expo-constants'
import { Animated, Easing, StyleSheet, Image } from "react-native"

import { getSnapshotURI, isIPhoneX, iPhoneXFooter, statusBarHeight } from '../../utils/toolbox'

import usePrevious from "react-use/lib/usePrevious"
import useDimensions from "../../hooks/useDimensions"
import usePageSize from "../../hooks/usePageSize"

const {
  PAGE_ZOOM_MILLISECONDS,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  snapshotCont: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  snapshot: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  snapshotImage: {
    position: 'absolute',
    top: 0,
    bottom: isIPhoneX ? iPhoneXFooter : 0,
    left: 0,
    right: 0,
  },
})

const ZoomPage = ({
  bookId,
  spineIdRef,
  pageCfisKey,
  pageIndexInSpine,
  snapshotCoords,
  zoomed,
  zoomingEnabled,
  onZoomCompletion,
  pageCfiKnown,
}) => {

  const { pageWidth, pageHeight, zoomScale } = usePageSize()
  let { width, height } = useDimensions().window

  const scale = useRef(new Animated.Value(zoomed ? 1 : zoomScale))
  const opacity = useRef(new Animated.Value(1))
  const translateX = useRef()
  const translateY = useRef()

  const prevSnapshotCoords = usePrevious(snapshotCoords)

  useEffect(
    () => {
      requestAnimationFrame(() => {
        if(zoomed || !zoomingEnabled) {
          Animated.timing(
            scale.current,
            {
              toValue: 1,
              // easing: Easing.linear,
              easing: Easing.inOut(Easing.cubic),
              duration: zoomingEnabled ? PAGE_ZOOM_MILLISECONDS : 0,
            }
          ).start(onZoomCompletion)
      
        } else {
          Animated.sequence([
            Animated.timing(
              scale.current,
              {
                toValue: zoomScale,
                easing: Easing.inOut(Easing.cubic),
                duration: PAGE_ZOOM_MILLISECONDS,
              }
            ),
            Animated.timing(
              opacity.current,
              {
                toValue: 0,
                easing: Easing.linear,
                duration: PAGE_ZOOM_MILLISECONDS / 4,
              }
            )
          ]).start(onZoomCompletion)
    
          requestAnimationFrame(() => {
            opacity.current = new Animated.Value(1)
          })
      
        }    
      })
    },
    [ zoomed, zoomScale ],
  )

  if(
    !translateX.current
    || JSON.stringify(snapshotCoords) !== JSON.stringify(prevSnapshotCoords)
  ) {

    let outputRangeX = 1
    let outputRangeY = 1

    if(snapshotCoords) {
      const left = snapshotCoords.x
      const top = snapshotCoords.y - (isIPhoneX ? statusBarHeight : 0)

      outputRangeX = left - (width/2 - pageWidth/2)
      outputRangeY = top - ((height - (isIPhoneX ? statusBarHeight : 0))/2 - pageHeight/2)
    }

    translateX.current = scale.current.interpolate({
      inputRange: [zoomScale, 1],
      outputRange: [outputRangeX, 0],
    })

    translateY.current = scale.current.interpolate({
      inputRange: [zoomScale, 1],
      outputRange: [outputRangeY, 0],
    })

  }

  const uri = getSnapshotURI({ bookId, spineIdRef, pageIndexInSpine, pageCfisKey })

  const zoomStyles1 = {
    transform: [
      {
        translateX: translateX.current,
      },
      {
        translateY: translateY.current,
      },
    ],
  }

  const zoomStyles2 = {
    transform: [
      {
        scale: scale.current,
      },
    ],
    opacity: opacity.current,
  }

  return (
    <Animated.View
      style={[
        styles.snapshotCont,
        zoomStyles1,
      ]}
    >
      <Animated.View
        style={[
          styles.snapshot,
          zoomStyles2,
        ]}
      >
        <Image
          source={{ uri: pageCfiKnown ? uri : undefined }}
          style={styles.snapshotImage}
        />
      </Animated.View>
    </Animated.View>
  )
}

export default ZoomPage