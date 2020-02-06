import { useCallback, useRef } from "react"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"

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

  const routerState = useRef({})

  try {
    routerState.current = JSON.parse(decodeURIComponent(location.hash).slice(1))
  } catch(e) {}

  return {
    historyPush,
    historyReplace,
    historyGoBack: history.goBack,
    historyGo: history.go,
    routerState: routerState.current,
    ...location,
  }
}

export default useRouterState
