import * as Sentry from 'sentry-expo'

let { init, setRelease, captureException, captureMessage } = Sentry
if(__DEV__) {
  init = () => {}
  setRelease = () => {}
  captureException = err => (console.log(1) || console.log(err))
  captureMessage = message => console.log(message)
}

export { init, setRelease, captureException, captureMessage }