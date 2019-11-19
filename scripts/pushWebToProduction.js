const appInfo = require('../app.json')
const { exec } = require('child_process')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  exec(`aws s3 sync web-build s3://${domain} --acl public-read --quiet`, (err, stdout, stderr) => {
    console.log(stdout)
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to production.", err)
  process.exit()
}