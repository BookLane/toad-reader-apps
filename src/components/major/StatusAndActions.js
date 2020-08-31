import React, { useCallback, useMemo } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import { validDomain, splitDraftDataToOptionsAndFrontMatter } from '../../utils/toolbox'
import { getToolInfo } from '../../utils/toolInfo'
import useWideMode from "../../hooks/useWideMode"
import useNetwork from "../../hooks/useNetwork"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useInstanceValue from "../../hooks/useInstanceValue"
import { publishTool, updateClassroom, deleteTool, setSelectedToolUid } from "../../redux/actions"

import HeaderIcon from "../basic/HeaderIcon"

const buttons = {
  flexDirection: 'row',
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  containerNonTool: {
    marginTop: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
  },
  containerWideMode: {
    marginTop: 0,
    marginLeft: 10,
    maxWidth: '50%',
  },
  buttons: {
    ...buttons,
  },
  buttonsWideMode: {
    ...buttons,
    justifyContent: 'flex-end',
  },
  button: {
    marginRight: 10,
  },
  statusAndWarning: {
    marginVertical: 15,
    flexGrow: 1,
  },
  statusAndWarningWideMode: {
    textAlign: 'right',
  },
  status: {
    color: 'rgba(0,0,0,.5)',
    textAlign: 'left',
  },
  warningMessage: {
    marginTop: 4,
    textAlign: 'left',
    color: 'red',
    fontSize: 12,
  },
  warning: {
    fontWeight: 'bold',
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  previewContainerNonTool: {
    marginTop: -30,
    paddingBottom: 15,
  },
  previewContainerNonToolWideMode: {
    position: 'absolute',
    bottom: -29,
    right: -5,
    backgroundColor: 'white',
    padding: 5,
  },
  preview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: '700',
    fontSize: 13,
  },
  close: {
    marginLeft: 10,
  },
})

