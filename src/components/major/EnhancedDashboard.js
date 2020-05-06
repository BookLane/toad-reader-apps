import React from "react"
import { Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'

import EnhancedConnecting from "./EnhancedConnecting"
import EnhancedMembers from "./EnhancedMembers"
import EnhancedAnalytics from "./EnhancedAnalytics"
import EnhancedScores from "./EnhancedScores"
import EnhancedMyScores from "./EnhancedMyScores"
import EnhancedReflectionQuestions from "./EnhancedReflectionQuestions"
import EnhancedMyReflectionQuestions from "./EnhancedMyReflectionQuestions"
import EnhancedPolls from "./EnhancedPolls"
import Highlights from "./Highlights"
import EnhancedScreen from "./EnhancedScreen"

const EnhancedDashboard = React.memo(({
  bookId,
  closeToolAndExitReading,
  inEditMode,
  goTo,

  books,
  userDataByBookId,
}) => {

  const { viewingDashboard, myRole } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  if(!viewingDashboard) return null

  const ReflectionQuestions = myRole === 'INSTRUCTOR' ? EnhancedReflectionQuestions : EnhancedMyReflectionQuestions

  const tabs = [
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Connecting", "", "enhanced"),
      content: (
        <EnhancedConnecting
          bookId={bookId}
        />
      ),
    }]),
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Students & Instructors", "", "enhanced"),
      content: (
        <EnhancedMembers
          bookId={bookId}
        />
      ),
    }]),
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Analytics", "", "enhanced"),
      content: (
        <EnhancedAnalytics
          bookId={bookId}
        />
      ),
    }]),
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Scores", "", "enhanced"),
      content: (
        <EnhancedScores
          bookId={bookId}
        />
      ),
    }]),
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Polls", "", "enhanced"),
      content: (
        <EnhancedPolls
          bookId={bookId}
        />
      ),
    }]),
    ...(!(myRole === 'STUDENT') ? [] : [{
      title: i18n("My scores", "", "enhanced"),
      content: (
        <EnhancedMyScores
          bookId={bookId}
        />
      ),
    }]),
    {
      title: i18n("Discussions", "", "enhanced"),
      content: (
        <Text style={{
          padding: 100,
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '100',
        }}>
          Coming soon...
        </Text>
      ),
    },
    {
      title: i18n("Reflection questions", "", "enhanced"),
      content: (
        <ReflectionQuestions
          bookId={bookId}
        />
      ),
    },
    {
      title: i18n("Highlights", "", "enhanced"),
      content: (
        <Highlights
          bookId={bookId}
          goTo={goTo}
        />
      ),
    },
  ]

  return (
    <EnhancedScreen
      bookId={bookId}
      inEditMode={inEditMode}
      closeToolAndExitReading={closeToolAndExitReading}
      heading={i18n("Dashboard", "", "enhanced")}
      tabs={tabs}
    />
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedDashboard)