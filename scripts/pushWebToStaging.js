const appInfo = require('../app.json')
const executeCommand = require('./common.js')

const { bucketPrefix } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  const bucketStaging = `${bucketPrefix}-stag`.slice(0,63)
  executeCommand(`aws s3 sync web-build s3://${bucketStaging} --quiet --delete`, () => {
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to staging.", err)
  process.exit()
}