import React, { useCallback, useRef } from "react"
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { OverflowMenu } from "@ui-kitten/components"
import useToggle from 'react-use/lib/useToggle'

import { getIdsFromAccountId, statusBarHeight } from "../../utils/toolbox"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import Search from "./Search"

import { setSort, toggleView } from "../../redux/actions"

const styles = StyleSheet.create({
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, .5)",
    zIndex: 10,
  },
  searchContainer: {
    marginHorizontal: 'auto',
    paddingTop: 5 - statusBarHeight,
    width: 500,
    maxWidth: '90%',
    minHeight: 300,
    maxHeight: '90%',
    backgroundColor: 'white',
  },
})

const LibraryHeader = ({
  idps,
  accounts,
  library,
  setSort,
  toggleView,
}) => {

  const [ showOptions, toggleShowOptions ] = useToggle(false)
  const [ showSearch, toggleShowSearch ] = useToggle(false)

  const searchInputRef = useRef()

  const onPressToggleView = useCallback(toggleView, [])

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
      {showSearch &&
        <TouchableWithoutFeedback onPress={toggleShowSearch}>
          <View style={styles.modalBackdrop}>
            <View style={styles.searchContainer}>
              <Search
                goTo={() => {}}
                inputRef={searchInputRef}
                idpId={idpId}
                requestClose={toggleShowSearch}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      }
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
