import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "react-native-ui-kitten"

import { i18n } from "inline-i18n"
import { getIdsFromAccountId } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useInstanceValue from '../../hooks/useInstanceValue'

import { deleteTool } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  containerWideMode: {
    marginTop: 0,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 10,
  },
  status: {
    color: 'rgba(0,0,0,.5)',
    textAlign: 'left',
    marginVertical: 15,
  },
  statusWideMode: {
    textAlign: 'right',
  },
})

const StatusAndActions = React.memo(({
  bookId,
  toolUidInEdit,
  setToolUidInEdit,

  books,
  userDataByBookId,

  deleteTool,
}) => {

  const book = books[bookId] || {}
  const { accounts, currentClassroomUid } = book
  const accountId = Object.keys(accounts)[0] || ""
  const { idpId } = getIdsFromAccountId(accountId)

  const defaultClassroomUid = `${idpId}-${bookId}`
  const classroomUid = currentClassroomUid || defaultClassroomUid

  const wideMode = useWideMode()

  const getUserDataByBookId = useInstanceValue(userDataByBookId)

  const onDelete = useCallback(
    () => {
      if(!confirm("Are you sure?")) return
      deleteTool({
        bookId,
        classroomUid,
        uid: toolUidInEdit,
        patchInfo: {
          userDataByBookId: getUserDataByBookId(),
        },
      })
      setToolUidInEdit()
    },
    [ deleteTool, bookId, classroomUid, toolUidInEdit, setToolUidInEdit ],
  )

  return (
    <View
      style={[
        styles.container,
        wideMode ? styles.containerWideMode : null,
      ]}
    >
      <View style={styles.buttons}>
        <Button
          onPress={() => alert('not yet implemented')}
          status="primary"
          style={styles.button}
        >
          {i18n("Publish")}
        </Button>
        <Button
          onPress={onDelete}
          status="basic"
        >
          {i18n("Remove")}
        </Button>
      </View>
      <Text
        style={[
          styles.status,
          wideMode ? styles.statusWideMode : null,
        ]}
      >
        {i18n("Not yet published.")}
      </Text>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  deleteTool,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(StatusAndActions)