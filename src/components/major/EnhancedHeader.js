import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Button, OverflowMenu } from "react-native-ui-kitten"
import Icon from '../basic/Icon'
import HeaderIcon from "../basic/HeaderIcon"
import ManageClassrooms from "./ManageClassrooms"
import ConnectToAClassroom from "./ConnectToAClassroom"

import { i18n } from "inline-i18n"

import useClassroomInfo from "../../hooks/useClassroomInfo"

import { setSelectedToolUid, setCurrentClassroom } from "../../redux/actions"

const editButton = {
  borderRadius: '50%',
  width: 40,
  height: 40,
  marginVertical: -12,
  borderColor: 'transparent',  
}

const lineContainer = {
  paddingLeft: 20,
  paddingRight: 10,
  paddingVertical: 10,
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
  frontMatterEdited: {
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
  optionsIcon: {
    marginTop: -11,
    marginBottom: -12,
  },
  homeIcon: {
    height: 16,
    marginRight: 6,
  },
  off: {
    fontStyle: 'italic',
  },
})

const EnhancedHeader = React.memo(({
  bookId,
  inEditMode,
  toggleInEditMode,

  books,
  userDataByBookId,

  setSelectedToolUid,
  setCurrentClassroom,
}) => {

  const { classrooms, classroom, isDefaultClassroom, defaultClassroomUid, bookVersion, myRole, viewingEnhancedHomepage,
          viewingFrontMatter, iCanEdit, hasFrontMatter, hasDraftData } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ showOptions, setShowOptions ] = useState(false)
  const [ showManageClassrooms, setShowManageClassrooms ] = useState(false)
  const [ showConnectToAClassroom, setShowConnectToAClassroom ] = useState(false)

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

  const selectEnhancedHomepage = useCallback(
    () => {
      setSelectedToolUid({
        bookId,
        uid: 'ENHANCED HOMEPAGE',
      })
    },
    [ bookId ],
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

  const toggleShowOptions = useCallback(
    () => setShowOptions(!showOptions),
    [ showOptions ],
  )

  const selectOption = useCallback(
    selectedIndex => {
      const { onPress } = moreOptions[selectedIndex]
      if(onPress) {
        onPress()
        setShowOptions(false)
      }
    },
    [ bookId, classrooms, toggleShowManageClassrooms, toggleShowConnectToAClassroom ],
  )

  const toggleShowManageClassrooms = useCallback(
    () => setShowManageClassrooms(!showManageClassrooms),
    [ showManageClassrooms ],
  )

  const toggleShowConnectToAClassroom = useCallback(
    () => setShowConnectToAClassroom(!showConnectToAClassroom),
    [ showConnectToAClassroom ],
  )

  const sortedClassrooms = [ ...classrooms ]
  sortedClassrooms.sort((a, b) => {
    if(a.uid === defaultClassroomUid) return 1
    if(b.uid === defaultClassroomUid) return -1
    const aName = a.name.toUpperCase()
    const bName = b.name.toUpperCase()
    return (aName < bName) ? -1 : (aName > bName) ? 1 : 0
  })
  sortedClassrooms.push({
    uid: undefined,
    name: i18n("Off"),
  })

  const moreOptions = [
    ...sortedClassrooms.map(({ uid, name }) => ({
      title: uid === defaultClassroomUid ? i18n("Book default") : name,
      onPress: () => {
        setCurrentClassroom({
          bookId,
          uid,
        })
        setShowOptions(false)
      },
    })),
    ...(!(myRole === 'INSTRUCTOR' || classrooms.length > 1) ? [] : [{
      title: i18n("Manage classrooms"),
      onPress: toggleShowManageClassrooms,
    }]),
    ...((myRole === 'INSTRUCTOR' || classrooms.length > 1) ? [] : [{
      title: i18n("Connect to a classroom"),
      onPress: toggleShowConnectToAClassroom,
    }]),
  ]

  if(bookVersion === 'BASE') return null

  const classroomName = (
    isDefaultClassroom
      ? i18n("Book default")
      : (
        classroom
          ? classroom.name
          : (
            <Text style={styles.off}>
              {i18n("Off")}
            </Text>
          )
      )
  )

  return (
    <View style={styles.container} data-id="EnhancedHeader">
      <TouchableOpacity
        onPress={(myRole === 'INSTRUCTOR' && !isDefaultClassroom) ? selectEnhancedHomepage : null}
      >
        <View style={viewingEnhancedHomepage ? styles.lineContainerSelected : styles.lineContainer}>
          <Icon
            name="home"
            pack="fontAwesome"
            style={styles.homeIcon}
          />
          <Text style={styles.line}>
            <Text style={styles.enhanced}>
              {i18n("Enhanced")}
            </Text>
            {"  "}
            {classroomName}
          </Text>
          {iCanEdit && !viewingEnhancedHomepage &&
            <Button
              style={inEditMode ? styles.editButtonActive : styles.editButton}
              appearance="ghost"
              status="basic"
              icon={EditButtonIcon}
              onPress={toggleInEditMode}
            />
          }
          <OverflowMenu
            data={moreOptions}
            visible={showOptions}
            selectedIndex={sortedClassrooms.map(({ uid }) => uid).indexOf((classroom || {}).uid)}
            onSelect={selectOption}
            onBackdropPress={toggleShowOptions}
            placement='bottom end'
          >
            <HeaderIcon
              name="md-more"
              onPress={toggleShowOptions}
              style={styles.optionsIcon}
            />
          </OverflowMenu>
        </View>
      </TouchableOpacity>
      {!isDefaultClassroom && (hasFrontMatter || inEditMode) &&
        <TouchableOpacity
          onPress={selectFrontMatter}
        >
          <View style={viewingFrontMatter ? styles.lineContainerSelected : styles.lineContainer}>
            <Text style={(inEditMode && hasDraftData) ? styles.frontMatterEdited : styles.frontMatter}>
              {inEditMode ? i18n("Front matter and options") : i18n("Front matter")}
            </Text>
          </View>
        </TouchableOpacity>
      }
      <ManageClassrooms
        open={showManageClassrooms}
        requestHide={toggleShowManageClassrooms}
        bookId={bookId}
      />
      <ConnectToAClassroom
        open={showConnectToAClassroom}
        requestHide={toggleShowConnectToAClassroom}
        bookId={bookId}
      />
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
  setCurrentClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedHeader)