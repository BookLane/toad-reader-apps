import { useEffect } from "react"
import { BackHandler } from "react-native"

const BackFunction = ({
  func,
}) => {

  useEffect(
    () => {
      const backPressEvent = () => {
        func()
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', backPressEvent)
  
      return () => BackHandler.removeEventListener('hardwareBackPress', backPressEvent)
    },
    [ func ],
  )
  
  return null
}

export default BackFunction