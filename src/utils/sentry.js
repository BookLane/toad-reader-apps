// Sentry disabled for development
// import * as Sentry from '@sentry/react-native'

// let { init, captureException, captureMessage } = Sentry
// if(__DEV__) {
const init = () => {}
const captureException = err => { console.log('Error:', err) }
const captureMessage = message => { console.log('Message:', message) }
// }

export { init, captureException, captureMessage }