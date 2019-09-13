import { takeSnapshotAsync } from "expo"
import * as FileSystem from 'expo-file-system'
import { Platform } from "react-native"

// NOTE: I have tried to speed this up in the following ways but they were not faster.
// (1) Taking a single snap shot to the spine and then splitting it up
// (2) scaling the view down (using a transform)

const START_OF_LENGTH = 1000
let startOfLastSnapShotBase64

export default async ({ view, uri, width, height, viewWidth, viewHeight, force }) => {

  const uriFileInfo = force || await FileSystem.getInfoAsync(uri)

  if(!force && uriFileInfo.exists) {
    console.log('Snapshot already exists--skipping', uri)
    return true
  }
  
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

  if(Platform.OS === 'android') {

    startOfSnapshotBase64 = snapshotBase64.substr(0, START_OF_LENGTH)

    if(startOfSnapshotBase64 === startOfLastSnapShotBase64) {
      await new Promise(resolve => setTimeout(resolve, 20))  // delay to allow for render of the shift

      snapshotBase64 = await getSnapshot()
      startOfSnapshotBase64 = snapshotBase64.substr(0, START_OF_LENGTH)

      if(startOfSnapshotBase64 === startOfLastSnapShotBase64) {
        console.log('Warning: There may be a duplicate snapshot due to slow WebView render.', uri)
      }
    }

    startOfLastSnapShotBase64 = startOfSnapshotBase64

  }

  const dir = uri.replace(/[^/]+$/, '')
  
  try {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true })
  } catch(e) {}
  
  await FileSystem.writeAsStringAsync(uri, snapshotBase64, {
    encoding: FileSystem.EncodingTypes.Base64,
  })

  return true

}