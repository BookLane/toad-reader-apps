import useDimensions from "./useDimensions"

const useWideMode = withEitherOrientation => {
  const { width, height } = useDimensions().window

  const MIN_WIDTH = 900
  const MIN_HEIGHT = 550

  if(withEitherOrientation) {
    return (
      (width > MIN_WIDTH && height > MIN_HEIGHT)
      || (width > MIN_HEIGHT && height > MIN_WIDTH)
    )
  }

  return width > MIN_WIDTH && height > MIN_HEIGHT
}

export default useWideMode