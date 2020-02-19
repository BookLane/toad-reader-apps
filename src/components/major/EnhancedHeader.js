import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button, OverflowMenu } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import { setSelectedToolUid, setCurrentClassroom } from "../../redux/actions"

import Icon from '../basic/Icon'
import HeaderIcon from "../basic/HeaderIcon"
import ManageClassrooms from "./ManageClassrooms"
import ConnectToAClassroom from "./ConnectToAClassroom"
import EnhancedHeaderLine from "../basic/EnhancedHeaderLine"

const editButton = {
  borderRadius: 20,
  width: 40,
  height: 40,
  marginVertical: -12,
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
  off: {
    fontStyle: 'italic',
  },
  optionsAction: {
    fontStyle: 'italic',
    fontWeight: '300',
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

  const { classrooms, classroom, isDefaultClassroom, defaultClassroomUid, sortedClassrooms,
          bookVersion, canViewEnhancedHomepage, canViewFrontMatter, viewingEnhancedHomepage,
          viewingFrontMatter, iCanEdit, hasDraftData } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

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

  const toggleShowManageClassrooms = useCallback(
    () => setShowManageClassrooms(!showManageClassrooms),
    [ showManageClassrooms ],
  )

  const toggleShowConnectToAClassroom = useCallback(
    () => setShowConnectToAClassroom(!showConnectToAClassroom),
    [ showConnectToAClassroom ],
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

  const moreOptions = [
    ...sortedClassrooms.map(({ uid, name }) => ({
      title: (
        uid === defaultClassroomUid
          ? i18n("Book default", "", "enhanced")
          : (
            !uid
              ? i18n("Off", "", "enhanced")  
              : name
          )
      ),
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
          {i18n("Manage classrooms", "", "enhanced")}
        </Text>
      ),
      onPress: toggleShowManageClassrooms,
    }]),
    ...(!(bookVersion === 'ENHANCED' && classrooms.length === 1) ? [] : [{
      title: (
        <Text style={styles.optionsAction}>
          {i18n("Connect to a classroom", "", "enhanced")}
        </Text>
      ),
      onPress: toggleShowConnectToAClassroom,
    }]),
  ]

  if(bookVersion === 'BASE') return null

  const classroomName = (
    isDefaultClassroom
      ? i18n("Book default", "", "enhanced")
      : (
        classroom
          ? classroom.name
          : (
            <Text style={styles.off}>
              {i18n("Off", "", "enhanced")}
            </Text>
          )
      )
  )

  return (
    <View style={styles.container}>
      <EnhancedHeaderLine
        label={
          <>
            <Text style={styles.enhanced}>
              {i18n("Enhanced", "", "enhanced")}
            </Text>
            {"  "}
            {classroomName}
          </>
        }
        {...(!canViewEnhancedHomepage ? {} : {
          iconName: "home",
          iconPack: "fontAwesome",
        })}
        onPress={selectEnhancedHomepage}
        buttons={
          <>
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
          </>
        }
        uiStatus={(
          canViewEnhancedHomepage
            ? (
              viewingEnhancedHomepage ? "selected" : "unselected"
            )
            : "disabled"
        )}
        status={(inEditMode && hasDraftData) ? "draft" : "published"}
      />
      {canViewFrontMatter &&
        <EnhancedHeaderLine
          label={isDefaultClassroom
            ? i18n("Settings", "", "enhanced")
            : (
              inEditMode
                ? i18n("Front matter and options", "", "enhanced")
                : i18n("Front matter", "", "enhanced")
            )
          }
          onPress={selectFrontMatter}
          uiStatus={viewingFrontMatter ? "selected" : "unselected"}
          status={(inEditMode && hasDraftData) ? "draft" : "published"}
        />
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