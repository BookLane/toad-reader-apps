import React from "react"
import { StyleSheet, View } from "react-native"
import { Container, Content, Body, Text } from "native-base"
import i18n from "../../utils/i18n.js"

import ErrorMessageHeader from "../major/ErrorMessageHeader"

const styles = StyleSheet.create({
  body: {
    padding: 15,
    width: '100%',
  },
  view: {
    width: '100%',
  },
})

class ErrorMessage extends React.Component {

  render() {
    const { navigation } = this.props
    const { message } = navigation.state.params

    return (
      <Container>
        <ErrorMessageHeader navigation={navigation} />
        <Content>
          <Body style={styles.body}>
            <View style={styles.view}>
              <Text>{message || i18n("There was an unknown error. Please contact us if you continue to receive this message.")}</Text>
            </View>
          </Body>
        </Content>
      </Container>
    )
  }
}

export default ErrorMessage
