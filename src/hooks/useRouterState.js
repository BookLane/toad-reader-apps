import { useCallback } from "react"
import { Platform } from "react-native"
import { useHistory, useLocation } from "react-router-dom"

const useRouterState = () => {

  const history = useHistory()
  const location = useLocation()

  const historyPush = useCallback(
    (route, state) => history.push(`${route || location.pathname}${state ? `#${JSON.stringify(state)}` : ``}`),
    [ history, location ],
  )

  const historyReplace = useCallback(
    (route, state) => history.replace(`${route || location.pathname}${state ? `#${JSON.stringify(state)}` : ``}`),
    [ history, location ],
  )

  let routerState = {}

  try {
    routerState = JSON.parse(decodeURIComponent(location.hash).slice(1))
  } catch(e) {}

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

  return {
    historyPush,
    historyReplace,
    historyGoBack: history.goBack,
    historyGoBackToLibrary,
    historyGo: history.go,
    routerState,
    ...location,
  }
}

export default useRouterState
