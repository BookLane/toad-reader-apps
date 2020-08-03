import { useCallback } from "react"
import { Platform } from "react-native"
import { useHistory, useLocation } from "react-router-dom"

import useInstanceValue from "./useInstanceValue"

const useRouterState = () => {

  const history = useHistory()
  const location = useLocation()

  let routerState = {}

  try {
    routerState = JSON.parse(decodeURIComponent(location.hash).slice(1))
  } catch(e) {}

  const getLocation = useInstanceValue(location)
  const getRouterState = useInstanceValue(routerState)

  const historyPush = useCallback(
    (route, state) => {
      history.push(`${route || getLocation().pathname}${state ? `#${JSON.stringify(state)}` : ``}`)
    },
    [],
  )

  const historyReplace = useCallback(
    (route, state) => {
      history.replace(`${route || getLocation().pathname}${state ? `#${JSON.stringify(state)}` : ``}`)
    },
    [],
  )

  const historyGoBackToLibrary = useCallback(
    () => {
      if(location.pathname === '/') return

      if(Platform.OS === 'web') {
        history.goBack()
      } else {
        history.go((history.length - 1) * -1)
      }
    },
    [ location.pathname ]
  )

  const clearKeyFromRouterState = useCallback(
    key => {
      const newRouterState = { ...getRouterState() }
      delete newRouterState[key]
      if(Object.keys(getRouterState()).length !== Object.keys(newRouterState).length) {
        historyReplace(null, Object.keys(newRouterState).length > 0 ? newRouterState : null)
      }
    },
    [],
  )

  return {
    historyPush,
    historyReplace,
    historyGoBack: history.goBack,
    historyGoBackToLibrary,
    historyGo: history.go,
    routerState,
    clearKeyFromRouterState,
    ...location,
  }
}

export default useRouterState
