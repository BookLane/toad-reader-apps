import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Select, SelectItem, IndexPath } from "@ui-kitten/components"
import { v4 as uuidv4 } from 'uuid'
import { i18n } from "inline-i18n"

import { getToolInfo } from '../../utils/toolInfo'
import useWideMode from "../../hooks/useWideMode"
import useSetTimeout from '../../hooks/useSetTimeout'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useRouterState from "../../hooks/useRouterState"
import { updateTool, createTool } from "../../redux/actions"

import StatusAndActions from "./StatusAndActions"
import Input from "../basic/Input"
import EditToolData from "./EditToolData"
import HeaderIcon from "../basic/HeaderIcon"

const basicDetailLine = {
  marginBottom: 10,
}

const styles = StyleSheet.create({
  topSection: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 10,
  },
  topSectionWideMode: {
    flexDirection: 'row',
  },
  basicDetails: {
    flex: 1,
  },
  basicDetailLine: {
    ...basicDetailLine,
  },
  basicDetailLineWideMode: {
    ...basicDetailLine,
    width: 350,
    maxWidth: '100%',
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    flex: 1,
  },
  bottomSectionContent: {
    flex: 1,
  },
  bottomSectionWideMode: {
  },
  closeContainer: {
    height: 30,
  },
  close: {
    position: 'absolute',
    top: -5,
    right: -12,
  },
})

const EditTool = React.memo(({
  bookId,
  tool,
  setViewingPreview,
  xOutOfTool,

  books,
  userDataByBookId,

  updateTool,
  createTool,
}) => {

  const { toolTypes, toolInfoByType } = getToolInfo()

  const { accountId, classroomUid, classroom, isDefaultClassroom } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { getRouterState, historyReplace } = useRouterState()

  const wideMode = useWideMode()

  const [ setToolNameSaveTimeout ] = useSetTimeout({ fireOnUnmount: true })

  const [ nameInEdit, setNameInEdit ] = useState()

  useEffect(
    () => {
      setNameInEdit((tool || {}).name || '')
    },
    [ tool ],
  )

  const goUpdateTool = useCallback(
    updates => {

      if(tool.published_at) {
        const uid = uuidv4()

        createTool({
          ...tool,
          bookId,
          classroomUid,
          uid,
          published_at: null,
          currently_published_tool_uid: tool.uid,
          creatorType: (
            (!isDefaultClassroom && tool.creatorType === 'PUBLISHER')
              ? 'BOTH'
              : tool.creatorType
          ),
          ...updates,
          getRouterState,
          historyReplace,
        })

      } else {
        updateTool({
          bookId,
          classroomUid,
          uid: tool.uid,
          ...updates,
        })

      }
    },
    [ bookId, classroomUid, tool.uid, tool.published_at ],
  )

  const onToolNameChange = useCallback(
    name => {
      setNameInEdit(name)
      setToolNameSaveTimeout(
        () => goUpdateTool({ name }),
        300,
      )
    },
    [ goUpdateTool ],
  )

  const onSelectToolType = useCallback(
    ({ row: index }) => (
      goUpdateTool({
        toolType: toolTypes[index].toolType,
        data: {},
      })
    ),
    [ goUpdateTool, toolTypes ],
  )

  const selectedOption = toolTypes.filter(({ toolType }) => toolType === tool.toolType)[0]

  return (
    <>
      <View
        style={[
          styles.topSection,
          wideMode ? styles.topSectionWideMode : null,
        ]}
      >
        <View style={styles.basicDetails}>
          {!wideMode &&
            <View style={styles.closeContainer}>
              <HeaderIcon
                iconName="close"
                onPress={xOutOfTool}
                uiStatus="faded"
                style={styles.close}
              />
            </View>
          }
          <View style={wideMode ? styles.basicDetailLineWideMode : styles.basicDetailLine}>
            <Input
              placeholder={i18n("Unnamed", "", "enhanced")}
              label={i18n("Tool name", "", "enhanced")}
              value={nameInEdit}
              onChangeText={onToolNameChange}
            />
          </View>
          <View style={wideMode ? styles.basicDetailLineWideMode : styles.basicDetailLine}>
            <Select
              key={tool.uid}
              label={i18n("Tool type", "", "enhanced")}
              value={selectedOption.text}
              selectedIndex={new IndexPath(toolTypes.indexOf(selectedOption))}
              onSelect={onSelectToolType}
              disabled={Object.keys(tool.data || {}).length > 0}
            >
              {toolTypes.map(({ text }, idx) => (
                <SelectItem
                  key={idx}
                  title={text}
                />
              ))}
            </Select>
          </View>
        </View>
        <StatusAndActions
          bookId={bookId}
          setViewingPreview={setViewingPreview}
          xOutOfTool={wideMode ? xOutOfTool : null}
        />
      </View>
      <ScrollView
        style={[
          styles.bottomSection,
          wideMode ? styles.bottomSectionWideMode : null,
        ]}
        contentContainerStyle={styles.bottomSectionContent}
      >
        <EditToolData
          classroomUid={classroomUid}
          isDefaultClassroom={isDefaultClassroom}
          classroom={classroom}
          toolUid={tool.uid}
          isDraft={!tool.published_at}
          accountId={accountId}
          dataStructure={toolInfoByType[tool.toolType].dataStructure}
          transformData={toolInfoByType[tool.toolType].transformData}
          data={tool.data}
          goUpdateTool={goUpdateTool}
        />
      </ScrollView>
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateTool,
  createTool,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EditTool)