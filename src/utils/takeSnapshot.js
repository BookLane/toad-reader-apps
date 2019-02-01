import { FileSystem, takeSnapshotAsync } from "expo"
import { Platform } from "react-native"

// NOTE: I have tried to speed this up in the following ways but they were not faster.
// (1) Taking a single snap shot to the spine and then splitting it up
// (2) scaling the view down (using a transform)

export default async ({ view, uri, width, height, viewWidth, viewHeight, force }) => {

  const uriFileInfo = force || await FileSystem.getInfoAsync(uri)

  if(!force && uriFileInfo.exists) {
    console.log('Snapshot already exists--skipping', uri)
    return true
  }
  
  // Following commented line no longer needed on iOS. Check android before deleting completely.
  // await new Promise(resolve => setTimeout(resolve, 20))  // without this, I often get a blank image

  let quality = 0.8

  if(Platform.OS === 'android') {
    width = viewWidth
    height = viewHeight
    quality = 0.1
  }

  const getSnapshot = async () => (
    await takeSnapshotAsync(view, {
      format: "jpg",
      quality,
      result: "base64",
      width,
      height,
    })
  )
  
  let snapshotBase64 = await getSnapshot()

  const dir = uri.replace(/[^/]+$/, '')
  
  try {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true })
  } catch(e) {}
  
  await FileSystem.writeAsStringAsync(uri, snapshotBase64, {
    encoding: FileSystem.EncodingTypes.Base64,
  })

  return true

}