import React, { useEffect, useCallback, useRef } from "react"
// import { StyleSheet, Platform } from "react-native"
import { withRouter } from "react-router"
import i18n from "../../utils/i18n.js"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"

import { isStatusBarHidden, setStatusBarHidden } from '../../utils/toolbox.js'
import useSetTimeout from "../../hooks/useSetTimeout.js"
import useRouterState from "../../hooks/useRouterState.js"

// const styles = StyleSheet.create({
//   title: {
//     ...(Platform.OS === 'ios' && isPhoneSize() ? { marginLeft: -50, left: -20 } : {}),
//   },
// })

const ErrorMessageHeader = React.memo(({
  history,
  location,
}) => {

  const priorStatusBarHiddenValue = useRef(isStatusBarHidden())
  const [ setHideStatusBarTimeout ] = useSetTimeout()

  useEffect(
    () => setHideStatusBarTimeout(() => setStatusBarHidden(false), 20),
    [],
  )

  const onBackPress = useCallback(
    () => {
      setStatusBarHidden(priorStatusBarHiddenValue.current)
      history.goBack()
    },
    [ history ],
  )

  const [ x, routerState ] = useRouterState({ history, location })
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

export default withRouter(ErrorMessageHeader)
