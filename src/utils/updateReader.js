import { AsyncStorage, NetInfo } from "react-native"
import { FileSystem } from "expo"

import { isConnected } from "./toolbox.js"
import { fetchZipAndAssets } from "./zipDownloader.js"
import i18n from "./i18n.js"

// This constant is better here than in app.json since it needs to accord with the 
// current version of the reader apps, not specific tenants.
const READER_VERSION_TIMESTAMP = "1555566961"

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
  
  // Until we know the status, we consider it downloading
  setReaderStatus({ readerStatus: "downloading" })
  
  const attemptToUpdateReader = async connectionChangeInfo => {
    NetInfo.removeEventListener('connectionChange', attemptToUpdateReader)

    if(await readerNeedsUpdate({ setReaderStatus })) {

      console.log(`Download updated reader...`)
      setReaderStatus({ readerStatus: "downloading" })

      const connectionInfo = connectionChangeInfo || await isConnected()

      if(connectionInfo.type === 'none') {
        setReaderStatus({ readerStatus: "waiting for internet" })

        NetInfo.addEventListener('connectionChange', attemptToUpdateReader)

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