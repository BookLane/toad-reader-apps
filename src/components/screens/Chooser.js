import React from "react"
import { Text, View } from "react-native"
import { Button } from "@ui-kitten/components"
import SafeLayout from "../basic/SafeLayout"

import useRouterState from "../../hooks/useRouterState"

// const styles = StyleSheet.create({
//   container: {
//   },
// })

const Chooser = ({ history }) => {

  const { historyGoBack } = useRouterState()

  return (
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
          onPress={historyGoBack}
        >
          <Text>Back</Text>
        </Button>
      </View>
    </SafeLayout>
  )
}

export default Chooser