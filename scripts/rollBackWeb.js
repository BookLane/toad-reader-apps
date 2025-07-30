const appInfo = require('../app.json')
const executeCommand = require('./common.js')

const date = (process.argv[2] || "").replace(/\//g, '')

if(!/^2.*Z$/.test(date)) {
  console.log('')
  console.log('Invalid arguments.')
  console.log('')
  console.log('Eg. npm run rollback-web -- 2020-02-18T09:54:50.659Z')
  console.log('(Run `npm run list-versions` to see version options.)')
  console.log('')
  process.exit()
}

const { bucketPrefix, domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const versionBucket = appInfo.expo.extra.VERSION_BUCKET

try {
  const bucketProduction = `${bucketPrefix}-prd`.slice(0,63)
  executeCommand(`aws s3 cp s3://${versionBucket}/${domain}/${date} s3://${bucketProduction} --only-show-errors --recursive --sse AES256`, () => {
    process.exit()
  })
} catch(err) {
  console.log("Error rolling back.", err)
  process.exit()
}