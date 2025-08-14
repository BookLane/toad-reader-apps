import { useCallback, useState } from 'react'
import * as Updates from 'expo-updates'

const useUpdates = () => {

  // Use the official expo-updates hook
  const updatesInfo = Updates.useUpdates()

  // Local state for tracking download progress (to maintain compatibility with App.js)
  const [localState, setLocalState] = useState({
    isDownloading: false,
  })

  const setUpdates = useCallback(
    newInfo => {
      setLocalState(prevState => ({
        ...prevState,
        ...newInfo,
      }))
    },
    [],
  )

  // Combine official hook data with local state
  return {
    isUpdateAvailable: updatesInfo.isUpdateAvailable || false,
    isUpdatePending: updatesInfo.isUpdatePending || false,
    isChecking: updatesInfo.isChecking || false,
    isDownloading: localState.isDownloading || false,
    setUpdates,
  }

}

export default useUpdates