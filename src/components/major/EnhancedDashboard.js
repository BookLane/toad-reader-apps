import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useRouterState from '../../hooks/useRouterState'

import EnhancedConnecting from "./EnhancedConnecting"
import EnhancedMembers from "./EnhancedMembers"
import EnhancedAnalytics from "./EnhancedAnalytics"
import EnhancedScores from "./EnhancedScores"
import EnhancedMyScores from "./EnhancedMyScores"
import EnhancedReflectionQuestions from "./EnhancedReflectionQuestions"
import EnhancedMyReflectionQuestions from "./EnhancedMyReflectionQuestions"
import EnhancedDiscussionQuestions from "./EnhancedDiscussionQuestions"
import EnhancedPolls from "./EnhancedPolls"
import Highlights from "./Highlights"
import EnhancedScreen from "./EnhancedScreen"

const EnhancedDashboard = React.memo(({
  bookId,
  closeToolAndExitReading,
  inEditMode,
  goTo,
  logToolUsageEvent,

  books,
  userDataByBookId,
}) => {

  const { viewingDashboard, myRole, isDefaultClassroom } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const { historyReplace, routerState } = useRouterState()
  const { initialSelectedTabId, ...routerStateWithoutInitialSelectedTabId } = routerState || {}

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
    ...(!(!isDefaultClassroom) ? [] : [{
      title: i18n("Discussions", "", "enhanced"),
      content: (
        <EnhancedDiscussionQuestions
          bookId={bookId}
          logToolUsageEvent={logToolUsageEvent}
        />
      ),
    }]),
    {
      title: i18n("Reflection questions", "", "enhanced"),
      content: (
        <ReflectionQuestions
          bookId={bookId}
        />
      ),
    },
    {
      id: 'highlights',
      title: i18n("Highlights", "", "enhanced"),
      content: (
        <Highlights
          bookId={bookId}
          goTo={goTo}
        />
      ),
    },
  ]

  let initialSelectedTabIndex
  if(initialSelectedTabId) {
    tabs.forEach(({ id }, idx) => {
      if(id === initialSelectedTabId) {
        initialSelectedTabIndex = idx
      }
    })
    setTimeout(() => historyReplace(null, routerStateWithoutInitialSelectedTabId))  // clear it out
  }

  return (
    <EnhancedScreen
      bookId={bookId}
      inEditMode={inEditMode}
      closeToolAndExitReading={closeToolAndExitReading}
      heading={i18n("Dashboard", "", "enhanced")}
      tabs={tabs}
      initialSelectedTabIndex={initialSelectedTabIndex}
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