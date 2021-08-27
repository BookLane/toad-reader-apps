import Constants from "expo-constants"
import Amplitude from "amplitude-js"

import { isStaging, isBeta, getQueryString } from './toolbox'

const {
  AMPLITUDE_API_KEY,
} = Constants.manifest.extra

const on = !!(!__DEV__ && AMPLITUDE_API_KEY && !isStaging() && !isBeta())

Amplitude.getInstance().init(AMPLITUDE_API_KEY)

export const logEvent = async ({ eventName, properties }) => {

  const query = getQueryString()

  if(query.widget) {
    properties = {
      ...properties,
      widget: true,
    }
  }

  if(on) {

    Amplitude.getInstance().logEvent(
      eventName,
      properties,
    )

  } else if(__DEV__) {

    console.log('logEvent', eventName, properties)

  }

}

export const setUser = async ({ userId=null, properties={} }={}) => {

  if(on) {

    Amplitude.getInstance().setUserId(userId && `${userId}`)

    if(userId) {
      Amplitude.getInstance().setUserProperties(properties)
    } else {
      Amplitude.getInstance().regenerateDeviceId()
    }

  } else if(__DEV__) {

    console.log('setUser', userId, properties)

  }

}