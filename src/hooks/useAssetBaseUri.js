import useRouterState from "./useRouterState"
import { getDataOrigin, getIDPOrigin } from '../utils/toolbox'

const useAssetBaseUri = ({
  idps,
  accounts,
  forceCookieInUri,
}) => {

  const { routerState } = useRouterState()
  const { widget } = routerState

  const idp = Object.values(idps)[0]

  return (
    (__DEV__ || widget || forceCookieInUri)
      ? `${getDataOrigin(idp)}/c/${Object.values(accounts)[0].cookie}`
      : `${getIDPOrigin(idp)}`
  )

}

export default useAssetBaseUri
