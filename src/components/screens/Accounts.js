import React from "react"
import { Ionicons } from "@expo/vector-icons"
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
          <Ionicons name="md-arrow-back" />
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