import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ViewPager } from "react-native-ui-kitten"

import EnhancedConnecting from "./EnhancedConnecting"

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

const EnhancedHomepage = React.memo(({
  bookId,

  books,
  userDataByBookId,

  updateClassroom,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)

  const { classroom, viewingEnhancedHomepage } = useClassroomInfo({ books, bookId, userDataByBookId })

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

  if(!viewingEnhancedHomepage) return null

  const tabs = [
    {
      title: i18n("Connecting"),
      content: (
        <EnhancedConnecting
          bookId={bookId}
          goUpdateClassroom={goUpdateClassroom}
        />
      ),
    },
    // {
    //   title: i18n("Analytics"),
    //   content: (
    //     <EnhancedAnalytics
    //     />
    //   ),
    // },
    // {
    //   title: i18n("Scores"),
    //   content: (
    //     <EnhancedScores
    //     />
    //   ),
    // },
    // {
    //   title: i18n("Surveys"),
    //   content: (
    //     <EnhancedSurveys
    //     />
    //   ),
    // },
    // {
    //   title: i18n("Discussions"),
    //   content: (
    //     <EnhancedDiscussions
    //     />
    //   ),
    // },
  ]

  if(tabs.length === 0) return null

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedHomepage)