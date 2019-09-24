import React from "react"
import Constants from 'expo-constants'
import { StyleSheet, Platform, View, Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ProgressDot from "../basic/ProgressDot"

import { getFooterHeight } from '../../utils/toolbox.js'

// import {  } from "../../redux/actions.js"

const {
  ANDROID_TOOLBAR_COLOR,
  PROGRESS_BAR_SIDE_SPACING,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  footer: {
    ...(Platform.OS === 'android' ? {backgroundColor: ANDROID_TOOLBAR_COLOR} : {}),
    flexDirection: 'row',
  },
  touchResponder: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9,
    backgroundColor: 'transparent',
  },
  line: {
    backgroundColor: Platform.OS === 'android' ? 'white' : 'black',
    flex: 1,
    marginLeft: PROGRESS_BAR_SIDE_SPACING,
    marginRight: PROGRESS_BAR_SIDE_SPACING,
    height: 1,
    top: getFooterHeight() / 2 - .5,
  },
})

const onStartShouldSetResponder = () => true

const BookProgress = ({
  scrollToPercentage,
  animatedScrollPosition,
  maxScroll,
  capturingSnapshots,
}) => {

  const { width } = Dimensions.get('window')

  const onResponderGrantAndMove = useCallback(
    event => {
      const { pageX } = event.nativeEvent
      const percentageFraction = (pageX - PROGRESS_BAR_SIDE_SPACING) / (width - PROGRESS_BAR_SIDE_SPACING*2)
      const percent = Math.min(Math.max(percentageFraction * 100, 0), 100)
      
      scrollToPercentage(percent)
    },
    [ scrollToPercentage, width ],
  )

  return (
    <View style={styles.footer}>
      <View
        style={styles.touchResponder}
        onStartShouldSetResponderCapture={onStartShouldSetResponder}
        onStartShouldSetResponder={onStartShouldSetResponder}
        onResponderGrant={onResponderGrantAndMove}
        onResponderMove={onResponderGrantAndMove}
      />
      <View style={styles.line}/>
      <ProgressDot
        size={30}
        animatedScrollPosition={animatedScrollPosition}
        maxScroll={maxScroll}
        capturingSnapshots={capturingSnapshots}
      />
      {/* <ProgressDot
        left={PROGRESS_BAR_SIDE_SPACING + 100}
        size={6}
      /> */}
    </View>
  )
}

const mapStateToProps = (state) => ({
  // books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookProgress)