const appInfo = require('../app.json')
const { exec } = require('child_process')

const dashifyDomain = domain => domain
  .replace(/-/g, '--')
  .replace(/\./g, '-')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  exec(`aws s3 sync web-build s3://${dashifyDomain(domain)}.staging.toadreader.com --acl public-read --quiet`, (err, stdout, stderr) => {
    console.log(stdout)
  })
} catch(err) {
  console.log("Error when pushing web to staging.", err)
}