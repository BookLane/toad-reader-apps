import React from "react"
import { Text, View } from "react-native"
import { withRouter } from "react-router"
import { Button } from "react-native-ui-kitten"
import SafeLayout from "../basic/SafeLayout"

// const styles = StyleSheet.create({
//   container: {
//   },
// })

const Chooser = ({ history }) => (
  <SafeLayout>
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
  </SafeLayout>
)

export default withRouter(Chooser)