import { FileSystem } from "expo"

import downloadAsync from "./downloadAsync.js"

import { fetchZipAndAssets } from "./zipDownloader.js"

// configuration constants
const readerTimestamp = `1520325374`  // this needs to be updated any time any reader files are updated
const zipUrl = `https://s3-us-west-2.amazonaws.com/biblemesh-readium/cloud-reader-lite/${readerTimestamp}/reader.zip`

const updateReader = async () => {
  
  console.log(`Check reader...`)
  
  const readerDir = `${FileSystem.documentDirectory}reader`
  const currentTimestampUri = `${readerDir}/currentReaderTimestamp.txt`

  const readerDirInfo = await FileSystem.getInfoAsync(readerDir)

  if(readerDirInfo.exists) {
    const currentTimestampInfo = await FileSystem.getInfoAsync(currentTimestampUri)
    const timestampOfCurrentReader = currentTimestampInfo.exists ? await FileSystem.readAsStringAsync(currentTimestampUri) : null
    if(timestampOfCurrentReader == readerTimestamp) {
      console.log(`Reader up-to-date.`)
      return
    }
  }

  console.log(`Download updated reader...`)

  await fetchZipAndAssets({
    zipUrl,
    localBaseUri: `${readerDir}/`,
  })

  await FileSystem.writeAsStringAsync(currentTimestampUri, readerTimestamp)

  console.log(`Done downloading reader.`)
        
}    
        
export default updateReader