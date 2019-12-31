import { useCallback } from "react"

// This is not yet working for native
// import { useHistory, useLocation } from "react-router"

const useRouterState = ({ history, location }) => {

  // const history = useHistory()
  // const location = useLocation()

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

  return { historyPush, historyReplace, routerState }
}

export default useRouterState
