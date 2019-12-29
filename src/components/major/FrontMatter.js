import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { TabView, Tab } from "react-native-ui-kitten"

import Syllabus from "./Syllabus"
import InstructorsIntroduction from "./InstructorsIntroduction"

import { i18n } from "inline-i18n"
import { getToolbarHeight } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 5,
  paddingHorizontal: 30,
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  constainerWideMode: {
    ...container,
    top: getToolbarHeight(),
  },
  heading: {
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 300,
    fontSize: 18,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
    paddingHorizontal: 30,
    marginHorizontal: -30,
    marginBottom: -4,
  },
  tabTitle: {
    lineHeight: 30,
    fontWeight: 600,
  },
  tabContent: {
    flex: 1,
  },
})

const FrontMatter = React.memo(({
  bookId,
  inEditMode,

  books,
  userDataByBookId,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)
  const { classroom, selectedToolUid } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  if(selectedToolUid !== 'FRONT MATTER') return null

  const { has_syllabus: hasSyllabus, introduction="" } = classroom

  const tabs = [
    ...((!hasSyllabus && !inEditMode) ? [] : [{
      title: i18n("Syllabus"),
      content: (
        <Syllabus
          bookId={bookId}
          inEditMode={inEditMode}
        />
      ),
    }]),
    // {
    //   title: i18n("Reading schedule"),
    //   content: (
    //     <ReaderSchedule
    //     />
    //   ),
    // },
    ...((!introduction.trim() && !inEditMode) ? [] : [{
      title: i18n("Instructor’s introduction"),
      content: (
        <InstructorsIntroduction
          bookId={bookId}
          inEditMode={inEditMode}
        />
      ),
    }]),
    // {
    //   title: i18n("Options"),
    //   content: (
    //     <ClassroomOptions
    //     />
    //   ),
    // },
  ]

  if(tabs.length === 0) return null

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      <Text style={styles.heading}>
        {i18n("Front matter")}
      </Text>
      <TabView
        style={styles.tabView}
        tabBarStyle={styles.tabBar}
        indicatorStyle={styles.indicator}
        selectedIndex={selectedTabIndex}
        onSelect={setSelectedTabIndex}
      >
        {tabs.map(({ title, content }, idx) => (
          <Tab
            key={idx}
            title={title}
            titleStyle={styles.tabTitle}
          >
            <View style={styles.tabContent}>
              {content}
            </View>
          </Tab>
        ))}
      </TabView>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(FrontMatter)