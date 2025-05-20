const appInfo = require('../app.json')
const { exec } = require('child_process')

const { domain } = Object.values(appInfo.expo.extra.IDPS)[0]
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
  executeCommand(`aws s3 ls s3://${versionBucket}/${domain}/`, () => {
    process.exit()
  })
} catch(err) {
  console.log("Error listing versions.", err)
  process.exit()
}