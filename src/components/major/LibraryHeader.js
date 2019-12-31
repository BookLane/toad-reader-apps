import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import { OverflowMenu } from "react-native-ui-kitten"

import { getIdsFromAccountId } from "../../utils/toolbox"

import { setSort, toggleView } from "../../redux/actions"

const LibraryHeader = ({
  idps,
  accounts,
  library,
  setSort,
  toggleView,
}) => {

  const [ showOptions, setShowOptions ] = useState(false)

  const onPressToggleView = useCallback(toggleView, [])

  const scope = library.scope || "all"

  let title = i18n("Library")
  let subtitle = ""

  if(scope == 'device') {
    title = i18n("On device")
  }

  if(accounts[scope]) {
    title = idps[getIdsFromAccountId(scope).idpId].name
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

  const toggleShowOptions = useCallback(
    () => setShowOptions(!showOptions),
    [ showOptions ],
  )

  const selectSort = useCallback(
    selectedIndex => {
      setSort({ sort: moreKeys[selectedIndex] })
      // setShowOptions(false)
    },
    [],
  )

  return (
    <AppHeader
      title={title}
      subtitle={subtitle}
      leftControl={
        <HeaderIcon
          name="ios-menu"
          path="/drawer"
        />
      }
      rightControls={[
        <HeaderIcon
          name={library.view == "covers" ? "ios-list" : "md-apps"}
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
            name="md-more"
            onPress={toggleShowOptions}
          />
        </OverflowMenu>,
      ]}
    />
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
