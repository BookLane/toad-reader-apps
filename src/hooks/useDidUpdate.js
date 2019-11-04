import { useRef, useEffect } from 'react'

const useDidUpdate = (fn, dep) => {

  const mounted = useRef()

  useEffect(
    () => {
      if(!mounted.current) {
        mounted.current = true
        
      } else {
        return fn()
      }
    },
    dep,
  )

}

export default useDidUpdate