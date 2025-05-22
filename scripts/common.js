const { exec } = require('child_process')

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

module.exports = executeCommand