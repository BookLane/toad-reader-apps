import React from "react"
import { Text, View } from "react-native"
import { withRouter } from "react-router"
import { Button, Layout } from "react-native-ui-kitten"

// const styles = StyleSheet.create({
//   container: {
//   },
// })

const Chooser = ({ history }) => (
  <Layout>
    <View>
      {/* <Card>
        <CardItem>
          <Body>
            <Text>Chooser here</Text>
          </Body>
        </CardItem>
      </Card> */}
      <Button full rounded dark
        style={{ marginTop: 10 }}
        onPress={history.goBack}
      >
        <Text>Back</Text>
      </Button>
    </View>
  </Layout>
)

export default withRouter(Chooser)