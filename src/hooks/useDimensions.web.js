import useSize from "react-use/lib/useSize"

const useDimensions = () => {

  const [ sized, window ] = useSize(
    document.body,
    document.body.getBoundingClientRect(),
  )

  // const dimensions = useMemo(
  //   () => ({
  //     window: {
  //       width,
  //       height,
  //     },
  //   }),
  //   [ width, height ],
  // )

  return { window }
}

export default useDimensions