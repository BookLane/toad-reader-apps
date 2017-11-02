import { FileSystem } from 'expo'
import JSZipUtils from 'jszip-utils'
import JSZip from 'jszip'

const fetchEpub = async ({ domain, bookId, success }) => {
  
  const epubBaseUrl = `https://${domain}/epub_content/book_${bookId}/`
  const localBaseUri = `${FileSystem.documentDirectory}books/${bookId}/`

  console.log(`Downloading epub from ${epubBaseUrl}...`)

  // get the zip file
  const data = await new JSZip.external.Promise((resolve, reject) => {
    JSZipUtils.getBinaryContent(`${epubBaseUrl}book.epub`, (err, data) => {
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
  const zip = await JSZip.loadAsync(data)

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
  await Promise.all(distinctDirs.map(dir => Expo.FileSystem.makeDirectoryAsync(dir, { intermediates: true })))

  // write unzipped files 
  const writePromises = []
  zip.forEach(async (relativePath, file) => {
    if(file.dir) return

    if(relativePath.match(/\.(jpeg|jpg|png|git|mp4|mp3|webm|otf|ttf|fnt)$/i)) {

      // TODO: For now, I need to re-download all non-text resources. Hopefully, this will not be
      // necessary in the future.
      // https://forums.expo.io/t/using-expo-filesystem-to-save-images-to-disk-from-zip-file/2572/3

      writePromises.push(FileSystem.downloadAsync(
        `${epubBaseUrl}${relativePath}`,
        `${localBaseUri}${relativePath}`
      ))
      return
    }

    const content = await file.async('binarystring')
    writePromises.push(FileSystem.writeAsStringAsync(`${localBaseUri}${relativePath}`, content))
  })
  await Promise.all(writePromises)

  success && success()

  console.log(`Done downloading from ${epubBaseUrl}...`)
}

export default fetchEpub