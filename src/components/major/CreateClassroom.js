import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import { StyleSheet } from "react-native"
import uuidv4 from 'uuid/v4'

import Dialog from "./Dialog"
import DialogInput from "../basic/DialogInput"
import i18n from "../../utils/i18n"

import BackFunction from '../basic/BackFunction'

import { createClassroom, setCurrentClassroom } from "../../redux/actions"

// const styles = StyleSheet.create({
// })

const CreateClassroom = React.memo(({
  open,
  requestHide,
  bookId,

  books,
  userDataByBookId,

  createClassroom,
  setCurrentClassroom,
}) => {

  const [ name, setName ] = useState("")

  const book = books[bookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const userId = accountId.split(':')[1]

  const createNewClassroom = useCallback(
    () => {
      const uid = uuidv4()

      createClassroom({
        uid,
        bookId,
        name,
        userId,
        patchInfo: {
          userDataByBookId,
        },
      })

      setCurrentClassroom({
        bookId,
        uid,
      })

      requestHide({ hideAll: true })
    },
    [ bookId, name, userId, userDataByBookId ],
  )

  const onChangeText = useCallback(name => setName(name), [])

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open}
        type="confirm"
        title={i18n("Create new classroom")}
        message={(
          <DialogInput
            value={name}
            onChangeText={onChangeText}
            label={i18n("Classroom name")}
            placeholder={i18n("Eg. Fall 2020")}
          />
        )}
        confirmButtonText={i18n("Create")}
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