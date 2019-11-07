import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import i18n from "../../utils/i18n"
import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"

// import { debounce } from "../../utils/toolbox"

import { setSort, toggleView } from "../../redux/actions"

const LibraryHeader = ({
  toggleView,
  hideOptions,
  idps,
  accounts,
  library,
  toggleShowOptions,
}) => {

  const onPressToggleView = useCallback(
    () => {
      hideOptions()
      toggleView()
    },
    [ hideOptions, toggleView ],
  )

  const scope = library.scope || "all"

  let title = i18n("Library")
  let subtitle = ""

  if(scope == 'device') {
    title = i18n("On device")
  }

  if(accounts[scope]) {
    title = idps[scope.split(':')[0]].idpName
    subtitle = accounts[scope].email
  }
  
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
        <HeaderIcon
          name="md-more"
          onPress={toggleShowOptions}
        />,
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
