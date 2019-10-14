import { useState, useEffect } from "react"

const useDimensions = () => {

console.log('document.body ', document.body, document.body.getBoundingClientRect())
  const [ dimensions, setDimensions ] = useState(() => document.body.getBoundingClientRect())

  useEffect(
    () => {

      const onResize = () => setDimensions(document.body.getBoundingClientRect())

      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    },
    [],
  )

  return { window: dimensions }
}

export default useDimensions