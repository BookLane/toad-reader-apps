const appInfo = require('../app.json')
const executeCommand = require('./common.js')

const { bucketPrefix } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  const bucketBeta = `${bucketPrefix}-beta`.slice(0,63)
  executeCommand(`aws s3 sync web-build s3://${bucketBeta} --quiet --sse AES256 --delete`, () => {
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to beta.", err)
  process.exit()
}