import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "@ui-kitten/components"

import { i18n } from "inline-i18n"
import { validDomain } from '../../utils/toolbox'
import { getToolInfo } from '../../utils/toolInfo'

import useWideMode from "../../hooks/useWideMode"
import useNetwork from "../../hooks/useNetwork"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useInstanceValue from "../../hooks/useInstanceValue"

import { publishTool, updateClassroom, deleteTool, setSelectedToolUid } from "../../redux/actions"

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
    fontWeight: '700',
    fontSize: 13,
  },
})

const StatusAndActions = React.memo(({
  bookId,
  setViewingPreview,

  books,
  userDataByBookId,
  syncStatus,

  publishTool,
  updateClassroom,
  deleteTool,
  setSelectedToolUid,
}) => {

  const { classroom, classroomUid, selectedToolUid, selectedTool, viewingFrontMatter,
          hasDraftData, bookVersion } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode: true })

  const wideMode = useWideMode()
  const { online } = useNetwork()
  const getClassroomDraftData = useInstanceValue(classroom.draftData || {})

  const onPublish = useCallback(
    () => {
      if(viewingFrontMatter) {
        if(!confirm("Are you sure you want to publish Front Matter?")) return

        updateClassroom({
          uid: classroomUid,
          bookId,
          ...getClassroomDraftData(),
          draftData: {},
          published_at: Date.now(),
        })
  
      } else {
        if(!confirm("Are you sure you want to publish this tool?")) return

        publishTool({
          bookId,
          classroomUid,
          uid: selectedToolUid,
        })
      }
    },
    [ bookId, classroomUid, selectedToolUid, viewingFrontMatter ],
  )

  const onDelete = useCallback(
    () => {
      if(viewingFrontMatter) {
        if(!confirm("Are you sure you want to discard the Front Matter draft?")) return

        updateClassroom({
          uid: classroomUid,
          bookId,
          draftData: {},
        })
  
      } else {
        const isDraftOfPublished = !!selectedTool.currently_published_tool_uid
        if(isDraftOfPublished && !confirm("Are you sure you want to discard this draft?")) return
        if(!isDraftOfPublished && !confirm("Are you sure you want to delete this tool?")) return

        deleteTool({
          bookId,
          classroomUid,
          uid: selectedToolUid,
        })

        setSelectedToolUid({
          bookId,
          uid: selectedTool.currently_published_tool_uid || undefined,
        })

      }
    },
    [ deleteTool, bookId, classroomUid, selectedToolUid, selectedTool.currently_published_tool_uid ],
  )

  const onPreview = useCallback(() => setViewingPreview(true), [])

  const publishedStatusMessages = {
    published: i18n("No changes since last publish.", "", "enhanced"),
    edited: i18n("Contains unpublished changes.", "", "enhanced"),
    new: i18n("Not yet published.", "", "enhanced"),
  }

  const publishedStatus = viewingFrontMatter
    ? (
      hasDraftData
        ? 'edited'
        : (
          classroom.published_at
            ? 'published'
            : 'new'
        )
    )
    : (
      (selectedTool || {}).published_at
        ? 'published'
        : (
          (selectedTool || {}).currently_published_tool_uid
            ? 'edited'
            : 'new'
        )
    )

  // make sure there is not more than a single LTI configuration per domain
  const hasDuplicateLTIConfigs = ltiConfigurations => (
    ltiConfigurations.length !== [...new Set(ltiConfigurations.map(({ domain }) => domain))].length
  )

  const isReadyToPublish = viewingFrontMatter
    ? (
      ((classroom.draftData || {}).lti_configurations || []).every(({ domain, key, secret }) => (
        validDomain(domain)
        && key
        && secret
      ))
      && !hasDuplicateLTIConfigs((classroom.draftData || {}).lti_configurations || [])
    )
    : getToolInfo().toolInfoByType[selectedTool.toolType].readyToPublish({ data: selectedTool.data, classroom })

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
          disabled={syncStatus !== 'synced' || !online || publishedStatus === 'published' || !isReadyToPublish}
        >
          {i18n("Publish", "", "enhanced")}
        </Button>
        <Button
          onPress={onDelete}
          status="basic"
          disabled={viewingFrontMatter && publishedStatus === 'published'}
        >
          {(viewingFrontMatter || selectedTool.currently_published_tool_uid) ? i18n("Discard changes", "", "enhanced") : i18n("Remove", "", "enhanced")}
        </Button>
      </View>
      <Text
        style={[
          styles.status,
          wideMode ? styles.statusWideMode : null,
        ]}
      >
        {publishedStatusMessages[publishedStatus]}
      </Text>
      <View style={styles.previewContainer}>
        <TouchableOpacity onPress={onPreview}>
          <Text style={styles.preview}>
            {i18n("Preview", "", "enhanced")}
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
  updateClassroom,
  deleteTool,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(StatusAndActions)