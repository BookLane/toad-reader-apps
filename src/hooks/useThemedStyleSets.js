import { useMemo } from "react"

const useThemedStyleSets = themedStyle => {

  const themedStyleSets = useMemo(
    () => {

      const baseThemedStyle = { ...themedStyle }
      const iconThemedStyle = {}
      const labelThemedStyle = {}
    
      for(let key in baseThemedStyle) {
        if(/^icon/.test(key)) {
          let iconKey = key.replace(/^icon/, '')
          iconKey = `${iconKey[0].toLowerCase()}${iconKey.substr(1)}` 
          iconThemedStyle[iconKey] = baseThemedStyle[key]
          delete baseThemedStyle[key]
        }
        if(/^label/.test(key)) {
          let labelKey = key.replace(/^label/, '')
          labelKey = `${labelKey[0].toLowerCase()}${labelKey.substr(1)}` 
          labelThemedStyle[labelKey] = baseThemedStyle[key]
          delete baseThemedStyle[key]
        }
      }

      return {
        baseThemedStyle,
        iconThemedStyle,
        labelThemedStyle,
      }

    },
    [ themedStyle ],
  )

  return themedStyleSets
  
}

export default useThemedStyleSets
