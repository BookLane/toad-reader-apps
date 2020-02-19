import { useMemo } from "react"

const useThemedStyleSets = themedStyle => {

  const themedStyleSets = useMemo(
    () => {

      const baseThemedStyle = { ...themedStyle }
      const iconThemedStyle = {}
    
      for(let key in baseThemedStyle) {
        if(/^icon/.test(key)) {
          let iconKey = key.replace(/^icon/, '')
          iconKey = `${iconKey[0].toLowerCase()}${iconKey.substr(1)}` 
          iconThemedStyle[iconKey] = baseThemedStyle[key]
          delete baseThemedStyle[key]
        }
      }

      return {
        baseThemedStyle,
        iconThemedStyle,
      }

    },
    [ themedStyle ],
  )

  return themedStyleSets
  
}

export default useThemedStyleSets
