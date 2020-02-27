import { isIPhoneX, statusBarHeight, statusBarHeightSafe, bottomSpace, getToolbarHeight } from "../utils/toolbox"

import useDimensions from './useDimensions'
import useWideMode from "./useWideMode"

const useAdjustedDimensions = ({
  fullPageWidth,
  fullPageHeight,
  sidePanelSettings,
  widget=false,
}) => {

  const wideMode = useWideMode()
  const { width, height } = useDimensions().window

  if(!fullPageWidth) {
    fullPageWidth = width
    fullPageHeight = height + (isIPhoneX ? (statusBarHeightSafe - statusBarHeight) : 0)

    if(wideMode) {
      fullPageHeight -= statusBarHeight
      fullPageHeight -= getToolbarHeight()
      if(sidePanelSettings.open && !widget) {
        fullPageWidth -= sidePanelSettings.width
      }
    }
  }

  let truePageWidth = fullPageWidth
  let truePageHeight = fullPageHeight - bottomSpace
  let truePageMarginTop = 0

  if(isIPhoneX && !wideMode) {
    truePageHeight -= statusBarHeight
    truePageMarginTop = statusBarHeight
  }

  return {
    width,
    height,
    fullPageWidth,
    fullPageHeight,
    truePageWidth,
    truePageHeight,
    truePageMarginTop,
  }

}

export default useAdjustedDimensions