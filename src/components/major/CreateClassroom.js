import React, { useState, useCallback, useMemo } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View } from "react-native"
import { Select } from "@ui-kitten/components"
import uuidv4 from 'uuid/v4'
import { i18n } from "inline-i18n"

import Dialog from "./Dialog"
import DialogInput from "../basic/DialogInput"
import BackFunction from '../basic/BackFunction'

import { getIdsFromAccountId } from "../../utils/toolbox"

import useClassroomInfo from "../../hooks/useClassroomInfo"

import { createClassroom, setCurrentClassroom } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    width: 320,
    maxWidth: 320,
  },
  select: {
    marginTop: 10,
  },
})

const CreateClassroom = React.memo(({
  open,
  requestHide,
  bookId,

  books,
  userDataByBookId,

  createClassroom,
  setCurrentClassroom,
}) => {

  const { defaultClassroomUid, sortedClassrooms } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ name, setName ] = useState("")
  const [ basedOffUid, setBasedOffUid ] = useState(defaultClassroomUid)

  const book = books[bookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const { userId } = getIdsFromAccountId(accountId)

  const createNewClassroom = useCallback(
    () => {
      const uid = uuidv4()

      createClassroom({
        uid,
        bookId,
        name,
        userId,
        based_off_classroom_uid: basedOffUid,
      })

      setCurrentClassroom({
        bookId,
        uid,
      })

      requestHide({ hideAll: true })
    },
    [ bookId, name, userId, basedOffUid ],
  )

  const onChangeText = useCallback(name => setName(name), [])

  const basedOffOptions = useMemo(
    () => sortedClassrooms
      .filter(({ uid, members=[] }) => {
        const myRole = (members.filter(({ user_id }) => user_id === userId)[0] || {}).role || 'STUDENT'
        return (
          !uid
          || uid === defaultClassroomUid
          || myRole === 'INSTRUCTOR'
        )
      })
      .map(({ uid, name }) => ({
        text: (
          uid === defaultClassroomUid
            ? i18n("Enhanced book", "", "enhanced")
            : (
              !uid
                ? i18n("None", "", "enhanced")
                : name
            )
        ),
        uid,
      })),
    [ sortedClassrooms, defaultClassroomUid, userId ]
  )

  const onSelect = useCallback(({ uid }) => setBasedOffUid(uid), [])

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open}
        type="confirm"
        title={i18n("Create a new classroom", "", "enhanced")}
        message={(
          <View style={styles.container}>
            <DialogInput
              value={name}
              onChangeText={onChangeText}
              label={i18n("Classroom name", "", "enhanced")}
              placeholder={i18n("Eg. Fall 2020", "", "enhanced")}
            />
            <Select
              label={i18n("Based off...", "", "enhanced")}
              style={styles.select}
              data={basedOffOptions}
              selectedOption={basedOffOptions.filter(({ uid }) => uid === basedOffUid)[0]}
              onSelect={onSelect}
            />
          </View>
        )}
        confirmButtonText={i18n("Create", "", "enhanced")}
        confirmButtonStatus="primary"
        onCancel={requestHide}
        onConfirm={createNewClassroom}
      />
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  createClassroom,
  setCurrentClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(CreateClassroom)