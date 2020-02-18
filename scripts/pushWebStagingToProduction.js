const appInfo = require('../app.json')
const { exec } = require('child_process')

const dashifyDomain = domain => domain
  .replace(/-/g, '--')
  .replace(/\./g, '-')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const date = new Date().toISOString()

try {
  exec(`aws s3 sync s3://${dashifyDomain(domain)}.staging.toadreader.com s3://${domain} --acl public-read --quiet --delete`, (err, stdout, stderr) => {
    console.log(stdout)
      exec(`aws s3 cp s3://${domain} s3://bucket-versions/${domain}/${date} --recursive --quiet`, (err, stdout, stderr) => {
      console.log(stdout)
      process.exit()
    })
  })
} catch(err) {
  console.log("Error when pushing web staging to production.", err)
  process.exit()
}