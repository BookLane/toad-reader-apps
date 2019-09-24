import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Link } from "../routers/react-router"
import { Icon, Button } from "react-native-ui-kitten"
import { Text } from "react-native"
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
    <AppHeader>
      {/* <Left>
        <Link to="/drawer">
          <Button
            transparent
            onPress={hideOptions}
          >
            <Icon name="menu" />
          </Button>
        </Link>
      </Left>
      <Body>
        <Title>{title}</Title>
        {subtitle
          ? <Subtitle>{subtitle}</Subtitle>
          : null
        }
      </Body>
      <Right>
        <Button
          transparent
          onPress={onPressToggleView}
        >
          <Icon name={library.view == "covers" ? "list" : "md-apps"} /> */}
          {/* square */}
        {/* </Button>
        <Button
          transparent
          onPress={toggleShowOptions}
        >
          <Icon name="more" />
        </Button>
      </Right> */}
    </AppHeader>
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
