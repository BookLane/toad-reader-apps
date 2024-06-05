const appInfo = require('../app.json')
const { exec } = require('child_process')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  exec(`aws s3 ls s3://bucket-versions-booklane/${domain}/`, (err, stdout, stderr) => {
    console.log(stdout)
    process.exit()
  })
} catch(err) {
  console.log("Error listing versions.", err)
  process.exit()
}