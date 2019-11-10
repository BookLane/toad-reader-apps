import useDimensions from "./useDimensions"

const useWideMode = () => {
  const { width, height } = useDimensions().window
  return width > 600 && height > 400
}

export default useWideMode