import * as FileSystem from 'expo-file-system/legacy'
import { sentry, getBooksDir } from './toolbox'
import { i18n } from "inline-i18n"
import { parseString } from "xml2js"

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

const getTextFile = async ({ relativeUri, downloadBaseUrl, localBaseUri, tempAddOn=``, options }) => {
  try {
    return await FileSystem.readAsStringAsync(`${localBaseUri}${relativeUri}${tempAddOn}`)
  } catch(err) {
    const { status } = await FileSystem.downloadAsync(
      `${downloadBaseUrl}${relativeUri}`,
      `${localBaseUri}${relativeUri}${tempAddOn}`,
      options,
    )
    if(status >= 400) throw new Error(`http status: ${status}`)
    return await FileSystem.readAsStringAsync(`${localBaseUri}${relativeUri}${tempAddOn}`)
  }
}

const getXmlAsObj = async (...params) => {
  let xml = await getTextFile(...params)

  return await new Promise(
    (resolve, reject) => parseString(xml, (err, result) => {
      if(err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  )
}

const cancelDownloadByBookId = {}
const abortFunctionsByBookId = {}

const runAbort = ({ bookId }) => {
  abortFunctionsByBookId[bookId] && abortFunctionsByBookId[bookId]()
  delete abortFunctionsByBookId[bookId]
}

export const cancelFetch = async ({ bookId }) => {
  cancelDownloadByBookId[bookId] = true
  runAbort({ bookId })
}

export const fetchEpubAndAssets = async ({ downloadOrigin, bookId, cookie, progressCallback, getDownloadPaused=()=>{}, title="" }) => {

  const downloadBaseUrl = `${downloadOrigin}/epub_content/book_${bookId}/`
  const localBaseUri = `${getBooksDir()}${bookId}/`
  const options = {
    headers: {
      [__DEV__ ? "x-cookie-override" : "cookie"]: cookie,
    },
  }

  // set up the cancel function
  let errorMessage
  let cancelComplete = false
  const isCanceled = async (force, clear) => {
    if(force || cancelDownloadByBookId[localBaseUri] || cancelComplete || getDownloadPaused()) {
      if(!cancelComplete) {
        console.log(`Download canceled for ${downloadBaseUrl}`)
        delete cancelDownloadByBookId[localBaseUri]
        runAbort({ localBaseUri })
        if(clear) {
          await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
        }
        cancelComplete = true
      }
      return true
    }
  }
  await isCanceled(true)  // cancel previous attempt, if relevant
  cancelComplete = false

  try {

    console.log(`Downloading epub from ${downloadBaseUrl}...`)

    try {

      let filesDownloaded = 0
      let downloadIdx = 0

      progressCallback && progressCallback(0.01)

      // find which files need downloading
      await FileSystem.makeDirectoryAsync(`${localBaseUri}META-INF`, { intermediates: true })
      const containerObj = await getXmlAsObj({ relativeUri: `META-INF/container.xml`, downloadBaseUrl, localBaseUri, options })
      // if we end up supporting multiple renditions, the next line will need expanding (http://www.idpf.org/epub/renditions/multiple/)
      const opfRelativeUri = containerObj.container.rootfiles[0].rootfile[0].$['full-path'].replace(/#.*$/, '')
      if(/\//.test(opfRelativeUri)) {
        await FileSystem.makeDirectoryAsync(`${localBaseUri}${opfRelativeUri.replace(/\/[^/]*$/, ``)}`, { intermediates: true })
      }
      const opfObj = await getXmlAsObj({ relativeUri: opfRelativeUri, downloadBaseUrl, localBaseUri, options })
      const opsDir = opfRelativeUri.replace(/[^/]+$/, ``)
      const filesToDownload = (opfObj.package.manifest[0].item || []).map(item => `${opsDir}${item.$.href.replace(/#.*$/, '')}`)

      if(await isCanceled()) return { success: false, errorMessage }

      // get two files that may or may not be there, ignoring errors
      getTextFile({ relativeUri: `META-INF/com.apple.ibooks.display-options.xml`, downloadBaseUrl, localBaseUri, options }).catch(() => {})
      getTextFile({ relativeUri: `mimetype`, downloadBaseUrl, localBaseUri, options }).catch(() => {})

      // create all necessary dirs
      const dirs = []
      filesToDownload.forEach(relativeUri => dirs.push(`${localBaseUri}${relativeUri}`.replace(/\/[^/]*$/, ``)))
      dirs.sort((a,b) => a.length < b.length ? 1 : -1)
      const distinctDirs = []
      dirs.forEach(dir => {
        if(!distinctDirs.some(distinctDir => distinctDir.indexOf(dir)==0)) {
          distinctDirs.push(dir)
        }
      })
      await Promise.all(distinctDirs.map(dir => FileSystem.makeDirectoryAsync(dir, { intermediates: true })))

      if(await isCanceled()) return { success: false, errorMessage }

      // get all the files
      const downloadAFile = async () => {

        if(downloadIdx >= filesToDownload.length) return

        const relativeUri = filesToDownload[downloadIdx++]

        const binaryMimeType = binaryExtensionToMimeTypeMap[relativeUri.split('.').pop()]
        const { exists } = await FileSystem.getInfoAsync(`${localBaseUri}${relativeUri}`)

        if(await isCanceled()) return { success: false, errorMessage }

        if(!exists) {

          if(binaryMimeType) {

            const { status } = await FileSystem.downloadAsync(
              `${downloadBaseUrl}${relativeUri}`,
              `${localBaseUri}${relativeUri}`,
              options,
            )
            if(status >= 400) throw new Error(`http status: ${status}`)

            if(await isCanceled()) return { success: false, errorMessage }

          } else {

            const tempAddOn = `-toadreadertemp.txt`
            const tempInfo = await FileSystem.getInfoAsync(`${localBaseUri}${relativeUri}${tempAddOn}`)

            if(await isCanceled()) return { success: false, errorMessage }

            if(!tempInfo.exists) {
              let content = await getTextFile({ relativeUri, downloadBaseUrl, localBaseUri, tempAddOn, options })

              if(await isCanceled()) return { success: false, errorMessage }

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


              await FileSystem.writeAsStringAsync(`${localBaseUri}${relativeUri}`, content)
              await FileSystem.deleteAsync(`${localBaseUri}${relativeUri}${tempAddOn}`)

              if(await isCanceled()) return { success: false, errorMessage }

            }

          }

        }

        progressCallback && progressCallback(Math.max(++filesDownloaded / filesToDownload.length, 0.01))

        await downloadAFile()

      }

      const numFilesToDownloadAtOnce = 10
      await Promise.all(Array(numFilesToDownloadAtOnce).fill().map(downloadAFile))

      return { success: true, errorMessage }

    } catch(err) {

      if(err.message === `http status: 403`) {
        console.log(`Could not download epub from ${downloadBaseUrl} due to no auth.`)
        sentry(`Could not download epub from ${downloadBaseUrl} due to no auth.`)
        return {
          success: false,
          noAuth: true,
        }
      // } else if(false) {
      //   console.log(`Could not download epub from ${downloadBaseUrl} due to no internet connection.`)
      //   sentry(`Could not download epub from ${downloadBaseUrl} due to no internet connection.`)
      //   return {
      //     success: false,
      //     errorTitle: i18n("Connection error"),
      //     errorMessage: i18n("You are not connected to the internet. Please check your connection and try again."),
      //   }
      }
      
      throw new Error('Invalid response to epub fetch.')
    }

  } catch(err) {

    if(await isCanceled()) return { success: false, errorMessage }

    sentry({ error: err })
    console.log(`ERROR: Failed to download epub from ${downloadBaseUrl}`, err && err.message)
    errorMessage = errorMessage || i18n("The book entitled \"{{title}}\" failed to download.", { title })

    await isCanceled(true, true)

    return { success: false, errorMessage }
  }
}
