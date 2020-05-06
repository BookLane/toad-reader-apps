import React, { useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { List, ListItem } from '@ui-kitten/components'

import useClassroomInfo from '../../hooks/useClassroomInfo'
import { deleteClassroomMember } from "../../redux/actions"
import useWideMode from "../../hooks/useWideMode"

import Button from '../basic/Button'
import Icon from "../basic/Icon"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  listItem: {
    paddingLeft: 3,
    paddingRight: 10,
  },
  listItemWideMode: {
    paddingHorizontal: 22,
  },
  instructor: {
    color: 'red',
  },
  removeIcon: {
    height: 16,
    marginHorizontal: 0,
  }
})

const EnhancedMembers = React.memo(({
  bookId,

  books,
  userDataByBookId,

  deleteClassroomMember,
}) => {

  const { classroomUid, members } = useClassroomInfo({ books, bookId, userDataByBookId })

  const wideMode = useWideMode()

  if(!classroomUid) return null

  const onDelete = useCallback(
    ({ id }) => {
      const member = members[id]

      if(confirm(i18n("Are you sure you want to remove {{fullname}} ({{email}}) from this classroom?", "", "enhanced", member))) {
        deleteClassroomMember({
          bookId,
          classroomUid,
          userId: member.user_id,
        })
      }
    },
    [ members, bookId, classroomUid ],
  )

  const RemoveIcon = useCallback(style => <Icon name='md-remove-circle' style={styles.removeIcon} />, [])
  
  const renderIcon = useCallback(
    (style, index) => (
      <Button
        id={index}
        style={style}
        size="small"
        status="basic"
        icon={RemoveIcon}
        appearance="ghost"
        onPress={onDelete}
      />
    ),
    [ onDelete ],
  )

  const renderItem = useCallback(
    ({ item }) => (
      <ListItem
        style={wideMode ? styles.listItemWideMode : styles.listItem}
        title={i18n("{{fullname}} ({{email}})", "", "enhanced", item)}
        description={
          item.role === 'INSTRUCTOR'
            ? i18n("Instructor", "", "enhanced")
            : i18n("Student", "", "enhanced")
        }
        descriptionStyle={item.role === 'INSTRUCTOR' ? styles.instructor : null}
        icon={renderIcon}
      />
    ),
    [ renderIcon ],
  )

  return (
    <View style={styles.container}>
      <List
        style={styles.list}
        data={members}
        renderItem={renderItem}
      />
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  deleteClassroomMember,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedMembers)