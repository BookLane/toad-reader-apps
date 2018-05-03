import { Platform } from "react-native"
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

// see https://stackoverflow.com/questions/2725156/complete-list-of-html-tag-attributes-which-have-a-url-value
const urlTagAttrMapping = {
  a: ['href'],
  applet: ['archive','codebase'],
  area: ['href'],
  audio: ['src'],
  base: ['href'],
  blockquote: ['cite'],
  body: ['background'],
  button: ['formaction'],
  command: ['icon'],
  del: ['cite'],
  embed: ['src'],
  form: ['action'],
  frame: ['longdesc','src'],
  head: ['profile'],
  html: ['manifest'],
  iframe: ['longdesc','src'],
  image: ['href','xlink:href'],
  img: ['longdesc','src','usemap'],
  input: ['src','usemap','formaction'],
  ins: ['cite'],
  link: ['href'],
  object: ['archive','classid','codebase','data','usemap'],
  q: ['cite'],
  script: ['src'],
  source: ['src'],
  track: ['src'],
  video: ['poster','src'],
}
// not worrying about these at present, but may need to in the future
// const multiUrlAttrMapping = {
//   img: ['srcset'],
//   source: ['srcset'],
//   object: ['archive'],
//   // applet: ['archive'],  // these are comma-separated and not something we can handle
//   meta: ['content'],
// }

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

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri, cookie, progressCallback }) => {

  // set up the cancel function
  let cancelComplete = false
  const isCanceled = async force => {
    if(force || cancelDownloadByLocalBaseUri[localBaseUri] || cancelComplete) {
      if(!cancelComplete) {
        console.log(`Download canceled for ${zipUrl}`)
        delete cancelDownloadByLocalBaseUri[localBaseUri]
        runAbort({ localBaseUri })
        await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
        cancelComplete = true
      }
      return true
    }
  }
  await isCanceled(true)  // cancel previous attempt, if relevant
  cancelComplete = false

  try {

    console.log(`Downloading zip from ${zipUrl}...`)

    const progressPortions = Platform.OS === 'android'
      ? {
        download: .35,
        unzip: .1,
        dirs: .05,
        save: .2,
        injectDataURLs: .3,
      }
      : {
        download: .7,
        unzip: .05,
        dirs: .05,
        save: .2,
        injectDataURLs: 0,
      }

    // get the zip file
    const zipData = await fetchWithProgress(zipUrl, {
      progressCallback: progressCallback ? progress => progressCallback(progress * progressPortions.download) : null,
      abortFunctionCallback: abort => abortFunctionsByLocalBaseUri[localBaseUri] = abort,
    })

    if(await isCanceled()) return   // after each await, check if we are still going

    progressCallback && progressCallback(progressPortions.download + progressPortions.unzip)

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

    progressCallback && progressCallback(progressPortions.download + progressPortions.unzip + progressPortions.dirs)
    
    if(await isCanceled()) return

    console.log(`Writing files from ${zipUrl}...`)

    // write unzipped files 
    let numAssets = 0
    let numAssetsDone = 0
    const writeFunctions = []
    const hasDataURLs = false
    const textFilePaths = []
    zip.forEach((relativePath, file) => {
      if(file.dir) return
      
      numAssets++
      relativePath = relativePath.replace(/ /g, '%20')

      writeFunctions.push(
        (resolve, reject) => {

          const doResolve = () => {
            numAssetsDone++
            progressCallback && progressCallback(progressPortions.download + progressPortions.unzip + progressPortions.dirs + (progressPortions.save * (numAssetsDone / numAssets)))
            resolve()
          }

          const binaryMimeType = binaryExtensionToMimeTypeMap[relativePath.split('.').pop()]

          if(binaryMimeType) {

            // TODO: For now, I need to do backflips to get this to work. Hopefully not in the future...
            // https://forums.expo.io/t/using-expo-filesystem-to-save-images-to-disk-from-zip-file/2572/3

            file.async('arraybuffer')
              .then(arrayBuffer => {
                if(arrayBuffer.byteLength < 1000000) {
                  file.async('base64')
                  .then(base64 => {
                    const b64uri = `data:${binaryMimeType};base64,${base64}`
                    // console.log(`Trying data URL save for ${relativePath} with mime-type of ${binaryMimeType}`)
                    FileSystem.downloadAsync(b64uri, `${localBaseUri}${relativePath}`)
                      .then(doResolve)
                      .catch(() => {
                        // console.log(`Data URL save did not work for ${localBaseUri}${relativePath}. Saving data URL as text file (length=${b64uri.length}.`)
                        hasDataURLs = true
                        FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}-dataURL.txt`, b64uri)
                          .then(doResolve)
                          .catch(reject)
                      })
                  }, reject)
                
                } else {
                  console.log(`Redownload ${relativePath} because it is too big to save as data URL...`);
                  // it will crash the app from overload of memory; redownload it instead
                  (new FileSystem.DownloadResumable(
                    `${zipUrl.replace(/\/[^\/]*$/, '\/')}${relativePath}`,
                    `${localBaseUri}${relativePath}`,
                    {
                      headers: {
                        Cookie: cookie,
                      },
                    }
                  )).downloadAsync().then(doResolve)
                }
              })
          

          } else {
            // it is a text file
            const textFilePath = `${localBaseUri}${relativePath}`
            textFilePaths.push(textFilePath)
            file.async('string')
              .then(content => {
                FileSystem.writeAsStringAsync(textFilePath, content)
                  .then(doResolve)
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

    if(hasDataURLs) {
      // I need to swap in the data URLs to the text files now
      for(let j=0; j<textFilePaths.length; j++) {
        await new Promise(resolveFileWrite => {
          const handleCatch = async err => {
            console.log(`ERROR working with data url swap for ${textFilePaths[j].replace(/#.*$/, '')}`, err && err.message)
            await isCanceled(true)
            resolveFileWrite()
          }          
          FileSystem.readAsStringAsync(`${textFilePaths[j].replace(/#.*$/, '')}`)
            .then(async fileText => {
              // See https://stackoverflow.com/questions/1547899/which-characters-make-a-url-invalid
              const anyCharButDoubleQuoteGroup = `([^"]*)`
              const anyCharButSingleQuoteGroup = `((?:\\\\'|[^'])*)`
              const urlRegEx = new RegExp(
                `(${
                  Object.keys(urlTagAttrMapping).map(tag => (
                    urlTagAttrMapping[tag].map(attr => `<${tag}\\s(?:[^"'>]|".*?"|'.*?')*?${attr}\\s*=\\s*"`).join('|')
                  )).join('|')
                })${anyCharButDoubleQuoteGroup}` +
                `|(${
                  Object.keys(urlTagAttrMapping).map(tag => (
                    urlTagAttrMapping[tag].map(attr => `<${tag}\\s(?:[^"'>]|".*?"|'.*?')*?${attr}\\s*=\\s*'`).join('|')
                  )).join('|')
                })${anyCharButSingleQuoteGroup}` +
                `|(url\\(\\s*")${anyCharButDoubleQuoteGroup}` +
                `|(url\\(\\s*')${anyCharButSingleQuoteGroup}` +
                `|(url\\(\\s*)([^\\)\\s]*)` +
                `|(@import\\s+")${anyCharButDoubleQuoteGroup}` +
                `|(@import\\s+')${anyCharButSingleQuoteGroup}`,
                "gi"
              )
              const fileTextPieces = fileText.split(urlRegEx).filter(fileTextPiece => fileTextPiece !== undefined)
              await Promise.all(
                fileTextPieces.map((htmlOrUrl, index) => (
                  new Promise(resolve => {
                    const binaryMimeType = binaryExtensionToMimeTypeMap[htmlOrUrl.replace(/#.*$/, '').split('.').pop()]
                    if(index % 3 !== 2 || !binaryMimeType) {
                      // this is in between the matches
                      resolve()
                      return
                    }
                    FileSystem.readAsStringAsync(
                      `${
                        textFilePaths[j]
                          .replace(/#.*$/, '')
                          .replace(/[^\/]*$/, '')
                      }${
                        htmlOrUrl
                          .replace(/#.*$/, '')
                          .replace(/\\'/g, "'")
                          .replace(/\s/g, '%20')
                      }-dataURL.txt`
                    )
                      .then(imgDataURL => {
                        fileTextPieces[index] = imgDataURL
                        resolve()
                      })
                      .catch(resolve)
                  })
                ))
              )
              fileText = fileTextPieces.join("")
              FileSystem.writeAsStringAsync(textFilePaths[j], fileText)
                .then(resolveFileWrite)
                .catch(handleCatch)
            })
            .catch(handleCatch)
        })

        if(await isCanceled()) return

        progressCallback &&
          progressCallback(
            progressPortions.download
            + progressPortions.unzip
            + progressPortions.dirs
            + progressPortions.save
            + (progressPortions.injectDataURLs * (j / textFilePaths.length))
          )
      }
    }

    // delete the data URIs

    // download big files at the same time?

    if(await isCanceled()) return
    
    console.log(`Done downloading zip from ${zipUrl}`)
    
    return true // indicates success

  } catch(err) {
    console.log(`ERROR downloading zip from ${zipUrl}`, err && err.message)
    await isCanceled(true)
  }
}
