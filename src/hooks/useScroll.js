import { useRef, useCallback } from "react"

const useScroll = ({ scrolledToEndGraceY=0, handleScrolledToTop }={}) => {

  const x = useRef(0)
  const y = useRef(0)
  const contentSizeHeight = useRef(0)
  const scrolledToStart = useRef(true)
  const scrolledToEnd = useRef(true)

  const onScroll = useCallback(
    ({ nativeEvent: { contentOffset, contentSize, layoutMeasurement } }) => {
      x.current = contentOffset.x
      y.current = contentOffset.y
      contentSizeHeight.current = contentSize.height
      scrolledToStart.current = y.current === 0
      scrolledToEnd.current = layoutMeasurement.height + contentOffset.y + scrolledToEndGraceY >= contentSize.height

      if(handleScrolledToTop && scrolledToStart.current) {
        handleScrolledToTop()
      }
    },
    [],
  )

  const onContentSizeChange = useCallback(
    (contentWidth, contentHeight) => {
      contentSizeHeight.current = contentHeight
    },
    [],
  )

  return {
    onScroll,
    onContentSizeChange,
    x,
    y,
    contentSizeHeight,
    scrolledToStart,
    scrolledToEnd,
  }
}

export default useScroll