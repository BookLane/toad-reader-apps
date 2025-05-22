const appInfo = require('../app.json')
const executeCommand = require('./common.js')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const versionBucket = appInfo.expo.extra.VERSION_BUCKET

try {
  executeCommand(`aws s3 ls s3://${versionBucket}/${domain}/`, () => {
    process.exit()
  })
} catch(err) {
  console.log("Error listing versions.", err)
  process.exit()
}