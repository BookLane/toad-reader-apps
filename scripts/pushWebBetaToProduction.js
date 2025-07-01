const appInfo = require('../app.json')
const executeCommand = require('./common.js')

const { bucketPrefix, domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const date = new Date().toISOString()
const versionBucket = appInfo.expo.extra.VERSION_BUCKET

try {
  const bucketBeta = `${bucketPrefix}-beta`.slice(0,63)
  const bucketProduction = `${bucketPrefix}-prod`.slice(0,63)
  executeCommand(`aws s3 sync s3://${bucketBeta} s3://${bucketProduction} --quiet --sse AES256 --delete`,
    executeCommand(`aws s3 cp s3://${bucketProduction} s3://${versionBucket}/${domain}/${date} --recursive --quiet --sse AES256`, () => {
      process.exit()
    })
  )
} catch(err) {
  console.log("Error when pushing web beta to production.", err)
  process.exit()
}