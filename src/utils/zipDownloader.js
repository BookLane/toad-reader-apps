import { Platform } from "react-native"
import { FileSystem } from "expo"
import JSZip from "jszip"
import { fetchWithProgress } from './toolbox.js'
import i18n from "./i18n.js"

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
  ttc: 'application/x-font-ttf',
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

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri, cookie, progressCallback, title="" }) => {

  // set up the cancel function
  let errorMessage
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

    const progressPortions = {
      download: .7,
      unzip: .05,
      dirs: .05,
      save: .2,
    }

    // get the zip file
    let zipData
    try {
      zipData = await fetchWithProgress(zipUrl, {
        progressCallback: progressCallback ? progress => progressCallback(progress * progressPortions.download) : null,
        abortFunctionCallback: abort => abortFunctionsByLocalBaseUri[localBaseUri] = abort,
        cookie,
      })
    } catch(err) {
      if(err === 0) {
        console.log(`Could not download zip from ${zipUrl} due to no internet connection.`)
        return {
          success: false,
          errorTitle: i18n("Connection error"),
          errorMessage: i18n("You are not connected to the internet. Please check your connection and try again."),
        }

      } else if(err === 403) {
        console.log(`Could not download zip from ${zipUrl} due to no auth.`)
        return {
          success: false,
          noAuth: true,
        }
      }
      
      throw new Error('Invalid response to zip fetch.')
    }

    if(await isCanceled()) return { success: false, errorMessage }   // after each await, check if we are still going

    progressCallback && progressCallback(progressPortions.download + progressPortions.unzip)

    // unzip
    const zip = await JSZip.loadAsync(zipData)

    if(await isCanceled()) return { success: false, errorMessage }

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
    
    if(await isCanceled()) return { success: false, errorMessage }

    console.log(`Writing files from ${zipUrl}...`)

    // write unzipped files 
    let numAssets = 0
    let numAssetsDone = 0
    const writeFunctions = []
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

          const uri = `${localBaseUri}${relativePath}`
          const binaryMimeType = binaryExtensionToMimeTypeMap[relativePath.split('.').pop()]

          if(binaryMimeType) {

            file.async('base64').then(base64 => {
              FileSystem.writeAsStringAsync(uri, base64, {
                encoding: FileSystem.EncodingTypes.Base64,
              })
                .then(doResolve)
                .catch(reject)

            }, reject)

          } else {
            // it is a text file
            file.async('string').then(content => {

              // fix some problematic characters / syntax.
              content = content

                // xhtml self-closing tag syntax causes issues because the file gets loaded to the iframe via document.write, forcing the doctype to html and not xhtml
                .replace(/<([a-z]*)(\s(?:[^"'>]|"[^"]*"|'[^']*')*)\/\s*>/gi, (match, tag, tagContents) => {
                  if(
                    ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"]
                      .includes(tag.toLowerCase())
                  ) {
                    // it is a void tag that can have the slash before the end
                    return match
                  }
                  return `<${tag}${tagContents}></${tag}>`
                })

                // The following character causes the page not to load. I replace it with space to prevent messing up the cfi's.
                .replace(/\u2029/g, ' ')

                // The following character causes the contents of the head tag to be placed in the body tag (yes, I know it is crazy--but it is true).  I replace it with space to prevent messing up the cfi's.
                .replace(/\uFEFF/g, ' ')


              FileSystem.writeAsStringAsync(uri, content)
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
    
    if(await isCanceled()) return { success: false, errorMessage }

    console.log(`Done downloading zip from ${zipUrl}`)
    
    return { success: true, errorMessage }

  } catch(err) {

    if(await isCanceled()) return { success: false, errorMessage }

    console.log(`ERROR: Failed to download zip from ${zipUrl}`, err && err.message)
    errorMessage = errorMessage || i18n("The book entitled \"{{title}}\" failed to download.", { title })

    await isCanceled(true)

    return { success: false, errorMessage }
  }
}
