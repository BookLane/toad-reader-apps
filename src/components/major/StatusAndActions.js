import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "react-native-ui-kitten"

import { i18n } from "inline-i18n"
// import {  } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

import { deleteTool, setSelectedToolUid } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  containerWideMode: {
    marginTop: 0,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  isFrontMatter,

  books,
  syncStatus,

  deleteTool,
  setSelectedToolUid,
}) => {

  const { classroomUid, selectedToolUid } = useClassroomInfo({ books, bookId })

  const wideMode = useWideMode()

  const onDelete = useCallback(
    () => {
      if(!confirm("Are you sure?")) return
      deleteTool({
        bookId,
        classroomUid,
        uid: selectedToolUid,
      })
      setSelectedToolUid({ bookId })
    },
    [ deleteTool, bookId, classroomUid, selectedToolUid ],
  )

  const syncStatusMessages = {
    synced: i18n("Saved."),
    patching: i18n("Saving to server..."),
    refreshing: i18n("Saving to server..."),
    error: i18n("Unable to save to server."),
  }

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
        {!isFrontMatter &&
          <Button
            onPress={onDelete}
            status="basic"
          >
            {i18n("Remove")}
          </Button>
        }
      </View>
      <Text
        style={[
          styles.status,
          wideMode ? styles.statusWideMode : null,
        ]}
      >
        {syncStatusMessages[syncStatus]}
        {" "}
        {i18n("Not yet published.")}
      </Text>
    </View>
  )
})

const mapStateToProps = ({ books, syncStatus }) => ({
  books,
  syncStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  deleteTool,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(StatusAndActions)