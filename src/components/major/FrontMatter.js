import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { TabView, Tab } from "react-native-ui-kitten"

import Syllabus from "./Syllabus"
import InstructorsIntroduction from "./InstructorsIntroduction"
import StatusAndActions from "./StatusAndActions"

import { i18n } from "inline-i18n"
import { getToolbarHeight } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useInstanceValue from '../../hooks/useInstanceValue'

import { updateClassroom } from "../../redux/actions"

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
    paddingTop: 20,
  },
  topSectionWideMode: {
    flexDirection: 'row',
  },
  heading: {
    paddingBottom: 20,
    fontWeight: 600,
    fontSize: 18,
    flex: 1,
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

  updateClassroom,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)

  const { classroom, selectedToolUid } = useClassroomInfo({ books, bookId, userDataByBookId })

  const getUserDataByBookId = useInstanceValue(userDataByBookId)

  const goUpdateClassroom = useCallback(
    updates => {
      updateClassroom({
        uid: classroom.uid,
        bookId,
        ...updates.data,
        patchInfo: {
          userDataByBookId: getUserDataByBookId(),
        },
      })
    },
    [ updateClassroom, bookId, classroom ],
  )

  const wideMode = useWideMode()

  if(selectedToolUid !== 'FRONT MATTER') return null

  const { syllabus, introduction } = classroom

  const tabs = [
    ...((!syllabus && !inEditMode) ? [] : [{
      title: i18n("Syllabus"),
      content: (
        <Syllabus
          bookId={bookId}
          inEditMode={inEditMode}
          goUpdateClassroom={goUpdateClassroom}
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
    ...((!(introduction || "").trim() && !inEditMode) ? [] : [{
      title: i18n("Instructor’s introduction"),
      content: (
        <InstructorsIntroduction
          bookId={bookId}
          inEditMode={inEditMode}
          goUpdateClassroom={goUpdateClassroom}
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
      <View style={wideMode ? styles.topSectionWideMode : null}>
        <Text style={styles.heading}>
          {i18n("Front matter")}
        </Text>
        {inEditMode &&
          <StatusAndActions
            bookId={bookId}
            isFrontMatter={true}
          />
        }
      </View>
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
  updateClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(FrontMatter)