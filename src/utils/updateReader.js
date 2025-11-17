import { Platform } from "react-native"
import * as FileSystem from 'expo-file-system/legacy'
import getReaderCode from '../../getReaderCode'

export const updateReader = async ({ setReaderStatus }) => {

  if(Platform.OS === 'web') return

  const readerDestinationPath = `${FileSystem.documentDirectory}reader/index.html`

  const fileInfo = await FileSystem.getInfoAsync(readerDestinationPath)
  const readerCodeSizeInBytes = encodeURI(getReaderCode()).split(/%..|./).length - 1

  if(!fileInfo.exists || fileInfo.size !== readerCodeSizeInBytes) {
    setReaderStatus({ readerStatus: "updating" })
    console.log('Updating reader...')

    await FileSystem.makeDirectoryAsync(readerDestinationPath.replace(/\/[^\/]*$/, ''), { intermediates: true })
    await FileSystem.writeAsStringAsync(readerDestinationPath, getReaderCode())

    console.log('...reader updated.')
  }

  setReaderStatus({ readerStatus: "ready" })

}