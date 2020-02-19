import { useCallback } from "react"
import { Platform } from "react-native"
import { Interaction } from '@ui-kitten/components'

const useThemedStates = ({ dispatch, states=[] }) => {

  const onPressIn = useCallback(() => dispatch([ Interaction.ACTIVE ]), [])
  const onPressOut = useCallback(() => dispatch([]), [])

  const onFocus = useCallback(() => dispatch([ Interaction.FOCUSED ]), [])
  const onBlur = useCallback(() => dispatch([]), [])

  const onMouseEnter = useCallback(() => dispatch([ Interaction.HOVER ]), [])
  const onMouseLeave = useCallback(() => dispatch([]), [])

  let themedStates = {}

  if(states.includes('active')) {
    themedStates = {
      ...themedStates,
      onPressIn,
      onPressOut,
    }
  }

  if(Platform.OS !== 'web') return {}

  if(states.includes('focus')) {
    themedStates = {
      ...themedStates,
      onFocus,
      onBlur,
    }
  }

  if(states.includes('hover')) {
    themedStates = {
      ...themedStates,
      onMouseEnter,
      onMouseLeave,
    }
  }

  return themedStates

}

export default useThemedStates
