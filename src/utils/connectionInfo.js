import { Platform } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

const connectionInfo = {
  online: Platform.OS === 'web' ? navigator.onLine : false,
}

export const getConnectionInfo = ({ type }) => ({ online: type !== 'none' })

// The boolean check because some browsers do not support NetworkInformation
export const getConnectionInfoWeb = ({ online }) => ({ online: typeof online === 'boolean' ? online : true })

const addConnectionInfoEventListeners = []
export const addConnectionInfoEventListener = fn => addConnectionInfoEventListeners.push(fn)

const updateConnectionInfo = netInfo => {
  connectionInfo.online = getConnectionInfo(netInfo).online
}

NetInfo.addEventListener(netInfo => {
  updateConnectionInfo(netInfo)
  addConnectionInfoEventListeners.forEach(fn => fn())
})

NetInfo.fetch().then(updateConnectionInfo)

export default connectionInfo