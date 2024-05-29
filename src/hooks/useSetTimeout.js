import { useRef } from 'react'

import useUnmount from "react-use/lib/useUnmount"
import useInstanceValue from './useInstanceValue'

const useSetTimeout = ({ fireOnUnmount }={}) => {

  const timeout = useRef()
  const mounted = useRef(true)
  const timeoutFunc = useRef(() => {})
  const getFireOnUnmount = useInstanceValue(fireOnUnmount)

  useUnmount(() => {
    clear()
    mounted.current = false

    if(getFireOnUnmount()) {
      timeoutFunc.current()
    }
  })

  const set = (func, ...otherProps) => {
    if(!mounted.current) return
    clear()
    timeoutFunc.current = func
    timeout.current = setTimeout(func, ...otherProps)
  }

  const clear = () => {
    clearTimeout(timeout.current)
    timeout.current = undefined
    timeoutFunc.current = () => {}
  }

  return [ set, clear ]
}

export default useSetTimeout