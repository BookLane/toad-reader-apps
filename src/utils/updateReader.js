import { AsyncStorage } from "react-native"
import { FileSystem } from "expo"

import { fetchZipAndAssets } from "./zipDownloader.js"

// the READER_VERSION_TIMESTAMP needs to be updated any time any reader files are updated
const {
  READER_VERSION_TIMESTAMP,
} = Expo.Constants.manifest.extra

export const readerNeedsUpdate = async ({ setReaderStatus }) => {
  
  console.log(`Check reader...`)

  const versionTimestampOfCurrentReader = await AsyncStorage.getItem('readerVersionTimestamp')

  if(versionTimestampOfCurrentReader == READER_VERSION_TIMESTAMP) {
    setReaderStatus({ readerStatus: "ready" })
    console.log(`Reader up-to-date.`)
    return false
  } else {
    setReaderStatus({ readerStatus: "missing" })
    console.log(`Reader requires update.`)
    return true
  }
}

export const updateReader = async ({ setReaderStatus }) => {
  
  if(await readerNeedsUpdate({ setReaderStatus })) {
    console.log(`Download updated reader...`)
    setReaderStatus({ readerStatus: "downloading" })
    
    const zipUrl = `https://s3-us-west-2.amazonaws.com/biblemesh-readium/cloud-reader-lite/${READER_VERSION_TIMESTAMP}/reader.zip`
    const localBaseUri = `${FileSystem.documentDirectory}reader/`
  
    const success = await fetchZipAndAssets({
      zipUrl,
      localBaseUri,
    })
  
    if(!success) {
      // TODO: show error message
      return
    }

    await AsyncStorage.setItem('readerVersionTimestamp', READER_VERSION_TIMESTAMP)
  
    setReaderStatus({ readerStatus: "ready" })
    console.log(`Done downloading reader.`)
  }
        
}