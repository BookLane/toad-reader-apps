import { useCallback } from "react"
import { Platform } from "react-native"
import { Interaction } from '@ui-kitten/components'

const useThemedStates = ({ dispatch, states=[] }) => {

  const onPressIn = useCallback(() => dispatch([ Interaction.ACTIVE ]), [ dispatch ])
  const onPressOut = useCallback(() => dispatch([]), [ dispatch ])

  const onFocus = useCallback(() => dispatch([ Interaction.FOCUSED ]), [ dispatch ])
  const onBlur = useCallback(() => dispatch([]), [ dispatch ])

  const onMouseEnter = useCallback(() => dispatch([ Interaction.HOVER ]), [ dispatch ])
  const onMouseLeave = useCallback(() => dispatch([]), [ dispatch ])

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
