import React from "react"
import { StyleSheet, Platform, Image } from "react-native"
import * as Font from "expo-font"
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
const FONT_VERSION = '12.0.4'

const packs = {
  ion: Ionicons,
  material: MaterialIcons,
  materialCommunity: MaterialCommunityIcons,
  fontAwesome: FontAwesome,
}

const iconFonts = Object.values(packs).map(({ font }) => font)

// Make sure cache busted on fonts when there are updates to font packs
if(Platform.OS === 'web') {
  iconFonts.forEach(font => {
    Object.keys(font).forEach(key => {
      font[key] += `?cacheBuster=${FONT_VERSION}`
    })
  })
}

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

/**
 * Icon component
 * @param {string} name - Icon name
 * @param {string} pack - Icon pack to use (ion, material, materialCommunity, fontAwesome)
 * @param {object} style - Style object
 * @param {string} height - Height of the icon
 * @param {string} ...otherProps - Other props to pass to the icon component (depends on pack)
 * @returns {React.Component} - Icon component
 * @example
 * <Icon pack='ion' name='home' size={32} color='red' />
 * <Icon pack='image' name={require('./path/to/image.png')} style={{ width: 32, height: 32 }} />
 */
const Icon = ({
  pack='ion',
  style,
  ...otherProps
}) => {

  const IconComponent = packs[pack]
  const adjustedStyle = { ...StyleSheet.flatten(style) }

  if(pack !== 'image') {
    adjustedStyle.fontSize = adjustedStyle.height
    adjustedStyle.width = 'auto'
    adjustedStyle.height = 'auto'
  }

  if(adjustedStyle.tintColor) {
    adjustedStyle.color = adjustedStyle.tintColor
    delete adjustedStyle.tintColor
  }

  if(pack === 'image') {
    return (
      <Image
        style={adjustedStyle}
        source={otherProps.name}
        {...otherProps}
      />
    )
  }

  return (
    <IconComponent
      style={adjustedStyle}
      {...otherProps}
    />
  )
}

export default Icon