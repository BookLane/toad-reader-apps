import useNetworkFromReactUse from "react-use/lib/useNetworkState"

import { getConnectionInfoWeb } from "../utils/connectionInfo"

const useNetwork = () => {
  const netInfo = useNetworkFromReactUse()
  return getConnectionInfoWeb(netInfo)
}

export default useNetwork