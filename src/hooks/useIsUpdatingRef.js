import { useRef } from 'react'

import useSetTimeout from './useSetTimeout'

const useIsUpdatingRef = () => {

  const isUpdating = useRef(false)
  const [ setTimeout ] = useSetTimeout()

  const startUpdate = () => {
    isUpdating.current = true
    setTimeout(() => {
      isUpdating.current = false
    })
  }

  return [
    isUpdating,
    startUpdate,
  ]
}

export default useIsUpdatingRef