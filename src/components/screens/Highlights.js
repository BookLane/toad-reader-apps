import React from "react"
import { Layout, Button, Icon } from "react-native-ui-kitten"
import AppHeader from "../basic/AppHeader"

const Highlights = ({ history }) => (
  <Layout>
    <AppHeader>
      {/* <Left>
        <Button
          transparent
          onPress={history.goBack}
        >
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Highlights</Title>
      </Body>
      <Right /> */}
    </AppHeader>
    {/* <Content padder>
      <Card>
        <CardItem>
          <Body>
            <Text>Highlights here</Text>
          </Body>
        </CardItem>
      </Card>
    </Content> */}
  </Layout>
)

export default Highlights