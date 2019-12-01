import React, { useMemo, useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getIdsFromAccountId, getToolbarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import { updateTool } from "../../redux/actions"

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

const BookContents = React.memo(({
  bookId,
  toolUidInEdit,

  books,
  userDataByBookId,

  updateTool,
}) => {

  const book = books[bookId] || {}
  const { accounts, currentClassroomUid } = book
  const accountId = Object.keys(accounts)[0] || ""
  const { idpId } = getIdsFromAccountId(accountId)

  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const defaultClassroomUid = `${idpId}-${bookId}`
  const classroomUid = currentClassroomUid || defaultClassroomUid
  const classroom = classrooms.filter(({ uid }) => uid === classroomUid)[0]
  const { tools=[] } = classroom || {}

  const toolInEdit = tools.filter(({ uid }) => uid === toolUidInEdit)[0]

  const wideMode = useWideMode()

  if(!toolInEdit) return null

  return (
    <View
      style={[
        styles.container,
        wideMode ? styles.constainerWideMode : null,
      ]}
    >
      
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId, displaySettings }) => ({
  books,
  userDataByBookId,
  displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateTool,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContents)