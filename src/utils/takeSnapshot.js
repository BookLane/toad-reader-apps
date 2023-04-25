import { captureRef } from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'
import { Platform } from "react-native"

// NOTE: I have tried to speed this up in the following ways but they were not faster.
// (1) Taking a single snap shot to the spine and then splitting it up
// (2) scaling the view down (using a transform)

let lastSnapShotBase64

export default async ({ view, uri, width, height, viewWidth, viewHeight, pageIndexInSpine, force, stopProcessing }) => {

  if(Platform.OS === 'web') return false

  const uriFileInfo = force || await FileSystem.getInfoAsync(uri)

  if(!force && uriFileInfo.exists) {
    console.log('Snapshot already exists--skipping', uri)
    return true
  }

  if(stopProcessing()) return false

  let quality = 0.8

  if(Platform.OS === 'android') {
    width = viewWidth
    height = viewHeight
    quality = 0.1
  }

  const getSnapshot = async () => (
    await captureRef(view, {
      format: "jpg",
      quality,
      result: "base64",
      width,
      height,
    })
  )
  
  let snapshotBase64 = await getSnapshot()

  if(stopProcessing() || !snapshotBase64) return false

  for(
    let idx=0;
    (
      idx<3
      && (
        // looks like a repeat of the last page
        snapshotBase64 === lastSnapShotBase64
        || (
          // looks like just the spinner
          pageIndexInSpine === 0
          && snapshotBase64.length < 4000
        )
      )
    );
    idx++
  ) {
    await new Promise(resolve => setTimeout(resolve, 20))  // delay to allow for render of the shift

    if(stopProcessing()) return false

    snapshotBase64 = await getSnapshot()

    if(stopProcessing() || !snapshotBase64) return false
  }

  if(snapshotBase64 === lastSnapShotBase64) {
    console.log('Warning: There may be a duplicate snapshot due to slow WebView render.', uri)
  }

  lastSnapShotBase64 = snapshotBase64

  const dir = uri.replace(/[^/]+$/, '')

  try {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true })
  } catch(e) {}

  await FileSystem.writeAsStringAsync(uri, snapshotBase64, {
    encoding: FileSystem.EncodingType.Base64,
  })

  return true

}