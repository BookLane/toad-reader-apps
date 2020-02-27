import useDimensions from "./useDimensions"

export const getWideMode = ({ width, height, withEitherOrientation }) => {
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

const useWideMode = withEitherOrientation => {
  const { width, height } = useDimensions().window
  return getWideMode({ width, height, withEitherOrientation })
}

export default useWideMode