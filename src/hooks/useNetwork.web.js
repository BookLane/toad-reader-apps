import useNetworkFromReactUse from "react-use/lib/useNetwork"

export const connectionInfo = {
  online: false,
  effectiveType: 'unknown',
}

const useNetwork = () => {
  const newConnectionInfo = useNetworkFromReactUse()

  if(typeof newConnectionInfo.online === 'boolean') {
    connectionInfo.online = newConnectionInfo.online
    connectionInfo.effectiveType = newConnectionInfo.effectiveType

  } else {  // some browsers do not support NetworkInformation
    connectionInfo.online = true
    connectionInfo.effectiveType = '4g'
  }

  return connectionInfo
}

export default useNetwork