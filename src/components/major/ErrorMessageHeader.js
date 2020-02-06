import React, { useEffect, useCallback, useRef } from "react"
// import { StyleSheet, Platform } from "react-native"
import { i18n } from "inline-i18n"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"

import { isStatusBarHidden, setStatusBarHidden } from '../../utils/toolbox'
import useSetTimeout from "../../hooks/useSetTimeout"
import useRouterState from "../../hooks/useRouterState"

// const styles = StyleSheet.create({
//   title: {
//     ...(Platform.OS === 'ios' && isPhoneSize() ? { marginLeft: -50, left: -20 } : {}),
//   },
// })

const ErrorMessageHeader = React.memo(() => {

  const priorStatusBarHiddenValue = useRef(isStatusBarHidden())
  const [ setHideStatusBarTimeout ] = useSetTimeout()

  useEffect(
    () => setHideStatusBarTimeout(() => setStatusBarHidden(false), 20),
    [],
  )

  const { historyGoBack, routerState } = useRouterState()

  const onBackPress = useCallback(
    () => {
      setStatusBarHidden(priorStatusBarHiddenValue.current)
      historyGoBack()
    },
    [],
  )

  const { title, critical } = routerState

  return (
    <AppHeader
      title={title || i18n("Error")}
      leftControl={critical ? null : (
        <HeaderIcon
          name="md-arrow-back"
          onPress={onBackPress}
        />
      )}
    />
  )
})

export default ErrorMessageHeader
