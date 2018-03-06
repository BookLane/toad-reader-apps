import { FileSystem } from "expo"
import JSZipUtils from "jszip-utils"
import JSZip from "jszip"

export const fetchZipAndAssets = async ({ zipUrl, localBaseUri, cookie, checkWasCancelled }) => {

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
  zip.forEach((relativePath, file) => {
    if(file.dir) return

    if(relativePath.match(/\.(jpeg|jpg|png|git|mp4|mp3|webm|otf|ttf|fnt)$/i)) {

      // TODO: For now, I need to re-download all non-text resources. Hopefully, this will not be
      // necessary in the future.
      // https://forums.expo.io/t/using-expo-filesystem-to-save-images-to-disk-from-zip-file/2572/3

      console.log(`Downloading zip asset from ${zipUrl.replace(/\/[^\/]*$/, '\/')}${relativePath}...`)

      writePromises.push(FileSystem.createDownloadResumable(
        `${zipUrl.replace(/\/[^\/]*$/, '\/')}${relativePath}`,
        `${localBaseUri}${relativePath}`,
        {
          headers: {
            Cookie: cookie,
          },
        },
        // (a,b) => {} TODO: use this to calculate download progress
      ).downloadAsync())

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

  if(checkWasCancelled && checkWasCancelled()) {
    await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })
    return
  }

  console.log(`Done downloading ${zipUrl} and assets.`)
}