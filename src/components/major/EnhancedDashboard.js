import React from "react"
import { Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'

import EnhancedConnecting from "./EnhancedConnecting"
import EnhancedScreen from "./EnhancedScreen"

const EnhancedDashboard = React.memo(({
  bookId,
  closeToolAndExitReading,
  inEditMode,

  books,
  userDataByBookId,
}) => {

  const { viewingDashboard, myRole } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  if(!viewingDashboard) return null

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
      title: i18n("Analytics", "", "enhanced"),
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
    }]),
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Scores", "", "enhanced"),
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
    }]),
    ...(!(myRole === 'INSTRUCTOR') ? [] : [{
      title: i18n("Surveys", "", "enhanced"),
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
    }]),
    ...(!(myRole === 'STUDENT') ? [] : [{
      title: i18n("My scores", "", "enhanced"),
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
      title: i18n("Highlights", "", "enhanced"),
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