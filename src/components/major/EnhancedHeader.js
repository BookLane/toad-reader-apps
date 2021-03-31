import React, { useCallback } from "react"
import { StyleSheet, Platform, View, Text, TouchableOpacity, Alert } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { OverflowMenu } from "@ui-kitten/components"
import { i18n } from "inline-i18n"
import useToggle from "react-use/lib/useToggle"
import { styled } from "@ui-kitten/components"

import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useWideMode from "../../hooks/useWideMode"
import useDimensions from "../../hooks/useDimensions"
import { setSelectedToolUid, setCurrentClassroom } from "../../redux/actions"
import { statusBarHeight } from "../../utils/toolbox"

import ManageClassrooms from "./ManageClassrooms"
import CreateClassroom from "./CreateClassroom"
import ConnectToAClassroom from "./ConnectToAClassroom"
import EnhancedHeaderLine from "../basic/EnhancedHeaderLine"
import EnhancedEditButton from "../basic/EnhancedEditButton"

const container = {
  paddingVertical: 10,
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  containerWideMode: {
    ...container,
    paddingTop: container.paddingVertical + (Platform.OS === 'ios' ? statusBarHeight : 0),
  },
  containerWithFrontMatter: {
    paddingBottom: 5,
  },
  frontMatterContainer: {
    paddingVertical: 5,
  },
  classroom: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  optionsIconContainer: {
    position: 'relative',
    width: 25,
    alignSelf: 'stretch',
  },
  optionsIcon: {
    position: 'absolute',
    top: -13,
    bottom: -13,
    right: 0,
    left: 0,
    height: 'auto',
    paddingHorizontal: 8,
  },
  off: {
    fontStyle: 'italic',
  },
  optionsEmphasis: {
    // fontWeight: '300',
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
  setModeToPage,

  books,
  userDataByBookId,

  setSelectedToolUid,
  setCurrentClassroom,

  themedStyle,
}) => {

  const { classrooms, classroom, enhancedIsOff, isDefaultClassroom, defaultClassroomUid, sortedClassrooms,
          bookVersion, canViewOptions, canViewFrontMatter, viewingDashboard,
          viewingOptions, viewingFrontMatter,
          iCanEdit, hasFrontMatterDraftData } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const { baseThemedStyle, altThemedStyleSets } = useThemedStyleSets(themedStyle)
  const [ frontMatterThemedStyle={} ] = altThemedStyleSets
        
  const [ showOptions, toggleShowOptions ] = useToggle(false)
  const [ showManageClassrooms, toggleShowManageClassrooms ] = useToggle(false)
  const [ showCreateClassroom, toggleShowCreateClassroom ] = useToggle(false)
  const [ showConnectToAClassroom, toggleShowConnectToAClassroom ] = useToggle(false)

  const wideMode = useWideMode()
  const { height } = useDimensions().window

  const selectDashboard = useCallback(
    () => {
      setSelectedToolUid({
        bookId,
        uid: 'DASHBOARD',
      })
      setModeToPage && setTimeout(setModeToPage)
    },
    [ bookId ],
  )

  const selectOptions = useCallback(
    () => {
      setSelectedToolUid({
        bookId,
        uid: 'OPTIONS OR SETTINGS',
      })
      setModeToPage && setTimeout(setModeToPage)
    },
    [ bookId ],
  )

  const selectFrontMatter = useCallback(
    () => {
      setSelectedToolUid({
        bookId,
        uid: 'FRONT MATTER',
      })
      setModeToPage && setTimeout(setModeToPage)
    },
    [ bookId ],
  )

  const selectOption = useCallback(
    selectedIndex => {
      const { onPress } = moreOptions[selectedIndex]
      if(onPress) {
        onPress()
        toggleShowOptions(false)
      }
    },
    [ bookId, classrooms, toggleShowManageClassrooms, toggleShowConnectToAClassroom ],
  )

  const alertToNoEditing = useCallback(
    () => {
      Alert.alert(
        i18n("Note"),
        i18n("Classroom management is currently restricted to the web app."),
      )
    },
    [],
  )

  const moreOptions = [
    ...sortedClassrooms.map(({ uid, name }) => ({
      title: (
        uid === defaultClassroomUid
          ? (
            <Text style={styles.optionsEmphasis}>
              {i18n("Enhanced book", "", "enhanced")}
            </Text>
          )
          : (
            !uid
              ? (
                <Text style={styles.optionsEmphasis}>
                  {i18n("Basic book", "", "enhanced")}
                </Text>
              )
              : name
          )
      ),
      onPress: () => {
        setCurrentClassroom({
          bookId,
          uid,
        })
        toggleShowOptions(false)
      },
    })),
    ...(![ 'ENHANCED', 'INSTRUCTOR' ].includes(bookVersion) ? [] : [{
      title: (
        <Text style={styles.optionsAction}>
          {i18n("Manage classrooms", "", "enhanced")}
        </Text>
      ),
      onPress: Platform.OS === 'web' ? toggleShowManageClassrooms : alertToNoEditing,
    }]),
    ...(!(bookVersion === 'INSTRUCTOR') ? [] : [{
      title: (
        <Text style={styles.optionsAction}>
          {i18n("Create a classroom", "", "enhanced")}
        </Text>
      ),
      onPress: Platform.OS === 'web' ? toggleShowCreateClassroom : alertToNoEditing,
    }]),
    ...(!(bookVersion === 'ENHANCED' || (bookVersion === 'INSTRUCTOR' && Platform.OS !== 'web')) ? [] : [{
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
      ? i18n("Enhanced book", "", "enhanced")
      : (
        classroom
          ? classroom.name
          : i18n("Basic book", "", "enhanced")
      )
  )

  const editButton = iCanEdit && (
    <EnhancedEditButton
      onPress={toggleInEditMode}
      status={inEditMode ? "on" : "off"}
    />
  )


  return (
    <>
      <View
        style={[
          wideMode ? styles.containerWideMode : styles.container,
          canViewFrontMatter ? styles.containerWithFrontMatter : null,
          baseThemedStyle,
        ]}
      >
        <EnhancedHeaderLine
          label={
            <OverflowMenu
              data={moreOptions}
              visible={showOptions}
              selectedIndex={sortedClassrooms.map(({ uid }) => uid).indexOf((classroom || {}).uid || null)}
              onSelect={selectOption}
              onBackdropPress={toggleShowOptions}
              placement='bottom start'
              style={{
                width: 230,
                maxHeight: height - 80,
              }}
            >
              <TouchableOpacity
                onPress={toggleShowOptions}
              >
                <View>
                  <Text
                    style={styles.classroom}
                    numberOfLines={2}
                  >
                    {`${classroomName} ▾`}
                  </Text>
                </View>
              </TouchableOpacity>
            </OverflowMenu>
          }
          uiStatus={"disabled"}
          status={"published"}
          showLogo={true}
        />
        {bookVersion !== 'PUBLISHER' && !enhancedIsOff &&
          <EnhancedHeaderLine
            label={i18n("Dashboard", "", "enhanced")}
            uiStatus={viewingDashboard ? "selected" : "unselected"}
            iconName="view-dashboard"
            iconPack="materialCommunity"
            onPress={selectDashboard}
            buttons={editButton}  
          />
        }
        {bookVersion !== 'PUBLISHER' && canViewOptions &&
          <EnhancedHeaderLine
            label={i18n("Options", "", "enhanced")}
            uiStatus={viewingOptions ? "selected" : "unselected"}
            iconName="md-options"
            onPress={selectOptions}
          />
        }
        {bookVersion === 'PUBLISHER' && !enhancedIsOff &&
          <EnhancedHeaderLine
            {...(!canViewOptions ? {} : {
              label: i18n("Settings", "", "enhanced"),
              uiStatus: viewingOptions ? "selected" : "unselected",
              iconName: "md-settings",
              onPress: selectOptions,
            })}
            buttons={editButton}
          />
        }
        <ManageClassrooms
          open={showManageClassrooms}
          requestHide={toggleShowManageClassrooms}
          bookId={bookId}
        />
        <CreateClassroom
          open={showCreateClassroom}
          requestHide={toggleShowCreateClassroom}
          bookId={bookId}
        />
        <ConnectToAClassroom
          open={showConnectToAClassroom}
          requestHide={toggleShowConnectToAClassroom}
          bookId={bookId}
        />
      </View>
      {canViewFrontMatter &&
        <View style={[
          styles.frontMatterContainer,
          frontMatterThemedStyle,
        ]}>
          <EnhancedHeaderLine
            label={i18n("Front matter", "", "enhanced")}
            onPress={selectFrontMatter}
            uiStatus={viewingFrontMatter ? "selected" : "frontMatterUnselected"}
            status={(inEditMode && hasFrontMatterDraftData) ? "draft" : "published"}
          />
        </View>
      }
    </>
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

EnhancedHeader.styledComponentName = 'EnhancedHeader'

export default connect(mapStateToProps, matchDispatchToProps)(styled(EnhancedHeader))