import React from "react"

import { Ionicons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const packs = {
  ion: Ionicons,
  material: MaterialCommunityIcons,
}

const Icon = ({
  pack='ion',
  style,
  ...otherProps
}) => {

  const IconComponent = packs[pack]
  const adjustedStyle = { ...style }

  adjustedStyle.fontSize = adjustedStyle.height
  adjustedStyle.width = 'auto'
  adjustedStyle.height = 'auto'

  adjustedStyle.color = adjustedStyle.tintColor
  delete adjustedStyle.tintColor

  return (
    <IconComponent
      style={adjustedStyle}
      {...otherProps}
    />
  )
}

export default Icon