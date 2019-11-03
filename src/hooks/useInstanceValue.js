import { useRef, useCallback } from 'react'

const useInstanceValue = value => {

  const latestValue = useRef()
  latestValue.current = value

  const getValue = useCallback(() => latestValue.current, [])

  return getValue
}

export default useInstanceValue
