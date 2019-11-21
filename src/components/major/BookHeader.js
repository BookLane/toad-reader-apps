import React, { useState, useCallback } from "react"
import { Platform, Linking } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { OverflowMenu } from "react-native-ui-kitten"
import { i18n } from "inline-i18n"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import ManageClassrooms from "./ManageClassrooms"
import useWideMode from "../../hooks/useWideMode"

import { confirmRemoveEPub } from "../../utils/removeEpub"
import { getFirstBookLinkInfo, getIdsFromAccountId } from "../../utils/toolbox"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, toggleSidePanelOpen } from "../../redux/actions"

const BookHeader = React.memo(({
  bookId,
  title,
  subtitle,
  mode,
  showDisplaySettings,
  toggleBookView,
  backToReading,

  books,
  userDataByBookId,

  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  toggleSidePanelOpen,

  history,
}) => {

  const [ showOptions, setShowOptions ] = useState(false)
  const [ showManageClassrooms, setShowManageClassrooms ] = useState(false)
  const wideMode = useWideMode()

  const book = books[bookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const { idpId } = getIdsFromAccountId(accountId)

  const bookLinkInfo = getFirstBookLinkInfo(book)
  const classrooms = ((userDataByBookId[bookId] || {}).classrooms || [])
  const bookVersion = Object.values(book.accounts)[0].version

  const defaultClassroomUid = `${idpId}-${bookId}`
  let currentClassroomUid = book.currentClassroomUid || defaultClassroomUid
  let currentClassroom = classrooms.filter(({ uid }) => uid === currentClassroomUid)[0]
  if(currentClassroomUid && !currentClassroom) {
    currentClassroomUid = defaultClassroomUid
    currentClassroom = classrooms.filter(({ uid }) => uid === currentClassroomUid)[0]
  }

  const toggleShowManageClassrooms = useCallback(
    () => setShowManageClassrooms(!showManageClassrooms),
    [ showManageClassrooms ],
  )

  const goToBookLink = useCallback(
    () => {
      const bookLinkInfo = getFirstBookLinkInfo(book)

      Linking.openURL(bookLinkInfo.href).catch(err => {
        console.log('ERROR: Request to open URL failed.', err)
        historyPush("/error", {
          message: i18n("Your device is not allowing us to open this link."),
        })
      })
    },
    [ book ],
  )

  const removeFromDevice = useCallback(
    () => {
      confirmRemoveEPub({
        books,
        removeFromBookDownloadQueue,
        setDownloadStatus,
        clearTocAndSpines,
        clearUserDataExceptProgress,
        bookId,
        done: () => {
          history.go(-2)
        }
      })
    },
    [ books, bookId ],
  )

  const moreOptions = [
    ...(!currentClassroom ? [] : [
      {
        title: i18n("Enhanced: {{name}}", {
          name: currentClassroomUid === defaultClassroomUid ? i18n("Book default") : currentClassroom.name,
        }),
      },
    ]),
    ...(!['ENHANCED', 'INSTRUCTOR'].includes(bookVersion) ? [] : [{
      title: i18n("Manage classrooms"),
      onPress: toggleShowManageClassrooms,
    }]),
    // {
    //   title: i18n("My highlights and notes"),
    //   onPress: goToHighlights,
    // },
    // {
    //   title: i18n("Recommend this book"),
    //   onPress: recommendBook,
    // },
    ...(!bookLinkInfo ? [] : [{
      title: bookLinkInfo.label,
      onPress: goToBookLink,
    }]),
    ...(Platform.OS === 'web' ? [] : [{
      title: i18n("Remove from device"),
      onPress: removeFromDevice,
    }]),
  ]

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
    [ currentClassroom, defaultClassroomUid, bookVersion, classrooms, toggleShowManageClassrooms, bookLinkInfo, goToBookLink, removeFromDevice ],
  )

  const onBackPress = useCallback(
    () => history.goBack(),
    [ history ],
  )

  const rightControls = [
    <HeaderIcon
      name="format-size"
      pack="material"
      onPress={showDisplaySettings}
    />,
    <HeaderIcon
      name="md-list"
      onPress={wideMode ? toggleSidePanelOpen : backToReading}
    />,
    ...(!(wideMode && Platform.OS !== 'web') ? [] : [
      <HeaderIcon
        name="md-apps"
        onPress={toggleBookView}
      />
    ]),
    ...(!(!wideMode && Platform.OS !== 'web') ? [] : [
      <HeaderIcon
        name={[ 'pages', 'zooming' ].includes(mode) ? "md-list" : "md-apps"}
        onPress={toggleBookView}
      />
    ]),
    ...(moreOptions.length === 0 ? [] : [
      <OverflowMenu
        data={moreOptions}
        visible={showOptions}
        selectedIndex={currentClassroom ? 0 : null}
        onSelect={selectOption}
        onBackdropPress={toggleShowOptions}
        placement='bottom end'
        style={{ width: 300 }}
      >
        <HeaderIcon
          name="md-more"
          onPress={toggleShowOptions}
        />
      </OverflowMenu>,
    ]),
  ]

  return (
    <>
      <AppHeader
        hide={mode === 'page' && !wideMode}
        title={title}
        subtitle={subtitle}
        leftControl={
          <HeaderIcon
            name="md-arrow-back"
            onPress={onBackPress}
          />
        }
        rightControls={rightControls}
      />
      <ManageClassrooms
        open={showManageClassrooms}
        requestHide={toggleShowManageClassrooms}
        bookId={bookId}
      />
    </>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  toggleSidePanelOpen,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookHeader))