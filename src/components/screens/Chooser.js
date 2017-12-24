import React from "react"
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from "native-base"

class Chooser extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chooser here</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Chooser