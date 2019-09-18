import React from "react"
import { Container, Title, Left, Right, Button, Icon, Body, Content, Text, Card, CardItem } from "native-base"
import AppHeader from "../basic/AppHeader"

class Highlights extends React.Component {

  render() {
    const { location } = this.props

    return (
      <Container>
        <AppHeader>
          <Left>
            <Button
              transparent
              onPress={location.goBack}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Highlights</Title>
          </Body>
          <Right />
        </AppHeader>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Highlights here</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Highlights