import { FileSystem } from "expo"
import JSZip from "jszip"
import { fetchWithProgress } from './toolbox.js'

export const binaryExtensionToMimeTypeMap = {
  aac: 'audio/aac',
  aif: 'audio/aiff',
  aifc: 'audio/aiff',
  aiff: 'audio/aiff',
  au: 'audio/basic',
  avi: 'video/avi',
  bmp: 'image/bmp',
  eot: 'application/vnd.ms-fontobject',
  fnt: 'image/jpeg',
  gif: 'image/gif',
  jfif: 'image/jpeg',
  jpe: 'image/jpeg',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  mid: 'audio/x-midi',
  midi: 'audio/x-midi',
  mov: 'video/quicktime',
  mp3: 'audio/mpeg',
  mpe: 'video/mpeg',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  mp4: 'video/mp4',
  mqv: 'video/quicktime',
  m4a: 'audio/m4a',
  ogg: 'application/ogg',
  otf: 'font/opentype',
  pjpeg: 'image/jpeg',
  pls: 'audio/x-mpegurl',
  png: 'image/png',
  smil: 'application/smil',
  snd: 'audio/basic',
  ttf: 'application/x-font-truetype',
  wav: 'audio/wav',
  webm: 'video/webm',
  woff: 'application/font-woff',
  woff2: 'application/font-woff2',
}

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

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri, progressCallback }) => {

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
      progressCallback,
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
    const writeFunctions = []
    zip.forEach((relativePath, file) => {
      if(file.dir) return

      relativePath = relativePath.replace(/ /g, '%20')

      writeFunctions.push(
        (resolve, reject) => {

          const binaryMimeType = binaryExtensionToMimeTypeMap[relativePath.split('.').pop()]

          if(binaryMimeType) {

            // TODO: For now, I need to do backflips to get this to work. Hopefully not in the future...
            // https://forums.expo.io/t/using-expo-filesystem-to-save-images-to-disk-from-zip-file/2572/3

            file.async('base64')
              .then(base64 => {
                const b64uri = `data:${binaryMimeType};base64,${base64}`
                // console.log(`Trying data URL save for ${relativePath} with mime-type of ${binaryMimeType}`)
                FileSystem.downloadAsync(b64uri, `${localBaseUri}${relativePath}`)
                  .then(resolve)
                  .catch(() => {
                    // console.log(`Data URL save did not work for ${localBaseUri}${relativePath}. Saving data URL as text file (length=${b64uri.length}.`)
                    FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}-dataURL.txt`, b64uri)
                      .then(resolve)
                      .catch(reject)
                  })
              }, reject)

          } else {
            // it is a text file
            file.async('string')
              .then(content => {
                FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}`, content)
                  .then(resolve)
                  .catch(reject)
              }, reject)
          }

        }
      )
    })

    const writeSegmentSize = 10
    for(let i=0; i<writeFunctions.length; i+=writeSegmentSize) {
      await Promise.all(
        writeFunctions
          .slice(i, i+writeSegmentSize)
          .map(writeFunction => new Promise(writeFunction))
      )
    }
    
    if(await isCanceled()) return
    
    console.log(`Done downloading zip from ${zipUrl}`)
    
    return true // indicates success

  } catch(err) {
    console.log(`ERROR downloading zip from ${zipUrl}`, err && err.message)
    await isCanceled(true)
  }
}
