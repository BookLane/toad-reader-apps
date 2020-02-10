import NetInfo, { useNetInfo } from '@react-native-community/netinfo'

export const connectionInfo = {
  online: false,
}

const updateConnectionInfo = ({ type }) => {
  connectionInfo.online = type !== 'none'
}

NetInfo.fetch().then(updateConnectionInfo)

const useNetwork = () => {
  const netInfo = useNetInfo()

  updateConnectionInfo(netInfo)

  return connectionInfo
}

export default useNetwork