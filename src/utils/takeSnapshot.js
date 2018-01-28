import { FileSystem, takeSnapshotAsync } from "expo"

export default async ({ view, uri, width, height }) => {

  const initFileURI = await takeSnapshotAsync(view, {
    format: "jpg",
    quality: 0.8,
    result: "file",
    width,
    height,
  })

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