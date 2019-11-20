import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { i18n } from "inline-i18n"
import { getIdsFromAccountId } from "../../utils/toolbox"

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgb(231, 236, 246)',
  },
  enhanced: {
    fontWeight: 'bold',
  },
  lineContainer: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  addFrontMatter: {
    fontStyle: 'italic',
  },
})

const EnhancedHeader = React.memo(({
  bookId,
  books,
  userDataByBookId,
}) => {

  const book = books[bookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const { idpId, userId } = getIdsFromAccountId(accountId)

  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const bookVersion = Object.values(book.accounts)[0].version

  const defaultClassroomUid = `${idpId}-${bookId}`
  let currentClassroomUid = book.currentClassroomUid || defaultClassroomUid
  let currentClassroom = classrooms.filter(({ uid }) => uid === currentClassroomUid)[0]
  if(currentClassroomUid && !currentClassroom) {
    currentClassroomUid = defaultClassroomUid
    currentClassroom = classrooms.filter(({ uid }) => uid === currentClassroomUid)[0]
  }
  const myRole = (((currentClassroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role || 'STUDENT'

  const hasFrontMatter = false

  if(bookVersion === 'BASE') return null

  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <Text style={styles.line}>
          <Text style={styles.enhanced}>
            {i18n("Enhanced")}
          </Text>
          {"  "}
          {currentClassroomUid === defaultClassroomUid ? i18n("Book default") : currentClassroom.name}
        </Text>
      </View>
      {!!(!hasFrontMatter && myRole === 'INSTRUCTOR') &&
        <View style={styles.lineContainer}>
          <Text style={styles.addFrontMatter}>
            {i18n("Add front matter")}
          </Text>
        </View>
      }
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedHeader)