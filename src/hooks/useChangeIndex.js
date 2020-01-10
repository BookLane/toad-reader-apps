import { useRef } from "react"

import usePrevious from "react-use/lib/usePrevious"

const useChangeIndex = (value, isChanged) => {

  const changeIndex = useRef(value === undefined ? 0 : -1)
  const previouslyValue = usePrevious(value)

  isChanged = isChanged || ((prev, current) => (prev !== current))

  if(isChanged(previouslyValue, value)) {
    changeIndex.current++
  }
  
  return changeIndex.current

}

export default useChangeIndex
