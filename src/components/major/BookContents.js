import React, { useMemo, useCallback } from "react"
import { StyleSheet } from "react-native"
import { List } from "react-native-ui-kitten"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import uuidv4 from 'uuid/v4'

import BookContentsLine from "../basic/BookContentsLine"
import EnhancedHeader from "./EnhancedHeader"
import FAB from "../basic/FAB"

import { getIdsFromAccountId, getSpineAndPage } from '../../utils/toolbox'

import { createTool } from "../../redux/actions"

const styles = StyleSheet.create({
  list: {
    paddingTop: 12,
    paddingBottom: 20,
  },
})

const BookContents = React.memo(({
  goToHref,
  bookId,
  toolUidInEdit,
  setToolUidInEdit,

  books,
  userDataByBookId,
  displaySettings,

  createTool,
}) => {

  const book = books[bookId] || {}
  const { toc, accounts, currentClassroomUid } = book
  const accountId = Object.keys(accounts)[0] || ""
  const { idpId, userId } = getIdsFromAccountId(accountId)

  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const defaultClassroomUid = `${idpId}-${bookId}`
  const classroomUid = currentClassroomUid || defaultClassroomUid
  const classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]
  const { tools=[] } = classroom || {}

  const bookVersion = Object.values(book.accounts)[0].version
  const myRole = (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role || 'STUDENT'
  const showAddToolButton = (
    (
      bookVersion === 'INSTRUCTOR'
      && myRole === 'INSTRUCTOR'
    )
    || bookVersion === 'PUBLISHER'
  )

  const getListItems = (toc, indentLevel=0, insertedToolUidObj={}) => {
    let listItems = []

    ;(toc || []).forEach(tocItem => {
      const toolsToInsert = tools
        .filter(({ uid, spineIdRef, cfi, _delete }) => (spineIdRef === tocItem.spineIdRef && !cfi && !_delete && !insertedToolUidObj[uid]))

      toolsToInsert.forEach(({ uid }) => {
        insertedToolUidObj[uid] = true
      })
  
      listItems = [
        ...listItems,
        ...(toolsToInsert.map(({ uid, name, toolType }) => ({
              key: uid,
              uid,
              indentLevel,
              label: name,
              toolType,
            }))
        ),
        {
          ...tocItem,
          indentLevel,
          key: `${tocItem.label}-${tocItem.href}`,
        },
        ...getListItems(tocItem.subNav, indentLevel+1, insertedToolUidObj),
      ]
    })

    return listItems
  }

  const data = useMemo(
    () => getListItems(toc),
    [ toc, tools ],
  )

  const renderItem = useCallback(
    ({ item }) => (
      <BookContentsLine
        {...item}
        goToHref={goToHref}
        toolUidInEdit={toolUidInEdit}
        setToolUidInEdit={setToolUidInEdit}
      />
    ),
    [ goToHref, toolUidInEdit, setToolUidInEdit ],
  )

  const createNewTool = useCallback(
    () => {

      const uid = uuidv4()

      const { latest_location } = userDataByBookId[bookId] || {}
      const { spineIdRef, cfi, pageIndexInSpine } = getSpineAndPage({ latest_location, book, displaySettings })

      const ordering = tools.filter(tool => tool.spineIdRef === spineIdRef).length

      // TODO:
      // If they are on the last page of the spine (and not the first), then put the tool after this spine.
      // If they are on neither the first nor the last page of the spine, put the tool inline at the first spot.

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

    },
    [ bookId, classroomUid, book, displaySettings, tools ],
  )

  if(!toc) return null

  return (
    <>
      <EnhancedHeader
        bookId={bookId}
      />
      <List
        style={styles.list}
        data={data}
        renderItem={renderItem}
      />
      {showAddToolButton && !toolUidInEdit &&
        <FAB
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