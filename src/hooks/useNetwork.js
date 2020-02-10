import { useNetInfo } from '@react-native-community/netinfo'

const useNetwork = () => {

  const { type } = useNetInfo()

  return {
    online: type !== 'none',
  }
}

export default useNetwork