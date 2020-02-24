import { useNetInfo } from '@react-native-community/netinfo'

import { getConnectionInfo } from "../utils/connectionInfo"

const useNetwork = () => {
  const netInfo = useNetInfo()
  return getConnectionInfo(netInfo)
}

export default useNetwork