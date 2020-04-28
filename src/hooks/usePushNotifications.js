import { useEffect } from "react"
import { Notifications } from "expo"
import useForceUpdate from "./useForceUpdate"

// defined outside of the hook so that there is one universal listener and stack
let notificationsStack = []
let notificationsIndex = 0
Notifications.addListener(notification => {
  const index = notificationsIndex++
  notificationsStack = [
    ...notificationsStack,
    {
      ...notification,
      clear: () => {
        notificationsStack = notificationsStack.filter(n => n.index !== index)
      },
      index,
    },
  ]
})

const usePushNotifications = () => {

  const forceUpdate = useForceUpdate()

  useEffect(
    () => {
      const subscription = Notifications.addListener(forceUpdate)
      // return subscription.remove
    },
    [],
  )

  return notificationsStack
}

export default usePushNotifications
