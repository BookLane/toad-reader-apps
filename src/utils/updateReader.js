import * as FileSystem from 'expo-file-system'
import getReaderCode from '../../getReaderCode.js'

export const updateReader = async ({ setReaderStatus }) => {

  const readerDestinationPath = `${FileSystem.documentDirectory}reader/index.html`

  const { size } = await FileSystem.getInfoAsync(readerDestinationPath)
  const readerCodeSizeInBytes = encodeURI(getReaderCode()).split(/%..|./).length - 1

  if(size !== readerCodeSizeInBytes) {
    setReaderStatus({ readerStatus: "updating" })
    console.log('Updating reader...')

    await FileSystem.makeDirectoryAsync(readerDestinationPath.replace(/\/[^\/]*$/, ''), { intermediates: true })
    await FileSystem.writeAsStringAsync(readerDestinationPath, getReaderCode())

    console.log('...reader updated.')
  }

  console.log('await FileSystem.getInfoAsync(readerDestinationPath, { md5: true })', await FileSystem.getInfoAsync(readerDestinationPath, { md5: true }))

  setReaderStatus({ readerStatus: "ready" })

}