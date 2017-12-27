import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Subtitle, Title, Left, Icon, Right, Button, Body, Text } from "native-base"
import i18n from "../../utils/i18n.js"
import AppHeader from "../basic/AppHeader"

import { setSort, toggleView, setErrorMessage } from "../../redux/actions.js"

class LibraryHeader extends React.Component {

  render() {
    const { scope, navigation, idps, accounts, library,
            toggleView, toggleShowOptions, hideOptions } = this.props

    let title = i18n("Library")
    let subtitle = ""

    if(scope == 'device') {
      title = i18n("On device only")
    }
  
    if(accounts[scope]) {
      title = idps[scope.split(':')[0]].idpName
      subtitle = accounts[scope].email
    }
    
    return (
      <AppHeader>
        <Left>
          <Button
            transparent
            onPress={() => {
              hideOptions()
              navigation.navigate("DrawerOpen")
            }}
          >
            <Icon name="menu" />
          </Button>
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
            onPress={() => {
              hideOptions()
              toggleView()
            }}
          >
            <Icon name={library.view == "covers" ? "list" : "apps"} />
            {/* square */}
          </Button>
          <Button
            transparent
            onPress={toggleShowOptions}
          >
            <Icon name="more" />
          </Button>
        </Right>
      </AppHeader>
    )
  }
}

const mapStateToProps = (state) => ({
  idps: state.idps,
  accounts: state.accounts,
  library: state.library,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  toggleView,
  setSort,
  setErrorMessage,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryHeader)
