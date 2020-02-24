import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ViewPager } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import { getToolbarHeight, nonEmpty } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { updateClassroom } from "../../redux/actions"

import Syllabus from "./Syllabus"
import InstructorsIntroduction from "./InstructorsIntroduction"
import LTIConfigurations from "./LTIConfigurations"
import StatusAndActions from "./StatusAndActions"
import HeaderIcon from "../basic/HeaderIcon"

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 5,
  paddingTop: 20,
}

const topSection = {
  paddingHorizontal: 30,
  zIndex: 1,
}

const tabTitle = {
  lineHeight: 30,
  fontWeight: '500',
  marginRight: 20,
  borderBottomWidth: 3,
  borderBottomColor: 'transparent',
}

const styles = StyleSheet.create({
  container: {
    ...container,
    paddingTop: 25,
  },
  constainerWideMode: {
    ...container,
    top: getToolbarHeight(),
  },
  topSection: {
    ...topSection,
  },
  topSectionWideMode: {
    ...topSection,
    flexDirection: 'row',
  },
  headingLine: {
    flexDirection: 'row',
    flex: 1,
  },
  heading: {
    paddingBottom: 20,
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
  },
  tabs: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
    paddingHorizontal: 30,
    flexGrow: 0,
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
  tabContentContainer: {
    flex: 1,
  },
  exitPreview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 'auto',
  },
  exitPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  exitPreviewContainerWideMode: {
    position: 'absolute',
    bottom: -29,
    right: 25,
    backgroundColor: 'white',
    padding: 5,
  },
  close: {
    top: -12,
    right: -12,
  },
})

const FrontMatter = React.memo(({
  bookId,
  inEditMode,
  closeToolAndExitReading,

  books,
  userDataByBookId,

  updateClassroom,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)
  const [ previewSelectedTabIndex, setPreviewSelectedTabIndex ] = useState(0)
  const [ viewingPreview, setViewingPreview ] = useState(false)

  const { classroom, viewingFrontMatter, isDefaultClassroom, bookVersion } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

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

  const { syllabus, introduction, lti_configurations } = classroom
  const draftSyllabus = (classroom.draftData || {}).syllabus
  const draftIntroduction = (classroom.draftData || {}).introduction
  const draftLTIConfigurations = (classroom.draftData || {}).lti_configurations

  const showSyllabus = !!(
    !isDefaultClassroom
    && (
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
  )

  const showIntroduction = !!(
    !isDefaultClassroom
    && (
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
  )

  const showLTIConfigurations = !!(
    viewingPreview
      ? (
        draftLTIConfigurations !== undefined
          ? (draftLTIConfigurations || []).length > 0
          : (lti_configurations || []).length > 0
      )
      : (
        inEditMode
          ? true
          : (
            (lti_configurations || []).length > 0
            && bookVersion === 'PUBLISHER'
          )
      )
  )

  const tabs = [
    ...(!showSyllabus ? [] : [{
      title: i18n("Syllabus", "", "enhanced"),
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
    //   title: i18n("Reading schedule", "", "enhanced"),
    //   content: (
    //     <ReaderSchedule
    //     />
    //   ),
    // },
    ...(!showIntroduction ? [] : [{
      title: i18n("Instructor’s introduction", "", "enhanced"),
      content: (
        <InstructorsIntroduction
          bookId={bookId}
          inEditMode={inEditMode}
          viewingPreview={viewingPreview}
          goUpdateClassroom={goUpdateClassroom}
        />
      ),
    }]),
    ...(!showLTIConfigurations ? [] : [{
      title: i18n("LTI Configurations", "", "enhanced"),
      content: (
        <LTIConfigurations
          bookId={bookId}
          inEditMode={inEditMode}
          viewingPreview={viewingPreview}
          goUpdateClassroom={goUpdateClassroom}
        />
      ),
    }]),
    // {
    //   title: i18n("Options", "", "enhanced"),
    //   content: (
    //     <ClassroomOptions
    //     />
    //   ),
    // },
  ]

  if(tabs.length === 0 && !viewingPreview) return null

  const tabIndex = viewingPreview ? previewSelectedTabIndex : selectedTabIndex
  const setTabIndex = viewingPreview ? setPreviewSelectedTabIndex : setSelectedTabIndex

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
        <View style={styles.headingLine}>
          <Text style={styles.heading}>
            {isDefaultClassroom
              ? i18n("Settings", "", "enhanced")
              : (
                inEditMode
                  ? i18n("Front matter and options", "", "enhanced")
                  : i18n("Front matter", "", "enhanced")
              )
            }
          </Text>
          {!viewingPreview && !wideMode &&
            <HeaderIcon
              iconName="md-close"
              onPress={closeToolAndExitReading}
              uiStatus="faded"
              style={styles.close}
            />
          }
        </View>
        {(inEditMode && !viewingPreview) &&
          <StatusAndActions
            bookId={bookId}
            setViewingPreview={setViewingPreview}
          />
        }
        {inEditMode && viewingPreview &&
          <View style={wideMode ? styles.exitPreviewContainerWideMode : styles.exitPreviewContainer}>
            <TouchableOpacity onPress={onExitPreview}>
              <Text style={styles.exitPreview}>
                {i18n("Exit preview", "", "enhanced")}
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
      {tabs.length > 0 &&
        <>
          <ScrollView
            key={viewingPreview ? `preview-tabs` : `draft-tabs`}
            style={styles.tabs}
            horizontal={true}
          >
            {tabs.map(({ title }, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setTabIndex(idx)}
              >
                <Text
                  style={idx === tabIndex ? styles.selectedTabTitle : styles.tabTitle}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ViewPager
            key={viewingPreview ? `preview-content` : `draft-content`}
            style={styles.tabsContent}
            selectedIndex={tabIndex}
            onSelect={setTabIndex}
          >
            {tabs.map(({ content }, idx) => (
              <ScrollView
                key={idx}
                style={styles.tabContent}
                contentContainerStyle={styles.tabContentContainer}
              >
                {content}
              </ScrollView>
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