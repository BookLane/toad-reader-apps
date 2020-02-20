import React, { useState, useCallback } from "react"
import { StyleSheet, Platform, Alert } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { OverflowMenu } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useRouterState from "../../hooks/useRouterState"

import { removeEpub } from "../../utils/removeEpub"
import { getFirstBookLinkInfo, openURL } from "../../utils/toolbox"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, toggleSidePanelOpen } from "../../redux/actions"

const styles = StyleSheet.create({
  selected: {
    opacity: 1,
  },
})

const BookHeader = React.memo(({
  bookId,
  title,
  subtitle,
  mode,
  showDisplaySettings,
  toggleBookView,
  onBackPress,

  books,
  sidePanelSettings,

  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  toggleSidePanelOpen,
}) => {

  const [ showOptions, setShowOptions ] = useState(false)
  const wideMode = useWideMode()

  const { book } = useClassroomInfo({ books, bookId })

  const bookLinkInfo = getFirstBookLinkInfo(book)

  const { historyGo } = useRouterState()

  const goToBookLink = useCallback(
    () => {
      const bookLinkInfo = getFirstBookLinkInfo(book)
      openURL({ url: bookLinkInfo.href, newTab: false, historyPush })
    },
    [ book ],
  )

  const removeFromDevice = useCallback(
    () => {
      Alert.alert(
        i18n("Remove from device"),
        i18n("Are you sure you want to remove “{{book_title}}” from this device?", {
          book_title: books[bookId].title,
        }),
        [
          {
            text: i18n("Cancel"),
            style: 'cancel',
          },
          {
            text: i18n("Remove"),
            onPress: async () => {
              await removeEpub({
                bookId,
                removeFromBookDownloadQueue,
                setDownloadStatus,
                clearTocAndSpines,
                clearUserDataExceptProgress,
              })

              historyGo(-2)
            },
            // style: 'destructive',
          },
        ],
        { cancelable: false }
      )
    },
    [ books, bookId ],
  )

  const moreOptions = [
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
    [ bookLinkInfo, goToBookLink, removeFromDevice ],
  )

  const rightControls = [
    <HeaderIcon
      iconName="format-size"
      iconPack="materialCommunity"
      onPress={showDisplaySettings}
      uiStatus={wideMode ? "faded" : null}
    />,
    // ...(!(wideMode && Platform.OS !== 'web') ? [] : [
    //   <HeaderIcon
    //     iconName="md-apps"
    //     onPress={togglePageBrowser}
    //     uiStatus="faded"
    //   />
    // ]),
    ...(!(wideMode) ? [] : [
      <HeaderIcon
        iconName="md-list"
        onPress={toggleSidePanelOpen}
        uiStatus={sidePanelSettings.open ? null : "faded"}
      />
    ]),
    ...(!(!wideMode && Platform.OS !== 'web') ? [] : [
      <HeaderIcon
        iconName={[ 'pages', 'zooming' ].includes(mode) ? "md-list" : "md-apps"}
        onPress={toggleBookView}
      />
    ]),
    ...(moreOptions.length === 0 ? [] : [
      <OverflowMenu
        data={moreOptions}
        visible={showOptions}
        onSelect={selectOption}
        onBackdropPress={toggleShowOptions}
        placement='bottom end'
      >
        <HeaderIcon
          iconName="md-more"
          onPress={toggleShowOptions}
          uiStatus={wideMode ? "faded" : null}
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
        titleCentered={true}
        leftControl={
          <HeaderIcon
            iconName="md-arrow-back"
            onPress={onBackPress}
            uiStatus={wideMode ? "faded" : null}
          />
        }
        rightControls={rightControls}
        uiStatus={wideMode ? "faded" : null}
      />
    </>
  )
})

const mapStateToProps = ({ books, sidePanelSettings }) => ({
  books,
  sidePanelSettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  toggleSidePanelOpen,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookHeader)