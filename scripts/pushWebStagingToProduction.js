const appInfo = require('../app.json')
const executeCommand = require('./common.js')

const { bucketPrefix, domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const date = new Date().toISOString()
const versionBucket = appInfo.expo.extra.VERSION_BUCKET

try {
  const bucketStaging = `${bucketPrefix}-stag`.slice(0,63)
  const bucketProduction = `${bucketPrefix}-prod`.slice(0,63)
  executeCommand(`aws s3 sync s3://${bucketStaging} s3://${bucketProduction} --quiet --delete`,
    executeCommand(`aws s3 cp s3://${bucketProduction} s3://${versionBucket}/${domain}/${date} --recursive --quiet`, () => {
      process.exit()
    })
  )
} catch(err) {
  console.log("Error when pushing web staging to production.", err)
  process.exit()
}