import React from "react"
import { StyleSheet } from "react-native"
import { withRouter } from "react-router"
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from "native-base"

const styles = StyleSheet.create({
  container: {
  },
})

class Chooser extends React.Component {

  render() {
    const { history } = this.props

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
            onPress={history.goBack}
          >
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default withRouter(Chooser)