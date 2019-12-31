import React from "react"
import { StyleSheet } from "react-native"

import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons"

const packs = {
  ion: Ionicons,
  materialCommunity: MaterialCommunityIcons,
  material: MaterialIcons,
  fontAwesome: FontAwesome,
}

const Icon = ({
  pack='ion',
  style,
  ...otherProps
}) => {

  const IconComponent = packs[pack]
  const adjustedStyle = { ...StyleSheet.flatten(style) }

  adjustedStyle.fontSize = adjustedStyle.height
  adjustedStyle.width = 'auto'
  adjustedStyle.height = 'auto'

  if(adjustedStyle.tintColor) {
    adjustedStyle.color = adjustedStyle.tintColor
    delete adjustedStyle.tintColor
  }

  return (
    <IconComponent
      style={adjustedStyle}
      {...otherProps}
    />
  )
}

export default Icon