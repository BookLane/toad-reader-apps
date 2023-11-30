import { useState, useCallback } from 'react'
import useThrottleFn from "react-use/lib/useThrottleFn"

const useThrottleCallback = (callback, milliseconds=200) => {

  const [ params, setParams ] = useState()

  useThrottleFn(
    params => {
      if(params) {
        callback(...params)
      }
    },
    milliseconds,
    [ params ],
  )

  const captureParams = useCallback((...params) => setParams(params), [])

  return captureParams
}

export default useThrottleCallback