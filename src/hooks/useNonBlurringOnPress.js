import { useCallback, useMemo } from 'react'
import { Platform } from 'react-native'

const useNonBlurringOnPress = (fn, deps=[]) => {

  const go = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
      fn()
    },
    deps,
  )

  const onPressProps = useMemo(
    () => (
      Platform.OS === 'web'
        ? {
          onPress: go,
          onTouchEnd: go,
        }
        : {
          onPress: go,
        }
    ),
    [ go ],
  )

  return onPressProps
}

export default useNonBlurringOnPress