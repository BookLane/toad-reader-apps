const appInfo = require('../app.json')
const { exec } = require('child_process')

const dashifyDomain = domain => domain
  .replace(/-/g, '--')
  .replace(/\./g, '-')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const date = new Date().toISOString()

try {
  const bucket = `${dashifyDomain(domain)}.beta.toadreader.com`.slice(0,54) + `-booklane`
  exec(`aws s3 sync s3://${bucket} s3://${domain}-booklane --acl public-read --quiet --delete`, (err, stdout, stderr) => {
    console.log(stdout)
    exec(`aws s3 cp s3://${domain}-booklane s3://bucket-versions-booklane/${domain}/${date} --recursive --quiet`, (err, stdout, stderr) => {
      console.log(stdout)
      process.exit()
    })
  })
} catch(err) {
  console.log("Error when pushing web beta to production.", err)
  process.exit()
}