import { FileSystem } from "expo"

const removeEpub = async ({ bookId, success }) => {
  
  const localBaseUri = `${FileSystem.documentDirectory}books/${bookId}/`

  await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })

  success && success()

  console.log(`Done removing book ${bookId}.`)
}

export default removeEpub