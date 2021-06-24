import Constants from "expo-constants"
import Amplitude from "amplitude-js"
import { isStaging, isBeta } from './toolbox'

const {
  AMPLITUDE_API_KEY,
} = Constants.manifest.extra

const on = !!(!__DEV__ && AMPLITUDE_API_KEY && !isStaging() && !isBeta())

Amplitude.getInstance().init(AMPLITUDE_API_KEY)

export const logEvent = async ({ eventName, properties }) => {

  if(on) {

    Amplitude.getInstance().logEvent(
      eventName,
      properties,
    )

  }

}