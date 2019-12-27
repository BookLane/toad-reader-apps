import React, { useMemo, useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { ViewPager, Button } from "react-native-ui-kitten"
import Tool from "./Tool"

import { getToolbarHeight } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

import { setSelectedToolUid } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    zIndex: 5,
  },
  constainerWideMode: {
    top: getToolbarHeight(),
  },
  toolContainer: {
    flex: 1,
  },
})

const ToolFlipper = React.memo(({
  bookId,
  inEditMode,

  books,
  userDataByBookId,

  setSelectedToolUid,
}) => {

  const { selectedTool, tools } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  const toolSet = useMemo(
    () => {
      const toolsInSameSet = tools.filter(({ spineIdRef, cfi, _delete }) => (
        spineIdRef === (selectedTool || {}).spineIdRef
        && !cfi
        && !_delete
      ))
    
      toolsInSameSet.sort((a, b) => a.ordering - b.ordering)

      return toolsInSameSet
    },
    [ tools, (selectedTool || {}).spineIdRef ],
  )

  const onPageChange = useCallback(
    pageIdx => {
      setSelectedToolUid({
        bookId,
        uid: (toolSet[pageIdx - 1] || {}).uid,
      })
    },
    [ toolSet, bookId ],
  )

  if(!selectedTool) return null

  if(selectedTool.cfi) {  // no pager needed
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
      </View>
    )  
  }

  const pageIndex = toolSet.map(({ uid }) => uid).indexOf(selectedTool.uid) + 1

  return (
    <ViewPager
      style={[
        styles.container,
        wideMode ? styles.constainerWideMode : null,
      ]}
      selectedIndex={pageIndex}
      onSelect={onPageChange}
    >
      <View style={styles.toolContainer} />
      {toolSet.map(tool => (
        <View style={styles.toolContainer}>
          <Tool
            bookId={bookId}
            inEditMode={inEditMode}
            tool={tool}
          />
        </View>
      ))}
      <View style={styles.toolContainer} />
    </ViewPager>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ToolFlipper)