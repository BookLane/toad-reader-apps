import React from 'react'
import { styled as UIKittenStyled } from '@ui-kitten/components'

const styled = (Component, name) => {

  const ComponentWrapper = ({ themedStyle, ...otherProps }) => {
  
    const baseThemedStyle = { ...themedStyle }
    const iconThemedStyle = {}

    for(let key in baseThemedStyle) {
      if(/^icon/.test(key)) {
        iconThemedStyle[key] = baseThemedStyle[key]
        delete baseThemedStyle[key]
      }
    }

    return (
      <Component
        baseThemedStyle={baseThemedStyle}
        iconThemedStyle={iconThemedStyle}
        {...otherProps}
      />
    )
  }

  ComponentWrapper.styledComponentName = name

  return UIKittenStyled(ComponentWrapper)
}

export default styled