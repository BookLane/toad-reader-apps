import * as Sentry from '@sentry/react-native'

let { init, captureException, captureMessage } = Sentry
if(__DEV__) {
  init = () => {}
  captureException = err => { console.log(1); console.log(err) }
  captureMessage = message => { console.log(message) }
}

export { init, captureException, captureMessage }