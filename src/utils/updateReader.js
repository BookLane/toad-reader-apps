import { FileSystem } from "expo"

import downloadAsync from "./downloadAsync.js"

// configuration constants
const readerAssetsLastUpdatedDate = `2017-11-02`  // this needs to be updated any time any reader files are updated
const readerAssetsRemoteURL = `https://s3-us-west-2.amazonaws.com/biblemesh-readium-dev/cloud-reader-lite/`
const readerAssetFiles = [
  'index.html',
  'css/annotations.css',
  'css/readium-all.css',
  'fonts/glyphicons-halflings-regular.eot',
  'fonts/glyphicons-halflings-regular.svg',
  'fonts/glyphicons-halflings-regular.ttf',
  'fonts/glyphicons-halflings-regular.woff',
  'fonts/glyphicons-halflings-regular.woff2',
  'scripts/readium-js-viewer_all_LITE.js',
  'scripts/mathjax/MathJax.js',
  'scripts/zip/deflate.js',
  'scripts/zip/inflate.js',
  'scripts/zip/z-worker.js',
]

const updateReader = async () => {
  
  console.log(`Check reader...`)
  
  const readerDir = `${FileSystem.documentDirectory}reader`
  const lastUpdateDateUri = `${readerDir}/lastUpdateDate.txt`

  const readerDirInfo = await FileSystem.getInfoAsync(readerDir)

  if(readerDirInfo.exists) {
    const lastUpdateDateUriInfo = await FileSystem.getInfoAsync(lastUpdateDateUri)
    const lastUpdateDateOfCurrentReader = lastUpdateDateUriInfo.exists ? await FileSystem.readAsStringAsync(lastUpdateDateUri) : null
    if(lastUpdateDateOfCurrentReader == readerAssetsLastUpdatedDate) {
      console.log(`Reader up-to-date.`)
      return
    }
  }

  console.log(`Download updated reader...`)
  
  await FileSystem.deleteAsync(readerDir, { idempotent: true })
  
  await Promise.all(
    readerAssetFiles.map(readerAssetFile => (
      downloadAsync(
        `${readerAssetsRemoteURL}${readerAssetFile}`,
        `${readerDir}/${readerAssetFile}`
      )
    ))
  )

  await FileSystem.writeAsStringAsync(`${readerDir}/lastUpdateDate.txt`, readerAssetsLastUpdatedDate)

  console.log(`Done downloading reader.`)
        
}    
        
export default updateReader