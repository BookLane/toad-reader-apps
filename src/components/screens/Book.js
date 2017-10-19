import React from "react"
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base"

class Book extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Book</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Book here</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Highlights")}>
            <Text>Highlights</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Book