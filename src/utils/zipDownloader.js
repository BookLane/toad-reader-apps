import { FileSystem } from "expo"
import { AsyncStorage, Platform } from "react-native"
import JSZipUtils from "jszip-utils"
import JSZip from "jszip"

const maxDownloadSegment = 7000  // ms
const cancelDownloadFunctions = {}

export const cancelFetch = async ({ localBaseUri }) => {
  const cancelFunc = cancelDownloadFunctions[localBaseUri]
  if(cancelFunc) {
    delete cancelDownloadFunctions[localBaseUri]
    await cancelFunc()
  }
}

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri, cookie, checkWasCancelled, forceFreshDownload }) => {

  let isCanceled = false
  const assetDownloadsKey = `assetDownloads:${localBaseUri}`

  // cancel previous attempt to download to this location and set up the new cancel function
  await cancelFetch({ localBaseUri })
  cancelDownloadFunctions[localBaseUri] = async () => {
    isCanceled = true
    AsyncStorage.removeItem(assetDownloadsKey)
    await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
  }

  // assetDownloads will be set if it has already retrieved the zip and written the text files, but not finished the assets
  let assetDownloads = forceFreshDownload ? null : JSON.parse(await AsyncStorage.getItem(assetDownloadsKey) || "null")

  if(isCanceled) return  // after each await, check if we are still going
  
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

    if(isCanceled) return

    // clear out directory, if exists
    await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })

    if(isCanceled) return

    // unzip
    const zip = await JSZip.loadAsync(zipData)

    if(isCanceled) return

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

    if(isCanceled) return
    
    // write unzipped files 
    const writePromises = []
    assetDownloads = []
    zip.forEach((relativePath, file) => {
      if(file.dir) return

      writePromises.push(
        new Promise(resolve => {

          if(relativePath.match(/\.(jpeg|jpg|png|gif|mp4|mp3|webm|otf|ttf|fnt|eot|woff|woff2)$/i)) {

            // TODO: For now, I need to re-download all non-text resources. Hopefully, this will not be
            // necessary in the future.
            // https://forums.expo.io/t/using-expo-filesystem-to-save-images-to-disk-from-zip-file/2572/3

            const fileTypeMap = {
              jpeg: 'image/jpeg',
              jpg: 'image/jpeg',
              png: 'image/png',
              gif: 'image/gif',
              mp4: 'video/mp4',
              mp3: 'audio/mpeg',
              webm: 'video/webm',
              otf: 'font/opentype',
              ttf: 'application/x-font-truetype',
              fnt: 'image/jpeg',
              eot: 'application/vnd.ms-fontobject',
              woff: 'application/font-woff',
              woff2: 'application/font-woff2',
            }

            const catchFunc = () => {
              console.log(`Data URL save did not work for ${localBaseUri}${relativePath}. Trying to re-download...`)
              assetDownloads.push({
                url: `${zipUrl.replace(/\/[^\/]*$/, '\/')}${relativePath}`,
                fileUri: `${localBaseUri}${relativePath}`,
                options: {
                  headers: {
                    Cookie: cookie,
                  },
                },
              })
              resolve()
            }

            file.async('base64')
              .then(base64 => {
                const mimeType = fileTypeMap[relativePath.split('.').pop()]
                const b64uri = `data:${mimeType};base64,${base64}`
                console.log(`Trying data URL save for ${relativePath} with mime-type of ${mimeType}`)
                FileSystem.downloadAsync(b64uri, `${localBaseUri}${relativePath}`)
                  .then(resolve)
                  .catch(catchFunc)
              })
              .catch(catchFunc)

          } else {
            // it is a text file
            file.async('string').then(content => {
              FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}`, content).then(resolve)
            })
          }

        })
      )
    })

    await Promise.all(writePromises)

    if(isCanceled) return

    console.log(`Done downloading zip from ${zipUrl}`)
    
  }

  if(assetDownloads.length > 0) {

    console.log(`Downloading zip assets for ${zipUrl}...`)

    let upToDateAssetDownloads = [ ...assetDownloads ]
    const saveAssetList = async assetDownload => {
      upToDateAssetDownloads = upToDateAssetDownloads.filter(upToDateAssetDownload => upToDateAssetDownload !== assetDownload)
      await AsyncStorage.setItem(assetDownloadsKey, JSON.stringify(upToDateAssetDownloads))
    }
    
    await saveAssetList()

    if(isCanceled) return
    
    const downloadZip = async assetDownload => {
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

      if(isCanceled) return
      
      // remove it from the list of assets to get
      await saveAssetList(assetDownload)

      // done with this asset download
    }

    if(Platform.OS === 'android') {
      // download them one at a time
      for(index in assetDownloads) {
        await downloadZip(assetDownloads[index])
        if(isCanceled) return
      }

    } else {
      // download them all at once
      await Promise.all(assetDownloads.map(async assetDownload => {
        if(isCanceled) return  // skip all remaining if canceled
        await downloadZip(assetDownload)
      }))
      if(isCanceled) return
    }

    await AsyncStorage.removeItem(assetDownloadsKey)

  }

  console.log(`Done downloading ${zipUrl} and assets.`)
  return true
}