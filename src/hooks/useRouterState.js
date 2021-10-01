import React, { useCallback } from "react"
import { Platform } from "react-native"
import { useHistory, useLocation } from "react-router-dom"
import { Link as RouterLink } from "../components/routers/react-router"

import useInstanceValue from "./useInstanceValue"

export const Link = props => (
  <RouterLink
    {...props}
    to={`${props.to}#{"back":1}`}
  />
)

let doingManualHistoryChange = false

const removeNullsFromState = state => {
  for(let key in state) {
    if(state[key] == null) {
      delete state[key]
    }
  }
  return state
}

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
    (route, state, back) => {
      back = back !== undefined ? back : (getRouterState().back || 0) + 1
      const stateWithBack = removeNullsFromState({
        ...(state || {}),
        back,
      })
      doingManualHistoryChange = true
      history.push(`${route || getLocation().pathname}${`#${JSON.stringify(stateWithBack)}`}`)
      setTimeout(() => {
        doingManualHistoryChange = false
      })
      return stateWithBack
    },
    [],
  )

  const historyReplace = useCallback(
    (route, state, back) => {
      back = back !== undefined ? back : (getRouterState().back || 0)
      const stateWithBack = removeNullsFromState({
        ...(state || {}),
        back,
      })
      doingManualHistoryChange = true
      history.replace(`${route || getLocation().pathname}${`#${JSON.stringify(stateWithBack)}`}`)
      setTimeout(() => {
        doingManualHistoryChange = false
      })
    },
    [],
  )

  const historyGoBack = useCallback(
    () => {
      doingManualHistoryChange = true
      history.goBack()
      setTimeout(() => {
        doingManualHistoryChange = false
      })
    },
    [],
  )

  const historyGoBackToLibrary = useCallback(
    () => {
      if(getLocation().pathname === '/') return

      if(Platform.OS === 'web') {
        const { back } = getRouterState()
        if(back) history.go(back * -1)
      } else {
        history.go((history.length - 1) * -1)
      }
    },
    [],
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

  const inManualHistoryUpdate = useCallback(() => doingManualHistoryChange, [])

  return {
    historyPush,
    historyReplace,
    historyGoBack,
    historyGoBackToLibrary,
    historyGo: history.go,
    routerState,
    getRouterState,
    clearKeyFromRouterState,
    inManualHistoryUpdate,
    ...location,
  }
}

export default useRouterState
