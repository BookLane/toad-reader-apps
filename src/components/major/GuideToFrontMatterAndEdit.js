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
    marginTop: 26,
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
  editButton: {
    position: 'absolute',
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    top: 46,
    right: 10,
  },
  editIcon: {
    height: 20,
    tintColor: 'rgb(51, 102, 255)',
  },
  editButtonText: {
    ...highlightText,
    top: 46,
    right: 65,
    maxWidth: '35vw',
    width: 450,
  },
  frontMatter: {
    ...highlightText,
    top: 66,
    left: 20,
    maxWidth: '50vw',
    width: 400,
  },
  frontMatterText: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
})

const GuideToFrontMatterAndEdit = React.memo(({
  bookLoaded,
  myRole,
  viewingFrontMatter,
  hasFrontMatterDraftData,

  sidePanelSettings,
  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'front-matter-and-edit' }), [])

  if(Platform.OS !== 'web') return null
  if(myRole !== 'INSTRUCTOR') return null
  if(!viewingFrontMatter) return null
  if(hasFrontMatterDraftData) return null
  if(!wideMode) return null  // doing this in non-wide mode would require showing it at a different time; it is an unlikely scenario and so not implementing at this time
  if(!sidePanelSettings.open) return null

  if(completedGuides.includes('front-matter-and-edit')) return null

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
          {i18n("Guide: Front Matter + Edit Mode", "", "enhanced")}
        </Text>
      </View>

      <View style={styles.editButton}>
        <Icon
          style={styles.editIcon}
          name="pencil"
          pack="materialCommunity"
        />
      </View>
      <View style={styles.editButtonText}>
        <Text style={styles.instructionText}>
          {i18n("You are currently in Edit mode where you can make and view unpublished changes to your classroom. Toggle this button to go in and out of Edit mode.", "", "enhanced")}
        </Text>
      </View>

      <View style={styles.frontMatter}>
        <Text style={styles.frontMatterText}>
          {i18n("Front matter", "", "enhanced")}
        </Text>
        <Text style={styles.instructionText}>
          {i18n("Organize your new classroom by adding “Front matter.” Your options include adding a syllabus, creating a reading schedule, and writing a custom book introduction.", "", "enhanced")}
        </Text>
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

export default connect(mapStateToProps, matchDispatchToProps)(GuideToFrontMatterAndEdit)