import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import { StyleSheet } from "react-native"
import uuidv4 from 'uuid/v4'

import Dialog from "./Dialog"
import DialogInput from "../basic/DialogInput"
import { i18n } from "inline-i18n"
import { getIdsFromAccountId } from "../../utils/toolbox"

import BackFunction from '../basic/BackFunction'

import { createClassroom, setCurrentClassroom } from "../../redux/actions"

// const styles = StyleSheet.create({
// })

const CreateClassroom = React.memo(({
  open,
  requestHide,
  bookId,

  books,

  createClassroom,
  setCurrentClassroom,
}) => {

  const [ name, setName ] = useState("")

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
      })

      setCurrentClassroom({
        bookId,
        uid,
      })

      requestHide({ hideAll: true })
    },
    [ bookId, name, userId ],
  )

  const onChangeText = useCallback(name => setName(name), [])

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open}
        type="confirm"
        title={i18n("Create a new classroom")}
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

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  createClassroom,
  setCurrentClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(CreateClassroom)