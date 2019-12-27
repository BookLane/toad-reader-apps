import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getToolbarHeight } from '../../utils/toolbox'

import Tool from "./Tool"

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
})

const Tool = React.memo(({
  bookId,
  inEditMode,

  books,
  userDataByBookId,
}) => {

  const { selectedTool } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  if(!selectedTool) return null

  return (
    <View
      style={[
        styles.container,
        wideMode ? styles.constainerWideMode : null,
      ]}
    >
      <Tool
        bookId={bookId}
        inEditMode={inEditMode}
        tool={selectedTool}
      />
      {/* {toolSet.map(tool)} */}
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Tool)