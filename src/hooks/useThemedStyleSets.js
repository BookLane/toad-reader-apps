import { useMemo } from "react"

const useThemedStyleSets = themedStyle => {

  const themedStyleSets = useMemo(
    () => {

      const baseThemedStyle = { ...themedStyle }
      const iconThemedStyle = {}
      const labelThemedStyle = {}
      const altThemedStyleSets = []
    
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
        if(/^alt[0-9]/.test(key)) {
          let selectedKey = key.replace(/^alt[0-9]/, '')
          selectedKey = `${selectedKey[0].toLowerCase()}${selectedKey.substr(1)}` 
          const altIndex = parseInt(key.replace(/^alt([0-9]).*$/, '$1'))
          if(!altThemedStyleSets[altIndex]) {
            altThemedStyleSets[altIndex] = {}
          }
          altThemedStyleSets[altIndex][selectedKey] = baseThemedStyle[key]
          delete baseThemedStyle[key]
        }
      }

      return {
        baseThemedStyle,
        iconThemedStyle,
        labelThemedStyle,
        altThemedStyleSets,
      }

    },
    [ themedStyle ],
  )

  return themedStyleSets
  
}

export default useThemedStyleSets
