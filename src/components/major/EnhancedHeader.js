import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Button } from "react-native-ui-kitten"
import Icon from '../basic/Icon'

import { i18n } from "inline-i18n"
import { getIdsFromAccountId } from "../../utils/toolbox"

const editButton = {
  borderRadius: '50%',
  width: 40,
  height: 40,
  marginVertical: -12,
  marginRight: -10,
  borderColor: 'transparent',  
}

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
    flexDirection: 'row',
  },
  line: {
    flex: 1,
  },
  addFrontMatter: {
    fontStyle: 'italic',
  },
  editButton: {
    ...editButton,  
  },
  editButtonActive: {
    ...editButton,  
    backgroundColor: 'rgba(0, 0, 0, .15)',
  },
  editIconActive: {
    tintColor: 'rgb(51, 102, 255)',
  },
})

const EnhancedHeader = React.memo(({
  bookId,
  inEditMode,
  toggleInEditMode,

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

  const EditButtonIcon = useCallback(
    style => (
      <Icon
        name="edit"
        pack="material"
        style={inEditMode ? styles.editIconActive : styles.editIcon}
      />
    ),
    [ inEditMode ],
  )

  if(bookVersion === 'BASE') return null

  return (
    <View style={styles.container} data-id="EnhancedHeader">
      <View style={styles.lineContainer}>
        <Text style={styles.line}>
          <Text style={styles.enhanced}>
            {i18n("Enhanced")}
          </Text>
          {"  "}
          {currentClassroomUid === defaultClassroomUid ? i18n("Book default") : currentClassroom.name}
        </Text>
        <Button
          style={inEditMode ? styles.editButtonActive : styles.editButton}
          appearance="ghost"
          status="basic"
          icon={EditButtonIcon}
          onPress={toggleInEditMode}
        />
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