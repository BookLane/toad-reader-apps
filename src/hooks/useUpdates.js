import { useCallback } from 'react'
import * as Updates from 'expo-updates'

import useRefState from './useRefState'

const useUpdates = () => {

  // TODO: Once I upgrade to expo 50, get rid of this hook and use expo's Updates.useUpdates hook

  const [ info, setInfo, getInfo ] = useRefState({
    isUpdateAvailable: false,
    isUpdatePending: false,
    isChecking: true,
    isDownloading: false,
  })

  const setUpdates = useCallback(
    newInfo => {
      setInfo({
        ...getInfo(),
        ...newInfo,
      })
    },
    [],
  )

  const eventListener = event => {
    setInfo({
      isUpdateAvailable: event.type === Updates.UpdateEventType.UPDATE_AVAILABLE,
      isUpdatePending: event.type === Updates.UpdateEventType.UPDATE_AVAILABLE,
      isChecking: false,
      isDownloading: false,
    })
  }

  Updates.useUpdateEvents(eventListener)

  return {
    ...info,
    setUpdates,
  }

}

export default useUpdates