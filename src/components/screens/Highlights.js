import React from "react"
// import { Ionicons } from "@expo/vector-icons"
// import { Button } from "react-native-ui-kitten"
import AppHeader from "../basic/AppHeader"
import SafeLayout from "../basic/SafeLayout"

const Highlights = ({ history }) => (
  <SafeLayout>
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
  </SafeLayout>
)

export default Highlights