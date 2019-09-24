import React from "react"
import { Layout } from "react-native-ui-kitten"
import AppHeader from "../basic/AppHeader"

const Accounts = ({ history }) => (
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
        <Title>Accounts</Title>
      </Body>
      <Right /> */}
    </AppHeader>
  </Layout>
)

export default Accounts