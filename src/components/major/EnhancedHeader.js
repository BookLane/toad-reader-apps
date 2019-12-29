import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Button } from "react-native-ui-kitten"
import Icon from '../basic/Icon'

import { i18n } from "inline-i18n"

import useClassroomInfo from "../../hooks/useClassroomInfo"

import { setSelectedToolUid } from "../../redux/actions"

const editButton = {
  borderRadius: '50%',
  width: 40,
  height: 40,
  marginVertical: -12,
  marginRight: -10,
  borderColor: 'transparent',  
}

const lineContainer = {
  padding: 20,
  paddingTop: 10,
  paddingBottom: 10,
  flexDirection: 'row',
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
    ...lineContainer,
  },
  lineContainerSelected: {
    ...lineContainer,
    backgroundColor: 'rgb(199, 211, 234)',
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

  setSelectedToolUid,
}) => {

  const { book, userId, classroom, isDefaultClassroom, selectedToolUid } = useClassroomInfo({ books, bookId, userDataByBookId })

  const bookVersion = Object.values(book.accounts)[0].version
  const myRole = (((classroom || {}).members || []).filter(({ user_id }) => user_id === userId)[0] || {}).role || 'STUDENT'
  const iCanEdit = (myRole === 'PUBLISHER' && isDefaultClassroom) || (myRole === 'INSTRUCTOR' && !isDefaultClassroom)

  const hasFrontMatter = false
  const frontMatterSelected = selectedToolUid === 'FRONT MATTER'

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

  const selectFrontMatter = useCallback(
    () => {
      setSelectedToolUid({
        bookId,
        uid: 'FRONT MATTER',
      })
    },
    [ bookId ],
  )

  if(!classroom || bookVersion === 'BASE') return null

  return (
    <View style={styles.container} data-id="EnhancedHeader">
      <View style={styles.lineContainer}>
        <Text style={styles.line}>
          <Text style={styles.enhanced}>
            {i18n("Enhanced")}
          </Text>
          {"  "}
          {isDefaultClassroom ? i18n("Book default") : classroom.name}
        </Text>
        {iCanEdit &&
          <Button
            style={inEditMode ? styles.editButtonActive : styles.editButton}
            appearance="ghost"
            status="basic"
            icon={EditButtonIcon}
            onPress={toggleInEditMode}
          />
        }
      </View>
      {!!(!hasFrontMatter && myRole === 'INSTRUCTOR') &&
        <TouchableOpacity
          onPress={selectFrontMatter}
        >
          <View style={frontMatterSelected ? styles.lineContainerSelected : styles.lineContainer}>
            <Text style={styles.addFrontMatter}>
              {i18n("Add front matter")}
            </Text>
          </View>
        </TouchableOpacity>
      }
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedHeader)