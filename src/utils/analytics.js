import Constants from "expo-constants"
import { init, track, setUserId, reset, identify, Identify } from '@amplitude/analytics-react-native'
import { isStaging, isBeta } from './toolbox'

const {
  AMPLITUDE_API_KEY,
} = Constants.expoConfig.extra

const on = !!(!__DEV__ && AMPLITUDE_API_KEY && !isStaging() && !isBeta())
let initialized = false

const initializeIfNeedBe = () => {
  if(!initialized) {
    init(
      AMPLITUDE_API_KEY,
      null,
      {
        minIdLength: 1,
      },
    )
    initialized = true
  }
}

export const logEvent = async ({ eventName, properties }) => {

  if(on) {

    initializeIfNeedBe()
    track(
      eventName,
      properties || {},
    )

  }

}

export const setUser = async ({ userId=null, properties={} }={}) => {

  if(on) {

    initializeIfNeedBe()

    if(userId) {
      setUserId(userId)
      const identifyObj = new Identify()
      for(let property in properties) {
        identifyObj.set(property, properties[property])
      }
      identify(identifyObj)
    } else {
      reset()
    }

  }

}