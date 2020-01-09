import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "react-native-ui-kitten"

import { i18n } from "inline-i18n"
// import {  } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useNetwork from "../../hooks/useNetwork"
import useClassroomInfo from '../../hooks/useClassroomInfo'

import { publishTool, deleteTool, setSelectedToolUid } from "../../redux/actions"

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
  userDataByBookId,
  syncStatus,

  publishTool,
  deleteTool,
  setSelectedToolUid,
}) => {

  const { classroomUid, selectedToolUid, selectedTool, viewingFrontMatter } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode: true })

  const wideMode = useWideMode()
  const { online } = useNetwork()

  const onPublish = useCallback(
    () => {
      if(viewingFrontMatter) {
        alert('Not yet implemented')
        return
      }
      if(!confirm("Are you sure?")) return
      publishTool({
        bookId,
        classroomUid,
        uid: selectedToolUid,
      })
    },
    [ publishTool, bookId, classroomUid, selectedToolUid, viewingFrontMatter ],
  )

  const onDelete = useCallback(
    () => {
      if(!confirm("Are you sure?")) return
      deleteTool({
        bookId,
        classroomUid,
        uid: selectedToolUid,
      })

      setSelectedToolUid({
        bookId,
        uid: selectedTool.currently_published_tool_uid || undefined,
      })
    },
    [ deleteTool, bookId, classroomUid, selectedToolUid, selectedTool.currently_published_tool_uid ],
  )

  const syncStatusMessages = {
    synced: i18n("Saved."),
    patching: i18n("Saving to server..."),
    refreshing: i18n("Saving to server..."),
    error: i18n("Unable to save to server."),
  }

  const publishedStatusMessages = {
    published: i18n("No changes since last publish."),
    edited: i18n("Contains unpublished changes."),
    new: i18n("Not yet published."),
  }

  const publishedStatus = (selectedTool || {}).published_at
    ? 'published'
    : (
      (selectedTool || {}).currently_published_tool_uid
        ? 'edited'
        : 'new'
    )

  // TODO's:

  // frontend
    // BUG: weird back-and-forth tool selection (reproduce: create took, publish, select it, create new tool, wait)
    // publish requirements: frontend and backend
    // push to staging and test
    // push out

    // Show published date, last updated date
    // speed up (create function in toolbox for useEffect, useCallback, useMemo)
    // do publish for front matter

    // do we need instruction for LAB phase??

  return (
    <View
      style={[
        styles.container,
        wideMode ? styles.containerWideMode : null,
      ]}
    >
      <View style={styles.buttons}>
        <Button
          onPress={onPublish}
          status="primary"
          style={styles.button}
          disabled={syncStatus !== 'synced' || !online || !!selectedTool.published_at}
        >
          {i18n("Publish")}
        </Button>
        {!isFrontMatter &&
          <Button
            onPress={onDelete}
            status="basic"
          >
            {selectedTool.currently_published_tool_uid ? i18n("Discard changes") : i18n("Remove")}
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
        {publishedStatusMessages[publishedStatus]}
      </Text>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId, syncStatus }) => ({
  books,
  userDataByBookId,
  syncStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  publishTool,
  deleteTool,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(StatusAndActions)