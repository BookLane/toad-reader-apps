import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Text } from "react-native"

import Button from "../basic/Button"
import Icon from "../basic/Icon"
import Dialog from "./Dialog"
import CreateClassroom from "./CreateClassroom"
import ConnectToAClassroom from "./ConnectToAClassroom"
import { i18n } from "inline-i18n"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useNetwork from "../../hooks/useNetwork"

import BackFunction from '../basic/BackFunction'

import { deleteClassroomMember, deleteClassroom } from "../../redux/actions"

const styles = StyleSheet.create({
  dialog: {
    maxWidth: 300,
  },
  menu: {
    width: '100%',
  },
  createButtons: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    marginVertical: 4,
  },
  classroomLine: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  classroomName: {
    flex: 1,
    marginVertical: 'auto',
    marginRight: 5,
  },
  ghostButton: {
    paddingHorizontal: 0,
  },
})

const ManageClassrooms = React.memo(({
  open,
  requestHide,
  bookId,
  toggleInEditMode,

  books,
  userDataByBookId,
  syncStatus,

  deleteClassroomMember,
  deleteClassroom,
}) => {

  const [ showCreateClassroom, setShowCreateClassroom ] = useState(false)
  const [ showConnectToAClassroom, setShowConnectToAClassroom ] = useState(false)

  const { online } = useNetwork()

  const { userId, bookVersion, classrooms, defaultClassroomUid } = useClassroomInfo({ books, bookId, userDataByBookId })

  const goRemoveMyselfFromClassroom = useCallback(
    ({ id: classroomUid }) => {
      if(!confirm("Are you sure you want to leave this classroom?")) return

      deleteClassroomMember({
        bookId,
        classroomUid,
        userId,
      })
    },
    [ bookId, userId ],
  )

  const goDeleteClassroom = useCallback(
    ({ id: uid }) => {
      if(!confirm("Are you sure you want to delete this classroom?")) return

      deleteClassroom({
        bookId,
        uid,
      })
    },
    [ bookId ],
  )

  const toggleShowCreateClassroom = useCallback(
    ({ hideAll }={}) => {
      setShowCreateClassroom(!showCreateClassroom)
      if(hideAll) requestHide()
    },
    [ showCreateClassroom ],
  )

  const toggleShowConnectToAClassroom = useCallback(
    ({ hideAll }={}) => {
      setShowConnectToAClassroom(!showConnectToAClassroom)
      if(hideAll) requestHide()
    },
    [ showConnectToAClassroom ],
  )

  const ExitIcon = useCallback(({ style }) => <Icon name='md-exit' style={style} />, [])
  const TrashIcon = useCallback(({ style }) => <Icon name='md-trash' style={style} />, [])

  if(!online) {
    return (
      <>
        {!!open && <BackFunction func={requestHide} />}
        <Dialog
          open={!!open}
          style={styles.dialog}
          title={i18n("Whoops!", "", "enhanced")}
          message={(
            <Text>
              {i18n("You must have an active internet connection and be fully synced to manage classrooms.", "", "enhanced")}
            </Text>
          )}
          onClose={requestHide}
        />
      </>
    )
  }

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open}
        style={styles.dialog}
        title={i18n("Manage classrooms", "", "enhanced")}
        message={(
          <>
            <View
              key="actions"
              style={styles.createButtons}
            >
              {bookVersion === 'INSTRUCTOR' &&
                <Button
                  key="create"
                  size="small"
                  onPress={toggleShowCreateClassroom}
                  status="primary"
                  style={[
                    styles.button,
                  ]}
                >
                  {i18n("Create a new classroom", "", "enhanced")}
                </Button>
              }
              {['INSTRUCTOR', 'ENHANCED'].includes(bookVersion) &&
                <Button
                  key="connect"
                  size="small"
                  onPress={toggleShowConnectToAClassroom}
                  status="primary"
                  style={[
                    styles.button,
                  ]}
                >
                  {i18n("Connect to a classroom", "", "enhanced")}
                </Button>
              }
            </View>
            {classrooms.filter(({ uid }) => uid !== defaultClassroomUid).map(({ uid, name, members=[] }) => {
              const myRole = (bookVersion === 'INSTRUCTOR' && (members.filter(({ user_id }) => user_id === userId)[0] || {}).role) || 'STUDENT'
              const iAmTheLoneInstructor = myRole === 'INSTRUCTOR' && members.filter(({ role }) => role === 'INSTRUCTOR').length === 1

              return (
                <View style={styles.classroomLine} key={uid}>
                  <Text style={styles.classroomName}>
                    {name}
                  </Text>
                  {!iAmTheLoneInstructor &&
                    <Button
                      id={uid}
                      accessoryLeft={ExitIcon}
                      size="small"
                      status="basic"
                      appearance="ghost"
                      style={styles.ghostButton}
                      onPress={goRemoveMyselfFromClassroom}
                    />
                  }
                  {myRole === 'INSTRUCTOR' &&
                    <Button
                      id={uid}
                      accessoryLeft={TrashIcon}
                      size="small"
                      status="basic"
                      appearance="ghost"
                      style={styles.ghostButton}
                      onPress={goDeleteClassroom}
                    />
                  }
                </View>
              )
            })}
          </>
        )}
        onClose={requestHide}
        closeButtonText={i18n("Done", "", "enhanced")}
        submitting={syncStatus !== 'synced'}
      />
      <CreateClassroom
        open={showCreateClassroom}
        requestHide={toggleShowCreateClassroom}
        bookId={bookId}
        toggleInEditMode={toggleInEditMode}
      />
      <ConnectToAClassroom
        open={showConnectToAClassroom}
        requestHide={toggleShowConnectToAClassroom}
        bookId={bookId}
      />
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId, syncStatus }) => ({
  books,
  userDataByBookId,
  syncStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  deleteClassroomMember,
  deleteClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ManageClassrooms)