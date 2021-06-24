import Constants from "expo-constants"
import * as Amplitude from "expo-analytics-amplitude"
import { isStaging, isBeta } from './toolbox'

const {
  AMPLITUDE_API_KEY,
} = Constants.manifest.extra

const on = !!(!__DEV__ && AMPLITUDE_API_KEY && !isStaging() && !isBeta())
let initialized = false

export const logEvent = async ({ eventName, properties }) => {

  if(on) {

    if(!initialized) {
      await Amplitude.initializeAsync(AMPLITUDE_API_KEY)
      initialized = true
    }

    await Amplitude.logEventWithPropertiesAsync(
      eventName,
      properties || {},
    )

  }

}