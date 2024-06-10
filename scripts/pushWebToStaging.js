const appInfo = require('../app.json')
const { exec } = require('child_process')

const dashifyDomain = domain => domain
  .replace(/-/g, '--')
  .replace(/\./g, '-')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  const bucket = `${dashifyDomain(domain)}.staging.toadreader.com`.slice(0,54) + `-booklane`
  exec(`aws s3 sync web-build s3://${bucket} --acl public-read --quiet --delete`, (err, stdout, stderr) => {
    console.log(stdout)
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to staging.", err)
  process.exit()
}