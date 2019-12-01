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
    padding: 20,
    paddingTop: 12,
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
  const { idpId } = getIdsFromAccountId(accountId)

  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const defaultClassroomUid = `${idpId}-${bookId}`
  const classroomUid = currentClassroomUid || defaultClassroomUid
  const classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]
  const { tools=[] } = classroom || {}

  const getListItems = (toc, indentLevel=0) => {
    let listItems = []

    ;(toc || []).forEach(tocItem => {
      listItems = [
        ...listItems,
        ...(
          tools
            .filter(({ spineIdRef, cfi }) => (spineIdRef === tocItem.spineIdRef && !cfi))
            .map(({ uid, name, toolType }) => ({
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
        ...getListItems(tocItem.subNav, indentLevel+1),
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
      <FAB
        iconName="md-add"
        status="primary"
        onPress={createNewTool}
      />
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