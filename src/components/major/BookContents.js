import React from "react"
import { Text, Button, View } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    minHeight: 300,
    zIndex: 1,
  },
})

class BookContents extends React.Component {

  render() {

    // const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Text>Book contents</Text>
        <Button full rounded dark
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Back to reading</Text>
        </Button>
      </View>
    )
  }
}

export default BookContents