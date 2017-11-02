import { FileSystem } from "expo"

export default async (remoteUri, localUri, { skipIfExists }={}) => {
    
  if(skipIfExists) {
    const localUriInfo = await FileSystem.getInfoAsync(localUri)
    if(localUriInfo.exists) return
  }

  const localDir = `${localUri.replace(/\/[^\/]*$/, '')}`
  const localDirInfo = await FileSystem.getInfoAsync(localDir)

  // if(!localDirInfo.exists) {
  try {
    await FileSystem.makeDirectoryAsync(localDir, { intermediates: true })
  } catch(e) {}

  await FileSystem.downloadAsync(remoteUri, localUri)

}
