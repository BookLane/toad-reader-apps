const appInfo = require('../app.json')
const { exec } = require('child_process')

const { bucketPrefix } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  const bucketBeta = `${bucketPrefix}-beta`.slice(0,63)
  exec(`aws s3 sync web-build s3://${bucketBeta} --acl public-read --quiet --delete`, (err, stdout, stderr) => {
    console.log(stdout)
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to beta.", err)
  process.exit()
}