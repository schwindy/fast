const archive = require('./archive')

module.exports = function () {
  const fs      = require('fs')
  const path    = require('path')
  const chalk   = require('chalk')
  
  const rcLocation = path.join(process.cwd(), '.fastrc.json')
  console.log(chalk.blue('Config has been loaded, starting fast zip...'))

  if (fs.existsSync(rcLocation)) {
    const conf = require(rcLocation)
    archive(conf).then(() => {
      console.log('done')
    })
  } else {
    console.log(
      chalk.red(
        'There is no .fastrc in this location, please ensure you\'re in the right directory, or check our readme!'
      )
    )
  }
}

