const appInfo = require('../app.json')
const { exec } = require('child_process')

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

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]

try {
  exec(`aws s3 cp s3://bucket-versions/${domain}/${date} s3://${domain} --acl public-read --recursive --quiet`, (err, stdout, stderr) => {
    console.log(stdout)
    process.exit()
  })
} catch(err) {
  console.log("Error rolling back.", err)
  process.exit()
}