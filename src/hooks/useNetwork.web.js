import useNetworkFromReactUse from "react-use/lib/useNetwork"

export const connectionInfo = {
  online: false,
  effectiveType: 'unknown',
}

const useNetwork = () => {
  const newConnectionInfo = useNetworkFromReactUse()

  connectionInfo.online = newConnectionInfo.effectiveType
  connectionInfo.effectiveType = newConnectionInfo.effectiveType

  return connectionInfo
}

export default useNetwork