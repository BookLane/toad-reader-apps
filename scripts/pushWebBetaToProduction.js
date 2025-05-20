const appInfo = require('../app.json')
const { exec } = require('child_process')

const { bucketPrefix, domain } = Object.values(appInfo.expo.extra.IDPS)[0]
const date = new Date().toISOString()
const versionBucket = appInfo.expo.extra.VERSION_BUCKET

function executeCommand(command, anotherCommand) {
  console.log(command)
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
    }
    if (stdout) {
      console.log(stdout)
    }
    if (stderr) {
      console.error(stderr)
    }
    console.log()

    if (anotherCommand) {
      anotherCommand()
    }
  })
}

try {
  const bucketBeta = `${bucketPrefix}-beta`.slice(0,63)
  const bucketProduction = `${bucketPrefix}-prod`.slice(0,63)
  executeCommand(`aws s3 sync s3://${bucketBeta} s3://${bucketProduction} --quiet --delete`,
    executeCommand(`aws s3 cp s3://${bucketProduction} s3://${versionBucket}/${domain}/${date} --recursive --quiet`, () => {
      process.exit()
    })
  )
} catch(err) {
  console.log("Error when pushing web beta to production.", err)
  process.exit()
}