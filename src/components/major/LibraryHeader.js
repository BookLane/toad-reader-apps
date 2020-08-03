import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { OverflowMenu } from "@ui-kitten/components"
import useToggle from 'react-use/lib/useToggle'

import { getIdsFromAccountId } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import HeaderSearch from "../basic/HeaderSearch"

import { setSort, toggleView } from "../../redux/actions"

// const styles = StyleSheet.create({
// })

const LibraryHeader = ({
  idps,
  accounts,
  library,
  setSort,
  toggleView,
}) => {

  const [ showOptions, toggleShowOptions ] = useToggle(false)
  const [ showSearch, toggleShowSearch ] = useToggle(false)

  const onPressToggleView = useCallback(toggleView, [])

  const { online } = useNetwork()

  const scope = library.scope || "all"

  const { idpId } = getIdsFromAccountId(scope)

  let title = i18n("Library")
  let subtitle = ""

  if(scope == 'device') {
    title = i18n("On device")
  }

  if(accounts[scope]) {
    title = idps[idpId].name
    subtitle = accounts[scope].email
  }

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
    selectedIndex => {
      setSort({ sort: moreKeys[selectedIndex] })
      // setShowOptions(false)
    },
    [],
  )

  return (
    <>
      <AppHeader
        title={title}
        subtitle={subtitle}
        leftControl={
          <HeaderIcon
            iconName="ios-menu"
            path="/drawer"
          />
        }
        rightControls={[
          <HeaderIcon
            iconName="md-search"
            onPress={toggleShowSearch}
            disabled={!online}
            uiStatus={!online ? "disabled" : null}
          />,
          <HeaderIcon
            iconName={library.view == "covers" ? "ios-list" : "md-apps"}
            onPress={onPressToggleView}
          />,
          <OverflowMenu
            data={moreOptions}
            visible={showOptions}
            selectedIndex={moreKeys.indexOf(library.sort)}
            onSelect={selectSort}
            onBackdropPress={toggleShowOptions}
            placement='bottom end'
          >
            <HeaderIcon
              iconName="sort"
              iconPack="materialCommunity"
              onPress={toggleShowOptions}
            />
          </OverflowMenu>,
        ]}
      />
      <HeaderSearch
        showSearch={showSearch}
        toggleShowSearch={toggleShowSearch}
        idpId={idpId}
      />
    </>
  )
}

const mapStateToProps = ({ idps, accounts, library }) => ({
  idps,
  accounts,
  library,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  toggleView,
  setSort,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryHeader)
