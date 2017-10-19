import React from "react"
import { Container, Header, Title, Left, Right, Icon, Button, Body, Content,Text, Card, CardItem } from "native-base"

class Book extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack(this.props.navigation.state.params.pageKey)}>
              <Icon name="home" />
            </Button>
          </Left>
          <Body>
            <Title>Book</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Book contents</Text>
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