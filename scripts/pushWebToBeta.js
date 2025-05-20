const appInfo = require('../app.json')
const { exec } = require('child_process')

const { bucketPrefix } = Object.values(appInfo.expo.extra.IDPS)[0]

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
  executeCommand(`aws s3 sync web-build s3://${bucketBeta} --quiet --delete`, () => {
    process.exit()
  })
} catch(err) {
  console.log("Error when pushing web to beta.", err)
  process.exit()
}