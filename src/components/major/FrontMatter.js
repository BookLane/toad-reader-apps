import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ViewPager } from "react-native-ui-kitten"

import Syllabus from "./Syllabus"
import InstructorsIntroduction from "./InstructorsIntroduction"
import StatusAndActions from "./StatusAndActions"

import { i18n } from "inline-i18n"
import { getToolbarHeight } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

import { updateClassroom } from "../../redux/actions"

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 5,
}

const topSection = {
  paddingHorizontal: 30,
}

const tabTitle = {
  lineHeight: 30,
  fontWeight: 500,
  marginRight: 20,
  borderBottomWidth: 3,
  borderBottomColor: 'transparent',
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
  topSection: {
    ...topSection,
  },
  topSectionWideMode: {
    ...topSection,
    flexDirection: 'row',
  },
  heading: {
    paddingBottom: 20,
    fontWeight: 600,
    fontSize: 18,
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
    paddingHorizontal: 30,
    overflowX: 'auto',
  },
  tabTitle: {
    ...tabTitle,
  },
  selectedTabTitle: {
    ...tabTitle,
    color: 'rgb(51, 102, 255)',
    borderBottomColor: 'rgb(51, 102, 255)',
  },
  tabsContent: {
    flex: 1,
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

  const { classroom, viewingFrontMatter } = useClassroomInfo({ books, bookId, userDataByBookId })

  const goUpdateClassroom = useCallback(
    updates => {
      updateClassroom({
        uid: classroom.uid,
        bookId,
        ...updates.data,
      })
    },
    [ updateClassroom, bookId, classroom ],
  )

  const wideMode = useWideMode()

  if(!viewingFrontMatter) return null

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
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
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
      <View
        style={styles.tabs}
      >
        {tabs.map(({ title }, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => setSelectedTabIndex(idx)}
          >
            <Text
              style={idx === selectedTabIndex ? styles.selectedTabTitle : styles.tabTitle}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ViewPager
        style={styles.tabsContent}
        selectedIndex={selectedTabIndex}
        onSelect={setSelectedTabIndex}
      >
        {tabs.map(({ content }, idx) => (
          <View
            key={idx}
            style={styles.tabContent}
          >
            {content}
          </View>
        ))}
      </ViewPager>
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