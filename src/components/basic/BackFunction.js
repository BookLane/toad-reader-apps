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

      const subscription = BackHandler.addEventListener('hardwareBackPress', backPressEvent)

      return () => subscription.remove()
    },
    [ func ],
  )
  
  return null
}

export default BackFunction