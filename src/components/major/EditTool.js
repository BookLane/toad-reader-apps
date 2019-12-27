import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Select } from "react-native-ui-kitten"

import Input from "../basic/Input"

import { i18n } from "inline-i18n"
import { getToolInfo } from '../../utils/toolInfo'
import StatusAndActions from "./StatusAndActions"

import useWideMode from "../../hooks/useWideMode"
import useInstanceValue from '../../hooks/useInstanceValue'
import useSetTimeout from '../../hooks/useSetTimeout'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import { updateTool } from "../../redux/actions"
import EditToolData from "./EditToolData"

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
    width: 350,
    marginBottom: 10,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    flex: 1,
    overflow: 'auto',
  },
  bottomSectionWideMode: {
  },
})

const EditTool = React.memo(({
  bookId,
  tool,

  books,
  userDataByBookId,

  updateTool,
}) => {

  const { toolTypes, toolInfoByType } = getToolInfo()

  const { accountId, classroomUid } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  const [ setToolNameSaveTimeout ] = useSetTimeout()

  const [ nameInEdit, setNameInEdit ] = useState()

  useEffect(
    () => {
      setNameInEdit((tool || {}).name || '')
    },
    [ tool ],
  )

  const getUserDataByBookId = useInstanceValue(userDataByBookId)

  const goUpdateTool = useCallback(
    updates => {
      updateTool({
        bookId,
        classroomUid,
        uid: tool.uid,
        ...updates,
        patchInfo: {
          userDataByBookId: getUserDataByBookId(),
        },
      })
    },
    [ updateTool, bookId, classroomUid, tool.uid ],
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
    ({ toolType }) => goUpdateTool({ toolType, data: {} }),
    [ goUpdateTool ],
  )

  return (
    <>
      <View
        style={[
          styles.topSection,
          wideMode ? styles.topSectionWideMode : null,
        ]}
      >
        <View style={styles.basicDetails}>
          <View style={styles.basicDetailLine}>
            <Input
              placeholder={i18n("Unnamed")}
              label={i18n("Tool name")}
              value={nameInEdit}
              onChangeText={onToolNameChange}
            />
          </View>
          <View style={styles.basicDetailLine}>
            <Select
              key={tool.uid}
              label={i18n("Tool type")}
              data={toolTypes}
              selectedOption={toolTypes.filter(({ toolType }) => toolType === tool.toolType)[0]}
              onSelect={onSelectToolType}
              disabled={Object.keys(tool.data || {}).length > 0}
            />
          </View>
        </View>
        <StatusAndActions
          bookId={bookId}
        />
      </View>
      <View
        style={[
          styles.bottomSection,
          wideMode ? styles.bottomSectionWideMode : null,
        ]}
      >
        <EditToolData
          classroomUid={classroomUid}
          toolUid={tool.uid}
          accountId={accountId}
          dataStructure={toolInfoByType[tool.toolType].dataStructure}
          data={tool.data}
          goUpdateTool={goUpdateTool}
        />
      </View>
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateTool,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EditTool)