import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Menu, Button } from "react-native-ui-kitten"
import { StyleSheet } from "react-native"

import Dialog from "./Dialog"
import CreateClassroom from "./CreateClassroom"
import i18n from "../../utils/i18n"

import BackFunction from '../basic/BackFunction'

import { setCurrentClassroom } from "../../redux/actions"

const styles = StyleSheet.create({
  menu: {
    width: '100%',
  },
  button: {
    marginHorizontal: 4,
  },
})

const ChangeClassroom = React.memo(({
  open,
  requestHide,
  bookId,

  books,
  userDataByBookId,

  setCurrentClassroom,
}) => {

  const [ showCreateClassroom, setShowCreateClassroom ] = useState(false)

  const book = books[bookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const idpId = accountId.split(':')[0]

  const defaultClassroomUid = `${idpId}-${bookId}`
  const currentClassroomUid = book.currentClassroomUid || defaultClassroomUid
  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const currentClassroomIndex = classrooms.map(({ uid }) => uid).indexOf(currentClassroomUid)
  const hasInstructorVersion = Object.values(book.accounts)[0].version === 'INSTRUCTOR'

  const classroomData = classrooms
    .map(({ uid, name }) => ({
      title: uid === defaultClassroomUid ? i18n("Book default") : (name || ' '),
    }))

  const updateCurrentClassroom = useCallback(
    selectedIndex => {
      setCurrentClassroom({
        bookId,
        uid: classrooms[selectedIndex].uid,
      })
      requestHide()
    },
    [ bookId, classrooms, requestHide ],
  )

  const toggleShowCreateClassroom = useCallback(
    () => {
      setShowCreateClassroom(!showCreateClassroom)
      if(showCreateClassroom) {
        requestHide()
      }
    },
    [ showCreateClassroom ],
  )

  const buttons = [
    ...(!hasInstructorVersion ? [] : [
      <Button
        key="create"
        size="small"
        onPress={toggleShowCreateClassroom}
        status="primary"
        style={[
          styles.button,
        ]}
      >
        {i18n("Create new classroom")}
      </Button>,
    ]),
    <Button
      key="close"
      size="small"
      onPress={requestHide}
      status="basic"
      style={[
        styles.button,
      ]}
    >
      {i18n("Cancel")}
    </Button>,
  ]

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open}
        title={i18n("Change classroom")}
        message={(
          <Menu
            data={classroomData}
            selectedIndex={currentClassroomIndex}
            onSelect={updateCurrentClassroom}
            style={styles.menu}
          />
        )}
        buttons={buttons}
      />
      <CreateClassroom
        open={showCreateClassroom}
        requestHide={toggleShowCreateClassroom}
        bookId={bookId}
      />
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setCurrentClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ChangeClassroom)