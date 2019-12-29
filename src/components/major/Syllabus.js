import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import EditToolData from './EditToolData'

import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
  },
})

const Syllabus = React.memo(({
  bookId,
  inEditMode,
  goUpdateClassroom,

  books,
  userDataByBookId,
}) => {

  const { accountId, classroom } = useClassroomInfo({ books, bookId, userDataByBookId })


  if(!classroom) return null

  const { uid, syllabus } = classroom

  if(inEditMode) {
    const data = {}

    if(syllabus) {
      data.syllabus = syllabus
    }

    return (
      <EditToolData
        classroomUid={uid}
        accountId={accountId}
        dataStructure={[
          {
            name: 'syllabus',
            type: 'file',
            fileTypes: [
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ],
          },
        ]}
        data={data}
        goUpdateTool={goUpdateClassroom}
      />
    )
  }

  return null
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Syllabus)