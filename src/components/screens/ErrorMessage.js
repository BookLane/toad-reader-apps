import React, { useEffect } from "react"
import { Updates } from "expo"
import { StyleSheet, View } from "react-native"
import { Container, Content, Body, Text } from "native-base"
import i18n from "../../utils/i18n.js"

import ErrorMessageHeader from "../major/ErrorMessageHeader"
import useSetTimeout from "../../hooks/useSetTimeout.js"

const styles = StyleSheet.create({
  body: {
    padding: 15,
    width: '100%',
  },
  view: {
    width: '100%',
  },
})

const ErrorMessage = ({ location }) => {

  const [ setReloadTimeout ] = useSetTimeout()
  const { message, critical } = location.state || {}

  useEffect(
    () => {
      if(critical) {
        setReloadTimeout(Updates.reload, 5000)
      }
    },
    [],
  )

  return (
    <Container>
      <ErrorMessageHeader />
      <Content>
        <Body style={styles.body}>
          <View style={styles.view}>
            <Text>{message || (
              critical
                ? i18n("There was a critical error. The app will reload in a few seconds. Please contact us if you continue to receive this message.")
                : i18n("There was an unknown error. Please contact us if you continue to receive this message.")
            )}</Text>
          </View>
        </Body>
      </Content>
    </Container>
  )
}

export default ErrorMessage
