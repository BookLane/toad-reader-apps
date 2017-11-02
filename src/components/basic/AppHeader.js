import React from "react"
import { Header } from "native-base"

class AppHeader extends React.Component {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to tricker it to render properly.

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
        backgroundColor={this.state.backgroundColor}
        androidStatusBarColor="#2c5b8e"
      >
        {this.props.children}
      </Header>
    )
  }
}

export default AppHeader