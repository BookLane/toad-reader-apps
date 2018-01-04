import { FileSystem, takeSnapshotAsync } from "expo"

export default async ({ view, bookId, fileName, width, height }) => {

  const initFileURI = await takeSnapshotAsync(view, {
    format: "jpg",
    quality: 0.8,
    result: "file",
    width,
    height,
  })

  const dir = `${FileSystem.documentDirectory}snapshots/${bookId}`
  
  try {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true })
  } catch(e) {}
  
  await FileSystem.moveAsync({
    from: initFileURI,
    to: `${dir}/${fileName}`,
  })

  return true

}