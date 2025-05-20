const appInfo = require('../app.json')
const { exec } = require('child_process')

const { bucketPrefix } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  const bucketStaging = `${bucketPrefix}-stag`.slice(0,63)
  exec(`aws s3 sync web-build s3://${bucketStaging} --acl public-read --quiet --delete`, (err, stdout, stderr) => {
    console.log(stdout)
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to staging.", err)
  process.exit()
}