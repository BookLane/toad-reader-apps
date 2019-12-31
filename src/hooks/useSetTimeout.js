import { useEffect, useRef } from 'react'

const useSetTimeout = () => {

  const timeout = useRef()
  useEffect(() => clear, [])

  const set = (...props) => {
    clear()
    timeout.current = setTimeout(...props)
  }

  const clear = () => {
    clearTimeout(timeout.current)
  }

  return [ set, clear ]
}

export default useSetTimeout