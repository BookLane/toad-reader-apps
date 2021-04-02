import React, { useEffect } from "react"
import * as Updates from 'expo-updates'
import { StyleSheet, View, Text } from "react-native"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"

import ErrorMessageHeader from "../major/ErrorMessageHeader"
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"

const styles = StyleSheet.create({
  body: {
    padding: 15,
    width: '100%',
  },
  view: {
    width: '100%',
  },
})

const ErrorMessage = () => {

  const [ setReloadTimeout ] = useSetTimeout()
  const { routerState } = useRouterState()
  const { message, critical, widget } = routerState

  useEffect(
    () => {
      if(critical) {
        setReloadTimeout(Updates.reloadAsync, 5000)
      }
    },
    [],
  )

  useEffect(
    () => {
      if(widget) {
        parent.postMessage({
          action: 'forbidden',
          iframeid: window.name,
          payload: message,
        }, '*')
      }
    },
    [],
  )

  return (
    <SafeLayout>
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
    </SafeLayout>
  )
}

export default ErrorMessage
