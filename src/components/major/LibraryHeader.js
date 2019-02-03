import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Subtitle, Title, Left, Icon, Right, Button, Body, Text } from "native-base"
import i18n from "../../utils/i18n.js"
import AppHeader from "../basic/AppHeader"

import { debounce } from "../../utils/toolbox.js"

import { setSort, toggleView } from "../../redux/actions.js"

class LibraryHeader extends React.Component {

  openDrawer = () => {
    const { navigation, hideOptions } = this.props

    hideOptions()
    debounce(navigation.navigate, "DrawerOpen")
  }

  toggleView = () => {
    const { toggleView, hideOptions } = this.props

    hideOptions()
    toggleView()
  }

  render() {
    const { scope, idps, accounts, library, toggleShowOptions } = this.props

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
        <Left>
          <Button
            transparent
            onPress={this.openDrawer}
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
            onPress={this.toggleView}
          >
            <Icon name={library.view == "covers" ? "list" : "md-apps"} />
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

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  toggleView,
  setSort,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryHeader)
