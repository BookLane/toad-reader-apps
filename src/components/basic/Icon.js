import React from "react"
import { StyleSheet } from "react-native"
import * as Font from "expo-font"
import { Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"

const packs = {
  ion: Ionicons,
  materialCommunity: MaterialCommunityIcons,
  fontAwesome: FontAwesome,
}

const iconFonts = Object.values(packs).map(({ font }) => font)

// Firefox was not loading the icons when attempting to do more than one at a time.
// If this turns out to be slower than desired for other environments, then
// I could look to detect only the problematic browsers.
export const loadIconFonts = () => (
  new Promise(resolve => {
    const iconFontsCopy = [ ...iconFonts ]
    const loadIconFont = () => {
      if(iconFontsCopy.length > 0) {
        Font.loadAsync(iconFontsCopy.pop())
          .then(loadIconFont)
          .catch(loadIconFont)
      } else {
        resolve()
      }
    }
    loadIconFont()
  })
)

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