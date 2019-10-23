import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { Layout, Button } from "react-native-ui-kitten"
import AppHeader from "../basic/AppHeader"

const Highlights = ({ history }) => (
  <Layout>
    <AppHeader>
      {/* <Left>
        <Button
          transparent
          onPress={history.goBack}
        >
          <Ionicons name="md-arrow-back" />
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