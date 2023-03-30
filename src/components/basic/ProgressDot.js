import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, Platform, Animated } from "react-native"
// import { i18n } from "inline-i18n"

import ProgressDotLabel from "./ProgressDotLabel"

import { getFooterHeight } from "../../utils/toolbox"

import useDimensions from "../../hooks/useDimensions"

const {
  PROGRESS_BAR_SIDE_SPACING,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  dot: {
    position: 'absolute',
    left: 0,
    backgroundColor: Platform.OS === 'android' ? 'white' : 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ProgressDot = ({
  size,
  animatedScrollPosition,
  maxScroll,
  capturingSnapshots,
}) => {

  const { width } = useDimensions().window

  const translateX = animatedScrollPosition.interpolate({
    inputRange: [0, maxScroll],
    outputRange: [PROGRESS_BAR_SIDE_SPACING, width - PROGRESS_BAR_SIDE_SPACING],
  })

  const dotStyles = {
    top: (getFooterHeight() - size) / 2,
    width: size,
    height: size,
    borderRadius: size / 2,
    marginLeft: size / -2,
    marginRight: size / -2,
    transform: [
      {
        translateX,
      },
    ],
  }

  return (
    <Animated.View
      style={[
        styles.dot,
        dotStyles,
      ]}
    >
      {!capturingSnapshots &&
        <ProgressDotLabel
          animatedScrollPosition={animatedScrollPosition}
          maxScroll={maxScroll}
        />
      }
    </Animated.View>
  )
}

export default ProgressDot