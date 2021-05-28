import React, { useCallback, useEffect, useState } from "react"
import { Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { OverflowMenu, MenuItem, IndexPath } from "@ui-kitten/components"
import useToggle from 'react-use/lib/useToggle'

import { getIdsFromAccountId } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"
import useRouterState from '../../hooks/useRouterState'

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import HeaderSearch from "../basic/HeaderSearch"
import Dialog from "./Dialog"

import { setSort, toggleView, pushToBookDownloadQueue } from "../../redux/actions"

// const styles = StyleSheet.create({
// })

const LibraryHeader = ({
  idps,
  accounts,
  books,
  library,
  downloadProgressByBookId,

  setSort,
  toggleView,
  pushToBookDownloadQueue,
}) => {

  const [ showOptions, toggleShowOptions ] = useToggle(false)
  const [ showSearch, toggleShowSearch ] = useToggle(false)
  const [ bookIdToDownload, setBookIdToDownload ] = useState()
  const [ goToInfo, setGoToInfo ] = useState()

  const onPressToggleView = useCallback(toggleView, [])

  const { online } = useNetwork()

  const { historyPush } = useRouterState()

  const scope = library.scope || "all"

  const idpId = getIdsFromAccountId(scope).idpId || Object.keys(idps)[0]

  let title = i18n("Library")
  let subtitle = ""

  if(scope == 'device') {
    title = i18n("On device")
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
      setSort({ sort: moreKeys[selectedIndex] })
      // setShowOptions(false)
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
          />
        }
        rightControls={[
          <HeaderIcon
            iconName="md-search-sharp"
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
        submittingPercentage={downloadProgressByBookId[bookIdToDownload]}
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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryHeader)
