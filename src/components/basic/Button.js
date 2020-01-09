import React, { useCallback } from "react"
import { Button as UIKittenButton } from "react-native-ui-kitten"

const Button = React.memo(({
  id,
  info,
  onPress,
  ...otherProps
 }) => {

  const customOnPress = useCallback(
    () => {
      onPress && onPress({ id, info })
    },
    [ id, info, onPress ],
  )

  return (
    <UIKittenButton
      {...otherProps}
      onPress={customOnPress}
    />
  )
})

export default Button
