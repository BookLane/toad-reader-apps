import React, { useCallback } from "react"
import Constants from 'expo-constants'
import { View, Text } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { statusBarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import Guide from './Guide'
import EnhancedHeader from './EnhancedHeader'
import LinkLikeText from '../basic/LinkLikeText'

import { addCompletedGuide } from "../../redux/actions"

const {
  ENHANCED_EDITOR_HOW_TO_LINKS={},
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  enhancedBoxContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  titleContainer: {
    marginTop: statusBarHeight + 26,
    marginBottom: 10,
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
  spacer: {
    flex: 1,
  },
  instructionBox: {
    position: 'absolute',
    top: 105,
    right: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, .9)',
  },
  videoInstructionText: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 12,
  },
  links: {
    fontSize: 12,
  },
})

const GuideToCreateAClassroom = React.memo(({
  bookId,
  bookLoaded,
  isDefaultClassroom,
  classrooms,
  bookVersion,
  toggleInEditMode,

  sidePanelSettings,
  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'create-a-classroom' }), [])

  if(Platform.OS !== 'web') return null
  if(!isDefaultClassroom) return null
  if(classrooms.length > 1) return null
  if(bookVersion !== 'INSTRUCTOR') return null
  if(!wideMode) return null  // doing this in non-wide mode would require showing it at a different time; it is an unlikely scenario and so not implementing at this time
  if(!sidePanelSettings.open) return null

  if(completedGuides.includes('create-a-classroom')) return null

  return (
    <Guide
      markComplete={markComplete}
      ready={bookLoaded}
      blockUntilReady={true}
      componentsAfterOkay={<View style={styles.spacer} />}
    >

      <View style={styles.spacer} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {i18n("Guide: Create a classroom", "", "enhanced")}
        </Text>
      </View>

      <View
        style={[
          styles.enhancedBoxContainer,
          {
            width: sidePanelSettings.width,
          },
        ]}
      >
        <EnhancedHeader
          bookId={bookId}
          inEditMode={false}
          toggleInEditMode={toggleInEditMode}
          markGuideComplete={markComplete}
        />
      </View>

      <View
        style={[
          styles.instructionBox,
          {
            width: sidePanelSettings.width - 20,
          },
        ]}
      >
        <Text style={styles.instructionText}>
          {i18n("Open the Interactive book” pulldown and then choose “Create a classroom.”", "", "enhanced")}
        </Text>
        <Text style={styles.videoInstructionText}>
          {i18n("Video Instructions", "", "enhanced")}
        </Text>
        {Object.keys(ENHANCED_EDITOR_HOW_TO_LINKS.CREATE_A_CLASSROOM || {}).map(linkText => (
          <LinkLikeText
            key={linkText}
            url={ENHANCED_EDITOR_HOW_TO_LINKS.CREATE_A_CLASSROOM[linkText]}
            style={styles.links}
          >
            {linkText}
          </LinkLikeText>
        ))}
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

export default connect(mapStateToProps, matchDispatchToProps)(GuideToCreateAClassroom)