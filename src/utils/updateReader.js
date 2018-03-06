import { FileSystem } from "expo"

import downloadAsync from "./downloadAsync.js"

import { fetchZipAndAssets } from "./zipDownloader.js"

const {
  READER_TIMESTAMP,
} = Expo.Constants.manifest.extra

// configuration constants
// the READER_TIMESTAMP needs to be updated any time any reader files are updated
const zipUrl = `https://s3-us-west-2.amazonaws.com/biblemesh-readium/cloud-reader-lite/${READER_TIMESTAMP}/reader.zip`

const updateReader = async () => {
  
  console.log(`Check reader...`)
  
  const readerDir = `${FileSystem.documentDirectory}reader`
  const currentTimestampUri = `${readerDir}/currentReaderTimestamp.txt`

  const readerDirInfo = await FileSystem.getInfoAsync(readerDir)

  if(readerDirInfo.exists) {
    const currentTimestampInfo = await FileSystem.getInfoAsync(currentTimestampUri)
    const timestampOfCurrentReader = currentTimestampInfo.exists ? await FileSystem.readAsStringAsync(currentTimestampUri) : null
    if(timestampOfCurrentReader == READER_TIMESTAMP) {
      console.log(`Reader up-to-date.`)
      return
    }
  }

  console.log(`Download updated reader...`)

  await fetchZipAndAssets({
    zipUrl,
    localBaseUri: `${readerDir}/`,
  })

  await FileSystem.writeAsStringAsync(currentTimestampUri, READER_TIMESTAMP)

  console.log(`Done downloading reader.`)
        
}    
        
export default updateReader