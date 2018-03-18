import { FileSystem } from "expo"
import { AsyncStorage, Platform } from "react-native"
import JSZipUtils from "jszip-utils"
import JSZip from "jszip"

const maxDownloadSegment = 7000  // ms

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri, cookie, checkWasCancelled, forceFreshDownload }) => {

  const assetDownloadsKey = `assetDownloads:${localBaseUri}`

  // assetDownloads will be set if it has already retrieved the zip and written the text files, but not finished the assets
  let assetDownloads = forceFreshDownload ? null : JSON.parse(await AsyncStorage.getItem(assetDownloadsKey) || "null")
  
  if(!assetDownloads) {

    console.log(`Downloading zip from ${zipUrl}...`)

    // get the zip file
    const zipData = await new JSZip.external.Promise((resolve, reject) => {
      JSZipUtils.getBinaryContent(zipUrl, (err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })

    // clear out directory, if exists
    await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })

    // unzip
    const zip = await JSZip.loadAsync(zipData)

    // create all necessary dirs
    const dirs = []
    zip.forEach(relativePath => dirs.push(`${localBaseUri}${relativePath}`.replace(/\/[^\/]+$/, '')))
    dirs.sort((a,b) => a.length < b.length ? 1 : -1)
    const distinctDirs = []
    dirs.forEach(dir => {
      if(!distinctDirs.some(distinctDir => distinctDir.indexOf(dir)==0)) {
        distinctDirs.push(dir)
      }
    })
    await Promise.all(distinctDirs.map(dir => FileSystem.makeDirectoryAsync(dir, { intermediates: true })))
  
    // write unzipped files 
    const writePromises = []
    assetDownloads = []
    zip.forEach((relativePath, file) => {
      if(file.dir) return

      if(relativePath.match(/\.(jpeg|jpg|png|git|mp4|mp3|webm|otf|ttf|fnt|eot|woff|woff2)$/i)) {

        // TODO: For now, I need to re-download all non-text resources. Hopefully, this will not be
        // necessary in the future.
        // https://forums.expo.io/t/using-expo-filesystem-to-save-images-to-disk-from-zip-file/2572/3


        assetDownloads.push({
          url: `${zipUrl.replace(/\/[^\/]*$/, '\/')}${relativePath}`,
          fileUri: `${localBaseUri}${relativePath}`,
          options: {
            headers: {
              Cookie: cookie,
            },
          },
        })

        return
      }

      writePromises.push(
        new Promise(resolve => {
          file.async('string').then(content => {
            FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}`, content).then(resolve)
          })
        })
      )
      
    })

    await Promise.all(writePromises)

    console.log(`Done downloading zip from ${zipUrl}`)
    
  }

  console.log(`Downloading zip assets for ${zipUrl}...`)

  let upToDateAssetDownloads = [ ...assetDownloads ]
  const saveAssetList = async assetDownload => {
    upToDateAssetDownloads = upToDateAssetDownloads.filter(upToDateAssetDownload => upToDateAssetDownload !== assetDownload)
    await AsyncStorage.setItem(assetDownloadsKey, JSON.stringify(upToDateAssetDownloads))
  }
  
  await saveAssetList()

  const downloadBook = async assetDownload => {
    const progressCallback = async info => {
      // TODO: use this to calculate download progress

    }

    // create the downloadResumable
    const downloadResumable = new FileSystem.DownloadResumable(
      assetDownload.url,
      assetDownload.fileUri,
      assetDownload.options,
      progressCallback,
    )

    // start the download
    try {
      await downloadResumable.downloadAsync()
    } catch(err) {
      console.log(`ERROR downloading zip asset from ${assetDownload.url}`, err)
    }

    // remove it from the list of assets to get
    await saveAssetList(assetDownload)

    // done with this asset download
  }

  if(Platform.OS === 'android') {
    // download them one at a time
    for(index in assetDownloads) {
      await downloadBook(assetDownloads[index])
    }

  } else {
    // download them all at once
    await Promise.all(assetDownloads.map(async assetDownload => {
      await downloadBook(assetDownload)
    }))
  }

  await AsyncStorage.removeItem(assetDownloadsKey)

  
  if(checkWasCancelled && checkWasCancelled()) {
    await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
    return
  }

  console.log(`Done downloading ${zipUrl} and assets.`)
}