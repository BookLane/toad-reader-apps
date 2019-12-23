import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// import { i18n } from "inline-i18n"
import { getToolbarHeight } from '../../utils/toolbox'
import { getToolInfo } from '../../utils/toolInfo'

import NotesInsertTool from './NotesInsertTool'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    zIndex: 5,
  },
  constainerWideMode: {
    top: getToolbarHeight(),
  },
  topSection: {
    padding: 20,
    paddingBottom: 10,
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    flex: 1,
    overflow: 'auto',
  },
  name: {
    fontWeight: 600,
    fontSize: 18,
  },
})

const EditTool = React.memo(({
  bookId,
  toolUid,

  books,
  userDataByBookId,
}) => {

  const { toolTypes, toolInfoByType } = getToolInfo()

  const { classroomUid, tools } = useClassroomInfo({ books, bookId, userDataByBookId })
  const tool = tools.filter(({ uid }) => uid === toolUid)[0]

  const wideMode = useWideMode()

  if(!tool) return null

  const { toolType, name, data } = tool

  let ToolComponent = View

  switch(toolType) {
    case 'NOTES_INSERT': {
      ToolComponent = NotesInsertTool
    }
  }

  return (
    <View
      style={[
        styles.container,
        wideMode ? styles.constainerWideMode : null,
      ]}
    >
      <View style={styles.topSection}>
        <Text style={styles.name}>
          {name || toolInfoByType[toolType].text}
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <ToolComponent {...data} />
      </View>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EditTool)