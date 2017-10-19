import React from "react"
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from "native-base"

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Page</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Page here?</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Home")}>
            <Text>Back home</Text>
          </Button>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Book")}>
            <Text>Book</Text>
          </Button>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chooser")}>
            <Text>Page Chooser</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Page