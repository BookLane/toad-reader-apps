import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ViewPager } from "react-native-ui-kitten"

import Syllabus from "./Syllabus"
import InstructorsIntroduction from "./InstructorsIntroduction"
import StatusAndActions from "./StatusAndActions"

import { i18n } from "inline-i18n"
import { getToolbarHeight, nonEmpty } from '../../utils/toolbox'

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
  exitPreview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: 700,
    fontSize: 13,
    marginTop: 'auto',
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
  const [ viewingPreview, setViewingPreview ] = useState(false)

  const { classroom, viewingFrontMatter } = useClassroomInfo({ books, bookId, userDataByBookId })

  const onExitPreview = useCallback(() => setViewingPreview(false), [])

  const goUpdateClassroom = useCallback(
    updates => {
      updateClassroom({
        uid: classroom.uid,
        bookId,
        draftData: {
          ...(classroom.draftData || {}),
          ...updates.data,
        },
      })
    },
    [ updateClassroom, bookId, classroom ],
  )

  const wideMode = useWideMode()

  if(!viewingFrontMatter) return null

  const { syllabus, introduction } = classroom
  const draftSyllabus = (classroom.draftData || {}).syllabus
  const draftIntroduction = (classroom.draftData || {}).introduction

  const showSyllabus = !!(
    viewingPreview
      ? (
        draftSyllabus !== undefined
          ? draftSyllabus
          : syllabus
      )
      : (
        inEditMode
          ? true
          : syllabus
      )
  )

  const showIntroduction = !!(
    viewingPreview
      ? nonEmpty(
        draftIntroduction !== undefined
          ? draftIntroduction
          : introduction
      )
      : (
        inEditMode
          ? true
          : nonEmpty(introduction)
      )
  )

  const tabs = [
    ...(!showSyllabus ? [] : [{
      title: i18n("Syllabus"),
      content: (
        <Syllabus
          bookId={bookId}
          inEditMode={inEditMode}
          viewingPreview={viewingPreview}
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
    ...(!showIntroduction ? [] : [{
      title: i18n("Instructor’s introduction"),
      content: (
        <InstructorsIntroduction
          bookId={bookId}
          inEditMode={inEditMode}
          viewingPreview={viewingPreview}
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

  if(tabs.length === 0 && !viewingPreview) return null

  const correctedSelectedTabIndex = Math.min(selectedTabIndex || 0, tabs.length - 1)

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
        <Text style={styles.heading}>
          {i18n("Front matter")}
        </Text>
        {(inEditMode && !viewingPreview) &&
          <StatusAndActions
            bookId={bookId}
            setViewingPreview={setViewingPreview}
          />
        }
        {inEditMode && viewingPreview &&
          <TouchableOpacity onPress={onExitPreview}>
            <Text style={styles.exitPreview}>
              {i18n("Exit preview")}
            </Text>
          </TouchableOpacity>
        }
      </View>
      {tabs.length > 0 &&
        <>
          <View
            style={styles.tabs}
          >
            {tabs.map(({ title }, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedTabIndex(idx)}
              >
                <Text
                  style={idx === correctedSelectedTabIndex ? styles.selectedTabTitle : styles.tabTitle}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ViewPager
            style={styles.tabsContent}
            selectedIndex={correctedSelectedTabIndex}
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
        </>
      }
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