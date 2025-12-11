import React, { useCallback, useEffect, useState } from "react"
import { Platform, Text, StyleSheet } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { OverflowMenu, MenuItem, IndexPath } from "@ui-kitten/components"
import useToggle from 'react-use/lib/useToggle'

import { getIdsFromAccountId, textToReactNative } from "../../utils/toolbox"
import { logEvent } from "../../utils/analytics"
import useNetwork from "../../hooks/useNetwork"
import useRouterState from '../../hooks/useRouterState'
import useDownloadProgress from '../../hooks/useDownloadProgress'

import LinkLikeText from "../basic/LinkLikeText"
import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import HeaderSearch from "../basic/HeaderSearch"
import Dialog from "./Dialog"
import Icon from "../basic/Icon"

import { setSort, toggleView, pushToBookDownloadQueue, changeLibraryFilter } from "../../redux/actions"

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: '400',
  },
  refreshIcon: {
    position: 'absolute',
    top: 6,
    left: 2,
    tintColor: 'black',
    lineHeight: 14,
    height: 14,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  refreshIconReady: {
    tintColor: 'rgb(51, 102, 255)',
  },
})

const LibraryHeader = ({
  isUpdatePending,
  isUpdateAvailable,
  onRefresh,

  idps,
  accounts,
  books,
  library,
  downloadProgressByBookId,

  setSort,
  toggleView,
  pushToBookDownloadQueue,
  changeLibraryFilter,
}) => {

  const [ showOptions, toggleShowOptions ] = useToggle(false)
  const [ showSearch, toggleShowSearch ] = useToggle(false)
  const [ bookIdToDownload, setBookIdToDownload ] = useState()
  const [ goToInfo, setGoToInfo ] = useState()
  const downloadProgress = useDownloadProgress({ downloadProgressByBookId, bookInfo: books[bookIdToDownload], bookId: bookIdToDownload })

  const onPressToggleView = useCallback(toggleView, [])

  const { online } = useNetwork()

  const { historyPush } = useRouterState()

  const removeFilter = useCallback(() => changeLibraryFilter(), [])

  const scope = library.scope || "all"

  const idpId = getIdsFromAccountId(scope).idpId || Object.keys(idps)[0]

  let title = i18n("Library")
  let subtitle = ""

  if(scope == 'device') {
    title = i18n("On device")
  }

  if(library.filter) {
    title = (
      <Text
        numberOfLines={1}
        style={styles.title}
      >
        <LinkLikeText
          onPress={removeFilter}
          style={styles.title}
        >
          {title}
        </LinkLikeText>
        {` › `}
        <Text>
          {textToReactNative(library.filter.value)}
        </Text>
      </Text>
    )
  }

  if(accounts[scope]) {
    title = idps[idpId].name
    subtitle = accounts[scope].email
  }

  const { downloadStatus, title: bookTitle } = books[bookIdToDownload] || {}
  const hasGoToInfo = goToInfo && Object.keys(goToInfo).length > 0

  useEffect(
    () => {
      if(
        (
          Platform.OS === 'web'
          && bookIdToDownload
        )
        || downloadStatus === 2
      ) {
        historyPush(
          `/book/${bookIdToDownload}`,
          !hasGoToInfo
            ? null
            : {
              goToInfo,
            }
          )
      }
    },
    [ bookIdToDownload, downloadStatus ],
  )

  const moreOptions = [
    {
      key: 'recent',
      title: i18n("Recent"),
    },
    {
      key: 'title',
      title: i18n("Title"),
    },
    {
      key: 'author',
      title: i18n("Author"),
    },
  ]

  const moreKeys = moreOptions.map(({ key }) => key)

  const selectSort = useCallback(
    ({ row: selectedIndex }) => {
      const sort = moreKeys[selectedIndex]

      setSort({ sort })
      // setShowOptions(false)

      logEvent({
        eventName: `Library: Set sort`,
        properties: {
          sort,
        },
      })
    },
    [],
  )

  const goTo = useCallback(
    ({ bookId, ...goToInfo }) => {
      setGoToInfo(goToInfo)
      setBookIdToDownload(bookId)
    },
    [],
  )

  const onCancelDownload = useCallback(() => setBookIdToDownload(), [])

  const onConfirmDownload = useCallback(
    () => {
      pushToBookDownloadQueue({
        bookId: bookIdToDownload,
        pushToFront: true,
      })

      logEvent({
        eventName: `Download book`,
        properties: {
          title: bookTitle || `Book id: ${bookIdToDownload}`,
          type: `ebook`,
        },
      })
    },
    [ bookIdToDownload ],
  )

  return (
    <>
      <AppHeader
        title={title}
        subtitle={subtitle}
        leftControl={
          <HeaderIcon
            iconName="menu-sharp"
            path="/drawer"
          >
            {isUpdateAvailable &&
              <Icon
                style={[
                  styles.refreshIcon,
                  (isUpdatePending && styles.refreshIconReady),
                ]}
                name="refresh-circle"
              />
            }
          </HeaderIcon>
        }
        rightControls={[
          <HeaderIcon
            iconName="reload"
            onPress={onRefresh}
            disabled={!online}
            uiStatus={!online ? "disabled" : null}
          />,
          <HeaderIcon
            iconName="search-sharp"
            onPress={toggleShowSearch}
            disabled={!online}
            uiStatus={!online ? "disabled" : null}
          />,
          <HeaderIcon
            iconName={library.view == "covers" ? "format-list-bulleted-square" : "apps"}
            iconPack="materialCommunity"
            onPress={onPressToggleView}
          />,
          <OverflowMenu
            visible={showOptions}
            selectedIndex={new IndexPath(moreKeys.indexOf(library.sort))}
            onSelect={selectSort}
            onBackdropPress={toggleShowOptions}
            placement='bottom end'
            anchor={() => (
              <HeaderIcon
                iconName="sort"
                iconPack="materialCommunity"
                onPress={toggleShowOptions}
              />
            )}
          >
            {moreOptions.map(({ title }, idx) => (
              <MenuItem
                key={idx}
                title={title}
              />
            ))}
          </OverflowMenu>,
        ]}
      />
      <HeaderSearch
        showSearch={showSearch}
        toggleShowSearch={toggleShowSearch}
        idpId={idpId}
        goTo={goTo}
      />
      <Dialog
        open={!!bookIdToDownload}
        type="confirm"
        title={i18n("Download book")}
        message={[
          hasGoToInfo
            ? (
              i18n("Would you like to download “{{title}}” to view this search result?", {
                title: bookTitle,
              })
            )
            : (
              i18n("Would you like to download “{{title}}”?", {
                title: bookTitle,
              })
            )
        ]}
        confirmButtonText={i18n("Download")}
        onCancel={onCancelDownload}
        onConfirm={onConfirmDownload}
        submitting={downloadStatus === 1}
        submittingPercentage={downloadProgress}
      />

    </>
  )
}

const mapStateToProps = ({ idps, accounts, books, library, downloadProgressByBookId }) => ({
  idps,
  accounts,
  books,
  library,
  downloadProgressByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  toggleView,
  setSort,
  pushToBookDownloadQueue,
  changeLibraryFilter,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryHeader)
