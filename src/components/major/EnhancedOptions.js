import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import { updateClassroom } from "../../redux/actions"

import LTIConfigurations from "./LTIConfigurations"
import EnhancedScreen from "./EnhancedScreen"

const EnhancedOptions = React.memo(({
  bookId,
  inEditMode,
  closeToolAndExitReading,

  books,
  userDataByBookId,

  updateClassroom,
}) => {

  const { classroom, viewingOptions, bookVersion, lti_configurations } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

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

  if(!viewingOptions) return null

  const showLTIConfigurations = !!(
    inEditMode
      ? true
      : (
        (lti_configurations || []).length > 0
        && bookVersion === 'PUBLISHER'
      )
  )

  const tabs = [
    ...(!showLTIConfigurations ? [] : [{
      title: i18n("LTI Configurations", "", "enhanced"),
      content: (
        <LTIConfigurations
          bookId={bookId}
          inEditMode={inEditMode}
          goUpdateClassroom={goUpdateClassroom}
        />
      ),
    }]),
  ]

  if(tabs.length === 0) return null

  return (
    <EnhancedScreen
      bookId={bookId}
      inEditMode={inEditMode}
      closeToolAndExitReading={closeToolAndExitReading}
      heading={
        bookVersion === 'PUBLISHER'
          ? i18n("Settings", "", "enhanced")
          : i18n("Options", "", "enhanced")
      }
      tabs={tabs}
    />
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedOptions)