import React from "react"
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content } from "native-base"

import Counter from '../Counter.js'

class Accounts extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Accounts</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Counter />
        </Content>
      </Container>
    )
  }
}

export default Accounts