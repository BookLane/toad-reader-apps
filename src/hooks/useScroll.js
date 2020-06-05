import { useRef, useCallback } from "react"

const useScroll = ({ scrolledToEndGraceY=0 }={}) => {

  const x = useRef(0)
  const y = useRef(0)
  const scrolledToStart = useRef(true)
  const scrolledToEnd = useRef(true)

  const onScroll = useCallback(
    ({ nativeEvent: { contentOffset, contentSize, layoutMeasurement, contentInset } }) => {
      x.current = contentOffset.x
      y.current = contentOffset.y
      scrolledToStart.current = y.current === 0
      scrolledToEnd.current = layoutMeasurement.height + contentOffset.y + scrolledToEndGraceY >= contentSize.height
    },
    [],
  )

  return {
    onScroll,
    x,
    y,
    scrolledToStart,
    scrolledToEnd,
  }
}

export default useScroll