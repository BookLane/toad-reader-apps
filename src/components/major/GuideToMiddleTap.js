import React, { useCallback } from "react"
import { View, Text } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { statusBarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import Icon from '../basic/Icon'
import Guide from './Guide'

import { addCompletedGuide } from "../../redux/actions"

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: statusBarHeight + 26,
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
  middleTapContent: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, .9)',
  },
  instructionText: {
    textAlign: 'center',
  },
  middleTapIcon: {
    alignSelf: 'center',
    height: 60,
    marginBottom: 10,
  },
  middleTap: {
    marginTop: 50,
    alignSelf: 'center',
  },
})

const GuideToTurningPages = React.memo(({
  pageWasTurned,

  sidePanelSettings,
  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'middle-tap' }), [])

  if(Platform.OS === 'web') return null
  if(completedGuides.includes('middle-tap')) return null

  return (
    <Guide
      markComplete={markComplete}
      ready={pageWasTurned}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {i18n("Guide: Zoom out to book browser")}
        </Text>
      </View>
      <View
        style={[
          styles.content,
          ...(!(sidePanelSettings.open && wideMode) ? [] : [{
            marginRight: sidePanelSettings.width,
          }]),
        ]}
      >
        <View style={styles.middleTap}>
          <View style={styles.middleTapContent}>
            <Icon
              style={styles.middleTapIcon}
              name="gesture-tap"
              pack="materialCommunity"
            />
            <Text style={styles.instructionText}>
              {i18n("Tap in the middle")}
            </Text>
          </View>
        </View>
      </View>
    </Guide>
  )
})

const mapStateToProps = ({ sidePanelSettings, completedGuides }) => ({
  sidePanelSettings,
  completedGuides,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addCompletedGuide,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(GuideToTurningPages)