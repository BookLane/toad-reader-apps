import { useState, useRef, useCallback } from "react"

const useRefState = initialValue => {

  const [ value, setStateValue ] = useState(initialValue)
  const valueRef = useRef(value)

  const setValue = useCallback(
    newValue => {
      valueRef.current = newValue
      setStateValue(newValue)
    },
    [],
  )

  const getValue = useCallback(() => valueRef.current, [])

  return [
    value,
    setValue,
    getValue,
  ]
}

export default useRefState
