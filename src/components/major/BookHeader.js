import React, { useState, useCallback } from "react"
import { Platform, Linking } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { OverflowMenu } from "react-native-ui-kitten"
import i18n from "../../utils/i18n"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import useWideMode from "../../hooks/useWideMode"

import { confirmRemoveEPub } from "../../utils/removeEpub"
import { getFirstBookLinkInfo } from "../../utils/toolbox"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions"

const BookHeader = React.memo(({
  bookId,
  title,
  subtitle,
  mode,
  showDisplaySettings,
  toggleBookView,

  books,

  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,

  history,
}) => {

  const [ showOptions, setShowOptions ] = useState(false)
  const wideMode = useWideMode()

  const bookLinkInfo = getFirstBookLinkInfo(books[bookId])

  const goToBookLink = useCallback(
    () => {
      const bookLinkInfo = getFirstBookLinkInfo(books[bookId])

      Linking.openURL(bookLinkInfo.href).catch(err => {
        console.log('ERROR: Request to open URL failed.', err)
        historyPush("/error", {
          message: i18n("Your device is not allowing us to open this link."),
        })
      })
    },
    [ books, bookId ],
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
    // {
    //   title: i18n("Recommend this book"),
    //   onPress: recommendBook,
    // },
    // {
    //   title: i18n("My highlights and notes"),
    //   onPress: goToHighlights,
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
      moreOptions[selectedIndex].onPress()
      setShowOptions(false)
    },
    [],
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
    ...(moreOptions.length === 0 ? [] : [
      <OverflowMenu
        data={moreOptions}
        visible={showOptions}
        onSelect={selectOption}
        onBackdropPress={toggleShowOptions}
      >
        <HeaderIcon
          name="md-more"
          onPress={toggleShowOptions}
        />
      </OverflowMenu>,
    ]),
  ]

  if(Platform.OS !== 'web') {
    rightControls.splice(1, 0, (
      <HeaderIcon
        name={[ 'pages', 'zooming' ].includes(mode) ? "md-list" : "md-apps"}
        onPress={toggleBookView}
      />
    ))
  }

  return (
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
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(BookHeader))