const StatusAndActions = React.memo(({
  bookId,
  setViewingPreview,
  xOutOfTool,

  books,
  userDataByBookId,
  syncStatus,

  publishTool,
  updateClassroom,
  deleteTool,
  setSelectedToolUid,
}) => {

  const { classroom, classroomUid, selectedToolUid, selectedTool, viewingFrontMatter,
          viewingOptions, hasFrontMatterDraftData, hasOptionsDraftData, myRole } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode: true })

  const wideMode = useWideMode()
  const { online } = useNetwork()
  const getClassroomDraftData = useInstanceValue(classroom.draftData || {})

  const { toolInfoByType } = useMemo(getToolInfo, [])

  const onPublish = useCallback(
    () => {
      if(viewingFrontMatter) {
        if(!confirm("Are you sure you want to publish Front Matter?")) return

        const [ draftData, dataToPublish ] = splitDraftDataToOptionsAndFrontMatter(getClassroomDraftData())

        updateClassroom({
          uid: classroomUid,
          bookId,
          ...dataToPublish,
          draftData,
          published_at: Date.now(),
        })
  
      } else if(viewingOptions) {
        if(!confirm("Are you sure you want to publish these options?")) return

        const [ dataToPublish, draftData ] = splitDraftDataToOptionsAndFrontMatter(getClassroomDraftData())

        updateClassroom({
          uid: classroomUid,
          bookId,
          ...dataToPublish,
          draftData,
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
    [ bookId, classroomUid, selectedToolUid, viewingOptions, viewingFrontMatter ],
  )

  const onDelete = useCallback(
    () => {
      if(viewingFrontMatter) {
        if(!confirm("Are you sure you want to discard the Front Matter draft?")) return

        const [ draftData ] = splitDraftDataToOptionsAndFrontMatter(getClassroomDraftData())

        updateClassroom({
          uid: classroomUid,
          bookId,
          draftData,
        })

      } else if(viewingOptions) {
        if(!confirm("Are you sure you want to discard the draft options?")) return

        const [ x, draftData ] = splitDraftDataToOptionsAndFrontMatter(getClassroomDraftData())

        updateClassroom({
          uid: classroomUid,
          bookId,
          draftData,
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
    [ deleteTool, bookId, classroomUid, selectedToolUid, selectedTool.currently_published_tool_uid, viewingOptions, viewingFrontMatter ],
  )

  const onPreview = useCallback(() => setViewingPreview(true), [])

  const publishedStatusMessages = {
    published: i18n("No changes since last publish.", "", "enhanced"),
    edited: i18n("Contains unpublished changes.", "", "enhanced"),
    new: i18n("Not yet published.", "", "enhanced"),
  }

  const publishedStatus = (
    viewingFrontMatter
      ? (
        hasFrontMatterDraftData
          ? 'edited'
          : (
            classroom.published_at
              ? 'published'
              : 'new'
          )
      )
      : (
        viewingOptions
          ? (
            hasOptionsDraftData
              ? 'edited'
              : 'published'
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
      )
  )

  // make sure there is not more than a single LTI configuration per domain
  const hasDuplicateLTIConfigs = ltiConfigurations => (
    ltiConfigurations.length !== [...new Set(ltiConfigurations.map(({ domain }) => domain))].length
  )

  const isReadyToPublish = (
    viewingOptions
      ? (
        ((classroom.draftData || {}).lti_configurations || []).every(({ domain, key, secret }) => (
          validDomain(domain)
          && key
          && secret
        ))
        && !hasDuplicateLTIConfigs((classroom.draftData || {}).lti_configurations || [])
      )
      : (
        viewingFrontMatter
          ? true
          : toolInfoByType[selectedTool.toolType].readyToPublish({ data: selectedTool.data, classroom })
      )
  )

  const isTool = !!selectedTool.spineIdRef
  const isInlineTool = !!selectedTool.cfi

  const warnOfStudentDataLoss = (
    !!(toolInfoByType[selectedTool.toolType] || {}).warnOfUpdate
    && publishedStatus !== 'new'
    && myRole === 'INSTRUCTOR'
  )

  return (
    <View
      style={
        wideMode
          ? styles.containerWideMode
          : (
            isTool
              ? styles.container
              : styles.containerNonTool
          )
      }
    >
      <View style={wideMode ? styles.buttonsWideMode : styles.buttons}>
        <Button
          onPress={onPublish}
          status="primary"
          style={styles.button}
          size="small"
          disabled={syncStatus !== 'synced' || !online || [ 'published' ].includes(publishedStatus) || !isReadyToPublish}
        >
          {i18n("Publish", "", "enhanced")}
        </Button>
        <Button
          onPress={onDelete}
          status="basic"
          size="small"
          disabled={(viewingFrontMatter || viewingOptions) && [ 'published' ].includes(publishedStatus)}
        >
          {(viewingFrontMatter || viewingOptions || selectedTool.currently_published_tool_uid) ? i18n("Discard changes", "", "enhanced") : i18n("Remove", "", "enhanced")}
        </Button>
        {xOutOfTool && (isInlineTool || !wideMode) &&
          <HeaderIcon
            iconName="md-close"
            onPress={xOutOfTool}
            uiStatus="faded"
            style={styles.close}
          />
        }
      </View>
      <View style={styles.statusAndWarning}>
        <Text
          style={[
            styles.status,
            wideMode ? styles.statusAndWarningWideMode : null,
          ]}
        >
          {publishedStatusMessages[publishedStatus]}
        </Text>
        {warnOfStudentDataLoss &&
          <Text
            style={[
              styles.warningMessage,
              wideMode ? styles.statusAndWarningWideMode : null,
            ]}
          >
            <Text style={styles.warning}>
              {i18n("Warning:")}
            </Text>
            {` `}
            {i18n("Publishing an update will erase this tool’s student data.")}
          </Text>
        }
      </View>
      {!viewingOptions &&
        <View
          style={[
            ((wideMode && !isTool) ? styles.previewContainerNonToolWideMode : styles.previewContainer),
            ((!wideMode && !isTool) ? styles.previewContainerNonTool : null),
          ]}
        >
          <TouchableOpacity onPress={onPreview}>
            <Text style={styles.preview}>
              {i18n("Preview", "", "enhanced")}
            </Text>
          </TouchableOpacity>
        </View>
      }
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