import React from "react"
import { Container, Title, Left, Icon, Right, Button, Body, Content } from "native-base"
import AppHeader from '../basic/AppHeader.js';

import Counter from '../Counter.js'

class Accounts extends React.Component {
  render() {
    return (
      <Container>
        <AppHeader>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Accounts</Title>
          </Body>
          <Right />
        </AppHeader>
        <Content padder>
          <Counter />
        </Content>
      </Container>
    )
  }
}

export default Accounts