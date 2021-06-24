const appInfo = require('../app.json')

const arguments = process.argv.slice(2)
const actionIndex = arguments.indexOf("--action") + 1

if(actionIndex === 0) {
  console.log('')
  console.log('Invalid call to echoActionToPerform: --action flag is missing.')
  console.log('')
  process.exit()
}

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]

if(!domain) {
  console.log('')
  console.log('Invalid call to echoActionToPerform: tenant not properly setup.')
  console.log('')
  process.exit()
}

const actionStrings = {
  'push-apps-to-staging': `About to push apps to staging (connects to staging backend) for ${domain}.`,
  'push-apps-to-beta': `About to push apps to beta (connects to production backend) for ${domain}.`,
  'push-apps-to-production': `About to push apps to production for ${domain}.`,
  'push-apps-to-production-all-tenants': `About to push apps to production for ALL TENANTS.`,
  'push-web-to-staging': `About to push web to staging (connects to staging backend) for ${domain}.`,
  'push-web-to-beta': `About to push web to beta (connects to production backend) for ${domain}.`,
  'push-web-staging-to-production': `About to push web staging to production for ${domain}.`,
  'push-web-beta-to-production': `About to push web beta to production for ${domain}.`,
  'push-web-to-production-all-tenants': `About to push web to staging and production for ALL TENANTS.`,
  'push-all-to-production': `About to push web to staging and production AND apps to production for ${domain}.`,
  'build-android-staging': `About to build Android STAGING app (connects to staging backend) for ${domain}.`,
  'build-android-beta': `About to build Android BETA app (connects to production backend) for ${domain}.`,
  'build-android-production': `About to build Android PRODUCTION app for ${domain}.`,
  'build-ios-staging': `About to build iOS STAGING app (connects to staging backend) for ${domain}.`,
  'build-ios-beta': `About to build iOS BETA app (connects to production backend) for ${domain}.`,
  'build-ios-production': `About to build iOS PRODUCTION app for ${domain}.`,
}

const action = actionStrings[arguments[actionIndex]]

if(!action) {
  console.log('')
  console.log('Invalid call to echoActionToPerform: invalid action.')
  console.log('')
  process.exit()
}

console.log('')
console.log(`*${Array(action.length + 8).fill('–').join('')}*`)
console.log(`|${Array(action.length + 8).fill(' ').join('')}|`)
console.log(`|    ${action}    |`)
console.log(`|${Array(action.length + 8).fill(' ').join('')}|`)
console.log(`*${Array(action.length + 8).fill('–').join('')}*`)
console.log('')

process.exit()