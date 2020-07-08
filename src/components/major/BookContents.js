import React, { useMemo, useCallback } from "react"
import { StyleSheet, View, Platform } from "react-native"
import { List } from "@ui-kitten/components"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import uuidv4 from 'uuid/v4'
import { useLayout } from '@react-native-community/hooks'

import { statusBarHeight, bottomSpace, getSpineIdRefsInToc } from '../../utils/toolbox'
import useSetTimeout from '../../hooks/useSetTimeout'
import useInstanceValue from '../../hooks/useInstanceValue'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useWideMode from "../../hooks/useWideMode"
import useSpineIdRefAndCfi from "../../hooks/useSpineIdRefAndCfi"
import { createTool } from "../../redux/actions"

import BookContentsLine from "../basic/BookContentsLine"
import EnhancedHeader from "./EnhancedHeader"
import FAB from "../basic/FAB"

const paddingTop = 12

const styles = StyleSheet.create({
  listHeader: {
    paddingTop,
  },
  listHeaderWideMode: {
    paddingTop: paddingTop + (Platform.OS === 'ios' ? statusBarHeight : 0),
  },
  listFooter: {
    paddingTop: 70 + bottomSpace,
  },
})

const BookContents = React.memo(({
  goTo,
  bookId,
  reportSpots,
  onToolMove,
  onToolRelease,
  onScroll,
  inEditMode,
  toggleInEditMode,
  setModeToPage,
  hideFABs,

  books,
  userDataByBookId,

  createTool,
}) => {

  const { toc, classroomUid, visibleTools, selectedTool, bookVersion,
          myRole, viewingFrontMatter, viewingOptions, selectedToolUid } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const { latest_location } = userDataByBookId[bookId] || {}
  const currentSpineIdRef = useSpineIdRefAndCfi(latest_location).spineIdRef

  const wideMode = useWideMode()
        
  const showAddToolButton = (
    (
      bookVersion === 'INSTRUCTOR'
      && myRole === 'INSTRUCTOR'
    )
    || bookVersion === 'PUBLISHER'
  )

  const toolsInfoWithinBySpineIdRef = useMemo(
    () => {
      const infoBySpineIdRef = {}

      visibleTools.forEach(({ spineIdRef, cfi, published_at }) => {
        if(!cfi) return

        if(!infoBySpineIdRef[spineIdRef]) {
          infoBySpineIdRef[spineIdRef] = {
            count: 0,
            isDraft: false,
          }
        }

        infoBySpineIdRef[spineIdRef].count++
        infoBySpineIdRef[spineIdRef].isDraft = infoBySpineIdRef[spineIdRef].isDraft || !published_at
      })

      return infoBySpineIdRef
    },
    [ JSON.stringify(visibleTools), inEditMode ],
  )

  const getListItems = (toc, indentLevel=0, insertedToolUidObj={}, insertedNumSpineIdRefObj={}) => {
    let listItems = []

    const findToolsToInsert = spineIdRefToFind => {
      const toolsToInsert = visibleTools
        .filter(({ uid, spineIdRef, cfi }) => (
          spineIdRef === spineIdRefToFind
          && !cfi
          && !insertedToolUidObj[uid]
        ))

      toolsToInsert.forEach(({ uid }) => {
        insertedToolUidObj[uid] = true
      })

      return toolsToInsert.map(({ uid, name, toolType, data, published_at, spineIdRef, ordering }) => ({
        key: uid,
        uid,
        indentLevel,
        label: name,
        toolType,
        data,
        isDraft: !published_at,
        spineIdRef,
        ordering,
        isTool: true,
        lineHeight: 34,  // default for fallback
      }))
    }

    ;(toc || []).forEach(tocItem => {
      const toolInfoWithin = (!insertedNumSpineIdRefObj[tocItem.spineIdRef] && toolsInfoWithinBySpineIdRef[tocItem.spineIdRef]) || 0
      insertedNumSpineIdRefObj[tocItem.spineIdRef] = true
      listItems = [
        ...listItems,
        ...findToolsToInsert(tocItem.spineIdRef),
        {
          ...tocItem,
          indentLevel,
          key: `${tocItem.label}-${tocItem.href}`,
          numToolsWithin: toolInfoWithin.count,
          isDraft: toolInfoWithin.isDraft,
          lineHeight: 34,  // default for fallback
        },
        ...getListItems(tocItem.subNav, indentLevel+1, insertedToolUidObj, insertedNumSpineIdRefObj),
      ]
    })

    if(indentLevel === 0) {
      listItems = [
        ...listItems,
        ...findToolsToInsert('AFTER LAST SPINE'),
      ]
    }

    return listItems
  }

  const data = useMemo(
    () => getListItems(toc),
    [ toc, JSON.stringify(visibleTools), inEditMode ],
  )

//   Following code not used because it was inconsistent. Turned maxToRenderPerBatch up instead.

//   const prevData = usePrevious(data)

//   useMemo(
//     () => {
//       if(!prevData) return

//       // keep lineHeight values from previous data
//       const prevTocData = prevData.filter(({ isTool }) => !isTool)

//       let tocIndex = 0
//       data.forEach(item => {
//         if(!item.isTool) {
//           item.lineHeight = (prevTocData[tocIndex] || {}).lineHeight
//         }
//       })

//     },
//     [ data ],
//   )

  const { onLayout, width, y: offsetY } = useLayout()

  const getWidth = useInstanceValue(width)
  const getOffsetY = useInstanceValue(offsetY)

  const [ setReportSpotsTimeout ] = useSetTimeout()

  const reportLineHeight = useCallback(
    ({ index, height }) => {
      if(height === 0) return

      data[index].lineHeight = height

      setReportSpotsTimeout(() => {
        let accumulatedHeight = getOffsetY() + paddingTop
        let accumulatedOrdering = 0
        const usedSpineIdRefsObj = {}
        reportSpots({
          type: 'BookContents',
          styles: {
            width: getWidth(),
            right: 0,
          },
          spots: [
            ...data.map(({ lineHeight=0, spineIdRef, isTool, ordering }) => {
              const info = {
                y: accumulatedHeight,
                spineIdRef,
                cfi: null,
                ordering: isTool ? ordering : accumulatedOrdering,
              }

              accumulatedHeight += lineHeight
              accumulatedOrdering = isTool ? ordering + 1 : 0

              if(!isTool) {
                if(usedSpineIdRefsObj[spineIdRef]) {
                  return false
                }
                usedSpineIdRefsObj[spineIdRef] = true
              }

              return info
            }).filter(Boolean),
            {
              y: accumulatedHeight,
              spineIdRef: 'AFTER LAST SPINE',
              cfi: null,
              ordering: accumulatedOrdering,
            },
          ],
        })
      })
    },
    [ data, reportSpots ],
  )

  const renderItem = useCallback(
    ({ item }, index) => {

      const selected = item.toolType
        ? (item.uid === selectedToolUid)
        : (!selectedToolUid && item.spineIdRef === currentSpineIdRef)

      return (
        <BookContentsLine
          {...item}
          bookId={bookId}
          goTo={goTo}
          reportLineHeight={reportLineHeight}
          index={index}
          onToolMove={onToolMove}
          onToolRelease={onToolRelease}
          uiStatus={selected ? "selected" : "unselected"}
          setModeToPage={setModeToPage}
          inEditMode={inEditMode}
        />
      )
    },
    [ selectedToolUid, currentSpineIdRef, bookId, goTo, reportLineHeight, inEditMode ],
  )

  const createNewTool = useCallback(
    () => {

      const uid = uuidv4()
      let spineIdRef
      let ordering = 0

      if(selectedTool) {

        spineIdRef = selectedTool.spineIdRef
        ordering = selectedTool.ordering + 1

      } else {

        const spineIdRefsInToc = getSpineIdRefsInToc(toc)
        spineIdRef = spineIdRefsInToc[spineIdRefsInToc.indexOf(currentSpineIdRef) + 1] || 'AFTER LAST SPINE'

      }

      createTool({
        bookId,
        classroomUid,
        uid,
        spineIdRef,
        // cfi,
        ordering,
        name: "",
        // toolType,
      })
    },
    [ bookId, classroomUid, currentSpineIdRef, JSON.stringify(visibleTools), selectedTool ],
  )

  const ListHeader = useMemo(
    () => (
      <View
        style={
          (
            wideMode
            && bookVersion === 'BASE'
          )
            ? styles.listHeaderWideMode
            : styles.listHeader
        }
      />
    ),
    [ wideMode ],
  )

  const ListFooter = useMemo(() => <View style={styles.listFooter} />, [])

  if(!toc) return null

  return (
    <>
      <EnhancedHeader
        bookId={bookId}
        inEditMode={inEditMode}
        toggleInEditMode={toggleInEditMode}
        setModeToPage={setModeToPage}
      />
      <List
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        data={data}
        renderItem={renderItem}
        onLayout={onLayout}
        onScroll={onScroll}
        initialNumToRender={25}
        maxToRenderPerBatch={Platform.OS === 'web' ? 9999 : undefined}  // I need this value to work with reportSpots
      />
      {showAddToolButton && inEditMode && !viewingFrontMatter && !viewingOptions && !hideFABs &&
        <FAB
          iconName="md-add"
          status="primary"
          onPress={createNewTool}
        />
      }
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  createTool,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContents)