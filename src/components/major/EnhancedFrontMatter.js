import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { nonEmpty } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { updateClassroom } from "../../redux/actions"

import Syllabus from "./Syllabus"
import ReadingSchedule from "./ReadingSchedule"
import InstructorsIntroduction from "./InstructorsIntroduction"
import EnhancedScreen from "./EnhancedScreen"

const EnhancedFrontMatter = React.memo(({
  bookId,
  inEditMode,
  closeToolAndExitReading,
  goTo,

  books,
  userDataByBookId,

  updateClassroom,
}) => {

  const [ viewingPreview, setViewingPreview ] = useState(false)

  const { classroom, viewingFrontMatter, isDefaultClassroom } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

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

  if(!viewingFrontMatter) return null

  const { syllabus, scheduleDates, introduction } = classroom
  const draftSyllabus = (classroom.draftData || {}).syllabus
  const draftScheduleDates = (classroom.draftData || {}).scheduleDates
  const draftIntroduction = (classroom.draftData || {}).introduction

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

  const showScheduleDates = !!(
    !isDefaultClassroom
    && (
      viewingPreview
        ? (
          draftSyllabus !== undefined
            ? (draftScheduleDates || []).length > 0
            : (scheduleDates || []).length > 0
        )
        : (
          inEditMode
            ? true
            : (scheduleDates || []).length > 0
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
    ...(!showScheduleDates ? [] : [{
      title: i18n("Reading schedule", "", "enhanced"),
      content: (
        <ReadingSchedule
          bookId={bookId}
          inEditMode={inEditMode}
          viewingPreview={viewingPreview}
          goUpdateClassroom={goUpdateClassroom}
          goTo={goTo}
        />
      ),
    }]),
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
  ]

  if(tabs.length === 0 && !viewingPreview) return null

  return (
    <EnhancedScreen
      bookId={bookId}
      inEditMode={inEditMode}
      closeToolAndExitReading={closeToolAndExitReading}
      heading={i18n("Front matter", "", "enhanced")}
      tabs={tabs}
      viewingPreview={viewingPreview}
      setViewingPreview={setViewingPreview}
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

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedFrontMatter)