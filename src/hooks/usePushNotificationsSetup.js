import { useEffect } from "react"
import { Platform } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Notifications } from "expo"
import Constants from 'expo-constants'
// import * as Permissions from 'expo-permissions'

import usePushToken, { PUSH_TOKEN_KEY } from './usePushToken'

const usePushNotificationsSetup = () => {

  const pushToken = usePushToken()

  useEffect(
    () => {
      if(Constants.isDevice && Platform.OS !== 'web') {
        (async () => {

          if(pushToken === "none") {

            // const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
            // let finalStatus = existingStatus

            // if(existingStatus !== 'granted') {
            //   const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            //   finalStatus = status
            // }

            // if(finalStatus !== 'granted') return

            // // await AsyncStorage.setItem(PUSH_TOKEN_KEY, await Notifications.getExpoPushTokenAsync())

            // if(Platform.OS === 'android') {
            //   // Notifications.createChannelAndroidAsync('default', {
            //   //   name: 'default',
            //   //   sound: true,
            //   //   priority: 'max',
            //   //   vibrate: [0, 250, 250, 250],
            //   // })
            // }

          }
          
        })()
      }
    },
    [ pushToken ],
  )

}

export default usePushNotificationsSetup
