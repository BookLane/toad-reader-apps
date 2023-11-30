import { useRef } from 'react'

import useUnmount from "react-use/lib/useUnmount"
import useInstanceValue from './useInstanceValue'

const useSetInterval = ({ fireOnUnmount }={}) => {

  const interval = useRef()
  const intervalFunc = useRef(() => {})
  const getFireOnUnmount = useInstanceValue(fireOnUnmount)

  useUnmount(() => {
    clear()

    if(getFireOnUnmount()) {
      intervalFunc.current()
    }
  })

  const set = (func, ...otherProps) => {
    clear()
    intervalFunc.current = func
    interval.current = setInterval(func, ...otherProps)
  }

  const clear = () => {
    clearInterval(interval.current)
    interval.current = undefined
    intervalFunc.current = () => {}
  }

  return [ set, clear ]
}

export default useSetInterval