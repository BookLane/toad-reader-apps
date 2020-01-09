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

import { createTool } from "../../redux/actions"

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
}) => {

  const { book, toc, classroomUid, visibleTools, selectedTool, bookVersion,
          myRole, viewingEnhancedHomepage, viewingFrontMatter } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

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

      return toolsToInsert.map(({ uid, name, toolType, published_at, spineIdRef, ordering }) => ({
        key: uid,
        uid,
        indentLevel,
        label: name,
        toolType,
        isDraft: !published_at,
        spineIdRef,
        ordering,
        isTool: true,
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
        inEditMode={inEditMode}
      />
    ),
    [ bookId, goTo, reportLineHeight ],
  )

  const createNewTool = useCallback(
    () => {

      const uid = uuidv4()
      let spineIdRef
      let ordering = 0

      if(selectedTool) {
        spineIdRef = selectedTool.spineIdRef
        ordering =  selectedTool.ordering + 1

      } else {
        const { latest_location } = userDataByBookId[bookId] || {}
        const currentSpineIdRef = getSpineAndPage({ latest_location, book, displaySettings }).spineIdRef
        const spineIdRefsInToc = [ ...new Set(toc.map(({ spineIdRef }) => spineIdRef)) ]
        spineIdRef = spineIdRefsInToc[spineIdRefsInToc.indexOf(currentSpineIdRef) + 1] || 'AFTER LAST SPINE'
        visibleTools.forEach(tool => {
          if(
            tool.spineIdRef === spineIdRef
            && !tool.cfi
          ) {
            ordering = Math.max(tool.ordering + 1, ordering)
          }
        })
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
    [ bookId, classroomUid, book, displaySettings, JSON.stringify(visibleTools), selectedTool ],
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
      {showAddToolButton && inEditMode && !viewingEnhancedHomepage && !viewingFrontMatter &&
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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContents)