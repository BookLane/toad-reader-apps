import { useRef, useCallback } from "react"

const useScroll = () => {

  const x = useRef(0)
  const y = useRef(0)

  const onScroll = useCallback(
    ({ nativeEvent: { contentOffset } }) => {
      x.current = contentOffset.x
      y.current = contentOffset.y
    },
    [],
  )

  return {
    onScroll,
    x: x.current,
    y: y.current,
  }
}

export default useScroll