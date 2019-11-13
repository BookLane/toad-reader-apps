import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Menu } from "react-native-ui-kitten"
import { StyleSheet } from "react-native"

import Dialog from "./Dialog"
import i18n from "../../utils/i18n"

import BackFunction from '../basic/BackFunction'

import { setCurrentClassroom } from "../../redux/actions"

const styles = StyleSheet.create({
  menu: {
    width: '100%',
  }
})

const ChangeClassroom = React.memo(({
  open,
  requestHide,
  bookId,

  books,
  userDataByBookId,

  setCurrentClassroom,
}) => {

  const book = books[bookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const idpId = accountId.split(':')[0]

  const defaultClassroomUid = `${idpId}-${bookId}`
  const currentClassroomUid = book.currentClassroomUid || defaultClassroomUid
  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const currentClassroomIndex = classrooms.map(({ uid }) => uid).indexOf(currentClassroomUid)

  const classroomData = classrooms
    .map(({ uid, name }) => ({
      title: uid === defaultClassroomUid ? i18n("Book default") : (name || ' '),
    }))

  const updateCurrentClassroom = useCallback(
    selectedIndex => {
      setCurrentClassroom({
        bookId,
        currentClassroomUid: classrooms[selectedIndex].uid,
      })
      requestHide()
    },
    [ bookId, classrooms, requestHide ],
  )
  
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
        onClose={requestHide}
        closeButtonText={i18n("Cancel")}
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