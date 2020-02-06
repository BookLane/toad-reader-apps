import { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import useUpdate from "react-use/lib/useUpdate"

// The logic is outside of the component in this hook because
// this is a universal status, always the same for all components.

export const connectionInfo = {
  online: false,
  effectiveType: 'unknown',
}

const onConnectionChange = ({ type, effectiveType }) => {
  connectionInfo.online = type !== 'none'
  connectionInfo.effectiveType = effectiveType
}

NetInfo.fetch().then(onConnectionChange)
NetInfo.addEventListener('connectionChange', onConnectionChange)

const useNetwork = () => {

  const update = useUpdate()

  useEffect(() => {
    NetInfo.addEventListener('connectionChange', update)
    return () => {
      NetInfo.removeEventListener('connectionChange', update)
    }
  }, [])

  return connectionInfo
}

export default useNetwork