import React from "react"
import { Container, Title, Left, Icon, Right, Button, Body, Content } from "native-base"
import AppHeader from "../basic/AppHeader"

class Accounts extends React.Component {
  render() {
    const { navigation } = this.props

    return (
      <Container>
        <AppHeader>
          <Left>
            <Button
              transparent
              onPress={() => navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Accounts</Title>
          </Body>
          <Right />
        </AppHeader>
      </Container>
    )
  }
}

export default Accounts