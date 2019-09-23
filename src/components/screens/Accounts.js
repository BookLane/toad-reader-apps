import React from "react"
import { Container, Title, Left, Icon, Right, Button, Body, Content } from "native-base"
import AppHeader from "../basic/AppHeader"

const Accounts = ({ history }) => (
  <Container>
    <AppHeader>
      <Left>
        <Button
          transparent
          onPress={history.goBack}
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

export default Accounts