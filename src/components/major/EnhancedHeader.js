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
  optionsIconContainer: {
    position: 'relative',
  },
  optionsIcon: {
    position: 'absolute',
    top: -4,
    bottom: -4,
    right: 0,
    left: 0,
    paddingHorizontal: 10,
    color: 'rgb(143, 155, 179)',
  },
  homeIcon: {
    height: 16,
    marginRight: 6,
  },
  off: {
    fontStyle: 'italic',
  },
  optionsAction: {
    fontStyle: 'italic',
    fontWeight: 300,
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

  const { classrooms, classroom, isDefaultClassroom, defaultClassroomUid,
          enhancedIsOff, bookVersion, myRole, viewingEnhancedHomepage,
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
    ...(!(bookVersion === 'INSTRUCTOR' || classrooms.length > 1) ? [] : [{
      title: (
        <Text style={styles.optionsAction}>
          {i18n("Manage classrooms")}
        </Text>
      ),
      onPress: toggleShowManageClassrooms,
    }]),
    ...((bookVersion === 'INSTRUCTOR' || classrooms.length > 1) ? [] : [{
      title: (
        <Text style={styles.optionsAction}>
          {i18n("Connect to a classroom")}
        </Text>
      ),
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

  const homepageClickable = myRole === 'INSTRUCTOR' && !isDefaultClassroom && !enhancedIsOff

  return (
    <View style={styles.container} data-id="EnhancedHeader">
      <TouchableOpacity
        onPress={homepageClickable ? selectEnhancedHomepage : null}
      >
        <View style={viewingEnhancedHomepage ? styles.lineContainerSelected : styles.lineContainer}>
          {homepageClickable &&
            <Icon
              name="home"
              pack="fontAwesome"
              style={styles.homeIcon}
            />
          }
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
            <View style={styles.optionsIconContainer}>
              <HeaderIcon
                name="md-more"
                onPress={toggleShowOptions}
                style={styles.optionsIcon}
              />
            </View>
          </OverflowMenu>
        </View>
      </TouchableOpacity>
      {!isDefaultClassroom && !enhancedIsOff && (hasFrontMatter || inEditMode) &&
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