import React, { useCallback } from "react"
import { View, Text } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

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
    marginTop: 26,
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
  tapLeftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tapLeft: {
    alignSelf: 'flex-start',
    width: 120,
  },
  tapRight: {
    alignSelf: 'flex-end',
    width: 120,
  },
  tapLeftRightContent: {
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
  tapLeftRightIcon: {
    alignSelf: 'center',
    height: 60,
    marginBottom: 10,
  },
  orContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: -10,
    top: -20,
  },
  or: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 11,
    lineHeight: 28,
  },
  swipe: {
    marginTop: 50,
    alignSelf: 'center',
  },
})

const GuideToTurningPages = React.memo(({
  bookLoaded,

  sidePanelSettings,
  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'turning-pages' }), [])

  if(Platform.OS === 'web') return null
  if(completedGuides.includes('turning-pages')) return null

  return (
    <Guide
      markComplete={markComplete}
      ready={bookLoaded}
      blockUntilReady={true}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {i18n("Guide: Turning the page")}
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
        <View style={styles.tapLeftRight}>
          <View style={styles.tapLeft}>
            <View style={styles.tapLeftRightContent}>
              <Icon
                style={styles.tapLeftRightIcon}
                name="gesture-tap"
                pack="materialCommunity"
              />
              <Text style={styles.instructionText}>
                {i18n("Tap on the left edge")}
              </Text>
            </View>
          </View>
          <View style={styles.tapRight}>
            <View style={styles.tapLeftRightContent}>
              <Icon
                style={styles.tapLeftRightIcon}
                name="gesture-tap"
                pack="materialCommunity"
              />
              <Text style={styles.instructionText}>
                {i18n("Tap on the right edge")}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.swipe}>
          <View style={styles.tapLeftRightContent}>
            <View style={styles.orContainer}>
              <Text style={styles.or}>
                {i18n("OR")}
              </Text>
            </View>
            <Icon
              style={styles.tapLeftRightIcon}
              name="gesture-swipe"
              pack="materialCommunity"
            />
            <Text style={styles.instructionText}>
              {i18n("Swipe left or right")}
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