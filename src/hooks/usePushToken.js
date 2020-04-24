import { useEffect, useState } from "react"
import { AsyncStorage } from "react-native"
import Constants from 'expo-constants'

export const PUSH_TOKEN_KEY = `pushToken`

const usePushToken = () => {

  const [ pushToken, setPushToken ] = useState()

  useEffect(
    () => {
      if(Constants.isDevice) {
        (async () => {

          setPushToken(await AsyncStorage.getItem(PUSH_TOKEN_KEY) || "none")
          
        })()
      }
    },
    [],
  )

  return pushToken

}

export default usePushToken
