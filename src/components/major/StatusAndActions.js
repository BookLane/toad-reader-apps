import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "react-native-ui-kitten"

import { i18n } from "inline-i18n"
// import {  } from '../../utils/toolbox'
import { getToolInfo } from '../../utils/toolInfo'

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
    flexGrow: 1,
  },
  statusWideMode: {
    textAlign: 'right',
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  preview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: 700,
    fontSize: 13,
  },
})

const StatusAndActions = React.memo(({
  bookId,
  isFrontMatter,
  setViewingPreview,

  books,
  userDataByBookId,
  syncStatus,

  publishTool,
  deleteTool,
  setSelectedToolUid,
}) => {

  const { classroomUid, selectedToolUid, selectedTool } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode: true })

  const wideMode = useWideMode()
  const { online } = useNetwork()

  const onPublish = useCallback(
    () => {
      if(isFrontMatter) {
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
    [ publishTool, bookId, classroomUid, selectedToolUid, isFrontMatter ],
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

  const onPreview = useCallback(() => setViewingPreview(true), [])

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

  const { toolInfoByType } = getToolInfo()
  const isReadyToPublish = isFrontMatter
    ? true
    : toolInfoByType[selectedTool.toolType].readyToPublish(selectedTool.data)


  // TODO's:

  // frontend
    // get rid of old school confirm (and any alerts)
    // confirm on publish
    // push to staging and test
    // push out

    // Show published date, last updated date
    // speed up (create function in toolbox for useEffect, useCallback, useMemo)
    // do publish for front matter
      // no "Add front matter" when not in edit mode
    // no swiping on tool edit inputs
    // add limits according to the spec
    // on enhanced homepage, don't count inEditMode in useClassroom...
    // mobile size
    // update latest location to prior spine when clicking on toc tool?

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
          disabled={syncStatus !== 'synced' || !online || !!selectedTool.published_at || !isReadyToPublish}
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
      <View style={styles.previewContainer}>
        <TouchableOpacity onPress={onPreview}>
          <Text style={styles.preview}>
            {i18n("Preview")}
          </Text>
        </TouchableOpacity>
      </View>
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