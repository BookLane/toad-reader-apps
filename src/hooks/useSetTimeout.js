import React, { useEffect } from 'react'

const useSetTimeout = () => {

  const timeout = useRef()
  useEffect(() => clear, [])

  const set = (...props) => {
    clear()
    timeouts.current = setTimeout(...props)
  }

  const clear = () => {
    clearTimeout(timeout.current)
  }

  return [ set, clear ]
}

export default useSetTimeout