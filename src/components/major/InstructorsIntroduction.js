import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import EditToolData from './EditToolData'

import { i18n } from "inline-i18n"
import { textToReactNative } from "../../utils/toolbox"

import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
})

const InstructorsIntroduction = React.memo(({
  bookId,
  inEditMode,
  goUpdateClassroom,

  books,
  userDataByBookId,
}) => {

  const { accountId, classroom } = useClassroomInfo({ books, bookId, userDataByBookId })


  if(!classroom) return null

  const { uid, introduction } = classroom

  if(inEditMode) {
    const data = {}

    if(introduction) {
      data.introduction = introduction
    }

    return (
      <EditToolData
        classroomUid={uid}
        accountId={accountId}
        dataStructure={[
          {
            name: 'introduction',
            type: 'text',
            placeholder: i18n("Enter your introduction here."),
          },
        ]}
        data={data}
        goUpdateTool={goUpdateClassroom}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>
        {textToReactNative(introduction)}
      </Text>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(InstructorsIntroduction)