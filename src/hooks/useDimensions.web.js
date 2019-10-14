import { useState, useEffect } from "react"

const useDimensions = () => {

console.log('document.body ', document.body, document.body.getBoundingClientRect())
  const [ window, setWindow ] = useState(() => document.body.getBoundingClientRect())

  useEffect(
    () => {

      const onResize = () => setWindow(document.body.getBoundingClientRect())

      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    },
    [],
  )

  return { window }
}

export default useDimensions