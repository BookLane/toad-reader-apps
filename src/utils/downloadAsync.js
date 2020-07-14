import { Platform } from "react-native"
import * as FileSystem from 'expo-file-system'

export default async (remoteUri, localUri, { skipIfExists, headers }={}) => {

  if(Platform.OS === 'web') return

  if(skipIfExists) {
    const localUriInfo = await FileSystem.getInfoAsync(localUri)
    if(localUriInfo.exists) return
  }

  const localDir = `${localUri.replace(/\/[^\/]*$/, '')}`
  // const localDirInfo = await FileSystem.getInfoAsync(localDir)

  // if(!localDirInfo.exists) {
  try {
    await FileSystem.makeDirectoryAsync(localDir, { intermediates: true })
  } catch(e) {}

  const { status } = await FileSystem.downloadAsync(remoteUri, localUri, { headers })

  return status >= 200 && status < 300

}
