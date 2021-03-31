import React, { useCallback } from "react"
import { View, Text } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { statusBarHeight, bottomSpace } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import Icon from '../basic/Icon'
import Guide from './Guide'

import { addCompletedGuide } from "../../redux/actions"

const highlightItem = {
  position: 'absolute',
  padding: 14,
  borderRadius: 25,
  backgroundColor: 'white',
  width: 50,
  height: 50,
  elevation: 4,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: "black",
  shadowOpacity: 0.3,
  shadowRadius: 10,
}

const highlightText = {
  position: 'absolute',
  paddingVertical: 10,
  paddingHorizontal: 10,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: 'black',
  backgroundColor: 'rgba(255, 255, 255, .9)',
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: statusBarHeight + 170,
    marginBottom: 20,
    marginHorizontal: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  instructionText: {
    textAlign: 'center',
  },
  textSize: {
    ...highlightItem,
    top: statusBarHeight + 3,
    right: 40,
  },
  textSizeText: {
    ...highlightText,
    top: statusBarHeight + 60,
    right: 10,
  },
  backToLibrary: {
    ...highlightItem,
    top: statusBarHeight + 2,
    left: 2,
  },
  backToLibraryText: {
    ...highlightText,
    top: statusBarHeight + 60,
    left: 10,
  },
  backToReading: {
    ...highlightItem,
    bottom: bottomSpace + 5,
    left: 5,
  },
  backToReadingText: {
    ...highlightText,
    bottom: bottomSpace + 60,
    left: 10,
  },
  highlightedIcon: {
    height: 22,
  },
})

const GuideToTurningPages = React.memo(({
  inInfoMode,

  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'book-browser' }), [])

  if(Platform.OS === 'web') return null
  if(wideMode) return null
  if(completedGuides.includes('book-browser')) return null

  return (
    <Guide
      markComplete={markComplete}
      ready={inInfoMode}
    >

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {i18n("Guide: Book browser")}
        </Text>
      </View>

      <View style={styles.backToLibrary}>
        <Icon
          style={styles.highlightedIcon}
          name="md-arrow-back"
        />
      </View>
      <View style={styles.backToLibraryText}>
        <Text style={styles.instructionText}>
          {i18n("Back to Library")}
        </Text>
      </View>

      <View style={styles.textSize}>
        <Icon
          style={styles.highlightedIcon}
          name="format-size"
          pack="materialCommunity"
        />
      </View>
      <View style={styles.textSizeText}>
        <Text style={styles.instructionText}>
          {i18n("Change text size")}
        </Text>
      </View>

      <View style={styles.backToReading}>
        <Icon
          style={styles.highlightedIcon}
          name='book-open-variant'
          pack="materialCommunity"
        />
      </View>
      <View style={styles.backToReadingText}>
        <Text style={styles.instructionText}>
          {i18n("Back to reading")}
        </Text>
      </View>

    </Guide>
  )
})

const mapStateToProps = ({ completedGuides }) => ({
  completedGuides,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addCompletedGuide,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(GuideToTurningPages)