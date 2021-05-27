import { useEffect } from "react"
import { Platform } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Notifications from "expo-notifications"
import Constants from 'expo-constants'

import usePushToken, { PUSH_TOKEN_KEY } from './usePushToken'

const usePushNotificationsSetup = () => {

  const pushToken = usePushToken()

  useEffect(
    () => {
      if(Constants.isDevice && Platform.OS !== 'web') {
        (async () => {

          if(pushToken === "none") {

            const { status: existingStatus } = await Notifications.getPermissionsAsync()
            let finalStatus = existingStatus

            if(existingStatus !== 'granted') {
              const { status } = await Notifications.requestPermissionsAsync()
              finalStatus = status
            }

            if(finalStatus !== 'granted') return

            const { data } = await Notifications.getExpoPushTokenAsync()
            await AsyncStorage.setItem(PUSH_TOKEN_KEY, data)

            if(Platform.OS === 'android') {
              Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                sound: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
              })
            }

          }
          
        })()
      }
    },
    [ pushToken ],
  )

}

export default usePushNotificationsSetup
