import { AsyncStorage, NetInfo, Platform } from "react-native"
import * as FileSystem from 'expo-file-system'

import { fetchZipAndAssets } from "./zipDownloader.js"
// import i18n from "./i18n.js"
import { connectionInfo } from "../hooks/useNetwork"

// This constant is better here than in app.json since it needs to accord with the 
// current version of the reader apps, not specific tenants.
export const READER_VERSION_TIMESTAMP = "1570009574"

const zipUrl = `https://s3.amazonaws.com/cdn.toadreader.com/cloud-reader-lite/${READER_VERSION_TIMESTAMP}/reader.zip`
const localBaseUri = `${FileSystem.documentDirectory}reader/`

export const readerNeedsUpdate = async ({ setReaderStatus }) => {
  
  console.log(`Check reader...`)

  const versionTimestampOfCurrentReader = await AsyncStorage.getItem('readerVersionTimestamp')
  const readerIndexInfo = await FileSystem.getInfoAsync(`${localBaseUri}/index.html`)

  if(versionTimestampOfCurrentReader == READER_VERSION_TIMESTAMP && readerIndexInfo.exists) {
    setReaderStatus({ readerStatus: "ready" })
    console.log(`Reader up-to-date.`)
    return false
  } else {
    setReaderStatus({ readerStatus: "missing" })
    console.log(`Reader requires update.`)
    return true
  }
}

export const updateReader = ({ setReaderStatus }) => {

  if(Platform.OS === 'web') {
    setReaderStatus({ readerStatus: "ready" })
    return
  }

  // Until we know the status, we consider it downloading
  setReaderStatus({ readerStatus: "downloading" })
  
  const attemptToUpdateReader = async connectionChangeInfo => {
    // NetInfo.removeEventListener('connectionChange', attemptToUpdateReader)

    if(await readerNeedsUpdate({ setReaderStatus })) {

      console.log(`Download updated reader...`)
      setReaderStatus({ readerStatus: "downloading" })

      if(!connectionInfo.online) {
        setReaderStatus({ readerStatus: "waiting for internet" })

        // NetInfo.addEventListener('connectionChange', attemptToUpdateReader)

        return
      }
      
      const zipFetchInfo = await fetchZipAndAssets({
        zipUrl,
        localBaseUri,
        timeout: 30000,
      })
    
      if(!zipFetchInfo.success || zipFetchInfo.errorMessage) {
        // The reader must download successfully without error.
        console.log(`ERROR: Failed to download reader.`)
        setReaderStatus({ readerStatus: "error" })
  
        setTimeout(attemptToUpdateReader, 15000)
        return
      }
  
      await AsyncStorage.setItem('readerVersionTimestamp', READER_VERSION_TIMESTAMP)
    
      setReaderStatus({ readerStatus: "ready" })
      console.log(`Done downloading reader.`)
    }
  }

  attemptToUpdateReader()
}