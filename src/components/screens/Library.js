import React from "react"
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base"

class Library extends React.Component {
  render() {

    let { scope } = this.props.navigation.state.params || {}
    scope = scope || "Library"

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
            <Title>{scope}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Library here</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Page")}>
            <Text>Read book</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Library