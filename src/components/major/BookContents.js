import React, { useMemo, useCallback } from "react"
import { StyleSheet } from "react-native"
import { List } from "react-native-ui-kitten"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import uuidv4 from 'uuid/v4'

import BookContentsLine from "../basic/BookContentsLine"
import EnhancedHeader from "./EnhancedHeader"
import FAB from "../basic/FAB"

import { getSpineAndPage } from '../../utils/toolbox'
import useSetTimeout from '../../hooks/useSetTimeout'
import useInstanceValue from '../../hooks/useInstanceValue'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { useLayout } from 'react-native-hooks'

import { createTool, setSelectedToolUid } from "../../redux/actions"

const paddingTop = 12

const styles = StyleSheet.create({
  list: {
    paddingTop,
    paddingBottom: 20,
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

  books,
  userDataByBookId,
  displaySettings,

  createTool,
  setSelectedToolUid
}) => {

  const { book, toc, userId, classroomUid, classroom, tools, selectedTool } = useClassroomInfo({ books, bookId, userDataByBookId })

  const bookVersion = Object.values(book.accounts)[0].version
  const myRole = (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role || 'STUDENT'
  const showAddToolButton = (
    (
      bookVersion === 'INSTRUCTOR'
      && myRole === 'INSTRUCTOR'
    )
    || bookVersion === 'PUBLISHER'
  )

  const numToolsWithinBySpineIdRef = useMemo(
    () => {
      const countsBySpineIdRef = {}

      tools.forEach(({ spineIdRef, cfi, _delete }) => {
        if(_delete || !cfi) return
        if(!countsBySpineIdRef[spineIdRef]) {
          countsBySpineIdRef[spineIdRef] = 0
        }
        countsBySpineIdRef[spineIdRef]++
      })

      return countsBySpineIdRef
    },
    [ tools ],
  )

  const getListItems = (toc, indentLevel=0, insertedToolUidObj={}, insertedNumSpineIdRefObj={}) => {
    let listItems = []

    const findToolsToInsert = spineIdRefToFind => {
      const toolsToInsert = tools
        .filter(({ uid, spineIdRef, cfi, _delete }) => (spineIdRef === spineIdRefToFind && !cfi && !_delete && !insertedToolUidObj[uid]))

      toolsToInsert.forEach(({ uid }) => {
        insertedToolUidObj[uid] = true
      })

      return toolsToInsert.map(({ uid, name, toolType, spineIdRef, ordering }) => ({
        key: uid,
        uid,
        indentLevel,
        label: name,
        toolType,
        spineIdRef,
        ordering,
        isTool: true,
      }))
    }

    ;(toc || []).forEach(tocItem => {
      const numToolsWithin = (!insertedNumSpineIdRefObj[tocItem.spineIdRef] && numToolsWithinBySpineIdRef[tocItem.spineIdRef]) || 0
      insertedNumSpineIdRefObj[tocItem.spineIdRef] = true
      listItems = [
        ...listItems,
        ...findToolsToInsert(tocItem.spineIdRef),
        {
          ...tocItem,
          indentLevel,
          key: `${tocItem.label}-${tocItem.href}`,
          numToolsWithin,
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
    [ toc, tools ],
  )

  const { onLayout, width, y: offsetY } = useLayout()

  const getWidth = useInstanceValue(width)
  const getOffsetY = useInstanceValue(offsetY)

  const [ setReportSpotsTimeout ] = useSetTimeout()

  const reportLineHeight = useCallback(
    ({ index, height }) => {
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
    ({ item }, index) => (
      <BookContentsLine
        {...item}
        bookId={bookId}
        goTo={goTo}
        reportLineHeight={reportLineHeight}
        index={index}
        onToolMove={onToolMove}
        onToolRelease={onToolRelease}
      />
    ),
    [ bookId, goTo, reportLineHeight ],
  )

  const createNewTool = useCallback(
    () => {

      const uid = uuidv4()
      let spineIdRef, ordering

      if(selectedTool) {
        spineIdRef = selectedTool.spineIdRef
        ordering =  selectedTool.ordering + 1

      } else {
        const { latest_location } = userDataByBookId[bookId] || {}
        const currentSpineIdRef = getSpineAndPage({ latest_location, book, displaySettings }).spineIdRef
        const spineIdRefsInToc = [ ...new Set(toc.map(({ spineIdRef }) => spineIdRef)) ]
        spineIdRef = spineIdRefsInToc[spineIdRefsInToc.indexOf(currentSpineIdRef) + 1] || 'AFTER LAST SPINE'
        ordering = tools.filter(tool => tool.spineIdRef === spineIdRef).length
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
        patchInfo: {
          userDataByBookId,
        },
      })

      setSelectedToolUid({
        bookId,
        uid,
      })
    },
    [ bookId, classroomUid, book, displaySettings, tools, selectedTool ],
  )

  if(!toc) return null

  return (
    <>
      <EnhancedHeader
        bookId={bookId}
        inEditMode={inEditMode}
        toggleInEditMode={toggleInEditMode}
      />
      <List
        style={styles.list}
        data={data}
        renderItem={renderItem}
        onLayout={onLayout}
        onScroll={onScroll}
      />
      {showAddToolButton && inEditMode &&
        <FAB
          data-id="FAB_addTool"
          iconName="md-add"
          status="primary"
          onPress={createNewTool}
        />
      }
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId, displaySettings }) => ({
  books,
  userDataByBookId,
  displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  createTool,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContents)