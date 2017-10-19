import React from "react"
import { Container, Header, Title, Left, Right, Icon, Button, Body, Content, Text, Card, CardItem } from "native-base"

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Page here</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Book", { pageKey: this.props.navigation.state.key })}>
            <Text>Middle tap (zooms out to show pages)</Text>
          </Button>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chooser")}>
            <Text>Page Chooser (comes up if current location unknown)</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Page