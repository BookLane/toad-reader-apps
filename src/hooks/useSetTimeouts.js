import { useEffect, useRef } from 'react'

const useSetTimeouts = () => {

  const timeouts = useRef([])
  useEffect(() => clearAll, [])

  const set = (...props) => {
    const timeout = setTimeout(...props)
    timeouts.current.push(timeout)
    return () => clearTimeout(timeout)
  }

  const clearAll = () => {
    timeouts.current.forEach(timeout => clearTimeout(timeout))
    timeouts.current = []
  }

  return [ set, clearAll ]
}

export default useSetTimeouts