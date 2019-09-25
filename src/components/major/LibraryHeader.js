import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Link } from "../routers/react-router"
import { Ionicons } from "@expo/vector-icons"
import { TopNavigationAction } from 'react-native-ui-kitten'
import i18n from "../../utils/i18n.js"
import AppHeader from "../basic/AppHeader"

// import { debounce } from "../../utils/toolbox.js"

import { setSort, toggleView } from "../../redux/actions.js"

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

  const menuIcon = useCallback(
    () => (
      <Link to="/drawer">
        <Ionicons name="ios-menu" />
      </Link>
    ),
    [],
  )

  const viewIcon = useCallback(
    () => (
      <Ionicons name={library.view == "covers" ? "ios-list" : "md-apps"} />
    ),
    [ library.view ],
  )

  const moreIcon = useCallback(
    () => (
      <Ionicons name="md-more" />
    ),
    [],
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
        <TopNavigationAction
          icon={menuIcon}
        />
      }
      rightControls={[
        <TopNavigationAction
          icon={viewIcon}
          onPress={onPressToggleView}
        />,
        <TopNavigationAction
          icon={moreIcon}
          onPress={toggleShowOptions}
        />,
      ]}
    />
  )
}

const mapStateToProps = (state) => ({
  idps: state.idps,
  accounts: state.accounts,
  library: state.library,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  toggleView,
  setSort,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryHeader)
