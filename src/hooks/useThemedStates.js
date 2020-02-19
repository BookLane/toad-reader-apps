import { useCallback } from "react"
import { Platform } from "react-native"
import { Interaction } from '@ui-kitten/components'

const useThemedStates = dispatch => {

  const onMouseEnter = useCallback(() => dispatch([ Interaction.HOVER ]), [])
  const onMouseLeave = useCallback(() => dispatch([]), [])

  const onFocus = useCallback(() => dispatch([ Interaction.FOCUSED ]), [])
  const onBlur = useCallback(() => dispatch([]), [])

  const onPressIn = useCallback(() => dispatch([ Interaction.ACTIVE ]), [])
  const onPressOut = useCallback(() => dispatch([]), [])
    
  if(Platform.OS !== 'web') {
    return {
      onPressIn,
      onPressOut,
    }
  }

  return {
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onPressIn,
    onPressOut,
  }

}

export default useThemedStates
