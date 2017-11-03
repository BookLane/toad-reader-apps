import React from "react"
import { Header } from "native-base"
import { Platform } from "react-native"

class AppHeader extends React.Component {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to force it to render properly.

  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: "#4075ae",
    }
  }

  componentDidMount() {
    this.setState({ backgroundColor: "#4075af" })
  }

  render() {
    return (
      <Header
        backgroundColor={Platform.OS === 'ios' ? null : this.state.backgroundColor}
        androidStatusBarColor="#2c5b8e"
      >
        {this.props.children}
      </Header>
    )
  }
}

export default AppHeader