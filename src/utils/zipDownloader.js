import { FileSystem } from "expo"
import JSZip from "jszip"
import { fetchWithProgress } from './toolbox.js'

const cancelDownloadByLocalBaseUri = {}
const abortFunctionsByLocalBaseUri = {}

const runAbort = ({ localBaseUri }) => {
  abortFunctionsByLocalBaseUri[localBaseUri] && abortFunctionsByLocalBaseUri[localBaseUri]()
  delete abortFunctionsByLocalBaseUri[localBaseUri]
}

export const cancelFetch = async ({ localBaseUri }) => {
  cancelDownloadByLocalBaseUri[localBaseUri] = true
  runAbort({ localBaseUri })
}

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri }) => {

  // set up the cancel function
  const isCanceled = async force => {
    if(force || cancelDownloadByLocalBaseUri[localBaseUri]) {
      console.log(`Download canceled for ${zipUrl}`)
      delete cancelDownloadByLocalBaseUri[localBaseUri]
      runAbort({ localBaseUri })
      await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
      return true
    }
  }
  await isCanceled(true)  // cancel previous attempt, if relevant

  try {

    console.log(`Downloading zip from ${zipUrl}...`)

    // get the zip file
    const zipData = await fetchWithProgress(zipUrl, {
      progressCallback: perc => console.log(perc),
      abortFunctionCallback: abort => abortFunctionsByLocalBaseUri[localBaseUri] = abort,
    })

    if(await isCanceled()) return   // after each await, check if we are still going

    // unzip
    const zip = await JSZip.loadAsync(zipData)

    if(await isCanceled()) return

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

    if(await isCanceled()) return
    
    console.log(`Writing files from ${zipUrl}...`)
    
    // write unzipped files 
    const writePromises = []
    zip.forEach((relativePath, file) => {
      if(file.dir) return

      relativePath = relativePath.replace(/ /g, '%20')

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

            file.async('base64')
              .then(base64 => {
                const mimeType = fileTypeMap[relativePath.split('.').pop()]
                const b64uri = `data:${mimeType};base64,${base64}`
                // console.log(`Trying data URL save for ${relativePath} with mime-type of ${mimeType}`)
                FileSystem.downloadAsync(b64uri, `${localBaseUri}${relativePath}`)
                  .then(resolve)
                  .catch(() => {
                    // console.log(`Data URL save did not work for ${localBaseUri}${relativePath}. Saving data URL as text file.`)
                    FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}-dataURL.txt`, b64uri).then(resolve)
                  })
              })

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

    if(await isCanceled()) return
    
    console.log(`Done downloading zip from ${zipUrl}`)
    
    return true // indicates success

  } catch(err) {
    console.log(`ERROR downloading zip from ${zipUrl}`)
    await isCanceled(true)
  }
}
