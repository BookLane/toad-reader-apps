import Constants from "expo-constants"
import * as Amplitude from "expo-analytics-amplitude"
import { isStaging, isBeta } from './toolbox'

const {
  AMPLITUDE_API_KEY,
} = Constants.manifest.extra

const on = !!(!__DEV__ && AMPLITUDE_API_KEY && !isStaging() && !isBeta())
let initialized = false

const initializeIfNeedBe = async () => {
  if(!initialized) {
    await Amplitude.initializeAsync(AMPLITUDE_API_KEY)
    initialized = true
  }
}

export const logEvent = async ({ eventName, properties }) => {

  if(on) {

    await initializeIfNeedBe()
    await Amplitude.logEventWithPropertiesAsync(
      eventName,
      properties || {},
    )

  }

}

export const setUser = async ({ userId=null, properties={} }={}) => {

  if(on) {

    await initializeIfNeedBe()
    await Amplitude.setUserIdAsync(userId && `${userId}`)

    if(userId) {
      await Amplitude.setUserPropertiesAsync(properties)
    } else {
      await Amplitude.clearUserPropertiesAsync()
    }

  }

}