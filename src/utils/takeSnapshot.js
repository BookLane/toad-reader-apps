import { FileSystem, takeSnapshotAsync } from "expo"

export default async ({ view, uri, width, height }) => {

  await new Promise(resolve => setTimeout(resolve, 20))  // without this, I often get a blank image

  const getSnapshot = async () => (
    await takeSnapshotAsync(view, {
      format: "jpg",
      quality: 0.8,
      result: "file",
      width,
      height,
    })
  )
  
  let initFileURI = await getSnapshot()

  const fileInfo = await FileSystem.getInfoAsync(initFileURI)
  if(fileInfo.size < 2500) {
    // May have captured a blank page. Try again.
    console.log('Taking snapshot again as first snapshot appears blank.', fileInfo.size, uri)
    initFileURI = await getSnapshot()
    const newFileInfo = await FileSystem.getInfoAsync(initFileURI)
    console.log('New snapshot size: ', newFileInfo.size)
  }

  const dir = uri.replace(/[^/]+$/, '')
  
  try {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true })
  } catch(e) {}
  
  await FileSystem.moveAsync({
    from: initFileURI,
    to: uri,
  })

  return true

}