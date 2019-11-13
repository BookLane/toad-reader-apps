import useDimensions from "./useDimensions"

const useWideMode = () => {
  const { width, height } = useDimensions().window
  return width > 900 && height > 550
}

export default useWideMode