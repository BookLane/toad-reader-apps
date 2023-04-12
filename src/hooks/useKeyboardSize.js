import { useState, useEffect } from "react"
import { Keyboard, Platform } from "react-native"

import useInstanceValue from "./useInstanceValue"

const useKeyboardSize = ({ handleChange }={}) => {

  const [ keyboardHeight, setKeyboardHeight ] = useState(0)
  const getKeyboardHeight = useInstanceValue(keyboardHeight)

  useEffect(
    () => {
      const setHeight = newHeight => {
        if(handleChange) {
          handleChange({
            changeInHeight: newHeight - getKeyboardHeight(),
          })
        }
        setKeyboardHeight(newHeight)
      }

      const keyboardDidShowListener = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
        ({ endCoordinates: { height } }) => setHeight(height)
      )
      const keyboardDidHideListener = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
        () => setHeight(0)
      )

      return () => {
        keyboardDidShowListener.remove()
        keyboardDidHideListener.remove()
      }
    },
    [],
  )

  return {
    keyboardHeight,
    keyboardOpen: keyboardHeight !== 0,
  }
}

export default useKeyboardSize
