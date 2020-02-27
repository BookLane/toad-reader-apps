import { isIPhoneX, statusBarHeight, statusBarHeightSafe, bottomSpace, getToolbarHeight } from "../utils/toolbox"

import useDimensions from './useDimensions'
import useWideMode from "./useWideMode"

const COLUMN_MAX_WIDTH = 1000  // Needs to accord with columnMaxWidth in readium-js-viewer
const COLUMN_GAP = 60  // Needs to accord with columnGap in readium-js-viewer

const useAdjustedDimensions = ({
  fullPageWidth,
  fullPageHeight,
  realFullPageWidth,
  realFullPageMarginHorizontal=0,
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

    realFullPageWidth = Math.min(fullPageWidth, COLUMN_MAX_WIDTH + COLUMN_GAP/2)
    realFullPageMarginHorizontal = (fullPageWidth - realFullPageWidth) / 2
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
    realFullPageWidth,
    realFullPageMarginHorizontal,
    truePageWidth,
    truePageHeight,
    truePageMarginTop,
  }

}

export default useAdjustedDimensions