import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ViewPager } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import { getToolbarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { updateClassroom } from "../../redux/actions"

import EnhancedConnecting from "./EnhancedConnecting"
import HeaderIcon from "../basic/HeaderIcon"

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 5,
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
  },
  constainerWideMode: {
    ...container,
    top: getToolbarHeight(),
    paddingTop: 20,
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
  closeContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  close: {
    top: 15,
    right: 18,
  },
})

const EnhancedHomepage = React.memo(({
  bookId,
  closeToolAndExitReading,

  books,
  userDataByBookId,

  updateClassroom,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)

  const { classroom, viewingEnhancedHomepage } = useClassroomInfo({ books, bookId, userDataByBookId })

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

  if(!viewingEnhancedHomepage) return null

  const tabs = [
    {
      title: i18n("Connecting", "", "enhanced"),
      content: (
        <EnhancedConnecting
          bookId={bookId}
          goUpdateClassroom={goUpdateClassroom}
        />
      ),
    },
    // {
    //   title: i18n("Analytics", "", "enhanced"),
    //   content: (
    //     <EnhancedAnalytics
    //     />
    //   ),
    // },
    // {
    //   title: i18n("Scores", "", "enhanced"),
    //   content: (
    //     <EnhancedScores
    //     />
    //   ),
    // },
    // {
    //   title: i18n("Surveys", "", "enhanced"),
    //   content: (
    //     <EnhancedSurveys
    //     />
    //   ),
    // },
    // {
    //   title: i18n("Discussions", "", "enhanced"),
    //   content: (
    //     <EnhancedDiscussions
    //     />
    //   ),
    // },
  ]

  if(tabs.length === 0) return null

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      {!wideMode &&
        <View style={styles.closeContainer}>
          <HeaderIcon
            iconName="md-close"
            onPress={closeToolAndExitReading}
            uiStatus="faded"
            style={styles.close}
          />
        </View>
      }
      <ScrollView
        style={styles.tabs}
        horizontal={true}
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
      </ScrollView>
      <ViewPager
        style={styles.tabsContent}
        selectedIndex={selectedTabIndex}
        onSelect={setSelectedTabIndex}
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedHomepage)