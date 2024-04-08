import React, { useCallback } from "react"
import { View, Text } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useWideMode from "../../hooks/useWideMode"

import Guide from './Guide'
import FAB from "../basic/FAB"
import EnhancedHeaderLine from "../basic/EnhancedHeaderLine"

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
  addToolText: {
    ...highlightText,
    bottom: 80,
    right: 10,
  },
  frontMatter: {
    ...highlightText,
    top: 66,
    left: 20,
    maxWidth: '50vw',
    width: 400,
  },
  dashboardButton: {
    position: 'absolute',
    top: 47,
    right: 60,
    backgroundColor: 'rgb(211, 218, 230)',
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  dashboardText: {
    ...highlightText,
    top: 102,
    right: 30,
    maxWidth: '30vw',
    width: 380,
  },
})

const GuideToDashboardAndAddTool = React.memo(({
  bookLoaded,
  myRole,
  viewingHighlights,
  viewingDashboard,
  viewingOptions,
  viewingFrontMatter,
  inEditMode,

  sidePanelSettings,
  completedGuides,

  addCompletedGuide,
}) => {

  const wideMode = useWideMode()

  const markComplete = useCallback(() => addCompletedGuide({ guideId: 'dashboard-and-add-tool' }), [])

  if(Platform.OS !== 'web') return null
  if(myRole !== 'INSTRUCTOR') return null
  if(viewingHighlights) return null
  if(viewingDashboard) return null
  if(viewingOptions) return null
  if(viewingFrontMatter) return null
  if(!inEditMode) return null
  // TODO: once I start recording tool author, add in check for no tools by this author (to see that it is really a new classroom)
  if(!wideMode) return null  // doing this in non-wide mode would require showing it at a different time; it is an unlikely scenario and so not implementing at this time
  if(!sidePanelSettings.open) return null

  if(completedGuides.includes('dashboard-and-add-tool')) return null

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
          {i18n("Guide: Dashboard + Add Tool", "", "enhanced")}
        </Text>
      </View>

      <FAB
        iconName="add"
        status="primary"
        style={styles.addToolFAB}
      />
      <View style={styles.addToolText}>
        <Text style={styles.instructionText}>
          {i18n("Use this button to create a new tool.", "", "enhanced")}
        </Text>
      </View>

      <EnhancedHeaderLine
        label={i18n("Dashboard", "", "enhanced")}
        uiStatus="unselected"
        iconName="view-dashboard"
        iconPack="materialCommunity"
        style={[
          styles.dashboardButton,
          {
            width: sidePanelSettings.width - 60,
          },
        ]}
      />
      <View style={styles.dashboardText}>
        <Text style={styles.instructionText}>
          {i18n("Go to your dashboard when you are ready to connect students and manage your classroom.", "", "enhanced")}
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

export default connect(mapStateToProps, matchDispatchToProps)(GuideToDashboardAndAddTool)