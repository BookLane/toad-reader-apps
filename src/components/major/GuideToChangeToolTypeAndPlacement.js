import React, { useCallback } from "react"
import { View, Text } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { Select } from "@ui-kitten/components"

import { statusBarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"
import useDimensions from "../../hooks/useDimensions"

import Guide from './Guide'
import ToolChip from "../basic/ToolChip"

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
  changeToolTypeText: {
    ...highlightText,
    top: 87,
    left: 10,
  },
  selectContainer: {
    position: 'absolute',
    top: statusBarHeight + 142,
    left: 10,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 15,
    width: 390,
    maxWidth: '36vw',
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  clearCover: {
    ...StyleSheet.absoluteFillObject,
  },
  toolContainer: {
    position: 'absolute',
    top: 220,
  },
  toolText: {
    ...highlightText,
    top: statusBarHeight + 260,
    right: 20,
    maxWidth: '30vw',
    width: 330,
  },
})

const GuideToChangeToolTypeAndPlacement = React.memo(({
  bookLoaded,
  myRole,
  viewingHighlights,
  viewingDashboard,
  viewingOptions,
  viewingFrontMatter,
  inEditMode,
  selectedTool,

  sidePanelSettings,
  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()
  const { width } = useDimensions().window

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'change-tool-type-and-placement' }), [])

  if(Platform.OS !== 'web') return null
  if(myRole !== 'INSTRUCTOR') return null
  if(viewingHighlights) return null
  if(viewingDashboard) return null
  if(viewingOptions) return null
  if(viewingFrontMatter) return null
  if(!inEditMode) return null
  if(!selectedTool) return null
  if(selectedTool.published_at) return null
  if(selectedTool.toolType !== 'NOTES_INSERT') return null
  if(Object.keys(selectedTool.data || {}).length > 0) return null
  if(!wideMode) return null  // doing this in non-wide mode would require showing it at a different time; it is an unlikely scenario and so not implementing at this time
  if(!sidePanelSettings.open) return null

// return null
  if(completedGuides.includes('change-tool-type-and-placement')) return null

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
          {i18n("Guide: Change Tool Type & Placement", "", "enhanced")}
        </Text>
      </View>

      <View style={styles.selectContainer}>
        <Select
          label={i18n("Tool type", "", "enhanced")}
          value={i18n("Notes insert", "", "enhanced")}
        />
        <View style={styles.clearCover} />
      </View>
      <View style={styles.changeToolTypeText}>
        <Text style={styles.instructionText}>
          {i18n("First, choose a type tool. You will then be able to customize this tool.", "", "enhanced")}
        </Text>
      </View>

      <View
        style={[
          styles.toolContainer,
          {
            left: width < 1030 ? width - 280 : width - sidePanelSettings.width + 20,
          },
        ]}
      >
        <ToolChip
          status="draft"
          toolType='NOTES_INSERT'
          isDraft={true}
        />
        <View style={styles.clearCover} />
      </View>
      <View style={styles.toolText}>
        <Text style={styles.instructionText}>
          {i18n("Drag a tool’s chip to place it where desired. Tools may be placed within the Table of Contents or the text of the book.", "", "enhanced")}
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

export default connect(mapStateToProps, matchDispatchToProps)(GuideToChangeToolTypeAndPlacement)