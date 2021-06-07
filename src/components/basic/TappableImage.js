import React, { useCallback } from "react"
import { Image, TouchableOpacity } from "react-native"

const ImagesTool = React.memo(({
  onPress,
  onPressInfo,
  containerStyle,
  ...imageProps
}) => {

  const handlePress = useCallback(() =>  onPress(onPressInfo), [ onPressInfo ])

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={containerStyle}
    >
      <Image {...imageProps} />
    </TouchableOpacity>
  )
})

export default ImagesTool