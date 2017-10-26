import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, Subtitle, Title, Left, Icon, Right, Button, Body, Content, Text } from "native-base"
import i18n from "../../utils/i18n.js"

import { setSort, toggleView, setErrorMessage } from '../../redux/actions.js';

class LibraryHeader extends React.Component {

  constructor() {
    super()
    this.state = {
      showOptions: false,
    }
  }

  render() {
    const { scope, navigation, idps, accounts, library, toggleView } = this.props
    const { showOptions } = this.state

    let title = i18n("Library")
    let subtitle = ""

    if(accounts[scope]) {
      title = idps[scope.split(':')[0]].idpName
      subtitle = accounts[scope].email
    }
    
    return (
      <Header
        androidStatusBarColor="#2c5b8e"
        backgroundColor="#4075af"
      >
        <Left>
          <Button
            transparent
            onPress={() => navigation.navigate("DrawerOpen")}>
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
            onPress={() => toggleView()}>
            <Icon name={library.view == "covers" ? "apps" : "list"} />
            {/* square */}
          </Button>
          <Button
            transparent
            onPress={() => this.setState({ showOptions: !showOptions })}>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
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
