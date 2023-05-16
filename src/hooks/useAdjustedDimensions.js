import { useSafeAreaInsets } from "react-native-safe-area-context"

import { getToolbarHeight, getStatusBarCurrentHeight } from "../utils/toolbox"

import useDimensions from './useDimensions'
import useWideMode from "./useWideMode"

const COLUMN_MAX_WIDTH = 1000  // Needs to accord with columnMaxWidth in readium-js-viewer
const COLUMN_GAP = 60  // Needs to accord with columnGap in readium-js-viewer
const VERTICAL_MARGIN = 30  // Matches #epub-reader-container in readium-js-viewer

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
  const safeAreaInsets = useSafeAreaInsets()

  if(!fullPageWidth) {
    fullPageWidth = width
    fullPageHeight = height + (safeAreaInsets.top > 30 ? 40 : 0)

    if(wideMode) {
      fullPageHeight -= (getStatusBarCurrentHeight() + safeAreaInsets.top)
      fullPageHeight -= getToolbarHeight()
      if(sidePanelSettings.open && !widget) {
        fullPageWidth -= sidePanelSettings.width
      }
    }

    realFullPageWidth = Math.min(fullPageWidth, COLUMN_MAX_WIDTH + COLUMN_GAP/2)
    realFullPageMarginHorizontal = (fullPageWidth - realFullPageWidth) / 2
  }

  let truePageWidth = fullPageWidth
  let truePageHeight = fullPageHeight - safeAreaInsets.bottom
  let truePageMarginTop = 0

  if(safeAreaInsets.top > 30 && !wideMode) {
    truePageHeight -= safeAreaInsets.top
    truePageMarginTop = safeAreaInsets.top
  } else if(wideMode) {
    truePageMarginTop = VERTICAL_MARGIN - (getStatusBarCurrentHeight() + safeAreaInsets.top)
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