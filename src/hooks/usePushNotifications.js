import { useEffect } from "react"
import * as Notifications from "expo-notifications"
import useForceUpdate from "./useForceUpdate"

// defined outside of the hook so that there is one universal listener and stack
let notificationsStack = []
let notificationsIndex = 0
Notifications.addNotificationResponseReceivedListener(response => {
  const index = notificationsIndex++
  notificationsStack = [
    ...notificationsStack,
    {
      ...response,
      clear: () => {
        notificationsStack = notificationsStack.filter(n => n.index !== index)
      },
      index,
    },
  ]
})

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

const usePushNotifications = () => {

  const forceUpdate = useForceUpdate()

  useEffect(
    () => {
      Notifications.addNotificationResponseReceivedListener(forceUpdate)
    },
    [],
  )

  return notificationsStack
}

export default usePushNotifications
