import { Platform } from "react-native"
import * as FileSystem from 'expo-file-system'
import { safeFetch } from "./toolbox"

export default async (remoteUri, localUri, { skipIfExists, headers }={}) => {

  if(Platform.OS === 'web') return

  if(skipIfExists) {
    const localUriInfo = await FileSystem.getInfoAsync(localUri)
    if(localUriInfo.exists) return
  }

  console.log(`Attempting to download ${remoteUri} to ${localUri}...`)

  const localDir = `${localUri.replace(/\/[^\/]*$/, '')}`
  // const localDirInfo = await FileSystem.getInfoAsync(localDir)

  // if(!localDirInfo.exists) {
  try {
    await FileSystem.makeDirectoryAsync(localDir, { intermediates: true })
  } catch(e) {}

  let success
  if((headers || {}).cookie) {
    const response = await safeFetch(remoteUri, { headers, credentials: 'omit' })
    if(response.status < 400) {
      await FileSystem.writeAsStringAsync(localUri, await response.text())
      success = true
    }
  } else {
    const { status } = await FileSystem.downloadAsync(remoteUri, localUri, { headers })
    success = status >= 200 && status < 300
  }

  if(!success) {
    await FileSystem.deleteAsync(localUri, { idempotent: true })
  }

  console.log(`...download from ${remoteUri} to ${localUri}: ${success ? `successful` : `failed`}.`)

  return success

}
