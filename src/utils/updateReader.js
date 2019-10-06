import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'

export const updateReader = async ({ setReaderStatus }) => {

  const readerRequire = require('../../assets/reader.html')
  const readerDestinationPath = `${FileSystem.documentDirectory}reader/index.html`

  await Asset.loadAsync([ readerRequire ])
  const { localUri, hash } = Asset.fromModule(readerRequire)

  const { md5 } = await FileSystem.getInfoAsync(readerDestinationPath, { md5: true })

  if(hash !== md5) {
    setReaderStatus({ readerStatus: "updating" })
    console.log('Updating reader...')

    const contents = await FileSystem.readAsStringAsync(localUri)

    await FileSystem.makeDirectoryAsync(readerDestinationPath.replace(/\/[^\/]*$/, ''), { intermediates: true })
    await FileSystem.writeAsStringAsync(readerDestinationPath, contents)

    console.log('...reader updated.')
  }

  console.log('await FileSystem.getInfoAsync(readerDestinationPath, { md5: true })', await FileSystem.getInfoAsync(readerDestinationPath, { md5: true }))

  setReaderStatus({ readerStatus: "ready" })

}