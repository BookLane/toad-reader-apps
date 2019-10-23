import React, { useEffect } from "react"
import { Updates } from "expo"
import { StyleSheet, View, Text } from "react-native"
import { withRouter } from "react-router"
import { Layout } from "react-native-ui-kitten"
import i18n from "../../utils/i18n.js"

import ErrorMessageHeader from "../major/ErrorMessageHeader"
import useSetTimeout from "../../hooks/useSetTimeout.js"
import useRouterState from "../../hooks/useRouterState.js"

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
  const [ x, routerState ] = useRouterState({ location })
  const { message, critical } = routerState

  useEffect(
    () => {
      if(critical) {
        setReloadTimeout(Updates.reload, 5000)
      }
    },
    [],
  )

  return (
    <Layout>
      <ErrorMessageHeader />
      <View style={styles.body}>
        <View style={styles.view}>
          <Text>{message || (
            critical
              ? i18n("There was a critical error. The app will reload in a few seconds. Please contact us if you continue to receive this message.")
              : i18n("There was an unknown error. Please contact us if you continue to receive this message.")
          )}</Text>
        </View>
      </View>
    </Layout>
  )
}

export default withRouter(ErrorMessage)
