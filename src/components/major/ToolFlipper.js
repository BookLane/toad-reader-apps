import React, { useMemo, useCallback, useState, useEffect } from "react"
import { Platform, StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ViewPager } from "@ui-kitten/components"

import { getToolbarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { setSelectedToolUid } from "../../redux/actions"

import Tool from "./Tool"
import ToolFlipperButton from "../basic/ToolFlipperButton"

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
  goTo,
  closeToolAndExitReading,
  classroomQueryString,
  logToolUsageEvent,

  books,
  userDataByBookId,

  setSelectedToolUid,
}) => {

  const { selectedTool, visibleTools, spines, classroom, myRole, isDefaultClassroom } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })
  const [ fullscreenInfo, setFullscreenInfo ] = useState()
  const [ viewingPreview, setViewingPreview ] = useState(false)

  const wideMode = useWideMode()

  const toolSet = useMemo(
    () => {
      const toolsInSameSet = visibleTools.filter(({ spineIdRef, cfi }) => (
        spineIdRef === (selectedTool || {}).spineIdRef
        && !cfi
      ))
    
      toolsInSameSet.sort((a, b) => a.ordering - b.ordering)

      return toolsInSameSet
    },
    [ visibleTools, (selectedTool || {}).spineIdRef, inEditMode ],
  )

  const onPageChange = useCallback(
    pageIdx => {
      const { uid } = toolSet[pageIdx - 1] || {}

      if(!uid) {
        const followingSpineIndex = toolSet[0].spineIdRef === 'AFTER LAST SPINE'
          ? spines.length
          : spines.map(({ idref }) => idref).indexOf(toolSet[0].spineIdRef)
        const goToSpine = spines[pageIdx === 0 ? followingSpineIndex - 1 : followingSpineIndex]

        if(!goToSpine) return

        goTo({
          spineIdRef: goToSpine.idref,
          lastPage: pageIdx === 0,
        })
      }

      setSelectedToolUid({
        bookId,
        uid,
      })
    },
    [ toolSet, bookId, spines, goTo ],
  )

  const closeTool = useCallback(
    () => setSelectedToolUid({ bookId }),
    [ bookId ],
  )

  useEffect(
    () => {
      // exit fullscreen mode on tool change
      setFullscreenInfo()
    },
    [ (selectedTool || {}).uid ],
  )

  const logUsageEvent = useCallback(
    params => {
      if(viewingPreview) return
      logToolUsageEvent(params)
    },
    [ logToolUsageEvent, viewingPreview ],
  )

  useEffect(
    () => {
      logUsageEvent({
        toolUid: (selectedTool || {}).uid,
        eventName: `View tool`,
      })
    },
    [ (selectedTool || {}).uid, inEditMode, viewingPreview ],
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
          xOutOfTool={closeTool}
          classroomQueryString={classroomQueryString}
          fullscreenInfo={fullscreenInfo}
          setFullscreenInfo={setFullscreenInfo}
          viewingPreview={viewingPreview}
          setViewingPreview={setViewingPreview}
          logUsageEvent={logUsageEvent}
        />
      </View>
    )  
  }

  const pageIndex = toolSet.map(({ uid }) => uid).indexOf(selectedTool.uid) + 1

  return (
    <>
      {!!fullscreenInfo && 
        <View
          style={[
            styles.container,
            wideMode ? styles.constainerWideMode : null,
          ]}
        >
          <View
            style={styles.toolContainer}
          >
            <Tool
              bookId={bookId}
              inEditMode={inEditMode}
              tool={toolSet[pageIndex - 1]}
              xOutOfTool={closeToolAndExitReading}
              classroomQueryString={classroomQueryString}
              fullscreenInfo={fullscreenInfo}
              setFullscreenInfo={setFullscreenInfo}
              viewingPreview={viewingPreview}
              setViewingPreview={setViewingPreview}
              logUsageEvent={logUsageEvent}
            />
          </View>
        </View>
      }
      {!fullscreenInfo &&
        <>
          <ViewPager
            // The key prevents a bad onSelect call when creating a tool while another was selected.
            key={toolSet.length}
            style={[
              styles.container,
              wideMode ? styles.constainerWideMode : null,
            ]}
            selectedIndex={pageIndex}
            onSelect={onPageChange}
          >
            <View style={styles.toolContainer} />
            {toolSet.map(tool => (
              <View
                key={tool.currently_published_tool_uid || tool.uid}
                style={styles.toolContainer}
              >
                <Tool
                  bookId={bookId}
                  inEditMode={inEditMode}
                  tool={tool}
                  xOutOfTool={closeToolAndExitReading}
                  classroomQueryString={classroomQueryString}
                  setFullscreenInfo={setFullscreenInfo}
                  viewingPreview={viewingPreview}
                  setViewingPreview={setViewingPreview}
                  logUsageEvent={logUsageEvent}
                />
              </View>
            ))}
            <View style={styles.toolContainer} />
          </ViewPager>
          {Platform.OS === 'web' && !inEditMode &&
            <>
              <ToolFlipperButton
                side="left"
                onPageChange={onPageChange}
                newPageIndex={pageIndex - 1}
              />
              <ToolFlipperButton
                side="right"
                onPageChange={onPageChange}
                newPageIndex={pageIndex + 1}
              />
            </>
          }
        </>
      }
    </>
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